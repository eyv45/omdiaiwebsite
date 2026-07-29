# WpAsis Özellik Envanteri ve OMDI Fark Analizi

**İnceleme tarihi:** 29 Temmuz 2026  
**Amaç:** WpAsis'in herkese açık web yüzeylerinde anlatılan ürün, içerik,
satış ve operasyon yeteneklerini OMDI ile karşılaştırmak; doğrulanmamış
iddiaları kopyalamadan uygulanabilir bir ürün backlog'u çıkarmak.

> Bu belge bir rakip ürün incelemesidir. WpAsis metinleri, tasarımı, müşteri
> isimleri, istatistikleri ve hukuki hükümleri birebir alınmamalıdır. Ürün
> sayfalarında anlatılan bazı kabiliyetler dışarıdan teknik olarak doğrulanamaz;
> bunlar aşağıda **pazarlama/ürün iddiası** olarak işaretlenmiştir.

## 1. Durum etiketleri

| Etiket | Anlamı |
|---|---|
| **OMDI'de mevcut** | Mevcut OMDI sitesi, ürün briefi veya DemoV2 akışında karşılığı bulunuyor. Bu etiket özelliğin çalışan backend'i olduğu anlamına gelmez. |
| **Yalnızca arayüz olarak eklenebilir** | Statik Astro sitesinde güvenli biçimde tanıtım, demo veya prototip olarak gösterilebilir. |
| **Backend gerektirir** | Kimlik doğrulama, veri tabanı, API, mesajlaşma, ödeme, zamanlama veya kalıcı veri işleme gerekir. |
| **Doğrulama/hukuk onayı gerektirir** | Şirket politikası, gerçek altyapı, KVKK/GDPR değerlendirmesi veya sözleşmesel taahhüt olmadan yayınlanmamalıdır. |
| **OMDI için önerilmiyor** | OMDI stratejisiyle uyumsuz, doğrulanamaz, yüksek riskli veya bu aşamada gereksizdir. |

## 2. Yönetici özeti

OMDI'nin mevcut sitesi; 7/24 WhatsApp karşılama, müşteri nitelendirme, satış
ekibine hazır talep bırakma, dört çözüm seviyesi, beş sektör anlatısı, demo
formu, yerel fiyat düzenleme paneli ve hukuk taslaklarını içeriyor.

WpAsis'in OMDI'den belirgin biçimde daha geniş gösterdiği alanlar şunlar:

1. Self-service kayıt, giriş, şifre yenileme, ücretsiz deneme ve abonelik.
2. Gerçek WhatsApp bağlantısı ve müşteri tarafından yönetilen onboarding.
3. Takvim, randevu, personel ve kaynak yönetimi.
4. Ortak ekip gelen kutusu, müşteri geçmişi ve toplu mesajlaşma.
5. Her sektör için bağımsız, SEO odaklı dönüşüm sayfaları.
6. Aranabilir, kategorili ve çok dilli içerik merkezi.
7. Cookie tercih yönetimi, gizlilik ve iade/iptal belgeleri.

En kritik fark şudur: OMDI bugün güçlü bir **satış ve çözüm tanıtım sitesi**;
WpAsis ise web sitesinde kendi kendine kayıt olunabilen bir **SaaS ürünü**
izlenimi veriyor. OMDI'nin aynı seviyeye geçmesi yalnızca yeni sayfalar değil,
kimlik, veri, WhatsApp, takvim, ödeme ve operasyon altyapısı gerektirir.

## 3. Kaynak kapsamı

İnceleme aşağıdaki herkese açık yüzeyleri kapsar:

- [Ana sayfa](https://wpasis.com/)
- [Features](https://wpasis.com/features)
- [Solutions](https://wpasis.com/solutions)
- [Blog](https://wpasis.com/blog)
- [About](https://wpasis.com/about)
- [Login](https://wpasis.com/login)
- [Register](https://wpasis.com/register)
- [Support](https://wpasis.com/support)
- [Privacy](https://wpasis.com/privacy)
- [Terms](https://wpasis.com/terms)
- [KVKK](https://wpasis.com/kvkk)
- [SLA](https://wpasis.com/sla)
- [Refund Policy](https://wpasis.com/refund)
- [Cookie Policy](https://wpasis.com/cookie-policy)
- Örnek sektör sayfaları:
  [Restoran](https://wpasis.com/solutions/restaurants),
  [Otel](https://wpasis.com/solutions/hotels),
  [Klinik](https://wpasis.com/solutions/clinics) ve
  [Güzellik salonu](https://wpasis.com/solutions/beauty-salons)
- Ayrıntılı ürün iddialarının toplandığı
  [özellik rehberi](https://wpasis.com/blog/wpasis-all-features-2026-en)

## 4. Ürün ve satış özellikleri

| Özellik | WpAsis'teki görünüm | OMDI karşılığı | Durum | OMDI önerisi |
|---|---|---|---|---|
| Self-service hesap oluşturma | Ad, soyad, e-posta, parola, telefon, adres ve onay kutuları içeren kayıt sayfası | Yok; yalnızca demo talep formu var | **Backend gerektirir** | Satış sonrası davetle hesap açma yaklaşımı korunmalı; herkese açık kayıt ilk sürümde açılmamalı. |
| E-posta/parola ile giriş | Login formu ve panel yönlendirmesi | `/musteri-girisi` ve veri içermeyen portal kabuğu var | **Backend gerektirir** | Cloudflare Access geçici kapı olabilir; gerçek üründe tenant tabanlı kimlik ve rol sistemi gerekir. |
| Şifre sıfırlama | “Forgot password” akışı | Yok | **Backend gerektirir** | Parolalı kimlik kullanılacaksa e-posta token'ı, süre sonu ve oturum iptaliyle eklenmeli. |
| Ücretsiz deneme | Kredi kartsız 7 günlük deneme iddiası | Yok | **OMDI için önerilmiyor** | Ürün operasyonu ve destek kapasitesi doğrulanmadan yayınlanmamalı; önce satış ekibi kontrollü pilot önerilir. |
| Aylık/yıllık fiyat seçimi | Dönem anahtarı ve yıllık indirim mesajı | Lead/Sales/Scale kartları, değerler `X`; yerel fiyat paneli | **Yalnızca arayüz olarak eklenebilir** | Gerçek fiyatlar kesinleşince karşılaştırma anahtarı eklenebilir; ödeme olmadan “satın al” denmemeli. |
| Abonelik ve plan yönetimi | Plan, kota ve iptal akışları ürün anlatısında mevcut | Yok | **Backend gerektirir** | Ödeme sağlayıcısı, webhook, fatura durumu, kota sayacı ve iptal politikası birlikte tasarlanmalı. |
| WhatsApp'ı QR ile bağlama | Mevcut numarayı QR tarayarak bağlama iddiası | WhatsApp çözümü anlatılıyor; bağlantı akışı yok | **Backend gerektirir** | Meta'nın onaylı bağlantı modeli ve hesap sahipliği doğrulaması seçilmeden UI vaadi verilmemeli. |
| Web sitesi ve SSS'den eğitim | Site/SSS içeriğini okuyup marka tonunu öğrenme iddiası | İşletme verisini anlama değer önerisi var | **Backend gerektirir** | Kaynak ekleme, tarama izni, indeksleme, yeniden senkronizasyon ve kaynak gösterme akışı gerekir. |
| Müşteri onboarding'i | Bağlan → yapılandır/eğit → yayına al | Pazarlama sayfasında karşılar → nitelendirir → teslim eder | **Yalnızca arayüz olarak eklenebilir** | Satış sonrası portalda ayrı “Kurulum adımları” demosu hazırlanabilir; gerçek durum verisi bağlanmadan örnek olarak etiketlenmeli. |

## 5. Yapay zekâ ve iletişim özellikleri

| Özellik | WpAsis iddiası | OMDI karşılığı | Durum | OMDI önerisi |
|---|---|---|---|---|
| 7/24 otomatik yanıt | Mesajlara sürekli yanıt | Ana değer önerisinin parçası | **OMDI'de mevcut** | Gerçek çalışma sınırları ve insan devir koşulları ürün devreye alınırken belgelenmeli. |
| Çoklu dil | 40+ dil ve RTL iddiası | Yok | **Backend gerektirir** | Önce Türkçe + İngilizce pilot; dil algılama, içerik tabanı ve insan devir dili test edilmeden sayı yayınlanmamalı. |
| Marka tonu ve kuralları | İşletmenin ses tonu, saatleri ve kuralları | İşletmeye özel çözüm yaklaşımı var | **Backend gerektirir** | Portalda ton, yasak konular, çalışma saatleri ve hazır cevap ayarları tasarlanmalı. |
| Lead puanlama | A/B/C veya sayısal skorla sıcak/soğuk ayrımı | Nitelendirme ve satışa hazır talep mevcut | **Backend gerektirir** | Açıklanabilir kural tabanlı skorla başlanmalı; temsilci skoru düzeltebilmeli. |
| Spam ve kötüye kullanım filtresi | Spam/abuse mesajlarını ayırma iddiası | Yok | **Backend gerektirir** | Karantina, yanlış pozitif düzeltme ve denetim kaydıyla uygulanmalı. |
| Satış ekibine yönlendirme | Sıcak lead'i ekibe aktarma | OMDI'nin ana akışı | **OMDI'de mevcut** | Yönlendirme hedefi, SLA ve sorumluluk gerçek entegrasyonda tanımlanmalı. |
| İnsan temsilciye devir | AI emin olmadığında konuşmayı bırakma | Satış temsilcisine hazır teslim anlatılıyor | **Backend gerektirir** | Güven eşiği, anahtar kelime, kullanıcı talebi ve hassas konu kuralları eklenmeli. |
| Konuşma hafızası | Geçmiş konuşmaları hatırlama | Yok | **Backend gerektirir** + **Doğrulama/hukuk onayı gerektirir** | Saklama süresi, silme, erişim yetkisi ve veri minimizasyonu kararlaştırılmadan uygulanmamalı. |
| Duygu analizi | Müşteri tonunu algılama ve eşleme | Yok | **Backend gerektirir** | Yalnızca yönlendirme sinyali olarak kullanılmalı; kesin duygu/niyet iddiası yapılmamalı. |
| Kontrollü pazarlık | Tanımlı kurallar içinde teklif verme | Yok | **Backend gerektirir** | İndirim tavanı, onay eşiği, fiyat kaynağı ve audit log olmadan devreye alınmamalı. |
| Toplu mesaj | Segmentlere yayın gönderme | Yok | **Backend gerektirir** + **Doğrulama/hukuk onayı gerektirir** | Meta şablon onayı, açık rıza/ileti izni, ret listesi ve hız limiti zorunlu olmalı. |
| Yeniden kazanım | Sepet, doğum günü, sessiz müşteri akışları | Genel otomasyon vaadi var | **Backend gerektirir** | Önce terk edilen lead ve randevu hatırlatma gibi iki ölçülebilir senaryoyla başlanmalı. |
| Upsell ve sadakat | Tamamlayıcı ürün, puan ve ödül | Yok | **Backend gerektirir** | CRM/sipariş verisi olmadan pazarlama sayfasına eklenmemeli. |
| Yorum toplama | Doğru zamanda değerlendirme isteme | Yok | **Backend gerektirir** | İşlem tamamlanma olayı ve izinli mesaj şablonuna bağlanmalı. |

## 6. Operasyon, randevu ve CRM özellikleri

| Özellik | WpAsis iddiası | OMDI karşılığı | Durum | OMDI önerisi |
|---|---|---|---|---|
| Ortak ekip gelen kutusu | Konuşmalar, atamalar ve notlar | Yok | **Backend gerektirir** | Tenant, rol, atama, okunma durumu ve gerçek zamanlı güncelleme gerekir. |
| Müşteri profili | Konuşma/randevu geçmişi ve segment | Lead özeti anlatılıyor | **Backend gerektirir** | Kimlik birleştirme, etiket, izin durumu ve silme talebi desteklenmeli. |
| Randevu oluşturma | Doğal dilden uygun slot bulup randevu oluşturma | Sektör metinlerinde randevuya yönlendirme var | **Backend gerektirir** | “Randevu talebi” ile “kesin rezervasyon” ayrı durumlar olmalı. |
| İptal ve yeniden planlama | Aynı WhatsApp konuşmasında değişiklik | Yok | **Backend gerektirir** | Kimlik doğrulama, iptal penceresi ve slot kilidi gerekir. |
| Otomatik hatırlatma | Özelleştirilebilir WhatsApp hatırlatmaları | Yok | **Backend gerektirir** | Zamanlayıcı, şablon, saat dilimi, hata tekrarları ve opt-out gerekir. |
| Bekleme listesi | Dolu slot açılınca otomatik bildirim | Yok | **Backend gerektirir** | Öncelik sırası, teklif süresi ve eşzamanlı kabul çakışması çözülmeli. |
| Personel bazlı takvim | Her çalışan için hizmet ve uygunluk | Yok | **Backend gerektirir** | Personel, rol, yetkinlik, vardiya, mola ve izin modeli gerekir. |
| Çalışma saatleri | AI yalnızca izinli saatleri teklif eder | Genel iş kuralları vaadi var | **Backend gerektirir** | Prompt yerine sunucu tarafında kesin kural olarak uygulanmalı. |
| Hizmet süresi ve tampon | Hizmete göre süre/blok | Yok | **Backend gerektirir** | Hizmet kataloğunda süre, hazırlık/temizlik tamponu ve kapasite tutulmalı. |
| Kapasite yönetimi | Masa, sınıf veya seans kapasitesi | Yok | **Backend gerektirir** | Slot kapasitesi ve eşzamanlı rezervasyon kilidi gerekir. |
| Kaynak bazlı rezervasyon | Oda, araç, masa, saha ve ekipman | Turizm/otomotiv anlatısı var | **Backend gerektirir** | Kaynak türü, tarih aralığı, kapasite ve çakışma motoru gerekir. |
| Çok günlük rezervasyon | Giriş/çıkış tarih aralığı | Turizm talebinde tarih bilgisi toplanıyor | **Backend gerektirir** | Saatlik slot modelinden ayrı date-range kullanılmalı. |
| Takvim görünümleri | Gün, hafta, ay, yıl/ısı haritası | Yok | **Yalnızca arayüz olarak eklenebilir** | Backend olmadan yalnızca demo veriyle prototiplenebilir; ilk ürün için gün/hafta yeterli. |
| İşletme sahibi onayı | Hassas/büyük talepler manuel onaya düşer | Satış ekibine teslim akışı var | **Backend gerektirir** | `pending → approved/rejected/expired` durum modeli ve bildirim gerekir. |
| Paylaşılabilir rezervasyon linki | İşletmeye özel slug | Yok | **Backend gerektirir** | Tenant slug, marka ayarı, müsaitlik ve KVKK metni gerekir. |
| Gömülebilir widget | Başka siteye eklenen rezervasyon aracı | Yok | **Backend gerektirir** | CORS, tema, domain izin listesi, spam koruması ve erişilebilir embed gerekir. |
| Entegrasyonlar | API, takvim ve sistem bağlantıları hakkında çeşitli iddialar | Scale paketinde CRM/stok/operasyon entegrasyonu var | **OMDI'de mevcut** | Entegrasyon adı ancak gerçekten çalıştığında yayınlanmalı; Custom/Scale altında keşif bazlı kalmalı. |

## 7. Sektör ve içerik sistemi

| Özellik | WpAsis'teki uygulama | OMDI karşılığı | Durum | OMDI önerisi |
|---|---|---|---|---|
| Her sektör için ayrı landing page | Problem, üç adım, altı özellik, sektör SSS'si ve CTA | Beş sektör tek `/sektorler` sayfasında | **Yalnızca arayüz olarak eklenebilir** | Önce estetik, eğitim, otomotiv, turizm ve B2B için beş ayrı SEO sayfası oluşturulmalı. |
| Geniş sektör kataloğu | En az 10 ana solution sayfası; blogda daha geniş kategori iddiası | Beş hedef sektör | **Yalnızca arayüz olarak eklenebilir** | OMDI'nin satış yapabildiği sektörlerle sınırlı kalınmalı; hacim uğruna sahte uzmanlık üretilmemeli. |
| Sektör şablonları | Çok sayıda hazır yapılandırma iddiası | Yok | **Backend gerektirir** | Şablon; soru seti, alanlar, devir kuralları ve örnek akış olarak modellenmeli. |
| Aranabilir blog | Arama, kategori, sayfalama, makale sayfaları | Yok | **Yalnızca arayüz olarak eklenebilir** | Astro content collections ile başlayabilir; arama önce istemci tarafı indeks olabilir. |
| Çok dilli içerik | Aynı konunun farklı dillerde sayfaları | Site yalnızca Türkçe | **Backend gerektirir** | İlk aşamada Türkçe içerik kalitesi; sonra İngilizce. Otomatik çeviri tek başına yayınlanmamalı. |
| Sektörel karşılaştırma | Manuel süreç / ürünle süreç tabloları | Sonuç odaklı kısa anlatılar var | **Yalnızca arayüz olarak eklenebilir** | Kanıtsız performans yüzdeleri olmadan iş akışı ve operasyon farkı karşılaştırılabilir. |
| İçindekiler ve uzun rehber | Blog makalelerinde yapılandırılmış uzun içerik | Yok | **Yalnızca arayüz olarak eklenebilir** | SEO rehberlerinde yapışkan içindekiler, yazar/tarih ve kaynak alanı kullanılmalı. |
| Müşteri yorumları ve logolar | Ana sayfada logo/yorum gösterimleri | Bilinçli olarak yok | **Doğrulama/hukuk onayı gerektirir** | Yalnızca yazılı izin ve doğrulanabilir müşteri olduğunda eklenmeli. |

### OMDI sektör sayfası için önerilen standart şablon

1. Sektöre özgü ana problem.
2. Müşteriden toplanan bilgiler.
3. OMDI'nin uyguladığı nitelendirme/otomasyon.
4. Satış veya operasyon ekibine bırakılan sonuç.
5. Örnek WhatsApp konuşma akışı.
6. Sektöre uygun çözüm paketi.
7. Gerçekçi sınırlar ve insan devir noktası.
8. Beş ila yedi sektör SSS'si.
9. Demo talebi CTA'sı.

## 8. Kurumsal, güven ve hukuk özellikleri

| Özellik | WpAsis'teki uygulama | OMDI karşılığı | Durum | OMDI önerisi |
|---|---|---|---|---|
| İletişim/destek formu | Konu türü seçilebilen destek formu | Demo formu var; gerçek gönderim yok | **Backend gerektirir** | Demo ve destek ayrı endpoint/posta kutularına gitmeli; ticket numarası üretilmeli. |
| Gizlilik politikası | Veri kategorileri, saklama ve sağlayıcılar | KVKK aydınlatma taslağı var | **Doğrulama/hukuk onayı gerektirir** | Gerçek altyapı kesinleşince ayrı gizlilik politikası hazırlanmalı. |
| Kullanım koşulları | Hizmet, hesap ve sorumluluk hükümleri | Taslak mevcut | **OMDI'de mevcut** | Şirket bilgileri, paket hükümleri ve yetkili hukukçu onayı tamamlanmalı. |
| SLA | Uptime, destek ve kredi yapısı | Sayısal taahhütsüz taslak mevcut | **OMDI'de mevcut** | İzleme ve destek operasyonu kurulmadan oran eklenmemeli. |
| KVKK aydınlatma | Veri sorumlusu ve haklar | Taslak mevcut | **OMDI'de mevcut** | Veri envanteri ve şirket bilgileriyle tamamlanmalı. |
| İade ve iptal politikası | Deneme, abonelik ve cayma anlatısı | Yok | **Doğrulama/hukuk onayı gerektirir** | Gerçek satış modeli ve B2B/B2C kapsamı netleşince hazırlanmalı. |
| Cookie politikası | Cookie açıklaması ve bağlantılar | Yok | **Doğrulama/hukuk onayı gerektirir** | Kullanılan çerez/analitik envanterine göre oluşturulmalı. |
| Cookie tercih banner'ı | Zorunlu ve tümünü kabul seçenekleri | Yok | **Yalnızca arayüz olarak eklenebilir** | Zorunlu olmayan çerezleri gerçekten engelleyen consent manager olmadan sahte banner eklenmemeli. |
| Açık rıza kaydı | Kayıt ve sağlık akışlarında onay iddiası | Yok | **Backend gerektirir** + **Doğrulama/hukuk onayı gerektirir** | Aydınlatma ve açık rıza ayrı tutulmalı; metin sürümü, zaman ve geri alma kaydı gerekir. |
| Audit log | İşlem ve onay izleri iddiası | Yok | **Backend gerektirir** | Değiştirilemez olay kaydı, actor, tenant, zaman ve önce/sonra verisi gerekir. |
| Güvenlik açıklamaları | Şifreleme, veri yerleşimi ve model eğitimi iddiaları | Bilinçli olarak yayınlanmıyor | **Doğrulama/hukuk onayı gerektirir** | Güvenlik sayfası yalnızca gerçek mimari, tedarikçi sözleşmeleri ve test sonuçlarıyla hazırlanmalı. |
| Üçüncü taraf sağlayıcı listesi | Ödeme ve AI sağlayıcıları açıklanıyor | KVKK taslağında yer tutucu | **Doğrulama/hukuk onayı gerektirir** | Meta, AI, hosting, e-posta, ödeme ve analitik sağlayıcıları gerçek listeyle açıklanmalı. |

## 9. Pazarlama iddiası ile doğrulanabilir ürün özelliğinin ayrımı

Aşağıdaki WpAsis anlatıları dışarıdan doğrulanamadığı için OMDI'ye doğrudan
taşınmamalıdır:

- Kurulumun belirli bir dakika içinde tamamlandığı iddiası.
- Belirli saniyede ortalama yanıt iddiası.
- Desteklenen kesin dil sayısı.
- Uptime yüzdesi ve “enterprise-grade” güvenlik ifadeleri.
- Müşteri verisinin nerede tutulduğu veya model eğitiminde kullanılmadığı
  yönündeki altyapı iddiaları.
- No-show, dönüşüm, personel zamanı veya gelir artışı oranları.
- Müşteri logoları, müşteri yorumları ve kullanıcı sayıları.
- “Sınırsız personel”, “tüm özellikler her planda” veya kesin entegrasyon
  kapsamı gibi ticari vaatler.
- Sağlık verisi, açık rıza ve mevzuat uyumluluğuna ilişkin kesin sonuç
  ifadeleri.

OMDI bu alanlarda yalnızca ölçüm, sözleşme, izin veya teknik kanıt mevcutsa
iddia yayınlamalıdır.

## 10. Üç aşamalı uygulama backlog'u

### Aşama 1 — Pazarlama ve güven temeli

**Hedef:** Backend ürünü varmış gibi göstermeden web sitesini satış ve SEO
açısından tamamlamak.

1. Beş sektör için ayrı landing page oluştur.
2. Her sayfaya özgün problem, veri → işlem → sonuç akışı, örnek konuşma ve SSS ekle.
3. `/ozellikler` sayfasında doğrulanmış OMDI kabiliyetlerini paketlerden bağımsız anlat.
4. Demo formunu gerçek webhook/e-posta hedefi ve açık rıza metniyle çalıştır.
5. İletişim/destek sayfası oluştur.
6. Gerçek şirket bilgileriyle hukuk taslaklarını tamamla.
7. Kullanılan teknolojilere göre gizlilik, iade/iptal ve cookie belgelerini hazırla.
8. Analitik kullanılacaksa gerçek tercih yönetimi ekle.
9. Astro tabanlı Türkçe blog altyapısı ve ilk sektör rehberlerini kur.

### Aşama 2 — Kontrollü müşteri portalı

**Hedef:** Satış sonrası müşteriye güvenli, sınırlı ve ölçülebilir bir çalışma
alanı vermek.

1. Tenant, kullanıcı, rol ve davet temelli kimlik modelini kur.
2. Satın alınan müşterileri yönetici davetiyle aktive et.
3. Kurulum adımları, paket, kullanım kotası ve destek taleplerini göster.
4. İşletme profili, çalışma saatleri, marka tonu ve bilgi kaynaklarını yönet.
5. Lead listesi, lead özeti, durum ve satış temsilcisine atama ekranlarını ekle.
6. Merkezi fiyat ve paket yönetimini localStorage'dan sunucu veri tabanına taşı.
7. Audit log, oturum yönetimi, yetki testleri ve veri silme süreçlerini ekle.

### Aşama 3 — Gerçek WhatsApp satış ve operasyon platformu

**Hedef:** OMDI'yi tanıtım sitesinden çalışan SaaS ürününe dönüştürmek.

1. Onaylı WhatsApp/Meta bağlantısı ve mesaj webhook altyapısı kur.
2. Bilgi tabanı, kaynak senkronizasyonu ve güvenli AI yanıt katmanını kur.
3. Nitelendirme şemaları, açıklanabilir lead skoru ve insan devir motorunu ekle.
4. Ortak gelen kutusu, konuşma geçmişi, atama ve iç notları ekle.
5. Takvim, personel, hizmet, kaynak, kapasite ve çakışma motorunu kur.
6. Hatırlatma, iptal, bekleme listesi ve işletme onay akışlarını ekle.
7. CRM ve operasyon entegrasyonlarını Scale/Custom kapsamında devreye al.
8. Abonelik, ödeme, kota, fatura ve iptal akışlarını gerçek ticari modele bağla.
9. İzinli toplu mesaj ve yeniden kazanım otomasyonlarını son aşamada ekle.

## 11. Önerilen minimum ürün yol haritası

OMDI'nin WpAsis'teki her özelliği aynı anda kopyalaması önerilmez. İlk gerçek
ürün aşağıdaki dar çekirdeğe odaklanmalıdır:

1. Davetle müşteri hesabı ve güvenli tenant ayrımı.
2. WhatsApp bağlantısı.
3. İşletme bilgisi, SSS ve marka tonu yönetimi.
4. Mesajı karşılama ve temel soruları yanıtlama.
5. Sektöre göre yapılandırılmış müşteri nitelendirme.
6. İnsan temsilciye devir ve satışa hazır özet.
7. Lead listesi, durum ve atama.
8. Kullanım kotası ve temel operasyon logları.
9. Demo formu, destek ve hukuki veri süreçleri.

Randevu/takvim motoru, toplu mesaj, sadakat, yorum toplama ve karmaşık kaynak
rezervasyonu çekirdek satış asistanı doğrulandıktan sonra eklenmelidir.

## 12. OMDI için uygulanmaması veya ertelenmesi gerekenler

- Gerçek ürün ve destek operasyonu olmadan ücretsiz self-service deneme.
- Kanıtsız performans yüzdeleri, saniye/dakika vaatleri ve uptime oranları.
- İzin alınmamış müşteri logoları ve kurgusal yorumlar.
- Hukuk onayı olmadan “KVKK/GDPR uyumlu” kesin iddiası.
- Gerçek consent yönetimi olmadan yalnızca görsel cookie banner.
- Meta politikaları ve izin yönetimi tamamlanmadan toplu mesajlaşma.
- Sağlık sektöründe tanı, triyaj veya tıbbi tavsiye veren AI anlatısı.
- İnsan onayı ve işlem kaydı olmadan otomatik fiyat pazarlığı.
- İlk sürümde 40+ dil, yüzlerce sektör şablonu veya sınırsız entegrasyon iddiası.
- Mevcut `/panel` localStorage fiyat ekranını güvenli merkezi yönetim paneli gibi
  sunmak.

## 13. Kabul kriterleri

Bu envanter sonraki ürün kararlarında kullanılırken:

- Her yeni web sitesi iddiası çalışan özellik, doğrulanmış yol haritası veya
  açıkça “yakında” etiketiyle ayrılmalıdır.
- Backend özelliği yalnızca statik ekran eklenerek tamamlanmış sayılmamalıdır.
- Kişisel veri işleyen her özellik için veri amacı, hukuki dayanak, saklama,
  silme, erişim ve tedarikçi akışı tanımlanmalıdır.
- Her sektör sayfası aynı şablonu kopyalamak yerine o sektörün gerçek veri,
  karar ve devir noktalarını anlatmalıdır.
- Özellik önceliği WpAsis'te bulunmasına göre değil, OMDI'nin “mesajdan satışa
  hazır talep” ana değerine katkısına göre belirlenmelidir.

