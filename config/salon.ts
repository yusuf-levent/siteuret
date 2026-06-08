export type SalonConfig = {
  isletmeAdi: string;
  slogan: string;
  sehir: string;
  mahalle: string;
  telefon: string;
  whatsapp: string;
  adres: string;
  instagram: string;
  mapEmbedUrl: string;
  heroGorsel: string;
  hakkimizdaGorsel: string;
  googleYorumLinki: string;
  calismaSaatleri: string[];
  istatistikler: Array<{
    deger: number;
    etiket: string;
    ek?: string;
  }>;
  hizmetler: Array<{
    baslik: string;
    aciklama: string;
    maddeler: string[];
  }>;
  galeri: Array<{
    url: string;
    etiket: string;
    alt: string;
  }>;
  yorumlar: Array<{
    isim: string;
    metin: string;
    zaman: string;
  }>;
  metinler: {
    nav: string[];
    randevu: string;
    hemenAra: string;
    whatsappRandevu: string;
    heroBaslik: string;
    heroAlt: string;
    hizmetlerBaslik: string;
    hizmetlerAlt: string;
    hakkimizdaBaslik: string;
    hakkimizdaAlt: string;
    hakkimizdaMetin: string;
    ozellikler: string[];
    yorumlarBaslik: string;
    yorumlarAlt: string;
    tumYorumlar: string;
    galeriBaslik: string;
    galeriAlt: string;
    galeriFiltreleri: string[];
    sssBaslik: string;
    ctaBaslik: string;
    ctaAlt: string;
    iletisimBaslik: string;
    footerAciklama: string;
  };
  sss: Array<{
    soru: string;
    cevap: string;
  }>;
};

export const salonConfig = {
  isletmeAdi: "SüSü Saç & Güzellik",
  slogan: "Kişisel bakımda zarif, hijyenik ve konforlu deneyim.",
  sehir: "İstanbul",
  mahalle: "Nişantaşı",
  telefon: "+90 212 000 00 00",
  whatsapp: "https://wa.me/90XXXXXXXXXX",
  adres: "Teşvikiye Mah. Vali Konağı Cad. No: 24, Şişli / İstanbul",
  instagram: "https://instagram.com/susu.guzellik",
  mapEmbedUrl:
    "https://maps.google.com/maps?q=Nisantasi%20Istanbul&t=&z=14&ie=UTF8&iwloc=&output=embed",
  heroGorsel:
    "https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=1800&q=85",
  hakkimizdaGorsel:
    "https://images.unsplash.com/photo-1522337660859-02fbefca4702?auto=format&fit=crop&w=1200&q=85",
  googleYorumLinki: "https://maps.google.com/?q=Nisantasi%20Istanbul",
  calismaSaatleri: [
    "Pazartesi - Cuma: 10.00 - 20.00",
    "Cumartesi: 10.00 - 19.00",
    "Pazar: Randevu ile",
  ],
  istatistikler: [
    { deger: 1000, ek: "+", etiket: "Mutlu Müşteri" },
    { deger: 12, ek: "+", etiket: "Uzman Kadro" },
    { deger: 5, ek: ".0", etiket: "Google Puanı" },
  ],
  hizmetler: [
    {
      baslik: "Saç Tasarımı",
      aciklama:
        "Kesimden renklendirmeye kadar saçınızın doğal yapısını öne çıkaran profesyonel uygulamalar.",
      maddeler: [
        "Kişiye özel saç kesimi",
        "Fön ve şekillendirme",
        "Balyaj ve ombre",
        "Keratin bakımı",
        "Renk koruyucu bakım",
      ],
    },
    {
      baslik: "Profesyonel Makyaj",
      aciklama:
        "Günlük, gece ve özel gün makyajlarında cilt tonunuza uygun kalıcı uygulamalar.",
      maddeler: [
        "Gelin makyajı",
        "Nişan ve davet makyajı",
        "Doğal günlük makyaj",
        "Kirpik uygulamaları",
        "Cilt hazırlık bakımı",
      ],
    },
    {
      baslik: "Manikür & Pedikür",
      aciklama:
        "Hijyenik ekipmanlarla el ve ayak bakımında pürüzsüz, bakımlı ve zarif sonuçlar.",
      maddeler: [
        "Klasik manikür",
        "Kalıcı oje",
        "Spa pedikür",
        "Tırnak güçlendirme",
        "El ve ayak masajı",
      ],
    },
  ],
  galeri: [
    {
      url: "https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&w=900&q=80",
      etiket: "Mekân",
      alt: "Sıcak ışıklı modern salon iç mekanı",
    },
    {
      url: "https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?auto=format&fit=crop&w=900&q=80",
      etiket: "Mekân",
      alt: "Kuaför koltukları ve bakım alanı",
    },
    {
      url: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=900&q=80",
      etiket: "Makyaj",
      alt: "Profesyonel makyaj ürünleri",
    },
    {
      url: "https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?auto=format&fit=crop&w=900&q=80",
      etiket: "Makyaj",
      alt: "Makyaj uygulaması hazırlığı",
    },
    {
      url: "https://images.unsplash.com/photo-1519699047748-de8e457a634e?auto=format&fit=crop&w=900&q=80",
      etiket: "Saç",
      alt: "Parlak ve bakımlı saç detayı",
    },
    {
      url: "https://images.unsplash.com/photo-1600948836101-f9ffda59d250?auto=format&fit=crop&w=900&q=80",
      etiket: "Saç",
      alt: "Salon içinde saç tasarımı uygulaması",
    },
  ],
  yorumlar: [
    {
      isim: "Ece Y.",
      metin:
        "Saç rengimi ilk defa bu kadar doğal ve parlak gördüm. Ekip çok ilgili, ortam da tertemiz.",
      zaman: "2 hafta önce",
    },
    {
      isim: "Melis K.",
      metin:
        "Gelin makyajım tüm gün bozulmadı. Randevu saatine sadık kalmaları ayrıca çok iyi.",
      zaman: "1 ay önce",
    },
    {
      isim: "Derya A.",
      metin:
        "Kalıcı oje ve bakım için düzenli gidiyorum. Her seferinde özenli ve sakin bir deneyim.",
      zaman: "3 ay önce",
    },
  ],
  metinler: {
    nav: ["Ana Sayfa", "Hizmetler", "Hakkımızda", "Galeri", "İletişim"],
    randevu: "Randevu Al",
    hemenAra: "Hemen Ara",
    whatsappRandevu: "WhatsApp Randevu",
    heroBaslik: "Güzelliğine yeni bir dokunuş",
    heroAlt:
      "Saç, makyaj ve bakım hizmetlerinde uzman ekiple şehir merkezinde sakin ve hijyenik bir salon deneyimi.",
    hizmetlerBaslik: "Hizmetler",
    hizmetlerAlt:
      "Her hizmet, danışmanlıkla başlar; ihtiyacınıza ve tarzınıza uygun uygulamayla tamamlanır.",
    hakkimizdaBaslik: "Hikayemiz",
    hakkimizdaAlt:
      "Güzellik bakımını aceleye getirmeyen, sıcak ve özenli bir salon.",
    hakkimizdaMetin:
      "SüSü Saç & Güzellik, Nişantaşı'nda modern teknikleri kişisel ilgiyle birleştirir. Her randevuda hijyen, zaman planı ve doğal görünüm önceliğimizdir.",
    ozellikler: ["Müşteri Odaklı", "Hijyenik Ortam", "Uzman Kadro"],
    yorumlarBaslik: "Misafir yorumları",
    yorumlarAlt:
      "Doğrulanmış Google yorumlarından seçilen deneyimler.",
    tumYorumlar: "Tüm Yorumları Gör",
    galeriBaslik: "Galeri",
    galeriAlt:
      "Salon atmosferinden ve seçili uygulama detaylarından kareler.",
    galeriFiltreleri: ["Tümü", "Mekân", "Saç", "Makyaj"],
    sssBaslik: "Sık sorulan sorular",
    ctaBaslik: "Randevunuzu bugün planlayın",
    ctaAlt:
      "Uygun saatleri öğrenmek ve hizmet detaylarını sormak için arayın ya da WhatsApp'tan yazın.",
    iletisimBaslik: "İletişim",
    footerAciklama:
      "Saç, makyaj ve bakım hizmetlerinde zarif, temiz ve kişiye özel salon deneyimi.",
  },
  sss: [
    {
      soru: "Randevusuz gelebilir miyim?",
      cevap:
        "Müsaitlik varsa yardımcı oluruz; ancak beklememek için WhatsApp üzerinden randevu almanızı öneririz.",
    },
    {
      soru: "Çalışma saatleriniz nedir?",
      cevap:
        "Hafta içi 10.00 - 20.00, cumartesi 10.00 - 19.00 arası hizmet veriyoruz. Pazar günleri randevu ile çalışıyoruz.",
    },
    {
      soru: "Fiyat bilgisini nasıl alabilirim?",
      cevap:
        "Uygulama türü ve saç uzunluğu gibi detaylar fiyatı etkileyebilir. En doğru bilgi için WhatsApp'tan kısa bir not gönderebilirsiniz.",
    },
    {
      soru: "Konumunuz kolay bulunuyor mu?",
      cevap:
        "Salonumuz Nişantaşı merkezde, toplu taşıma ve otopark noktalarına yakın bir konumdadır.",
    },
  ],
} satisfies SalonConfig;
