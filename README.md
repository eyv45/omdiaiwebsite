# OMDI DemoV2

OMDI’nin Türkçe, Astro tabanlı pazarlama sitesi ve tarayıcıda çalışan DemoV2 fiyat paneli.

## Yerel geliştirme

Node.js `22.12–24` ve npm gerekir.

```bash
npm ci
npm run dev
```

Kontrol ve üretim çıktısı:

```bash
npm run check
npm run build
```

Statik çıktı `dist/` dizininde oluşur.

## Rotalar

- `/` — ana satış sayfası ve DemoV2 formu
- `/cozumler` — çözüm detayları ve paket karşılaştırması
- `/sektorler` — sektörel kullanım senaryoları
- `/hakkimizda` — OMDI marka yaklaşımı ve mevcut şirket anlatısı
- `/kullanim-kosullari` — hukuk danışmanı incelemesi bekleyen kullanım koşulları taslağı
- `/sla` — sayısal taahhütleri ticari onay bekleyen hizmet seviyesi taslağı
- `/kvkk` — şirket ve veri işleme bilgileri tamamlanacak KVKK aydınlatma taslağı
- `/musteri-girisi` — aktif müşterileri korunan alana yönlendiren giriş kapısı
- `/musteri-paneli` — gerçek müşteri verisi içermeyen portal kabuğu; canlıda Cloudflare Access ile korunmalıdır
- `/panel` — menüde görünmeyen, yerel fiyat düzenleme paneli

Panel `omdi.demov2.pricing.v1` localStorage anahtarını kullanır. Değişiklikler yalnızca aynı tarayıcıda görünür; kimlik doğrulama veya merkezi veri saklama yoktur.

## Müşteri portalı güvenliği

`/musteri-paneli*` rotası statik uygulama koduyla güvenli hâle gelmez. Canlı
ortamda Cloudflare Access uygulaması, satın alınmış müşterilerin tek tek
tanımlanan e-postaları ve One-time PIN doğrulamasıyla bu yolun önüne
yerleştirilmelidir. Uygulama deny-by-default çalışmalı; Access etkinleştirilmeden
portal gerçek müşteri verisine bağlanmamalıdır.

Ayrıntılı kurulum ve müşteri ekleme/kaldırma kontrol listesi:
[CUSTOMER_ACCESS.md](./CUSTOMER_ACCESS.md).

## Coolify

Uygulamayı Git deposundan **Application** olarak ekleyin:

- Build Pack: `Nixpacks`
- Install Command: `npm ci`
- Build Command: `npm run build`
- Static Site: açık
- Public Directory: `dist`

DemoV2 için çalışma zamanı ortam değişkeni veya Docker kurulumu gerekmez.

## DemoV3 entegrasyon sınırı

`src/lib/demo-submission.ts` içindeki `DemoRequest` ve `submitDemoRequest` arayüzü form ile gönderim katmanını ayırır. V3’te bu fonksiyon, Astro API endpoint’i üzerinden Coolify ortam değişkenleriyle yapılandırılan webhook/Resend servisine bağlanabilir. O aşamada:

1. Astro Node adaptörü ve sunucu çıktısı eklenir.
2. Resend/webhook anahtarları yalnızca Coolify ortam değişkenlerinde tutulur.
3. Sunucu tarafı doğrulama, rate-limit, spam koruması ve açık gizlilik metni eklenir.
4. Başarılı/başarısız form durumları gerçek API sonucuna bağlanır.
