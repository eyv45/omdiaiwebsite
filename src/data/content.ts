export const solutions = [
  {
    id: "lead",
    name: "OMDI Lead",
    label: "Karşılama ve Bilgilendirme",
    summary:
      "Gelen müşteriyi anında karşılar; fiyat, katalog, PDF ve genel bilgileri otomatik iletir. İletişim bilgisini alıp satış ekibinize devreder (İlk teması ve dosya paylaşımını otomatikleştirmek isteyen işletmeler için).",
    outcome: "Cevapsız kalan tüm mesajları anında karşılayıp nitelikli müşteri adayına dönüştürür.",
    bestFor: "Müşteriyi hızlı karşılamak, fiyat/katalog dosyalarını paylaşmak ve ilk teması otomatikleştirmek isteyen işletmeler",
    features: [
      "7/24 otomatik karşılama & anlık yanıt",
      "Fiyat listesi, broşür ve PDF katalog paylaşımı",
      "Sık sorulan soruları (SSS) otomatik yanıtlama",
      "Müşteri bilgilerini toplayıp ekibe iletme",
    ],
  },
  {
    id: "sales",
    name: "OMDI Sales",
    label: "Akıllı Satış ve Yönlendirme",
    summary:
      "Müşteriyi bilgilendirir, ihtiyacını analiz eder ve doğru seçeneğe yönlendirir. Satış görüşmesini tamamlayıp hazır müşteri özetini personelinize iletir (Kurslar, klinikler, danışmanlık ve hizmet satışı yapan işletmeler için).",
    outcome: "Danışmanlık, kurs ve hizmet odaklı işletmelerde müşteri temsilcisinin yükünü hafifletir.",
    bestFor: "Eğitim kurumları, kurslar, klinikler ve danışmanlık gibi hizmet satışı yapan işletmeler",
    features: [
      "Lead paketindeki tüm karşılama & bilgilendirme yetenekleri",
      "Müşteri ihtiyacına göre doğru kurs/hizmet yönlendirmesi",
      "Satış öncesi tüm soruları yanıtlama & ikna akışı",
      "Satış tamamlandığında ekibe anlık müşteri özeti iletme",
    ],
    featured: true,
  },
  {
    id: "scale",
    name: "OMDI Scale",
    label: "Canlı Stok ve E-Ticaret Otomasyonu",
    summary:
      "Canlı stok ve ürün sistemlerinize bağlanır. Geniş ürün yelpazesi olan mağazalar için ürünü doğrudan satar ve stok bilgilerini anlık günceller (E-ticaret, perakende ve canlı stok takibi yapan mağazalar için).",
    outcome: "E-ticaret ve perakende satışlarda insan müdahalesi olmadan ürün satışını ve stok güncellemesini otomatikleştirir.",
    bestFor: "Geniş ürün kataloğu olan e-ticaret siteleri, perakende mağazaları ve canlı stok takibi yapan işletmeler",
    features: [
      "Sales paketindeki tüm akıllı satış yetenekleri",
      "Canlı stok ve ürün veritabanı entegrasyonu",
      "Doğrudan ürün satışı & anlık stok senkronizasyonu",
      "CRM, kargo ve operasyon sistemleri entegrasyonu",
    ],
  },
  {
    id: "custom",
    name: "OMDI Custom",
    label: "İşletmeye Özel Mimarisi",
    summary:
      "Standart paketlerin ötesinde; kuruma özel veri altyapısı, iç yazılımlar ve karmaşık operasyonel iş akışları için sıfırdan tasarlanan özel yapay zekâ sistemidir (Özel entegrasyon ve kurumsal iş akışı isteyen şirketler için).",
    outcome: "İşletmenizin mevcut yazılım ve operasyon yapısına %100 uyumlu özel bir yapay zekâ kurar.",
    bestFor: "Özel veri altyapısı, kendi API sistemleri veya özel süreçleri olan kurum ve şirketler",
    features: [
      "Kurumunuzun mevcut yazılımlarına özel API entegrasyonu",
      "İşletmenize özel eğitilen yapay zekâ mantığı",
      "Çoklu departman ve karmaşık operasyon otomasyonu",
      "Özel mimari tasarımı ve birebir teknik destek",
    ],
    custom: true,
  },
] as const;

export const sectors = [
  {
    slug: "estetik-guzellik-sac-ekimi",
    name: "Estetik, Güzellik ve Saç Ekimi",
    short:
      "Reklamdan gelen adayları karşılar, işlem tercihini öğrenir ve randevuya hazırlar.",
    input: "İşlem tercihi, uygunluk bilgisi, iletişim bilgisi ve randevu beklentisi",
    action:
      "Adayın sorularını yanıtlar, ihtiyaç ve uygunluk bilgilerini düzenli bir akışta toplar.",
    output:
      "Satış veya hasta danışmanının değerlendirebileceği nitelikli aday ve randevu talebi",
    signal: "Adaydan randevuya",
  },
  {
    slug: "egitim-kurslar",
    name: "Eğitim ve Kurslar",
    short:
      "Adayın hedeflerini belirler, doğru programa yönlendirir ve kayıt görüşmesi oluşturur.",
    input: "Eğitim hedefi, mevcut seviye, program tercihi ve uygun zaman",
    action:
      "İhtiyacı sınıflandırır, uygun eğitim seçeneğini açıklar ve görüşme akışını başlatır.",
    output: "Kayıt danışmanına aktarılmaya hazır program ve görüşme talebi",
    signal: "Hedeften kayıt görüşmesine",
  },
  {
    slug: "otomotiv",
    name: "Otomotiv Satış ve Hizmet",
    short:
      "Araç ve ihtiyaç bilgisini alır; teklif, paket veya servis randevusu akışını tamamlar.",
    input: "Araç bilgisi, model tercihi, hizmet ihtiyacı ve zamanlama",
    action:
      "Talebi satış, servis veya teklif akışına yönlendirir ve gerekli bilgileri tamamlar.",
    output: "Doğru ekibin doğrudan ilerletebileceği teklif veya servis talebi",
    signal: "İhtiyaçtan doğru ekibe",
  },
  {
    slug: "turizm-konaklama-seyahat",
    name: "Turizm, Konaklama ve Seyahat",
    short:
      "Tarih, kişi sayısı, bütçe ve paket tercihlerini öğrenerek talebi satışa hazırlar.",
    input: "Tarih aralığı, kişi sayısı, bütçe, konaklama ve paket beklentisi",
    action:
      "Tercihleri netleştirir, uygun seçenek akışını başlatır ve eksik bilgileri tamamlar.",
    output: "Satış ekibinin hızlı teklif hazırlayabileceği düzenli seyahat talebi",
    signal: "Tarihten hazır teklife",
  },
  {
    slug: "b2b-uretici-toptanci",
    name: "B2B Üretici ve Toptancılar",
    short:
      "Ürün, ölçü, miktar ve teklif bilgilerini toplar; talebi satışa hazır hâle getirir.",
    input: "Ürün tipi, teknik ölçü, miktar, teslimat ve teklif beklentisi",
    action:
      "Ticari talebi nitelendirir, kritik bilgileri tamamlar ve ilgili satış akışına aktarır.",
    output: "Teklif hazırlığına başlanabilecek eksiksiz ve nitelikli B2B talep",
    signal: "Teknik talepten teklife",
  },
] as const;

/**
 * Paket fiyatları. Tutarlar KDV dahildir.
 * Kaynak: fiyatlandirma_kdv.xlsx — güncelleme burada yapılır.
 */
/**
 * Kampanya indirimi. `*List` alanları indirimsiz liste fiyatıdır ve üstü çizili
 * gösterilir; `*Fee` alanları tahsil edilen kampanya fiyatıdır. Tüm çiftler
 * tam olarak bu orana denk gelecek biçimde yuvarlanmıştır.
 */
export const DISCOUNT_LABEL = "%70 indirim";
export const SETUP_DISCOUNT_LABEL = "%100 indirim";

export const pricing = {
  lead: {
    setupList: "7.000 TL",
    setupFee: "0 TL",
    setupDiscountLabel: "%100 indirim",
    monthlyList: "13.000 TL",
    monthlyFee: "3.900 TL",
    quota: null,
  },
  sales: {
    setupList: "12.000 TL",
    setupFee: "0 TL",
    setupDiscountLabel: "%100 indirim",
    monthlyList: "23.000 TL",
    monthlyFee: "6.900 TL",
    quota: "1.000 müşteri",
  },
  scale: {
    setupList: "27.000 TL",
    setupFee: "0 TL",
    setupDiscountLabel: "%100 indirim",
    monthlyList: "50.000 TL",
    monthlyFee: "15.000 TL",
    quota: "1.500 müşteri",
  },
  custom: {
    setupList: null,
    setupFee: "Proje bazlı",
    setupDiscountLabel: null,
    monthlyList: null,
    monthlyFee: "Özel fiyatlandırma",
    quota: "Sınırsız / özel kota",
  },
} as const;

/** /fiyatlandirma sayfasındaki paket karşılaştırma tablosu. */
export const pricingComparison = [
  {
    group: "Temel özellikler",
    rows: [
      { label: "7/24 otomatik karşılama", lead: "✓", sales: "✓", scale: "✓", custom: "Özel" },
      { label: "Sık sorulan sorular", lead: "✓", sales: "✓", scale: "✓", custom: "Özel" },
      { label: "Müşteri bilgisi toplama", lead: "✓", sales: "✓", scale: "✓", custom: "Özel" },
      { label: "Müşteri nitelendirme", lead: "✓", sales: "✓", scale: "✓", custom: "Özel" },
    ],
  },
  {
    group: "Satış ve dönüşüm",
    rows: [
      { label: "Ürün ve hizmet önerisi", lead: "—", sales: "✓", scale: "✓", custom: "Özel" },
      { label: "Satış itirazlarını karşılama", lead: "—", sales: "✓", scale: "✓", custom: "Özel" },
      { label: "Randevu / teklif / rezervasyon", lead: "Temel", sales: "✓", scale: "✓", custom: "Özel" },
      { label: "Çapraz satış", lead: "—", sales: "✓", scale: "✓", custom: "Özel" },
      {
        label: "Satış temsilcisine aktarım",
        lead: "Sadece bilgi",
        sales: "Özet raporla",
        scale: "Görev atamasıyla",
        custom: "Özel",
      },
    ],
  },
  {
    group: "Entegrasyon ve operasyon",
    rows: [
      { label: "CRM entegrasyonu", lead: "—", sales: "Opsiyonel", scale: "Opsiyonel", custom: "Özel (ERP, muhasebe)" },
      { label: "Stok ve fiyat entegrasyonu", lead: "—", sales: "Opsiyonel", scale: "✓", custom: "Özel" },
      { label: "Çoklu şube ve ekip yönetimi", lead: "—", sales: "—", scale: "—", custom: "Özel" },
      { label: "Çoklu dil desteği", lead: "Opsiyonel", sales: "Opsiyonel", scale: "✓", custom: "Özel" },
      { label: "Gelişmiş performans raporlama", lead: "Temel", sales: "✓", scale: "✓", custom: "Özel" },
    ],
  },
] as const;

/**
 * Maliyet hesabının varsayımları.
 *
 * Hesap tamamen ziyaretçinin girdiği rakamlar üzerinden yürür; buradaki tek
 * varsayım bir kişinin saatte kaç görüşme yürütebildiğidir ve arayüzde açıkça
 * yazılır. Uydurma tasarruf oranı veya satış artışı vaadi üretilmez.
 */
export const calculator = {
  // Bir kişinin günde yürütebildiği nitelendirme görüşmesi (yazışma, bilgi
  // girişi ve takip dahil). Arayüzde açıkça yazılır. Bu değeri düşürmek
  // gereken kişi sayısını, dolayısıyla hesaplanan net kârı artırır.
  conversationsPerPersonPerDay: 50,
  defaults: {
    dailyConversations: 30,
    staffMonthlyCost: 55000,
    workHours: 10,
  },
  limits: {
    // Üst sınır Scale kotasının (1.500 müşteri/ay) biraz üstünde tutulur;
    // aksi halde kaydırıcının büyük kısmı "teklif" durumunda kalıyor.
    dailyConversations: { min: 5, max: 60, step: 5 },
    staffMonthlyCost: { min: 30000, max: 120000, step: 1000 },
    workHours: { min: 6, max: 14, step: 1 },
  },
} as const;

/**
 * Sektör slider'ındaki örnek konuşmalar.
 * Yapı ve ton, hero'daki estetik örneğiyle birebir aynı tutulur.
 */
export const sectorConversations = [
  {
    slug: "estetik-guzellik-sac-ekimi",
    tab: "Estetik & Saç Ekimi",
    messages: [
      { from: "customer", text: "Saç ekimi için fiyat ve uygunluk bilgisi alabilir miyim?" },
      { from: "omdi", text: "Elbette. Size uygun akışı hazırlamak için birkaç kısa bilgi alacağım." },
      { from: "customer", text: "Önümüzdeki aylarda yaptırmayı düşünüyorum." },
    ],
    qualification: [
      { label: "İşlem", value: "Saç ekimi" },
      { label: "Plan", value: "1–2 ay" },
      { label: "Durum", value: "Sıcak aday" },
    ],
  },
  {
    slug: "egitim-kurslar",
    tab: "Eğitim & Kurslar",
    messages: [
      { from: "customer", text: "İngilizce kursunuz hakkında bilgi almak istiyorum." },
      { from: "omdi", text: "Memnuniyetle. Hedefinizi ve mevcut seviyenizi öğrenip uygun programı paylaşayım." },
      { from: "customer", text: "İş İngilizcesi, orta seviyedeyim. Akşam saatleri uygun." },
    ],
    qualification: [
      { label: "Program", value: "İş İngilizcesi" },
      { label: "Seviye", value: "Orta" },
      { label: "Durum", value: "Kayıt görüşmesi" },
    ],
  },
  {
    slug: "otomotiv",
    tab: "Otomotiv",
    messages: [
      { from: "customer", text: "2020 model aracım için servis randevusu alabilir miyim?" },
      { from: "omdi", text: "Tabii. Araç bilgisi ve hizmet ihtiyacınızı alıp uygun günü planlayalım." },
      { from: "customer", text: "Periyodik bakım, hafta içi olabilir." },
    ],
    qualification: [
      { label: "Hizmet", value: "Periyodik bakım" },
      { label: "Zaman", value: "Bu hafta" },
      { label: "Durum", value: "Servis randevusu" },
    ],
  },
  {
    slug: "turizm-konaklama-seyahat",
    tab: "Turizm & Konaklama",
    messages: [
      { from: "customer", text: "Temmuz için 4 kişilik tatil paketiniz var mı?" },
      { from: "omdi", text: "Var. Tarih aralığınızı ve konaklama tercihinizi netleştirip seçenekleri hazırlayayım." },
      { from: "customer", text: "10–17 Temmuz, her şey dahil olsun." },
    ],
    qualification: [
      { label: "Tarih", value: "10–17 Temmuz" },
      { label: "Kişi", value: "4 kişi" },
      { label: "Durum", value: "Teklif hazırlığı" },
    ],
  },
  {
    slug: "b2b-uretici-toptanci",
    tab: "B2B Üretici",
    messages: [
      { from: "customer", text: "500 adet özel ölçü profil için teklif alabilir miyim?" },
      { from: "omdi", text: "Elbette. Teknik ölçü ve teslimat beklentinizi alıp teklif akışını başlatayım." },
      { from: "customer", text: "Ölçüleri iletiyorum, teslimat 3 hafta içinde olmalı." },
    ],
    qualification: [
      { label: "Ürün", value: "Özel ölçü profil" },
      { label: "Miktar", value: "500 adet" },
      { label: "Durum", value: "Teklif talebi" },
    ],
  },
] as const;

/**
 * Hero'daki WhatsApp örnek yazışmaları. Sektörler 5 saniyede bir kendiliğinden
 * değişir; kullanıcı alttaki sekmelerden birinin üzerine geldiğinde o sektörde durur.
 * Metinler satış ekibiyle birlikte güncellenir; sıralama sekme sırasını belirler.
 */
export const heroConversations = [
  {
    slug: "estetik-guzellik-sac-ekimi",
    tab: "Estetik & Saç Ekimi",
    business: "Estetik & Saç Ekimi Kliniği",
    messages: [
      {
        from: "customer",
        time: "10:41",
        text: "Saç ekimi işlemi için ortalama fiyat ve uygunluk bilgisi alabilir miyim?",
      },
      {
        from: "omdi",
        time: "10:41",
        text: "Merhabalar, kliniğimize hoş geldiniz. Size en doğru fiyatı ve yöntemi sunabilmemiz için öncelikle uzmanlarımızın saç yapınızı analiz etmesi gerekmektedir. Süreci planlamanıza yardımcı olmaktan memnuniyet duyarım.",
      },
      {
        from: "customer",
        time: "10:43",
        text: "Ön kısımlarda açılmalarım var. İşlem ortalama ne kadar sürüyor ve iyileşme süreci nasıldır?",
      },
      {
        from: "omdi",
        time: "10:43",
        text: "Ön bölge ekimlerinde en modern teknikleri uygulayarak oldukça doğal bir görünüm sağlıyoruz. İşlem genellikle 6-8 saat sürer ve lokal anestezi sayesinde konforlu geçer. Günlük yaşantınıza 3-4 gün içinde rahatlıkla dönebilirsiniz.",
      },
      {
        from: "customer",
        time: "10:45",
        text: "Harika, detaylı muayene için bu hafta içi bir randevu rica edebilir miyim?",
      },
      {
        from: "omdi",
        time: "10:45",
        text: "Elbette. 15 Ağustos Perşembe günü saat 14:00 için ön muayene randevunuzu başarıyla oluşturdum. Uzman ekibimiz sizi kliniğimizde ağırlamak için sabırsızlanıyor. Sağlıklı günler dileriz.",
      },
    ],
  },
  {
    slug: "egitim-kurslar",
    tab: "Eğitim & Kurslar",
    business: "Dil Eğitim Kurumu",
    messages: [
      {
        from: "customer",
        time: "13:12",
        text: "İleri seviye İngilizce konuşma kurslarınız hakkında bilgi almak istiyorum, programlar nasıl ilerliyor?",
      },
      {
        from: "omdi",
        time: "13:12",
        text: "Merhaba, eğitim kurumumuza hoş geldiniz. İleri seviye (C1-C2) konuşma sınıflarımız, anadili İngilizce olan eğitmenlerimiz eşliğinde maksimum 8 kişilik gruplarla tamamen pratik odaklı ilerlemektedir.",
      },
      {
        from: "customer",
        time: "13:14",
        text: "Ders saatleri çalışanlar için uygun mu? Akşam sınıflarınız var mı?",
      },
      {
        from: "omdi",
        time: "13:14",
        text: "Kesinlikle. Çalışan öğrencilerimiz için hafta içi akşam 19:00 - 21:00 arası ve hafta sonu sabah seanslarımız bulunmaktadır. Size en uygun planlamayı yapabiliriz.",
      },
      {
        from: "customer",
        time: "13:16",
        text: "Çok iyi. Seviye tespit sınavı ve kayıt görüşmesi için bir randevu ayarlayabilir miyiz?",
      },
      {
        from: "omdi",
        time: "13:16",
        text: "Memnuniyetle. Yarın saat 18:30 için seviye tespit sınavı ve eğitim danışmanımızla yüz yüze görüşme randevunuzu başarıyla oluşturdum. Kurumumuzda görüşmek üzere!",
      },
    ],
  },
  {
    slug: "otomotiv",
    tab: "Otomotiv",
    business: "Otomotiv Showroom",
    messages: [
      {
        from: "customer",
        time: "15:28",
        text: "Yeni SUV modelinizin test sürüşü ve donanım paketleri hakkında bilgi alabilir miyim?",
      },
      {
        from: "omdi",
        time: "15:28",
        text: "Merhabalar, showroom'umuza hoş geldiniz. Yeni SUV modelimiz, Premium ve Elegance olmak üzere iki farklı donanım paketiyle sunulmaktadır. Her iki pakette de gelişmiş güvenlik sistemleri standart olarak yer alır.",
      },
      {
        from: "customer",
        time: "15:30",
        text: "Elegance pakette panoramik cam tavan ve deri koltuk standart mı sunuluyor?",
      },
      {
        from: "omdi",
        time: "15:30",
        text: "Evet, Elegance paketimizde panoramik cam tavan, premium deri koltuklar ve 360 derece çevre görüş kamera sistemi standart donanım olarak aracımızda bulunmaktadır.",
      },
      {
        from: "customer",
        time: "15:32",
        text: "Aracı yakından görmek ve test sürüşü yapmak için bu hafta sonuna randevu istiyorum.",
      },
      {
        from: "omdi",
        time: "15:32",
        text: "Harika bir seçim! Bu Cumartesi saat 11:00 için Elegance paket test sürüşü randevunuzu başarıyla oluşturdum. Sizi showroom'umuzda ağırlamaktan mutluluk duyacağız.",
      },
    ],
  },
  {
    slug: "turizm-konaklama-seyahat",
    tab: "Turizm & Konaklama",
    business: "Resort & Otel",
    messages: [
      {
        from: "customer",
        time: "09:05",
        text: "Merhaba, Ağustos ayının son haftası için 2 yetişkin 1 çocuk deniz manzaralı oda fiyatlarınızı öğrenebilir miyim?",
      },
      {
        from: "omdi",
        time: "09:05",
        text: "Merhabalar, otelimize hoş geldiniz. Ağustos ayının son haftası için deniz manzaralı aile odalarımızda müsaitliğimiz bulunmaktadır. Her şey dahil konseptimizde sizlere konforlu bir tatil deneyimi sunuyoruz.",
      },
      {
        from: "customer",
        time: "09:07",
        text: "Otelinizde çocuklar için aquapark ve animasyon etkinlikleri mevcut mu?",
      },
      {
        from: "omdi",
        time: "09:07",
        text: "Evet, tesisimizde çocuk misafirlerimiz için gün boyu hizmet veren mini kulübümüz, 3 kaydıraklı aquaparkımız ve her akşam düzenlenen özel animasyon gösterilerimiz bulunmaktadır.",
      },
      {
        from: "customer",
        time: "09:09",
        text: "Süper, detayları netleştirmek ve rezervasyonumu tamamlamak için bir tatil danışmanınızla telefon görüşmesi randevusu oluşturabilir miyiz?",
      },
      {
        from: "omdi",
        time: "09:09",
        text: "Elbette. Tatil danışmanımızın sizi bugün saat 15:00'te araması için telefon randevunuzu başarıyla oluşturdum. Size en uygun tatil planını birlikte hazırlayacağız.",
      },
    ],
  },
  {
    slug: "b2b-uretici-toptanci",
    tab: "B2B Üretici",
    business: "Alüminyum Üretim Tesisi",
    messages: [
      {
        from: "customer",
        time: "11:20",
        text: "Toptan alüminyum profil siparişleri için minimum üretim miktarınız ve termin süreniz nedir?",
      },
      {
        from: "omdi",
        time: "11:20",
        text: "Merhabalar, fabrikamıza hoş geldiniz. Standart alüminyum profillerimizde minimum sipariş miktarımız 500 kg'dır. Özel kalıp üretimlerinde ise termin süremiz kalıp onayından itibaren ortalama 3 haftadır.",
      },
      {
        from: "customer",
        time: "11:22",
        text: "Ürünlerinizde eloksal kaplama ve özel renk fırın boya seçenekleri uygulayabiliyor musunuz?",
      },
      {
        from: "omdi",
        time: "11:22",
        text: "Evet, tesisimizde entegre olarak hem eloksal kaplama hem de elektrostatik toz boya hatlarımız mevcuttur. İstediğiniz RAL koduna göre özel üretim gerçekleştirebiliyoruz.",
      },
      {
        from: "customer",
        time: "11:24",
        text: "Üretim hattınızı yakından görmek ve yüklü bir siparişin detaylarını konuşmak için fabrikanıza ziyarete gelmek istiyorum, randevu alabilir miyim?",
      },
      {
        from: "omdi",
        time: "11:24",
        text: "Tabii ki, sizi üretim tesisimizde ağırlamaktan memnuniyet duyarız. Önümüzdeki Salı günü saat 10:30 için teknik ekibimiz ve satış yöneticimizle görüşme randevunuzu başarıyla oluşturdum. Fabrikamızın konum bilgilerini iletiyorum, iyi çalışmalar dileriz.",
      },
    ],
  },
] as const;

export const benefits = [
  {
    title: "İlk yanıt beklemez",
    copy: "Müşteri mesajları ekip çevrimdışıyken de karşılanır; ilk temas fırsatı korunur.",
  },
  {
    title: "Satış ekibi odağını korur",
    copy: "Tekrarlanan sorular ve ilk bilgi toplama otomatikleşir; ekip hazır taleplere odaklanır.",
  },
  {
    title: "Her talep aynı özenle ilerler",
    copy: "Sorular, yönlendirmeler ve nitelendirme adımları tutarlı bir satış akışında yürür.",
  },
  {
    title: "Sistem işinizle büyür",
    copy: "İhtiyaç arttıkça CRM, stok ve operasyon sistemleri aynı akışa bağlanabilir.",
  },
] as const;

export const journey = [
  {
    step: "01",
    title: "Karşılar",
    copy: "WhatsApp’tan gelen müşteri saniyeler içinde anlaşılır bir ilk yanıt alır.",
  },
  {
    step: "02",
    title: "Anlar",
    copy: "İhtiyaç, tercih ve uygunluk bilgileri doğal bir konuşmayla netleşir.",
  },
  {
    step: "03",
    title: "Nitelendirir",
    copy: "Gerçek potansiyel taşıyan talepler ayrılır ve doğru çözüme yönlendirilir.",
  },
  {
    step: "04",
    title: "Teslim eder",
    copy: "Satış temsilcisine konuşma özetiyle birlikte görüşmeye hazır talep bırakılır.",
  },
] as const;

export const faqs = [
  {
    question: "OMDI müşterilerle hangi kanalda konuşur?",
    answer:
      "Ana kullanım senaryosu WhatsApp’tır. OMDI, işletmenin dijital iletişim ve satış akışlarına göre diğer sistemlerle de birlikte çalışacak şekilde kurgulanabilir.",
  },
  {
    question: "Satış temsilcisinin yerini mi alır?",
    answer:
      "OMDI, tekrarlanan ilk temas ve nitelendirme işlerini üstlenir. Satış ekibine müşterinin ihtiyacını ve konuşma bağlamını hazır bırakarak temsilcinin doğru anda devreye girmesini sağlar.",
  },
  {
    question: "Aylık görüşme kotası ne anlama gelir?",
    answer:
      "Paketlerin kullanım kapsamı, ay içinde yürütülen müşteri görüşmesi hacmine göre belirlenir. Kurulum, aylık hizmet ve görüşme kotası fiyatlandırmanın üç ayrı bileşenidir.",
  },
  {
    question: "CRM veya stok sistemiyle entegre olabilir mi?",
    answer:
      "OMDI Scale, WhatsApp, CRM, stok ve satış ekiplerini aynı iş akışında birleştirmek için tasarlanmıştır. Entegrasyon kapsamı işletmenin mevcut sistemlerine göre netleştirilir.",
  },
  {
    question: "Standart paketler ihtiyacımıza uymuyorsa ne olur?",
    answer:
      "OMDI Custom kapsamında süreçleriniz analiz edilir ve standart paketlerin ötesindeki satış veya operasyon ihtiyaçları için özel bir otomasyon tasarlanır.",
  },
] as const;
