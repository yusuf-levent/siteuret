export type TemplateCategory = "Berber" | "Güzellik Salonu";

export type TemplateLayout =
  | "classic-barber"
  | "premium-barber"
  | "urban-fade"
  | "soft-beauty"
  | "luxury-beauty"
  | "clean-clinic";

export type TemplateDefinition = {
  slug: string;
  name: string;
  category: TemplateCategory;
  layout: TemplateLayout;
  brand: string;
  style: string;
  audience: string;
  description: string;
  heroTitle: string;
  heroText: string;
  heroImage: string;
  cardImage: string;
  accent: string;
  phone: string;
  address: string;
  mapLabel: string;
  hours: string[];
  highlights: string[];
  services: Array<{
    name: string;
    text: string;
    price: string;
  }>;
  packages: Array<{
    name: string;
    price: string;
    details: string;
  }>;
  gallery: Array<{
    src: string;
    alt: string;
    label: string;
  }>;
  reviews: Array<{
    name: string;
    text: string;
  }>;
  sections: string[];
};

export const WHATSAPP_PHONE = "905XXXXXXXXX";

export function whatsappUrl(message: string) {
  return `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(message)}`;
}

export function templateWhatsAppUrl(template: Pick<TemplateDefinition, "name">) {
  return whatsappUrl(
    `Merhaba, ${template.name} şablonunu işletmeme uyarlatmak için ücretsiz demo istiyorum.`,
  );
}

export const templates = [
  {
    slug: "klasik-berber",
    name: "Klasik Berber",
    category: "Berber",
    layout: "classic-barber",
    brand: "Usta Makas",
    style: "Vintage · Güven veren · Mahalle klasiği",
    audience: "Geleneksel berberler",
    description:
      "Vintage tarzda, fiyat panosu ve usta işi hizmet anlatımıyla güven veren klasik berber sitesi.",
    heroTitle: "Usta eliyle kesim, net fiyat, kolay randevu.",
    heroText:
      "Klasik berber kültürünü dijitale taşıyan, koyu ahşap tonları ve net hizmet panosuyla güven veren demo site.",
    heroImage:
      "https://images.unsplash.com/photo-1599351431202-1e0f0137899a?auto=format&fit=crop&w=1600&q=82",
    cardImage:
      "https://images.unsplash.com/photo-1622287162716-f311baa1a2b8?auto=format&fit=crop&w=1100&q=82",
    accent: "#b78344",
    phone: "+90 5XX XXX XX XX",
    address: "Örnek Mahalle, Makas Sokak No: 12 / İstanbul",
    mapLabel: "Makas Sokak · Merkez",
    hours: [
      "Pazartesi - Cuma: 09.00 - 20.00",
      "Cumartesi: 09.00 - 19.00",
      "Pazar: Kapalı",
    ],
    highlights: ["Usta berber vitrini", "Fiyat panosu", "WhatsApp randevu"],
    services: [
      {
        name: "Klasik Saç Kesimi",
        text: "Yüz formuna uygun temiz kesim ve ense düzeltme.",
        price: "350₺",
      },
      {
        name: "Sakal Tıraşı",
        text: "Sıcak havlu, jilet çizgisi ve bakım yağı.",
        price: "250₺",
      },
      {
        name: "Damat Bakımı",
        text: "Saç, sakal, yüz bakım ve final şekillendirme.",
        price: "900₺",
      },
    ],
    packages: [
      {
        name: "Haftalık Bakım",
        price: "550₺",
        details: "Saç kesimi, sakal şekillendirme ve ense temizliği.",
      },
      {
        name: "Tam Usta Paketi",
        price: "1.100₺",
        details: "Kesim, sakal, sıcak havlu ve hızlı yüz bakımı.",
      },
    ],
    gallery: [
      {
        src: "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&w=900&q=80",
        alt: "Klasik berber koltuğu demo görseli",
        label: "Koltuk",
      },
      {
        src: "https://images.unsplash.com/photo-1621605815971-fbc98d665033?auto=format&fit=crop&w=900&q=80",
        alt: "Berber tezgahı demo görseli",
        label: "Tezgah",
      },
      {
        src: "https://images.unsplash.com/photo-1622286342621-4bd786c2447c?auto=format&fit=crop&w=900&q=80",
        alt: "Sakal bakım demo görseli",
        label: "Sakal",
      },
    ],
    reviews: [
      {
        name: "Mert A.",
        text: "Demo yorumdur. Fiyat ve randevu bilgisinin tek sayfada görünmesi güven veriyor.",
      },
      {
        name: "Can K.",
        text: "Demo yorumdur. Klasik berber havası kaybolmadan modern bir vitrin oluşmuş.",
      },
    ],
    sections: [
      "Yan hero",
      "Fiyat panosu",
      "Usta hizmet listesi",
      "Diagonal galeri",
      "Saatler ve konum",
    ],
  },
  {
    slug: "premium-barber-studio",
    name: "Premium Barber Studio",
    category: "Berber",
    layout: "premium-barber",
    brand: "Elite Groom",
    style: "Siyah-beyaz · Editorial · Premium",
    audience: "Modern erkek bakım stüdyoları",
    description:
      "Premium erkek bakım stüdyoları için geniş boşluklu, editorial siyah-beyaz tasarım.",
    heroTitle: "Kesim, sakal ve bakım için premium stüdyo deneyimi.",
    heroText:
      "Minimal tipografi, güçlü fotoğraf alanı ve paket odaklı akışla üst segment erkek bakım stüdyolarına uygun demo site.",
    heroImage:
      "https://images.unsplash.com/photo-1517832606299-7ae9b720a186?auto=format&fit=crop&w=1600&q=82",
    cardImage:
      "https://images.unsplash.com/photo-1621605815971-fbc98d665033?auto=format&fit=crop&w=1100&q=82",
    accent: "#f5f5f0",
    phone: "+90 5XX XXX XX XX",
    address: "Örnek Plaza, Studio Katı No: 4 / İstanbul",
    mapLabel: "Studio Katı · Örnek Plaza",
    hours: [
      "Salı - Cuma: 10.00 - 21.00",
      "Cumartesi: 10.00 - 20.00",
      "Pazar - Pazartesi: Randevu ile",
    ],
    highlights: ["Editorial görünüm", "Paket odaklı", "Premium CTA"],
    services: [
      {
        name: "Signature Cut",
        text: "Danışmanlık, kesim, yıkama ve final styling.",
        price: "650₺",
      },
      {
        name: "Beard Design",
        text: "Yüz formuna göre sakal tasarımı ve çizgi temizliği.",
        price: "420₺",
      },
      {
        name: "Grooming Ritual",
        text: "Saç, sakal, cilt hazırlığı ve bakım finali.",
        price: "1.450₺",
      },
    ],
    packages: [
      {
        name: "Studio",
        price: "1.250₺",
        details: "Kesim, sakal tasarım ve hızlı bakım.",
      },
      {
        name: "Executive",
        price: "2.200₺",
        details: "Tam bakım, özel ürün önerisi ve öncelikli randevu.",
      },
    ],
    gallery: [
      {
        src: "https://images.unsplash.com/photo-1519500528352-2d1460418d41?auto=format&fit=crop&w=900&q=80",
        alt: "Premium barber stüdyo demo görseli",
        label: "Studio",
      },
      {
        src: "https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?auto=format&fit=crop&w=900&q=80",
        alt: "Minimal bakım alanı demo görseli",
        label: "Bakım",
      },
      {
        src: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=900&q=80",
        alt: "Premium ürün rafı demo görseli",
        label: "Ürün",
      },
    ],
    reviews: [
      {
        name: "Bora T.",
        text: "Demo yorumdur. Siyah-beyaz tasarım stüdyoyu daha premium gösteriyor.",
      },
      {
        name: "Ege S.",
        text: "Demo yorumdur. Paketlerin sade tabloyla gösterilmesi karar vermeyi kolaylaştırıyor.",
      },
    ],
    sections: [
      "Editorial split hero",
      "Yatay hizmet rail",
      "Minimal paket tablo",
      "Monokrom galeri",
      "Büyük alıntı",
    ],
  },
  {
    slug: "urban-fade",
    name: "Urban Fade",
    category: "Berber",
    layout: "urban-fade",
    brand: "Urban Fade",
    style: "Genç · Poster · Enerjik",
    audience: "Fade ve genç kitle odaklı berberler",
    description:
      "Genç kitleye hitap eden enerjik urban barber tasarımı; büyük poster hero ve hızlı CTA akışı.",
    heroTitle: "Fade, taper, çizgi ve hızlı randevu.",
    heroText:
      "Sokak kültürü hissi, keskin bloklar ve kampanya alanlarıyla genç kitleye konuşan berber demo sitesi.",
    heroImage:
      "https://images.unsplash.com/photo-1622288432450-277d0fef5ed6?auto=format&fit=crop&w=1600&q=82",
    cardImage:
      "https://images.unsplash.com/photo-1519500528352-2d1460418d41?auto=format&fit=crop&w=1100&q=82",
    accent: "#d7ff38",
    phone: "+90 5XX XXX XX XX",
    address: "Demo Caddesi, Blok 8 / İstanbul",
    mapLabel: "Blok 8 · Demo Cadde",
    hours: [
      "Pazartesi - Cumartesi: 11.00 - 22.00",
      "Pazar: 12.00 - 18.00",
      "Gece randevusu: WhatsApp ile",
    ],
    highlights: ["Fade odaklı", "Kampanya alanı", "Instagram grid"],
    services: [
      {
        name: "Skin Fade",
        text: "Temiz geçiş, net çizgi ve final styling.",
        price: "500₺",
      },
      {
        name: "Taper + Sakal",
        text: "Modern taper kesim ve sakal çizgisi.",
        price: "650₺",
      },
      {
        name: "Saç Tasarım",
        text: "Çizgi, doku ve kişiye özel kısa kesim.",
        price: "750₺",
      },
    ],
    packages: [
      {
        name: "Fresh Cut",
        price: "500₺",
        details: "Fade kesim ve styling.",
      },
      {
        name: "Full Drop",
        price: "950₺",
        details: "Fade, sakal, kaş ve bakım finali.",
      },
    ],
    gallery: [
      {
        src: "https://images.unsplash.com/photo-1622286342621-4bd786c2447c?auto=format&fit=crop&w=900&q=80",
        alt: "Urban fade kesim demo görseli",
        label: "Fade",
      },
      {
        src: "https://images.unsplash.com/photo-1621605815971-fbc98d665033?auto=format&fit=crop&w=900&q=80",
        alt: "Urban berber alanı demo görseli",
        label: "Shop",
      },
      {
        src: "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&w=900&q=80",
        alt: "Genç berber tarzı demo görseli",
        label: "Style",
      },
    ],
    reviews: [
      {
        name: "Arda Y.",
        text: "Demo yorumdur. Urban tasarım genç müşteriye direkt hitap ediyor.",
      },
      {
        name: "Kerem B.",
        text: "Demo yorumdur. Kampanya ve hızlı randevu alanı çok görünür.",
      },
    ],
    sections: [
      "Poster hero",
      "Sticker hizmetler",
      "Kampanya şeridi",
      "Instagram grid",
      "Sabit WhatsApp",
    ],
  },
  {
    slug: "soft-beauty-studio",
    name: "Soft Beauty Studio",
    category: "Güzellik Salonu",
    layout: "soft-beauty",
    brand: "Liva Güzellik",
    style: "Pastel · Zarif · Sakin",
    audience: "Kuaför ve güzellik salonları",
    description:
      "Pastel tonlarda zarif güzellik salonu sitesi; hizmetleri yumuşak kartlar ve sakin akışla anlatır.",
    heroTitle: "Saç, makyaj ve bakımda sakin bir güzellik deneyimi.",
    heroText:
      "Açık tonlar, yumuşak kartlar ve rahat nefes alan bölümlerle kadın kuaförü ve güzellik salonu demo sitesi.",
    heroImage:
      "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=1600&q=82",
    cardImage:
      "https://images.unsplash.com/photo-1522337660859-02fbefca4702?auto=format&fit=crop&w=1100&q=82",
    accent: "#d98aa8",
    phone: "+90 5XX XXX XX XX",
    address: "Örnek Mahalle, Pembe Sokak No: 7 / İstanbul",
    mapLabel: "Pembe Sokak · Örnek Mahalle",
    hours: [
      "Pazartesi - Cuma: 10.00 - 20.00",
      "Cumartesi: 10.00 - 19.00",
      "Pazar: Randevu ile",
    ],
    highlights: ["Pastel hero", "Yumuşak hizmet kartları", "Sakin yorum alanı"],
    services: [
      {
        name: "Saç Tasarımı",
        text: "Kesim, fön ve doğal görünüm odaklı şekillendirme.",
        price: "600₺",
      },
      {
        name: "Makyaj",
        text: "Günlük, davet ve özel gün makyajı.",
        price: "900₺",
      },
      {
        name: "Kaş & Kirpik",
        text: "Doğal görünüm ve yüz formuna uygun uygulama.",
        price: "500₺",
      },
    ],
    packages: [
      {
        name: "Günlük Bakım",
        price: "850₺",
        details: "Fön, bakım maskesi ve hızlı makyaj.",
      },
      {
        name: "Özel Gün",
        price: "2.400₺",
        details: "Saç tasarımı, makyaj ve prova planı.",
      },
    ],
    gallery: [
      {
        src: "https://images.unsplash.com/photo-1519699047748-de8e457a634e?auto=format&fit=crop&w=900&q=80",
        alt: "Soft beauty saç bakım demo görseli",
        label: "Saç",
      },
      {
        src: "https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?auto=format&fit=crop&w=900&q=80",
        alt: "Soft beauty makyaj demo görseli",
        label: "Makyaj",
      },
      {
        src: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=900&q=80",
        alt: "Soft beauty ürün demo görseli",
        label: "Bakım",
      },
    ],
    reviews: [
      {
        name: "Selin E.",
        text: "Demo yorumdur. Pastel akış, salonun sakin ve özenli havasını gösteriyor.",
      },
      {
        name: "Aylin D.",
        text: "Demo yorumdur. Hizmetler ve randevu alanı çok anlaşılır.",
      },
    ],
    sections: [
      "Pastel hero",
      "Yuvarlak hizmet kartları",
      "Soft galeri",
      "Yorum şeridi",
      "Randevu kartı",
    ],
  },
  {
    slug: "luxury-beauty-lounge",
    name: "Luxury Beauty Lounge",
    category: "Güzellik Salonu",
    layout: "luxury-beauty",
    brand: "Elara Beauty Lounge",
    style: "Lüks · Altın detay · Lounge",
    audience: "Premium güzellik salonları",
    description:
      "Lüks salonlar için premium beauty lounge tasarımı; büyük tipografi, paket kolonları ve seçkin galeri.",
    heroTitle: "Lüks bakım deneyimini ilk ekranda hissettirin.",
    heroText:
      "Burgundy zemin, altın detaylar ve dergi hissi veren tipografiyle yüksek algı isteyen salonlar için demo site.",
    heroImage:
      "https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=1600&q=82",
    cardImage:
      "https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?auto=format&fit=crop&w=1100&q=82",
    accent: "#d5b16b",
    phone: "+90 5XX XXX XX XX",
    address: "Örnek Residence, Lounge Katı No: 18 / İstanbul",
    mapLabel: "Lounge Katı · Örnek Residence",
    hours: [
      "Pazartesi - Cuma: 11.00 - 21.00",
      "Cumartesi: 10.00 - 20.00",
      "Pazar: Özel randevu",
    ],
    highlights: ["Luxury hero", "Paket kolonları", "Magazine galeri"],
    services: [
      {
        name: "Luxury Hair",
        text: "Renk, bakım, kesim ve final tasarım.",
        price: "2.500₺",
      },
      {
        name: "Glow Ritual",
        text: "Cilt hazırlığı, bakım maskesi ve rahatlatıcı final.",
        price: "1.800₺",
      },
      {
        name: "Event Beauty",
        text: "Özel gün saç ve makyaj planlaması.",
        price: "3.400₺",
      },
    ],
    packages: [
      {
        name: "Gold",
        price: "2.900₺",
        details: "Saç bakım, fön, cilt hazırlığı ve makyaj dokunuşu.",
      },
      {
        name: "Lounge",
        price: "5.500₺",
        details: "Kişisel danışmanlık, tam bakım ve özel gün hazırlığı.",
      },
    ],
    gallery: [
      {
        src: "https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=900&q=80",
        alt: "Luxury beauty lounge demo görseli",
        label: "Lounge",
      },
      {
        src: "https://images.unsplash.com/photo-1522337660859-02fbefca4702?auto=format&fit=crop&w=900&q=80",
        alt: "Premium salon demo görseli",
        label: "Salon",
      },
      {
        src: "https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?auto=format&fit=crop&w=900&q=80",
        alt: "Luxury bakım ürünleri demo görseli",
        label: "Ritüel",
      },
    ],
    reviews: [
      {
        name: "Defne R.",
        text: "Demo yorumdur. Tasarım, salonun premium hizmet verdiğini hemen hissettiriyor.",
      },
      {
        name: "İrem N.",
        text: "Demo yorumdur. Paketlerin ayrı kolonlarda sunulması lüks algıyı güçlendiriyor.",
      },
    ],
    sections: [
      "Magazine hero",
      "Altın paket kolonları",
      "Büyük quote",
      "Seçkin galeri",
      "Concierge CTA",
    ],
  },
  {
    slug: "clean-beauty-clinic",
    name: "Clean Beauty Clinic",
    category: "Güzellik Salonu",
    layout: "clean-clinic",
    brand: "Pure Skin Studio",
    style: "Klinik · Temiz · Güven",
    audience: "Cilt bakım ve estetik merkezleri",
    description:
      "Cilt bakım ve estetik merkezleri için temiz klinik tasarım; güven, hijyen ve net hizmet anlatımı önde.",
    heroTitle: "Cilt bakımında net bilgi, güvenli süreç, kolay randevu.",
    heroText:
      "Beyaz alan, mavi-yeşil vurgu ve checklist servis yapısıyla hijyen ve güven hissi veren demo klinik sitesi.",
    heroImage:
      "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=1600&q=82",
    cardImage:
      "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=1100&q=82",
    accent: "#2aa7a3",
    phone: "+90 5XX XXX XX XX",
    address: "Örnek Sağlık Plaza, Kat 3 / İstanbul",
    mapLabel: "Sağlık Plaza · Kat 3",
    hours: [
      "Pazartesi - Cuma: 09.30 - 19.30",
      "Cumartesi: 10.00 - 18.00",
      "Pazar: Kapalı",
    ],
    highlights: ["Klinik güven", "Checklist hizmetler", "Süreç anlatımı"],
    services: [
      {
        name: "Cilt Analizi",
        text: "İhtiyaca göre bakım planı ve ürün önerisi.",
        price: "Ücretsiz ön görüşme",
      },
      {
        name: "Hydra Bakım",
        text: "Temizleme, nemlendirme ve parlaklık desteği.",
        price: "1.200₺",
      },
      {
        name: "Leke Bakımı",
        text: "Düzenli seans planı ve kontrollü bakım süreci.",
        price: "1.600₺",
      },
    ],
    packages: [
      {
        name: "İlk Görüşme",
        price: "0₺",
        details: "İhtiyaç analizi, süreç açıklaması ve randevu planı.",
      },
      {
        name: "Bakım Planı",
        price: "3.800₺",
        details: "3 seans bakım, takip notu ve kontrollü ilerleme.",
      },
    ],
    gallery: [
      {
        src: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=900&q=80",
        alt: "Clean beauty clinic demo görseli",
        label: "Cilt",
      },
      {
        src: "https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&w=900&q=80",
        alt: "Temiz bakım odası demo görseli",
        label: "Oda",
      },
      {
        src: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&w=900&q=80",
        alt: "Bakım ürünleri demo görseli",
        label: "Ürün",
      },
    ],
    reviews: [
      {
        name: "Buse L.",
        text: "Demo yorumdur. Klinik düzen, hijyen ve süreç bilgisini güvenli gösteriyor.",
      },
      {
        name: "Nehir K.",
        text: "Demo yorumdur. Hizmet açıklamaları kısa ve anlaşılır.",
      },
    ],
    sections: [
      "Klinik hero",
      "Checklist hizmetler",
      "Güven bandı",
      "Süreç adımları",
      "Harita ve saatler",
    ],
  },
] satisfies TemplateDefinition[];

export function getTemplateBySlug(slug: string) {
  return templates.find((template) => template.slug === slug);
}
