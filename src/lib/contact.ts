/**
 * Tek iletişim kaynağı. Coolify ortam değişkenleriyle üzerine yazılabilir.
 *
 * PUBLIC_WHATSAPP_NUMBER  — uluslararası biçim, yalnızca rakam (örn. 905551112233)
 * PUBLIC_DEMO_ENDPOINT    — demo talebini alan API adresi. Tanımlıysa form buraya
 *                           POST eder; tanımlı değilse WhatsApp yönlendirmesi kullanılır.
 *                           Resend entegrasyonu bu değişken üzerinden devreye girer.
 */

export const WHATSAPP_NUMBER = (
  import.meta.env.PUBLIC_WHATSAPP_NUMBER ?? "905464521895"
).replace(/\D/g, "");

export const DEMO_ENDPOINT = import.meta.env.PUBLIC_DEMO_ENDPOINT ?? "";

export const CONTACT_EMAIL = "omdilabs@gmail.com";

export function whatsappLink(message?: string): string {
  const base = `https://wa.me/${WHATSAPP_NUMBER}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
}
