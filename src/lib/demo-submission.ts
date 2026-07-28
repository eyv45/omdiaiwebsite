export interface DemoRequest {
  fullName: string;
  company: string;
  email: string;
  phone: string;
  sector: string;
  solution: string;
  note?: string;
}

export interface DemoSubmissionResult {
  status: "demo";
  message: string;
}

export async function submitDemoRequest(
  _request: DemoRequest,
): Promise<DemoSubmissionResult> {
  return {
    status: "demo",
    message:
      "DemoV2 talebiniz örnek akışta tamamlandı. Bu sürümde bilgileriniz gönderilmedi veya saklanmadı.",
  };
}
