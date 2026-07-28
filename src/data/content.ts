export const solutions = [
  {
    id: "lead",
    name: "OMDI Lead",
    label: "İlk temas ve nitelendirme",
    summary:
      "Gelen talepleri anında karşılar, temel ihtiyacı öğrenir ve gerçek müşteri adaylarını satış ekibine hazırlar.",
    outcome: "Cevapsız mesajları düzenli ve nitelikli bir lead akışına dönüştürür.",
    bestFor: "Hızlı karşılama ve müşteri toplama sürecini standartlaştırmak isteyen işletmeler",
    features: [
      "7/24 otomatik ilk karşılama",
      "Sık sorulan sorulara tutarlı yanıt",
      "İletişim ve ihtiyaç bilgisi toplama",
      "Nitelikli talebi satış ekibine aktarma",
    ],
  },
  {
    id: "sales",
    name: "OMDI Sales",
    label: "Yapay zekâ destekli satış",
    summary:
      "Müşterinin ihtiyacını anlar, doğru ürün veya hizmeti önerir ve görüşmeyi satış temsilcisine hazır hâle getirir.",
    outcome: "WhatsApp konuşmalarını daha hızlı ilerleyen satış fırsatlarına dönüştürür.",
    bestFor: "Yoğun talep alan ve satış ekibinin zamanını sıcak müşterilere ayırmak isteyen işletmeler",
    features: [
      "Lead paketindeki tüm karşılama yetenekleri",
      "İhtiyaç ve tercih analizi",
      "Ürün veya hizmet yönlendirmesi",
      "Satış görüşmesine hazır müşteri özeti",
    ],
    featured: true,
  },
  {
    id: "scale",
    name: "OMDI Scale",
    label: "Entegrasyonlu otomasyon",
    summary:
      "WhatsApp, CRM, stok sistemleri ve satış ekibini tek bir uçtan uca iş akışında bir araya getirir.",
    outcome: "Satış ve operasyon adımları arasındaki manuel aktarımı azaltır.",
    bestFor: "Birden fazla sistem ve ekip arasında çalışan satış operasyonları",
    features: [
      "Sales paketindeki tüm satış yetenekleri",
      "CRM ve operasyon entegrasyonları",
      "Stok ve teklif akışları",
      "İşletmeye göre tasarlanan otomasyon adımları",
    ],
  },
  {
    id: "custom",
    name: "OMDI Custom",
    label: "İşletmeye özel çözüm",
    summary:
      "Standart paketlerin ötesindeki satış ve operasyon ihtiyaçları için işletmeye özel yapay zekâ otomasyonları tasarlanır.",
    outcome: "Mevcut iş modelinize uyan özel bir yapay zekâ çalışma sistemi kurar.",
    bestFor: "Özel veri, entegrasyon veya operasyon gereksinimi bulunan işletmeler",
    features: [
      "İhtiyaç ve süreç analizi",
      "Özel yapay zekâ iş akışları",
      "İşletmeye özel entegrasyonlar",
      "Kapsama göre çözüm tasarımı",
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
