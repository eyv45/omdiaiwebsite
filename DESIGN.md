---
name: OMDI DemoV2
description: Müşteri mesajını satışa hazır tek bir altın sinyale dönüştüren premium yapay zekâ yüzeyi.
colors:
  signal-gold: "#D4AF37"
  signal-gold-light: "#E8C766"
  signal-gold-deep: "#B88B0B"
  signal-gold-text: "#6F5200"
  trust-navy: "#0B1320"
  operations-anthracite: "#1E2430"
  proof-paper: "#F5F5F5"
  white: "#FFFFFF"
  ink: "#101722"
typography:
  display:
    fontFamily: "Montserrat, Arial, sans-serif"
    fontSize: "clamp(3.3rem, 6vw, 5.8rem)"
    fontWeight: 700
    lineHeight: 0.98
    letterSpacing: "-0.04em"
  body:
    fontFamily: "Montserrat, Arial, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.72
  label:
    fontFamily: "Montserrat, Arial, sans-serif"
    fontSize: "0.75rem"
    fontWeight: 700
    letterSpacing: "0.1em"
rounded:
  control: "10px"
  surface: "14px"
  stage: "16px"
spacing:
  control-x: "20px"
  section-desktop: "128px"
  section-mobile: "88px"
components:
  button-primary:
    backgroundColor: "{colors.signal-gold}"
    textColor: "{colors.trust-navy}"
    rounded: "{rounded.control}"
    padding: "0 20px"
    height: "48px"
  button-ghost:
    backgroundColor: "rgba(255,255,255,0.04)"
    textColor: "{colors.white}"
    rounded: "{rounded.control}"
    padding: "0 20px"
    height: "48px"
---

# Design System: OMDI DemoV2

## Overview

**Creative North Star: "Altın Sinyal Rotası"**

OMDI’nin görsel dünyası, dağınık müşteri mesajlarının tek bir anlaşılır satış sinyaline dönüşmesini anlatır. Koyu lacivert alan güveni ve kontrolü, ölçülü altın kullanımı ise sistemin oluşturduğu değeri temsil eder. İfade güçlüdür; arayüz gürültülü, oyuncu veya gösteri odaklı değildir.

Ana pazarlama yüzeyi ikna edici ve asimetrik; fiyat paneli ise sakin, hızlı ve operasyoneldir.

**Key Characteristics:**

- Koyu güven yüzeyleri ile açık kanıt yüzeylerinin ritmik karşılığı
- Yalnızca kritik aksiyon ve sinyal noktalarında altın
- Yoğun olmayan, sonuç odaklı içerik hiyerarşisi
- Hero’da tek orkestrasyon; tekrar eden etkileşimlerde minimum hareket

## Colors

Altın değer ve aksiyonu, lacivert güven ve yapay zekâ altyapısını, açık gri ise okunabilir kanıt alanlarını taşır. `#B88B0B` marka tonudur; açık yüzeylerdeki küçük işlevsel metinler AA okunabilirliği için `#6F5200` erişilebilir metin türevini kullanır.

**The Signal Rarity Rule.** Altın, her öğeyi süslemek için değil; aksiyon, seçili çözüm ve süreçteki kritik teslim noktasını göstermek için kullanılır.

## Typography

**Display Font:** Montserrat  
**Body Font:** Montserrat  

Tek aile kullanımı marka briefine bağlıdır. Karakter; kalın başlıklarda kendinden emin, gövde metninde sade ve kurumsaldır.

- **Display:** Bold, sıkı satır aralığı ve en fazla `-0.04em` harf aralığı
- **Headline:** Bold, dengeli ve kısa satırlar
- **Body:** Regular, rahat satır aralığı ve yaklaşık 65–75 karakter ölçü
- **Label:** SemiBold/Bold, yalnızca işlevsel sınıflandırmalarda büyük harf
- **Functional text:** En az 14 piksel; 12 piksel yalnızca ikincil metadata için

## Layout

Ana kapsayıcı en fazla 1180 pikseldir. Masaüstünde asimetrik iki sütun, tablette tek sütun; 660 piksel altında mobil akış kullanılır. Bölüm ritmi masaüstünde 128, mobilde 88 pikseldir. Bilgi yoğunluğu bölümden bölüme değişir; koyu yoğun alanları açık ve sakin alanlar izler.

## Elevation & Depth

Sistem tonal katmanlamayı temel alır. Geniş gölgeler yalnızca hero sinyal sahnesi, demo formu ve panel gibi gerçekten yükseltilmiş yüzeylerde kullanılır. Koyu kartlarda derinlik çoğunlukla yüzey tonu ve ince sınırlarla kurulur.

## Shapes

Kontroller 10, içerik yüzeyleri 14 ve büyük sahneler 16 piksel köşe yarıçapı kullanır. Küçük durum etiketleri dışında kapsül form kullanılmaz. Geçici marka işareti, iki yörünge ve tek çekirdekte birleşen veri noktalarından oluşur.

## Components

### Buttons

Altın ana buton lacivert metinle yüksek güvenli aksiyonu taşır. Ghost buton koyu yüzeyde ikincil yönlendirmedir. Tüm butonlar en az 48 piksel yüksekliğe, görünür klavye odağına ve hafif basma geri bildirimine sahiptir.

### Cards / Containers

Fiyat kartları karşılaştırma amacıyla eş yapıda kullanılabilir; OMDI Sales altın sınır ve etiketle ayrılır. Diğer içerik bölümlerinde kart ızgarası yerine satır, bant ve süreç topolojisi tercih edilir.

### Inputs / Fields

Alanlar beyaz veya çok açık gri yüzeyde, 1 piksel nötr sınırla çalışır. Odak durumunda koyu altın sınır ve düşük opaklıklı üç piksellik halka görünür.

### Navigation

Masaüstünde yatay ve sıkı, mobilde tam ekran dikey menüdür. Aktif sayfa masaüstünde ince altın çizgiyle, mobilde altın metinle belirtilir.

### Signal Stage

WhatsApp mesajı, nitelendirme etiketleri ve satış teslimi tek dikey rota üzerinde görünür. Tekrar eden sonsuz hareket yoktur; sinyal yalnızca ilk girişte sınırlı sayıda ilerler.

## Do's and Don'ts

### Do:

- **Do** altını yalnızca değer ve aksiyon taşıyan noktalarda kullan.
- **Do** gerçek işletme sonucunu teknik özellikten önce göster.
- **Do** koyu ve açık yüzeyleri uzun sayfada okuma ritmi için sırala.
- **Do** hareket azaltma tercihinde tüm içeriği anında erişilebilir bırak.

### Don't:

- **Don't** müşteri logosu, testimonial, başarı oranı veya ROI verisi üret.
- **Don't** shader, neon parıltı, sürekli nabız veya dekoratif glassmorphism kullan.
- **Don't** her içeriği aynı boy kart ızgarasına dönüştür.
- **Don't** altını dekoratif metin gradyanı olarak kullan.
