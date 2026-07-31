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

- `/` — ana satış sayfası, sektör slider'ı ve demo modalı
- `/cozumler` — çözüm detayları
- `/fiyatlandirma` — paket fiyatları ve ayrıntılı karşılaştırma tablosu
- `/sss` — tüm sıkça sorulan sorular
- `/sektorler` — sektörel kullanım senaryoları
- `/hakkimizda` — OMDI marka yaklaşımı ve mevcut şirket anlatısı
- `/kullanim-kosullari` — hukuk danışmanı incelemesi bekleyen kullanım koşulları taslağı
- `/sla` — sayısal taahhütleri ticari onay bekleyen hizmet seviyesi taslağı
- `/kvkk` — şirket ve veri işleme bilgileri tamamlanacak KVKK aydınlatma taslağı
- `/musteri-girisi` — aktif müşterileri korunan alana yönlendiren giriş kapısı
- `/musteri-paneli` — gerçek müşteri verisi içermeyen portal kabuğu; canlıda Cloudflare Access ile korunmalıdır

Fiyatlar `src/data/content.ts` içindeki `pricing` nesnesinden gelir (KDV dahil).
Güncelleme yalnızca bu dosyadan yapılır.

## Demo formu

Demo talebi sayfa içi form yerine modal ile toplanır. Gönderim `src/lib/contact.ts`
üzerinden yapılandırılır:

- `PUBLIC_WHATSAPP_NUMBER` — uluslararası biçim, yalnızca rakam (örn. `905551112233`)
- `PUBLIC_DEMO_ENDPOINT` — tanımlıysa talep bu adrese POST edilir; tanımlı değilse
  hazır mesajla WhatsApp'a yönlendirilir. Resend entegrasyonu bu değişkenle devreye girer.

Her iki değer de Coolify ortam değişkeni olarak verilir.

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
