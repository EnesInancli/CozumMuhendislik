import React, { createContext, useContext, useState, useEffect } from 'react';

type Language = 'tr' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within LanguageProvider');
  }
  return context;
};

interface LanguageProviderProps {
  children: React.ReactNode;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>(() => {
    const saved = localStorage.getItem('language');
    return (saved === 'en' ? 'en' : 'tr') as Language;
  });

  useEffect(() => {
    localStorage.setItem('language', language);
  }, [language]);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
  };

  const t = (key: string): string => {
    const keys = key.split('.');
    let value: any = translations[language];

    for (const k of keys) {
      if (value && typeof value === 'object') {
        value = value[k];
      } else {
        return key;
      }
    }

    return typeof value === 'string' ? value : key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

const translations = {
  tr: {
    nav: {
      services: 'Hizmetlerimiz',
      products: 'Ürünlerimiz',
      references: 'Referanslar',
      gallery: 'Galeri',
      about: 'Hakkımızda',
      contact: 'İletişim',
      climates: 'Klimalar',
      heatPumps: 'Isı Pompaları'
    },
    services: {
      title: 'Hizmetlerimiz',
      description: 'Geniş hizmet yelpazemizle tüm teknik ihtiyaçlarınıza çözüm sunuyoruz.',
      vrf: 'VRF Sistemleri',
      vrfDesc: 'Enerji verimli, çoklu iç ünite kontrolü sunan gelişmiş iklimlendirme sistemleri.',
      climate: 'Klima Teknolojileri',
      climateDesc: 'Yüksek verimlilikte, modern ve çevre dostu klima çözümleri.',
      heatPump: 'Isı Pompası',
      heatPumpDesc: 'Hem ısıtma hem soğutma sağlayan, enerji tasarruflu sistemler.',
      mechanical: 'Mekanik Tesisat',
      mechanicalDesc: 'Bina içi tüm mekanik tesisat çözümleri, projelendirme ve uygulama.',
      pool: 'Havuz',
      poolDesc: 'Özel ve ticari havuz sistemlerinin planlaması, kurulumu ve bakımı.',
      waterPressure: 'Su Basınçlandırma',
      waterPressureDesc: 'Yüksek katlı binalar için su basıncı düzenleme sistemleri.',
      ventilation: 'Havalandırma',
      ventilationDesc: 'Temiz hava sirkülasyonu sağlayan havalandırma sistemleri.',
      waterTreatment: 'Su Arıtma',
      waterTreatmentDesc: 'İçme suyu kalitesini artırmak için gelişmiş su arıtma sistemleri.',
      solar: 'GES',
      solarDesc: 'Güneş enerjisi sistemleriyle sürdürülebilir ve yenilenebilir enerji çözümleri.'
    },
    hero: {
      title: 'Bodrum Çözüm Mühendislik',
      subtitle1: 'Isıtma, Soğutma, Havalandırma',
      subtitle2: 've Mekanik Tesisatta Güvenilir Çözümler',
      authorized: 'Toshiba Yetkili Bayisi | Alarko & Carrier Sistemleri',
      discoverServices: 'Hizmetlerimizi Keşfedin',
      aboutUs: 'Hakkımızda'
    },
    about: {
      title: 'Hakkımızda',
      subtitle: '2008 yılından bu yana klima ve mekanik tesisat sektöründe faaliyet gösteren, müşteri memnuniyetini ön planda tutan güvenilir bir firmayız.',
      description1: 'Şirketimiz Bodrum\'da kurulmuş olup mekanik tesisat konusunda taahhütlü satış ve servis üzerine çalışmaktadır.',
      description2: 'ALARKO CARRİER TOSHİBA \'nın BODRUM bölge bayisiyiz, ayrıca SERKON, BOGENN, ATLAS ve CARİSA firmalarının Bodrum bayiliğini yapmaktadır. Bölgede ısıtma, soğutma, havalandırma, yüzme havuzu, sıhhi tesisat ve altyapı üzerine yapmış olduğumuz bir çok taahhüt referanslarımız vardır. Firmamız Bodrum ve çevresinde komple otel mekanik tesisat yapımı konusunda uzman bir ekibe sahiptir.',
      happyCustomers: 'Mutlu Müşteri',
      yearsExperience: 'Yıllık Deneyim',
      completedProjects: 'Tamamlanan Proje',
      expertTeam: 'Uzman Ekip',
      vision: 'Vizyonumuz',
      visionText: 'Türkiye\'de klima ve mekanik tesisat sektöründe lider konumda olmak, sürdürülebilir ve çevre dostu çözümlerle müşterilerimizin yaşam kalitesini artırmak.',
      mission: 'Misyonumuz',
      missionText: 'Kaliteli ürün ve hizmetlerimizle müşteri beklentilerini aşmak, teknolojik yenilikleri takip ederek sektöre değer katmak ve sürdürülebilir büyüme sağlamak.',
      story: 'Hikayemiz',
      values: 'Değerlerimiz',
      valuesSubtitle: 'Çalışma prensiplerimizi oluşturan temel değerler',
      customerSatisfaction: 'Müşteri Memnuniyeti',
      customerSatisfactionDesc: 'Müşterilerimizin memnuniyeti bizim en büyük önceliğimizdir. Her projede mükemmelliği hedefliyoruz.',
      reliability: 'Güvenilirlik',
      reliabilityDesc: 'Sözümüzü tutmak ve kaliteli hizmet sunmak konusunda 15 yıldır güvenilir bir partner olarak hizmet veriyoruz.',
      innovation: 'İnovasyon',
      innovationDesc: 'Sektördeki en son teknolojileri takip ederek müşterilerimize en inovatif çözümleri sunuyoruz.',
      quality: 'Kalite',
      qualityDesc: 'Tüm projelerimizde uluslararası kalite standartlarını uygulayarak mükemmel sonuçlar elde ediyoruz.'
    },
    products: {
      title: 'Ürünlerimiz',
      description: 'Yaşam alanlarınız için esnek ve verimli çözümlerle maksimum konforu keşfedin.',
      climates: 'Klimalar',
      climatesDesc: 'Toshiba ve Alarko markaları ile split ve multi klima çözümleri. Enerji verimli ve sessiz çalışma.',
      heatPumps: 'Isı Pompaları',
      heatPumpsDesc: 'Toshiba Estia ve Alarko Flair serisi ile çevre dostu ısı pompası sistemleri. Hem ısıtma hem soğutma.',
      viewDetails: 'Detayları İncele'
    },
    references: {
      title: 'Referanslarımız',
      subtitle: 'Gerçekleştirdiğimiz projeler ve müşteri memnuniyeti bizim en büyük başarımızdır.',
      brands: 'Referans Markalarımız',
      featuredProjects: 'Öne Çıkan Projelerimiz',
      featuredProjectsDesc: 'Gerçekleştirdiğimiz büyük ölçekli projeler',
      joinReferences: 'Siz de Referanslarımıza Katılın',
      joinReferencesDesc: 'Projeniz için profesyonel çözümler sunmaya hazırız. Hemen iletişime geçin.',
      getQuote: 'Proje Teklifi Al'
    },
    contact: {
      title: 'İletişim',
      description: 'Projeleriniz hakkında konuşmak için bizimle iletişime geçin. Uzman ekibimiz size en uygun çözümü sunmaya hazır.',
      info: 'İletişim Bilgileri',
      phone: 'Telefon',
      email: 'E-posta',
      address: 'Adres',
      workingHours: 'Çalışma Saatleri',
      workingHoursText: 'Pazartesi - Cumartesi: 09:00 - 18:00',
      writeUs: 'Bize Yazın',
      nameSurname: 'Ad Soyad',
      phoneNumber: 'Telefon',
      subject: 'Konu',
      serviceType: 'Hizmet Türü',
      selectService: 'Hizmet seçin',
      message: 'Mesaj',
      sendMessage: 'Mesajı Gönder',
      addressLine1: 'Podium İş Merkezi, Konacık',
      addressLine2: 'Atatürk Blv. No:178,',
      addressLine3: '48100 Bodrum/Muğla',
      namePlaceholder: 'Adınızı ve soyadınızı girin',
      emailPlaceholder: 'E-posta adresinizi girin',
      phonePlaceholder: 'Telefon numaranızı girin',
      subjectPlaceholder: 'Mesajınızın konusunu girin',
      messagePlaceholder: 'Mesajınızı detaylı olarak yazın...',
      captcha: 'Güvenlik Doğrulaması',
      captchaPlaceholder: 'Sonucu yazın',
      successMessage: 'Mesajınız başarıyla gönderildi! En kısa sürede size dönüş yapacağız.',
      captchaError: 'Güvenlik doğrulaması yanlış! 5 + 3 = 8',
      services: {
        vrf: 'VRF Sistemleri',
        climate: 'Klima Teknolojileri',
        mechanical: 'Mekanik Tesisat',
        maintenance: 'Bakım ve Onarım',
        consulting: 'Proje Danışmanlığı',
        other: 'Diğer'
      }
    },
    footer: {
      description: 'Projeleriniz için mühendislik çözümleri sunuyor, kaliteli hizmet anlayışımızla geleceği inşa ediyoruz.',
      quickLinks: 'Hızlı Bağlantılar',
      contact: 'İletişim',
      rights: 'Tüm hakları saklıdır.',
      privacy: 'Gizlilik Politikası',
      terms: 'Kullanım Şartları',
      cookies: 'Çerez Politikası'
    },
    common: {
      readMore: 'Devamını Oku',
      learnMore: 'Daha Fazla',
      contactUs: 'Bize Ulaşın',
      getQuote: 'Teklif Al'
    },
    gallery: {
      title: 'Galeri',
      description: 'Çalışma alanlarımız, ekibimiz ve projelerimizden kareler.',
      filterAll: 'Tümü',
      filterOffice: 'Ofis',
      filterTeam: 'Ekip',
      filterProject: 'Proje',
      filterTech: 'Teknoloji'
    },
    pages: {
      vrf: {
        title: 'VRF Sistemleri',
        subtitle: 'Variable Refrigerant Flow (VRF) teknolojisi ile enerji verimli, esnek ve konforlu klima çözümleri sunuyoruz.',
        techTitle: 'VRF Teknolojisi Nedir?',
        techDesc1: 'VRF (Variable Refrigerant Flow) sistemleri, değişken soğutucu akışkan teknolojisi kullanarak her iç üniteye ihtiyacı kadar soğutucu gönderen akıllı klima sistemleridir.',
        techDesc2: 'Bu teknoloji sayesinde enerji tüketimi optimize edilir ve her alan için bireysel konfor sağlanır.',
        energyEfficiency: 'Enerji Verimliliği',
        energyEfficiencyDesc: '%30-50 oranında enerji tasarrufu sağlar',
        individualControl: 'Bireysel Kontrol',
        individualControlDesc: 'Her oda için ayrı sıcaklık kontrolü',
        reliability: 'Güvenilirlik',
        reliabilityDesc: 'Uzun ömürlü ve dayanıklı sistem',
        performance: 'Performans',
        performanceDesc: 'Yüksek performans ve sessiz çalışma',
        officeBuildings: 'Ofis Binaları',
        officeBuildingsDesc: 'Büyük ofis kompleksleri ve iş merkezleri için ideal çözüm',
        hotelsRestaurants: 'Otel ve Restoranlar',
        hotelsRestaurantsDesc: 'Konaklama ve yiyecek sektörü için konforlu ortam',
        shoppingCenters: 'Alışveriş Merkezleri',
        shoppingCentersDesc: 'Geniş alanlı ticari mekanlar için verimli çözüm',
        hospitals: 'Hastaneler',
        hospitalsDesc: 'Sağlık sektörü için güvenilir iklimlendirme',
        ctaTitle: 'VRF Sistemi',
        ctaDesc: 'Projeniz için en uygun VRF çözümünü belirlemek üzere uzman ekibimizle hemen iletişime geçebilirsiniz.',
        ctaButton: 'Hemen İletişime Geçin',
        advantages: {
          title: 'Avantajları',
          subtitle: 'Modern teknolojinin sunduğu üstün özellikler',
          advantage1: 'Tek dış ünite ile çoklu iç ünite kontrolü',
          advantage2: 'Değişken soğutucu akışkan teknolojisi',
          advantage3: 'Düşük işletme maliyeti',
          advantage4: 'Kolay kurulum ve bakım',
          advantage5: 'Çevre dostu R32 soğutucu gaz',
          advantage6: 'Akıllı kontrol sistemleri',
          advantage7: 'Sessiz çalışma özelliği',
          advantage8: 'Uzaktan kontrol imkanı'
        },
        applicationsTitle: 'Uygulama Alanları',
        applicationsSubtitle: 'sistemlerinin kullanıldığı alanlar'
      },
      climate: {
        title: 'Klimalar',
        subtitle: 'Toshiba ve Alarko markaları ile enerji verimli, teknolojik klima çözümleri. Split ve multi sistemler ile her ihtiyaca uygun seçenekler.',
        toshibaSplit: 'Toshiba Split Klimalar',
        toshibaSplitDesc: 'Japon teknolojisi ile üstün performans ve enerji verimliliği sunan split klima sistemleri.',
        toshibaMulti: 'Toshiba Multi Klimalar',
        toshibaMultiDesc: 'Tek dış ünite ile çoklu iç ünite kontrolü sağlayan, enerji verimli multi split sistemler.',
        energySaving: 'Enerji Tasarrufu',
        energySavingDesc: 'İnverter teknolojisi ile %60\'a varan enerji tasarrufu',
        fastCooling: 'Hızlı Soğutma',
        fastCoolingDesc: 'Turbo mod ile 30 saniyede hızlı soğutma',
        trustedBrand: 'Güvenilir Marka',
        trustedBrandDesc: 'Toshiba ve Alarko güvencesi ile kaliteli hizmet',
        smartControl: 'Akıllı Kontrol',
        smartControlDesc: 'WiFi ile uzaktan kontrol ve programlama',
        ctaTitle: 'Size Uygun Klima Çözümünü Bulalım',
        ctaDesc: 'Uzman ekibimiz en uygun klimayı seçin.',
        ctaButton: 'Hemen İletişime Geçin'
      },
      heatPump: {
        title: 'Isı Pompası Sistemleri',
        subtitle: 'Çevre dostu ve enerji verimli ısı pompası teknolojisi ile hem ısıtma hem de soğutma ihtiyaçlarınızı karşılayın.',
        techTitle: 'Isı Pompası Nasıl Çalışır?',
        techDesc1: 'Isı pompası, doğadaki mevcut ısıyı (hava, su, toprak) alarak binaya transfer eden çevre dostu bir sistemdir.',
        techDesc2: 'Elektrik enerjisinin sadece %25\'ini kullanarak, %75\'ini doğadan ücretsiz olarak elde eder. Bu sayede yüksek verimlilik sağlar.',
        efficientHeating: 'Verimli Isıtma',
        efficientHeatingDesc: 'Düşük sıcaklıklarda bile yüksek performans',
        ecoFriendly: 'Çevre Dostu',
        ecoFriendlyDesc: 'Düşük karbon emisyonu ile çevre koruma',
        energySaving: 'Enerji Tasarrufu',
        energySavingDesc: '%75\'e varan enerji tasarrufu',
        reliable: 'Güvenilir',
        reliableDesc: 'Uzun ömürlü ve dayanıklı sistem',
        airSource: 'Hava Kaynaklı Isı Pompası',
        airSourceDesc: 'Dış havadan enerji çekerek ısıtma ve soğutma sağlar',
        waterSource: 'Su Kaynaklı Isı Pompası',
        waterSourceDesc: 'Yeraltı suyu veya yüzey suyundan enerji çeker',
        groundSource: 'Toprak Kaynaklı Isı Pompası',
        groundSourceDesc: 'Toprağın sabit sıcaklığından yararlanır',
        residences: 'Konutlar',
        residencesDesc: 'Villa ve apartman daireleri',
        offices: 'Ofisler',
        officesDesc: 'İş yerleri ve büro binaları',
        hotels: 'Oteller',
        hotelsDesc: 'Konaklama tesisleri',
        industry: 'Endüstri',
        industryDesc: 'Fabrika ve üretim tesisleri',
        ctaTitle: 'Isı Pompası ile Tasarruf Edin',
        ctaDesc: 'Çevre dostu ısı pompası sistemleri ile hem doğayı koruyun hem de enerji faturalarınızı düşürün.',
        ctaButton: 'Ücretsiz Analiz Talep Et'
      },
      mechanical: {
        title: 'Mekanik Tesisat',
        subtitle: 'Profesyonel mekanik tesisat hizmetleri ile binaların ısıtma, soğutma ve havalandırma ihtiyaçlarını eksiksiz karşılıyoruz.',
        techTitle: 'Mekanik Tesisat Nedir?',
        techDesc1: 'Mekanik tesisat, binaların ısıtma, soğutma, havalandırma ve sıhhi tesisat sistemlerinin tasarımı, kurulumu ve bakımını kapsayan mühendislik dalıdır.',
        techDesc2: 'Modern binalar için vazgeçilmez olan bu sistemler, yaşam konforunu artırır ve enerji verimliliği sağlar.',
        projectDesign: 'Proje Tasarımı',
        projectDesignDesc: 'Binanızın ihtiyaçlarına özel mekanik tesisat projeleri hazırlıyoruz',
        systemInstallation: 'Sistem Kurulumu',
        systemInstallationDesc: 'Profesyonel ekibimizle kaliteli kurulum hizmeti sunuyoruz',
        maintenance: 'Bakım ve Onarım',
        maintenanceDesc: 'Düzenli bakım ve acil onarım hizmetleri ile sistem sürekliliği',
        qualityAssurance: 'Kalite Güvencesi',
        qualityAssuranceDesc: 'Tüm işlerimizde kalite standartları ve garanti güvencesi',
        ctaTitle: 'Mekanik Tesisat Projeniz İçin',
        ctaDesc: '15 yıllık deneyimimiz ile projenizi baştan sona profesyonelce yönetiyoruz.',
        ctaButton: 'Proje Danışmanlığı Al'
      },
      pool: {
        title: 'Havuz Sistemleri',
        subtitle: 'Özel ve ticari havuzlar için hijyenik, enerji verimli ve güvenli sistem çözümleri sunuyoruz.',
        techTitle: 'Havuz Sistemleri Nasıl Çalışır?',
        techDesc1: 'Modern havuz sistemleri, su sirkülasyonu, filtrasyon, kimyasal dengeleme ve dezenfeksiyon süreçlerini otomatik olarak yönetir.',
        techDesc2: 'Akıllı kontrol sistemleri ile su kalitesi sürekli izlenir ve optimal seviyede tutulur.',
        cleanWater: 'Temiz Su Sirkülasyonu',
        cleanWaterDesc: 'Sürekli döngüyle hijyenik havuz deneyimi.',
        safeSystems: 'Güvenli Sistemler',
        safeSystemsDesc: 'Otomatik kontrol ve su kalitesi izleme çözümleri.',
        energyEfficiency: 'Enerji Verimliliği',
        energyEfficiencyDesc: 'Verimli motor ve filtre sistemleri ile düşük enerji tüketimi.',
        easyMaintenance: 'Kolay Bakım',
        easyMaintenanceDesc: 'Basit erişim ve bakım dostu ekipman yerleşimi.',
        ctaTitle: 'Hayalinizdeki Havuzu Kurmamıza İzin Verin',
        ctaDesc: 'İster özel villa, ister büyük ölçekli tesis... Size özel havuz çözümü için bizimle iletişime geçin.',
        ctaButton: 'Ücretsiz Keşif Talep Et'
      },
      waterPressure: {
        title: 'Su Basınçlandırma',
        subtitle: 'Modern su basınçlandırma sistemleri ile tüm katlarda eşit ve yeterli su basıncı sağlıyoruz.',
        techTitle: 'Su Basınçlandırma Nasıl Çalışır?',
        techDesc1: 'Su basınçlandırma sistemleri, şehir şebekesinden gelen düşük basınçlı suyu pompalar yardımıyla yüksek basınca çıkararak binanın tüm katlarına eşit basınçta su ulaştırır.',
        techDesc2: 'Modern inverter teknolojisi ile sistem, ihtiyaca göre otomatik olarak pompa hızını ayarlayarak enerji tasarrufu sağlar.',
        constantPressure: 'Sabit Basınç',
        constantPressureDesc: 'Tüm katlarda eşit su basıncı garantisi',
        energySaving: 'Enerji Tasarrufu',
        energySavingDesc: 'İnverter teknolojisi ile %40 enerji tasarrufu',
        reliableSystem: 'Güvenilir Sistem',
        reliableSystemDesc: 'Otomatik kontrol ve koruma sistemleri',
        easyMaintenance: 'Kolay Bakım',
        easyMaintenanceDesc: 'Minimal bakım gereksinimleri',
        ctaTitle: 'Su Basınç Probleminizi Çözelim',
        ctaDesc: 'Binanızın ihtiyacına uygun su basınçlandırma sistemi için ücretsiz keşif hizmeti.',
        ctaButton: 'Ücretsiz Keşif Talep Et'
      },
      ventilation: {
        title: 'Havalandırma Sistemleri',
        subtitle: 'Profesyonel havalandırma sistemleri ile temiz hava sirkülasyonu ve sağlıklı iç mekan ortamları yaratıyoruz.',
        techTitle: 'Havalandırma Sistemleri Nedir?',
        techDesc1: 'Havalandırma sistemleri, kapalı mekanlarda temiz hava sirkülasyonu sağlayarak iç hava kalitesini artıran sistemlerdir.',
        techDesc2: 'Modern havalandırma sistemleri, enerji verimli EC motorlar, gelişmiş filtre teknolojileri ve akıllı kontrol sistemleri ile donatılmıştır.',
        cleanAir: 'Temiz Hava',
        cleanAirDesc: 'Sürekli temiz hava sirkülasyonu sağlar',
        airFiltering: 'Hava Filtreleme',
        airFilteringDesc: 'Gelişmiş filtre sistemleri ile hava kalitesi',
        energyEfficient: 'Enerji Verimli',
        energyEfficientDesc: 'EC motorlar ile düşük enerji tüketimi',
        healthyEnvironment: 'Sağlıklı Ortam',
        healthyEnvironmentDesc: 'Nem ve CO2 kontrolü ile konforlu yaşam',
        ctaTitle: 'Temiz Hava İçin Hemen Başlayın',
        ctaDesc: 'Sağlıklı yaşam alanları için profesyonel havalandırma sistemi kurulumu.',
        ctaButton: 'Hava Kalitesi Analizi Al'
      },
      waterTreatment: {
        title: 'Su Arıtma Sistemleri',
        subtitle: 'Gelişmiş su arıtma teknolojileri ile temiz, sağlıklı ve güvenli içme suyu elde edin.',
        techTitle: 'Su Arıtma Nasıl Çalışır?',
        techDesc1: 'Su arıtma sistemleri, çok aşamalı filtreleme teknolojisi ile suda bulunan zararlı maddeleri, bakterileri ve virüsleri giderir.',
        techDesc2: 'Modern RO teknolojisi ile moleküler seviyede arıtma yapılarak, sağlıklı ve temiz içme suyu elde edilir.',
        multiFiltering: 'Çoklu Filtreleme',
        multiFilteringDesc: 'Sediment, karbon ve RO filtre sistemleri',
        bacterialProtection: 'Bakteriyel Koruma',
        bacterialProtectionDesc: 'UV sterilizasyon ile %99.9 bakteri eliminasyonu',
        autoSystem: 'Otomatik Sistem',
        autoSystemDesc: 'Akıllı kontrol ve otomatik yıkama',
        healthyWater: 'Sağlıklı Su',
        healthyWaterDesc: 'İçme suyu standartlarında temiz su',
        ctaTitle: 'Temiz Su İçin Hemen Başlayın',
        ctaDesc: 'Su kalitesi analizi ile size en uygun arıtma sistemini belirleyelim.',
        ctaButton: 'Ücretsiz Su Analizi'
      },
      solar: {
        title: 'Güneş Enerji Sistemleri (GES)',
        subtitle: 'Güneş enerjisi ile elektrik faturalarınızı sıfırlayın, çevreyi koruyun ve enerji bağımsızlığınızı kazanın.',
        techTitle: 'Güneş Enerji Sistemleri Nasıl Çalışır?',
        techDesc1: 'Güneş enerji sistemleri, güneş panelleri aracılığıyla güneş ışığını elektrik enerjisine dönüştürür.',
        techDesc2: 'Üretilen elektrik doğrudan kullanılabilir veya şebekeye satılabilir. Fazla enerji depolanarak gece kullanımı sağlanabilir.',
        solarEnergy: 'Güneş Enerjisi',
        solarEnergyDesc: 'Sınırsız ve ücretsiz güneş enerjisinden yararlanın',
        electricityProduction: 'Elektrik Üretimi',
        electricityProductionDesc: 'Kendi elektriğinizi üretin, faturalarınızı sıfırlayın',
        ecoFriendly: 'Çevre Dostu',
        ecoFriendlyDesc: 'Karbon ayak izinizi azaltın, doğayı koruyun',
        costSaving: 'Maliyet Tasarrufu',
        costSavingDesc: '%90\'a varan elektrik faturası tasarrufu',
        ctaTitle: 'Güneş Enerjisi ile Geleceğe Yatırım Yapın',
        ctaDesc: 'Ücretsiz keşif ve fizibilite analizi ile size en uygun GES çözümünü belirleyelim.',
        ctaButton: 'Ücretsiz GES Analizi'
      },
      climateSystems: {
        title: 'Klima Teknolojileri',
        subtitle: 'Gelişmiş klima teknolojileri ile enerji verimli, konforlu ve güvenilir iklimlendirme çözümleri sunuyoruz.',
        techTitle: 'Klima Teknolojileri Nedir?',
        techDesc1: 'Modern klima teknolojileri, ortam sıcaklığını kontrol etmek ve enerji tasarrufu sağlamak amacıyla tasarlanmış sistemlerdir.',
        techDesc2: 'Split, multi-split ve VRF sistemler gibi farklı teknolojilerle her alan için optimum konfor sağlanabilir.'
      },
      heatPumpProducts: {
        title: 'Isı Pompaları',
        subtitle: 'Toshiba Estia ve Alarko Flair serisi ile çevre dostu, enerji verimli ısı pompası sistemleri. Hem ısıtma hem soğutma için ideal çözümler.',
        toshibaEstia: 'Toshiba Estia Split Isı Pompası',
        toshibaEstiaDesc: 'Japon teknolojisi ile üstün performans sunan, çevre dostu R32 gazlı split tip ısı pompası sistemleri.',
        ctaTitle: 'Çevre Dostu Isı Pompası ile Tasarruf Edin',
        ctaDesc: 'Uzman ekibimiz ile ücretsiz keşif hizmeti alın ve size en uygun ısı pompasını seçin.',
        ctaButton: 'Ücretsiz Keşif Talep Et'
      }
    }
  },
  en: {
    nav: {
      services: 'Services',
      products: 'Products',
      references: 'References',
      gallery: 'Gallery',
      about: 'About Us',
      contact: 'Contact',
      climates: 'Air Conditioners',
      heatPumps: 'Heat Pumps'
    },
    services: {
      title: 'Our Services',
      description: 'We provide solutions for all your technical needs with our wide range of services.',
      vrf: 'VRF Systems',
      vrfDesc: 'Advanced HVAC systems offering energy efficiency and multi-unit control.',
      climate: 'Climate Technologies',
      climateDesc: 'High-efficiency, modern and eco-friendly air conditioning solutions.',
      heatPump: 'Heat Pump',
      heatPumpDesc: 'Energy-efficient systems providing both heating and cooling.',
      mechanical: 'Mechanical Installation',
      mechanicalDesc: 'Complete mechanical installation solutions, design and implementation.',
      pool: 'Pool',
      poolDesc: 'Planning, installation and maintenance of private and commercial pool systems.',
      waterPressure: 'Water Pressurization',
      waterPressureDesc: 'Water pressure regulation systems for high-rise buildings.',
      ventilation: 'Ventilation',
      ventilationDesc: 'Ventilation systems providing clean air circulation.',
      waterTreatment: 'Water Treatment',
      waterTreatmentDesc: 'Advanced water treatment systems to improve drinking water quality.',
      solar: 'Solar Energy',
      solarDesc: 'Sustainable and renewable energy solutions with solar energy systems.'
    },
    hero: {
      title: 'Bodrum Solution Engineering',
      subtitle1: 'Heating, Cooling, Ventilation',
      subtitle2: 'and Reliable Solutions in Mechanical Installation',
      authorized: 'Toshiba Authorized Dealer | Alarko & Carrier Systems',
      discoverServices: 'Discover Our Services',
      aboutUs: 'About Us'
    },
    about: {
      title: 'About Us',
      subtitle: 'Since 2008, we have been a reliable company operating in the air conditioning and mechanical installation sector, prioritizing customer satisfaction.',
      description1: 'Our company was established in Bodrum and works on contracted sales and service in mechanical installation.',
      description2: 'We are the BODRUM regional dealer of ALARKO CARRIER TOSHIBA, and also the Bodrum dealer of SERKON, BOGENN, ATLAS and CARISA companies. We have many contract references in the region on heating, cooling, ventilation, swimming pool, plumbing and infrastructure. Our company has an expert team in complete hotel mechanical installation in Bodrum and its surroundings.',
      happyCustomers: 'Happy Customers',
      yearsExperience: 'Years of Experience',
      completedProjects: 'Completed Projects',
      expertTeam: 'Expert Team',
      vision: 'Our Vision',
      visionText: 'To be a leader in the air conditioning and mechanical installation sector in Turkey, increasing the quality of life of our customers with sustainable and environmentally friendly solutions.',
      mission: 'Our Mission',
      missionText: 'To exceed customer expectations with quality products and services, add value to the sector by following technological innovations and ensure sustainable growth.',
      story: 'Our Story',
      values: 'Our Values',
      valuesSubtitle: 'Core values that make up our working principles',
      customerSatisfaction: 'Customer Satisfaction',
      customerSatisfactionDesc: 'Customer satisfaction is our top priority. We aim for excellence in every project.',
      reliability: 'Reliability',
      reliabilityDesc: 'We have been serving as a reliable partner for 15 years in keeping our word and providing quality service.',
      innovation: 'Innovation',
      innovationDesc: 'We offer the most innovative solutions to our customers by following the latest technologies in the sector.',
      quality: 'Quality',
      qualityDesc: 'We achieve excellent results by applying international quality standards in all our projects.'
    },
    products: {
      title: 'Our Products',
      description: 'Discover maximum comfort with flexible and efficient solutions for your living spaces.',
      climates: 'Air Conditioners',
      climatesDesc: 'Split and multi air conditioning solutions with Toshiba and Alarko brands. Energy efficient and quiet operation.',
      heatPumps: 'Heat Pumps',
      heatPumpsDesc: 'Eco-friendly heat pump systems with Toshiba Estia and Alarko Flair series. Both heating and cooling.',
      viewDetails: 'View Details'
    },
    references: {
      title: 'Our References',
      subtitle: 'The projects we have completed and customer satisfaction are our greatest success.',
      brands: 'Our Reference Brands',
      featuredProjects: 'Our Featured Projects',
      featuredProjectsDesc: 'Large-scale projects we have completed',
      joinReferences: 'Join Our References',
      joinReferencesDesc: 'We are ready to offer professional solutions for your project. Contact us now.',
      getQuote: 'Get Project Quote'
    },
    contact: {
      title: 'Contact',
      description: 'Get in touch with us to discuss your projects. Our expert team is ready to offer you the most suitable solution.',
      info: 'Contact Information',
      phone: 'Phone',
      email: 'Email',
      address: 'Address',
      workingHours: 'Working Hours',
      workingHoursText: 'Monday - Saturday: 09:00 - 18:00',
      writeUs: 'Write to Us',
      nameSurname: 'Name Surname',
      phoneNumber: 'Phone',
      subject: 'Subject',
      serviceType: 'Service Type',
      selectService: 'Select service',
      message: 'Message',
      sendMessage: 'Send Message',
      addressLine1: 'Podium Business Center, Konacık',
      addressLine2: 'Atatürk Blv. No:178,',
      addressLine3: '48100 Bodrum/Muğla',
      namePlaceholder: 'Enter your name and surname',
      emailPlaceholder: 'Enter your email address',
      phonePlaceholder: 'Enter your phone number',
      subjectPlaceholder: 'Enter the subject of your message',
      messagePlaceholder: 'Write your message in detail...',
      captcha: 'Security Verification',
      captchaPlaceholder: 'Write the result',
      successMessage: 'Your message has been sent successfully! We will get back to you as soon as possible.',
      captchaError: 'Security verification is wrong! 5 + 3 = 8',
      services: {
        vrf: 'VRF Systems',
        climate: 'Climate Technologies',
        mechanical: 'Mechanical Installation',
        maintenance: 'Maintenance and Repair',
        consulting: 'Project Consulting',
        other: 'Other'
      }
    },
    footer: {
      description: 'We offer engineering solutions for your projects and build the future with our quality service approach.',
      quickLinks: 'Quick Links',
      contact: 'Contact',
      rights: 'All rights reserved.',
      privacy: 'Privacy Policy',
      terms: 'Terms of Use',
      cookies: 'Cookie Policy'
    },
    common: {
      readMore: 'Read More',
      learnMore: 'Learn More',
      contactUs: 'Contact Us',
      getQuote: 'Get Quote'
    },
    gallery: {
      title: 'Gallery',
      description: 'Snapshots from our workspaces, team and projects.',
      filterAll: 'All',
      filterOffice: 'Office',
      filterTeam: 'Team',
      filterProject: 'Project',
      filterTech: 'Technology'
    },
    pages: {
      vrf: {
        title: 'VRF Systems',
        subtitle: 'Energy efficient, flexible and comfortable air conditioning solutions with Variable Refrigerant Flow (VRF) technology.',
        techTitle: 'What is VRF Technology?',
        techDesc1: 'VRF (Variable Refrigerant Flow) systems are intelligent air conditioning systems that send the required amount of refrigerant to each indoor unit using variable refrigerant flow technology.',
        techDesc2: 'Thanks to this technology, energy consumption is optimized and individual comfort is provided for each area.',
        energyEfficiency: 'Energy Efficiency',
        energyEfficiencyDesc: 'Provides 30-50% energy savings',
        individualControl: 'Individual Control',
        individualControlDesc: 'Separate temperature control for each room',
        reliability: 'Reliability',
        reliabilityDesc: 'Long-lasting and durable system',
        performance: 'Performance',
        performanceDesc: 'High performance and quiet operation',
        officeBuildings: 'Office Buildings',
        officeBuildingsDesc: 'Ideal solution for large office complexes and business centers',
        hotelsRestaurants: 'Hotels and Restaurants',
        hotelsRestaurantsDesc: 'Comfortable environment for hospitality and food sector',
        shoppingCenters: 'Shopping Centers',
        shoppingCentersDesc: 'Efficient solution for large commercial spaces',
        hospitals: 'Hospitals',
        hospitalsDesc: 'Reliable air conditioning for healthcare sector',
        ctaTitle: 'VRF System',
        ctaDesc: 'Contact our expert team to determine the most suitable VRF solution for your project.',
        ctaButton: 'Contact Now',
        advantages: {
          title: 'Advantages',
          subtitle: 'Superior features offered by modern technology',
          advantage1: 'Multiple indoor unit control with single outdoor unit',
          advantage2: 'Variable refrigerant flow technology',
          advantage3: 'Low operating cost',
          advantage4: 'Easy installation and maintenance',
          advantage5: 'Eco-friendly R32 refrigerant',
          advantage6: 'Smart control systems',
          advantage7: 'Quiet operation feature',
          advantage8: 'Remote control capability'
        },
        applicationsTitle: 'Application Areas',
        applicationsSubtitle: 'areas where systems are used'
      },
      climate: {
        title: 'Air Conditioners',
        subtitle: 'Energy efficient, technological air conditioning solutions with Toshiba and Alarko brands. Suitable options for every need with split and multi systems.',
        toshibaSplit: 'Toshiba Split Air Conditioners',
        toshibaSplitDesc: 'Split air conditioning systems offering superior performance and energy efficiency with Japanese technology.',
        toshibaMulti: 'Toshiba Multi Air Conditioners',
        toshibaMultiDesc: 'Energy efficient multi split systems providing multiple indoor unit control with single outdoor unit.',
        energySaving: 'Energy Saving',
        energySavingDesc: 'Up to 60% energy savings with inverter technology',
        fastCooling: 'Fast Cooling',
        fastCoolingDesc: 'Fast cooling in 30 seconds with turbo mode',
        trustedBrand: 'Trusted Brand',
        trustedBrandDesc: 'Quality service with Toshiba and Alarko assurance',
        smartControl: 'Smart Control',
        smartControlDesc: 'Remote control and programming via WiFi',
        ctaTitle: 'Let\'s Find the Right Air Conditioning Solution for You',
        ctaDesc: 'Our expert team will help you choose the most suitable air conditioner.',
        ctaButton: 'Contact Now'
      },
      heatPump: {
        title: 'Heat Pump Systems',
        subtitle: 'Meet both your heating and cooling needs with eco-friendly and energy efficient heat pump technology.',
        techTitle: 'How Does Heat Pump Work?',
        techDesc1: 'Heat pump is an eco-friendly system that takes existing heat from nature (air, water, ground) and transfers it to the building.',
        techDesc2: 'It uses only 25% of electrical energy and obtains 75% from nature for free. Thus, it provides high efficiency.',
        efficientHeating: 'Efficient Heating',
        efficientHeatingDesc: 'High performance even at low temperatures',
        ecoFriendly: 'Eco-Friendly',
        ecoFriendlyDesc: 'Environmental protection with low carbon emission',
        energySaving: 'Energy Saving',
        energySavingDesc: 'Up to 75% energy savings',
        reliable: 'Reliable',
        reliableDesc: 'Long-lasting and durable system',
        airSource: 'Air Source Heat Pump',
        airSourceDesc: 'Provides heating and cooling by drawing energy from outdoor air',
        waterSource: 'Water Source Heat Pump',
        waterSourceDesc: 'Draws energy from groundwater or surface water',
        groundSource: 'Ground Source Heat Pump',
        groundSourceDesc: 'Benefits from constant ground temperature',
        residences: 'Residences',
        residencesDesc: 'Villas and apartments',
        offices: 'Offices',
        officesDesc: 'Workplaces and office buildings',
        hotels: 'Hotels',
        hotelsDesc: 'Accommodation facilities',
        industry: 'Industry',
        industryDesc: 'Factory and production facilities',
        ctaTitle: 'Save with Heat Pump',
        ctaDesc: 'Protect nature and reduce your energy bills with eco-friendly heat pump systems.',
        ctaButton: 'Request Free Analysis'
      },
      mechanical: {
        title: 'Mechanical Installation',
        subtitle: 'We fully meet the heating, cooling and ventilation needs of buildings with professional mechanical installation services.',
        techTitle: 'What is Mechanical Installation?',
        techDesc1: 'Mechanical installation is an engineering branch that includes the design, installation and maintenance of building heating, cooling, ventilation and plumbing systems.',
        techDesc2: 'These systems, which are indispensable for modern buildings, increase living comfort and provide energy efficiency.',
        projectDesign: 'Project Design',
        projectDesignDesc: 'We prepare mechanical installation projects specific to your building needs',
        systemInstallation: 'System Installation',
        systemInstallationDesc: 'We provide quality installation service with our professional team',
        maintenance: 'Maintenance and Repair',
        maintenanceDesc: 'System continuity with regular maintenance and emergency repair services',
        qualityAssurance: 'Quality Assurance',
        qualityAssuranceDesc: 'Quality standards and warranty assurance in all our works',
        ctaTitle: 'For Your Mechanical Installation Project',
        ctaDesc: 'We professionally manage your project from start to finish with 15 years of experience.',
        ctaButton: 'Get Project Consultancy'
      },
      pool: {
        title: 'Pool Systems',
        subtitle: 'We offer hygienic, energy efficient and safe system solutions for private and commercial pools.',
        techTitle: 'How Do Pool Systems Work?',
        techDesc1: 'Modern pool systems automatically manage water circulation, filtration, chemical balancing and disinfection processes.',
        techDesc2: 'Water quality is continuously monitored and maintained at optimal levels with smart control systems.',
        cleanWater: 'Clean Water Circulation',
        cleanWaterDesc: 'Hygienic pool experience with continuous circulation.',
        safeSystems: 'Safe Systems',
        safeSystemsDesc: 'Automatic control and water quality monitoring solutions.',
        energyEfficiency: 'Energy Efficiency',
        energyEfficiencyDesc: 'Low energy consumption with efficient motor and filter systems.',
        easyMaintenance: 'Easy Maintenance',
        easyMaintenanceDesc: 'Easy access and maintenance-friendly equipment placement.',
        ctaTitle: 'Let Us Build Your Dream Pool',
        ctaDesc: 'Whether private villa or large-scale facility... Contact us for your custom pool solution.',
        ctaButton: 'Request Free Site Survey'
      },
      waterPressure: {
        title: 'Water Pressurization',
        subtitle: 'We provide equal and sufficient water pressure on all floors with modern water pressurization systems.',
        techTitle: 'How Does Water Pressurization Work?',
        techDesc1: 'Water pressurization systems deliver equal pressure water to all floors of the building by pumping low pressure water from the city network to high pressure.',
        techDesc2: 'With modern inverter technology, the system automatically adjusts pump speed according to need, providing energy savings.',
        constantPressure: 'Constant Pressure',
        constantPressureDesc: 'Equal water pressure guarantee on all floors',
        energySaving: 'Energy Saving',
        energySavingDesc: '40% energy savings with inverter technology',
        reliableSystem: 'Reliable System',
        reliableSystemDesc: 'Automatic control and protection systems',
        easyMaintenance: 'Easy Maintenance',
        easyMaintenanceDesc: 'Minimal maintenance requirements',
        ctaTitle: 'Let\'s Solve Your Water Pressure Problem',
        ctaDesc: 'Free site survey service for water pressurization system suitable for your building needs.',
        ctaButton: 'Request Free Site Survey'
      },
      ventilation: {
        title: 'Ventilation Systems',
        subtitle: 'We create clean air circulation and healthy indoor environments with professional ventilation systems.',
        techTitle: 'What Are Ventilation Systems?',
        techDesc1: 'Ventilation systems are systems that increase indoor air quality by providing clean air circulation in enclosed spaces.',
        techDesc2: 'Modern ventilation systems are equipped with energy efficient EC motors, advanced filter technologies and smart control systems.',
        cleanAir: 'Clean Air',
        cleanAirDesc: 'Provides continuous clean air circulation',
        airFiltering: 'Air Filtering',
        airFilteringDesc: 'Air quality with advanced filter systems',
        energyEfficient: 'Energy Efficient',
        energyEfficientDesc: 'Low energy consumption with EC motors',
        healthyEnvironment: 'Healthy Environment',
        healthyEnvironmentDesc: 'Comfortable living with humidity and CO2 control',
        ctaTitle: 'Start Now for Clean Air',
        ctaDesc: 'Professional ventilation system installation for healthy living spaces.',
        ctaButton: 'Get Air Quality Analysis'
      },
      waterTreatment: {
        title: 'Water Treatment Systems',
        subtitle: 'Obtain clean, healthy and safe drinking water with advanced water treatment technologies.',
        techTitle: 'How Does Water Treatment Work?',
        techDesc1: 'Water treatment systems remove harmful substances, bacteria and viruses in water with multi-stage filtration technology.',
        techDesc2: 'Healthy and clean drinking water is obtained by treating at molecular level with modern RO technology.',
        multiFiltering: 'Multi Filtering',
        multiFilteringDesc: 'Sediment, carbon and RO filter systems',
        bacterialProtection: 'Bacterial Protection',
        bacterialProtectionDesc: '99.9% bacteria elimination with UV sterilization',
        autoSystem: 'Automatic System',
        autoSystemDesc: 'Smart control and automatic washing',
        healthyWater: 'Healthy Water',
        healthyWaterDesc: 'Clean water at drinking water standards',
        ctaTitle: 'Start Now for Clean Water',
        ctaDesc: 'Let\'s determine the most suitable treatment system for you with water quality analysis.',
        ctaButton: 'Free Water Analysis'
      },
      solar: {
        title: 'Solar Energy Systems (SES)',
        subtitle: 'Zero your electricity bills with solar energy, protect the environment and gain energy independence.',
        techTitle: 'How Do Solar Energy Systems Work?',
        techDesc1: 'Solar energy systems convert sunlight into electrical energy through solar panels.',
        techDesc2: 'The produced electricity can be used directly or sold to the grid. Excess energy can be stored for night use.',
        solarEnergy: 'Solar Energy',
        solarEnergyDesc: 'Benefit from unlimited and free solar energy',
        electricityProduction: 'Electricity Production',
        electricityProductionDesc: 'Produce your own electricity, zero your bills',
        ecoFriendly: 'Eco-Friendly',
        ecoFriendlyDesc: 'Reduce your carbon footprint, protect nature',
        costSaving: 'Cost Saving',
        costSavingDesc: 'Up to 90% electricity bill savings',
        ctaTitle: 'Invest in the Future with Solar Energy',
        ctaDesc: 'Let\'s determine the most suitable SES solution for you with free survey and feasibility analysis.',
        ctaButton: 'Free SES Analysis'
      },
      climateSystems: {
        title: 'Climate Technologies',
        subtitle: 'We offer energy efficient, comfortable and reliable air conditioning solutions with advanced climate technologies.',
        techTitle: 'What Are Climate Technologies?',
        techDesc1: 'Modern climate technologies are systems designed to control ambient temperature and provide energy savings.',
        techDesc2: 'Optimum comfort can be provided for each area with different technologies such as split, multi-split and VRF systems.'
      },
      heatPumpProducts: {
        title: 'Heat Pumps',
        subtitle: 'Eco-friendly, energy efficient heat pump systems with Toshiba Estia and Alarko Flair series. Ideal solutions for both heating and cooling.',
        toshibaEstia: 'Toshiba Estia Split Heat Pump',
        toshibaEstiaDesc: 'Split type heat pump systems with superior performance and eco-friendly R32 gas with Japanese technology.',
        ctaTitle: 'Save with Eco-Friendly Heat Pump',
        ctaDesc: 'Get free site survey service with our expert team and choose the most suitable heat pump for you.',
        ctaButton: 'Request Free Site Survey'
      }
    }
  }
};
