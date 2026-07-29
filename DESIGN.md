---
name: OMDI Homepage V4
description: Müşteri mesajını satış ekibinin ilerletebileceği hazır bir fırsata dönüştüren, sade yüzeyli ve tek odaklı OMDI ana sayfa sistemi.
colors:
  action-gold: "#D4AF37"
  accessible-gold-text: "#6F5200"
  light-gold: "#E8C766"
  trust-navy: "#0B1320"
  operations-anthracite: "#1E2430"
  quiet-canvas: "#F7F7F3"
  quiet-surface: "#EEF0EC"
  focus-stage: "#EEE8D8"
  canvas: "#FBFBF8"
  paper: "#F5F5F2"
  white: "#FFFFFF"
  muted-text: "#5C6674"
typography:
  display:
    fontFamily: "Montserrat, Arial, sans-serif"
    fontSize: "clamp(3.8rem, 6vw, 6rem)"
    fontWeight: 700
    lineHeight: 0.99
    letterSpacing: "-0.04em"
  body:
    fontFamily: "Montserrat, Arial, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.75
  label:
    fontFamily: "Montserrat, Arial, sans-serif"
    fontSize: "0.72rem"
    fontWeight: 700
    letterSpacing: "0.09em"
rounded:
  control: "9px"
  surface: "14px"
  stage: "16px"
spacing:
  control-x: "20px"
  section-desktop: "116px"
  section-tablet: "96px"
  section-mobile: "82px"
components:
  button-primary:
    backgroundColor: "{colors.action-gold}"
    textColor: "{colors.trust-navy}"
    rounded: "{rounded.control}"
    padding: "0 20px"
    height: "50px"
  button-outline:
    backgroundColor: "transparent"
    textColor: "{colors.trust-navy}"
    rounded: "{rounded.control}"
    padding: "0 20px"
    height: "50px"
---

# Design System: OMDI Homepage V4

## Overview

**Creative North Star: “Sessiz Zemin, Net Odak”**

OMDI V4 ana sayfası açık yüzeyli, metin odaklı ve tek dönüşüm yoluna sahip bir premium SaaS deneyimidir. Kırık beyaz canvas içeriği sakin tutar; konuşma örneği hafif kâğıt tonlu ayrı bir sahnede zeminden ayrışır. Lacivert tipografi güveni ve netliği taşır. Altın, dekor değil, ana aksiyon ve tamamlanmış sonuç sinyalidir. Koyu lacivert ve antrasit bantlar yalnızca gerçek senaryoyu, akış sonucunu, demo talebini ve sayfa sonunu ağırlıklandırır.

Ana anlatı, soyut bir yapay zekâ gösterisi yerine müşteri mesajından satış ekibine hazır devre kadar somut bir akışı gösterir. Ana sayfa sektör bandı, ayrı fayda bölümü ve hakkımızda tekrarı olmadan; hero, birleşik üç adımlı akış, sektör senaryosu, çözüm satırları, fiyat, SSS ve demo sırasını izler.

**Key Characteristics:**

- Açık öncelikli `canvas → white → paper → navy` yüzey ritmi
- Lacivert ana metin, ölçülü aksiyon altını ve erişilebilir koyu altın küçük metin
- 1240 piksel ana sayfa kabuğu içinde geniş boşluk ve güçlü tipografik hiyerarşi
- Hero konuşmasını çevresindeki canvas’tan ayıran açık kâğıt tonlu odak sahnesi
- Tek ana aksiyon; ikincil yönlendirmelerde düz metin bağlantıları
- Hero’da tek seferlik konuşma orkestrasyonu; geri kalan yüzeylerde sakin mikro geri bildirim
- Kanıt uydurmayan, gerçek iş akışını açıklayan içerik düzeni

## Scope

Bu belge, `home-v3` sınıfıyla kapsamlanan herkese açık OMDI ana sayfası V3 görsel sistemini ve aynı dili Read/Operate modlarına taşıyan hukuki okuma ile müşteri portalı yüzeylerini tanımlar. `/panel` operasyonel olarak çalışmaya devam eder, yalnızca `localStorage` kullanır ve herkese açık V3 görsel yeniden tasarımının ya da yeni müşteri portalı kabuğunun parçası değildir.

## Colors

V3 açık önceliklidir. Ana arka plan `#FBFBF8` canvas, ikincil bölümler `#F5F5F2` paper ve net kartlar `#FFFFFF` kullanır. Birincil metin ve temel koyu yüzey `#0B1320`; demo bandı `#1E2430`; gövde ve ikincil açıklamalar `#5C6674` tonundadır.

`#D4AF37` ana aksiyon, bağlantı yönü, seçili sonuç ve kritik teslim sinyalidir. Açık yüzeylerdeki küçük metin, sayı ve eyebrow etiketleri erişilebilir kontrast için `#6F5200` kullanır. `#E8C766`, yalnızca koyu yüzeylerdeki etiket, ikon ve odak gibi açık altın vurgulardır.

**The Signal Rarity Rule.** Altın, her öğeyi süslemek için değil; ana aksiyonu, süreçteki yönü, öne çıkan çözümü ve satışa hazır sonucu göstermek için kullanılır. Altın metin gradyanı, neon parıltı veya geniş dekoratif dolgu değildir.

## Typography

**Display Font:** Montserrat  
**Body Font:** Montserrat

Montserrat marka sahibi tarafından sabitlenmiştir; alternatif bir yazı ailesi önerilmez. Sistem yalnızca `400`, `600` ve `700` ağırlıklarını kullanır.

- **Display:** `700`, sıkı satır yüksekliği ve en fazla `-0.04em` harf aralığı
- **Headline:** `700`, kısa ve sonucu öne çıkaran satırlar
- **Body:** `400`, rahat satır aralığı ve ölçülü genişlik
- **Supporting emphasis:** `600`, kısa açıklamalar ve güvence maddeleri
- **Label:** `700`, küçük boyutta; açık yüzeyde `#6F5200`, koyu yüzeyde `#E8C766`

## Layout

Ana sayfadaki `.shell`, en fazla 1240 pikseldir ve masaüstünde ekran kenarlarında 32’şer piksel güvenli alan bırakır. V3 bölüm aralığı masaüstünde `116px`, 960 piksel altında `96px`, 680 piksel altında `82px` olarak ölçeklenir.

Hero masaüstünde teklif ve aksiyonları solda, konuşma demosunu sağda gösteren iki sütunlu bir ilk görünüm kullanır. 1100 piksel altında akış tek sütuna iner. İçerik bölümleri gerektiğinde bölünmüş başlık, yapışkan giriş metni veya yatay satır düzeni kullanır; mobilde bunların tamamı doğal belge akışına döner.

## Page Anatomy

1. **Hero conversation demo:** Kısa teklif, tek ana aksiyon ve güvence listesi; yanında açık kâğıt sahnede müşteri mesajı, OMDI yanıtı, nitelendirme özeti ve satış ekibine teslim kartı.
2. **Three-step flow:** “Karşılar, Nitelendirir, Teslim eder” adımlarını tek beyaz yüzeyde gösterir; hemen altındaki lacivert sonuç bandı hız, öncelik ve tekrar azalmasını özetler.
3. **Dark real-scenario band:** Sektörel girdiyi, OMDI nitelendirmesini ve ekibe bırakılan sonucu üç aşamalı gerçek bir örnek üzerinden açıklar.
4. **Solution rows:** Çözüm seviyelerini karşılaştırılabilir yatay satırlar olarak verir; öne çıkan satır sakin bir altın wash ve küçük durum etiketi alır.
5. **Pricing:** Açık renkli, eş yapılı fiyat kartları kullanır. OMDI Sales kartı `#D4AF37` iki piksellik sınır ve durum etiketiyle ayrılır; özel çözüm çağrısı lacivert yüzeydedir.
6. **FAQ and demo:** SSS açık canvas üzerinde sade liste olarak kalır; demo talebi antrasit kapanış bandında beyaz form yüzeyiyle ayrışır.

## Elevation & Depth

Derinlik öncelikle yüzey tonu ve ince lacivert ayırıcılarla kurulur. Belirgin gölge yalnızca gerçekten yükseltilmiş yüzeylerde kullanılır: hero konuşma çerçevesi, fiyat kartları ve demo formu. Genel bölümler düz kalır; cam efekti, blur tabanlı kart, neon ışık veya her kartta ağır gölge kullanılmaz.

## Shapes

Temel köşe yarıçapları butonlarda `9px`, ana kart ve form yüzeylerinde `14px`, hero konuşma sahnesinde yaklaşık `16px`tir. İç bileşenler bu ölçeğin yakınındaki 11–13 piksel değerlerle hiyerarşiyi korur. Tam kapsül biçimi yalnızca küçük durum etiketleri için kullanılır; buton, navigasyon ve içerik kartları pill formuna dönüştürülmez.

## Components

### Buttons

Ana buton `#D4AF37` zemin üzerinde `#0B1320` metin kullanır; hover durumunda `#E8C766`a açılır. İkincil buton açık yüzeyde lacivert metinli, şeffaf ve ince sınırlıdır. Butonlar en az 50 piksel yüksekliğindedir ve active durumunda kısa bir `scale(0.97)` geri bildirimi verir.

### Cards / Containers

Kart kullanımı karşılaştırma veya belirgin bir nesne gerektiğinde sınırlıdır. Fiyat kartları açık renkli ve eş yapılıdır; OMDI Sales altın sınırla öne çıkar. Fayda ve çözüm içerikleri kart ızgarası değil, listeler ve satırlar kullanır. Koyu senaryo bandındaki üç kart, girişten sonuca tek yönlü bir akış oluşturur.

### Inputs / Fields

Demo formu koyu antrasit bölüm içinde net sınırlı, yükseltilmiş bir yüzeydir. Alan durumları mevcut form sistemini korur; ana sayfa V3 bunları ayrı bir dekoratif stile veya glassmorphism yüzeyine çevirmez.

### Navigation

Masaüstü navigasyonu açık, yarı opak canvas üzerinde lacivert metin ve ince alt sınır kullanır. Mobil menü lacivert yüzeye geçer; hover ve aktif bağlantılar `#E8C766` ile görünür olur.

### Focus

Odak göstergesi yüzeye duyarlıdır. Açık canvas, paper ve white yüzeylerde koyu altın `#6F5200`; lacivert/antrasit senaryo, demo, mobil menü ve footer yüzeylerinde açık altın `#E8C766` outline kullanılır. Klavye odağı hiçbir yüzeyde yalnızca renk değişimine bırakılmaz.

### Motion

Hero, sayfa açılışında yalnızca bir kez oynayan sıralı bir giriş kullanır. Metin öğeleri `60–300ms`, konuşma adımları `240ms`, `520ms`, `800ms` ve `1080ms` gecikmelerle görünür. Her giriş 480 milisaniyedir ve yalnızca `transform`, `opacity` ve `filter` özelliklerini değiştirir.

Sonsuz döngü, sürekli nabız veya kendi kendini tekrar eden sohbet yoktur. `prefers-reduced-motion: reduce` etkin olduğunda hero içeriği anında görünür; animasyon, blur ve transform kaldırılır. Hover ve FAQ geri bildirimleri kısa ve işlevseldir.

## Do's and Don'ts

### Do:

- **Do** açık canvas, white ve paper yüzeylerini sayfanın ana atmosferi olarak koru.
- **Do** `#D4AF37`yi aksiyon ve karar sinyali, `#6F5200`ü açık yüzeyde küçük metin, `#E8C766`yı koyu yüzey vurgusu olarak kullan.
- **Do** faydaları listelerle, çözümleri satırlarla ve süreci tek yönlü üç adımlı bir rotayla anlat.
- **Do** Montserrat `400/600/700`, 1240 piksel ana sayfa shell’i ve `116/96/82px` bölüm ritmini koru.
- **Do** hareket azaltma tercihinde tüm içeriği anında erişilebilir bırak ve odak rengini yüzeye göre değiştir.

### Don't:

- **Don't** müşteri logosu, testimonial, başarı oranı, ROI verisi veya başka sahte sosyal kanıt üret.
- **Don't** sonsuz animasyon, otomatik tekrarlanan konuşma veya dekoratif hareket döngüsü ekle.
- **Don't** sayfa geneline dekoratif grid, kenar şeridi veya side stripe yerleştir.
- **Don't** glassmorphism, cam kart, neon parıltı ya da shader estetiği kullan.
- **Don't** her içeriği eş boyutlu kart ızgarasına dönüştür veya altını dekoratif metin gradyanı olarak kullan.

## V3.1 Extensions

- Ana sayfa kabuğu masaüstünde `1240px` sınırına çıkarıldı; gövde metni `17px`, hero başlığı en fazla `6rem` ve ana bölüm başlıkları en fazla `4.7rem` olacak şekilde büyütüldü.
- Hero iki sütunlu düzeni `1100px` altında tek sütuna iner; bölüm aralığı `960px` altında `96px` olur. `680px` altında kabuk `calc(100vw - 32px)`, gövde metni `16px` ve bölüm aralığı `82px` olur.
- `/kullanim-kosullari`, `/kvkk` ve `/sla`, ortak Read yüzeyini kullanır: geniş belge hero’su, taslak uyarısı, masaüstünde yapışkan içindekiler sütunu ve `760px` okuma kolonu. Bilinmeyen kurumsal bilgiler `mark` ile görünür bırakılır, geniş tablolar yatay kaydırılır ve hukuki taslaklar `noindex` olur.
- `/musteri-girisi`, `noindex` bir geçiş kapısıdır; açık yüzeyde büyük erişim mesajını lacivert, üç adımlı izin/doğrulama kartıyla yan yana getirir. Sayfa herkese açık kayıt veya yerel bir parola formu sunmaz; korunan portal rotasına yönlendirir.
- `/musteri-paneli`, genel site chrome’unu gizleyen `noindex` Operate kabuğudur. Lacivert ürün başlığı, 1060 piksel çalışma alanı, kurulum durum listesi ve antrasit destek yüzeyi kullanır; gerçek müşteri verisi veya sahte kullanım metriği göstermez.
- Müşteri portalı görsel sistemi tek başına erişim güvenliği iddia etmez. Üretimde `/musteri-paneli*` rotasının Cloudflare Access arkasında, tek tek izin verilen satın alınmış müşteri e-postalarıyla korunması gerekir.
