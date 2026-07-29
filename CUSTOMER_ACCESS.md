# OMDI müşteri portalı erişim modeli

## Güvenlik sınırı

`/musteri-girisi` herkese açık açıklama sayfasıdır. `/musteri-paneli*` ise
canlı ortamda Cloudflare Access tarafından korunmadan yayınlanmamalıdır.
İstemci tarafı JavaScript, gizli URL veya statik parola gerçek erişim kontrolü
olarak kabul edilmez.

## Önerilen canlı yapılandırma

1. Cloudflare Zero Trust → Access controls → Applications alanında yeni bir
   **Self-hosted** uygulama oluşturun.
2. Uygulama yolu olarak `omdi.panther01agency.com/musteri-paneli*` tanımlayın.
3. Kimlik sağlayıcılarında **One-time PIN** yöntemini etkinleştirin.
4. `OMDI Paid Customers` adlı bir Allow policy/grup oluşturun.
5. Include kuralında yalnızca satın alma işlemi tamamlanan müşterilerin **tek tek
   e-posta adreslerini** kullanın. `Everyone`, tüm geçerli e-postalar veya yalnızca
   `One-time PIN` içeren geniş bir Include kuralı eklemeyin.
6. Oturum süresini iş ihtiyacına göre sınırlayın ve erişimi sona eren müşterinin
   e-postasını izin listesinden kaldırın.
7. Cloudflare Tunnel kullanılıyorsa **Protect with Access** seçeneğini açın.
   Origin doğrudan internete açıksa Access JWT doğrulaması veya origin seviyesinde
   ek kısıtlama olmadan koruma tamamlanmış sayılmaz.

## Müşteri ekleme ve kaldırma

- Satın alma tamamlandıktan sonra müşterinin doğrulanmış iş e-postasını
  `OMDI Paid Customers` izin listesine ekleyin.
- Müşteriye `/musteri-girisi` adresini gönderin.
- Abonelik sona erdiğinde veya yetki değiştiğinde e-postayı aynı gün kaldırın.
- Ortak posta kutusu yerine kişiye ait iş e-postası tercih edin.

## Canlıya çıkış kontrolü

- Yetkisiz e-posta `/musteri-paneli` için engelleniyor.
- İzinli e-posta tek kullanımlık kod alabiliyor.
- Doğrulanmamış istek origin IP/alternatif hostname üzerinden paneli açamıyor.
- `/musteri-paneli` ve `/panel` arama motorlarında `noindex`.
- Portal gerçek müşteri verisi göstermeden önce sunucu API’si, yetkilendirme ve
  denetim kayıtları ayrıca uygulanıyor.
