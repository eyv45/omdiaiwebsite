import { DEMO_ENDPOINT, whatsappLink } from "./contact";

export interface DemoRequest {
  fullName: string;
  company: string;
  phone: string;
  sector: string;
  solution: string;
  webOrSocial?: string;
  email?: string;
  note?: string;
}

export type DemoSubmissionResult =
  | { status: "sent" }
  | { status: "whatsapp"; url: string }
  | { status: "error" };

/** Talebi WhatsApp'a taşınabilir tek bir metne çevirir. */
export function formatRequest(request: DemoRequest): string {
  const lines = [
    "OMDI demo talebi",
    `Ad soyad: ${request.fullName}`,
    `İşletme: ${request.company}`,
    `Telefon: ${request.phone}`,
    `Sektör: ${request.sector}`,
  ];

  if (request.webOrSocial) lines.push(`Web / Sosyal Medya: ${request.webOrSocial}`);
  if (request.solution) lines.push(`Çözüm: ${request.solution}`);
  if (request.email) lines.push(`E-posta: ${request.email}`);
  if (request.note) lines.push(`Not: ${request.note}`);

  return lines.join("\n");
}

/**
 * DEMO_ENDPOINT tanımlıysa talebi oraya POST eder (Resend entegrasyonu buradan
 * devreye girer). Tanımlı değilse hazır mesajla WhatsApp'a yönlendirir.
 */
export async function submitDemoRequest(
  request: DemoRequest,
): Promise<DemoSubmissionResult> {
  if (!DEMO_ENDPOINT) {
    return { status: "whatsapp", url: whatsappLink(formatRequest(request)) };
  }

  try {
    const response = await fetch(DEMO_ENDPOINT, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(request),
    });

    return response.ok ? { status: "sent" } : { status: "error" };
  } catch {
    return { status: "error" };
  }
}
