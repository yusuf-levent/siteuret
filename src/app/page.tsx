/* eslint-disable @next/next/no-img-element */
"use client";

import {
  ArrowUpRight,
  CheckCircle2,
  ChevronDown,
  Clock,
  MapPin,
  MessageCircle,
  Rocket,
  Search,
  ShieldCheck,
  Smartphone,
} from "lucide-react";
import Link from "next/link";
import { useMemo, useState } from "react";
import { Reveal } from "@/components/reveal";

const WHATSAPP_PHONE = "905XXXXXXXXX";
const DEMO_MESSAGE =
  "Merhaba, berber/güzellik salonum için ücretsiz web sitesi demosu almak istiyorum.";

function whatsappUrl(message = DEMO_MESSAGE) {
  return `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(message)}`;
}

function templatePath(name: string) {
  const slugs: Record<string, string> = {
    "Klasik Berber": "klasik-berber",
    "Premium Barber Studio": "premium-barber-studio",
    "Urban Fade": "urban-fade",
    "Soft Beauty Studio": "soft-beauty-studio",
    "Luxury Beauty Lounge": "luxury-beauty-lounge",
    "Clean Beauty Clinic": "clean-beauty-clinic",
  };

  return `/sablon/${slugs[name] ?? "soft-beauty-studio"}`;
}

function cardTheme(name: string) {
  if (name === "Klasik Berber") {
    return {
      article: "border-[#5b3825] bg-[#251812] text-[#f8ead5]",
      label: "bg-[#d39b55] text-[#251812]",
      style: "text-[#d39b55]",
      text: "text-[#f8ead5]/72",
      chip: "bg-[#3a251a] text-[#f8ead5]",
      button: "bg-[#d39b55] text-[#251812] hover:bg-[#c08a48]",
      outline: "border-[#d39b55]/40 text-[#f8ead5] hover:bg-[#d39b55]/12",
    };
  }

  if (name === "Premium Barber Studio") {
    return {
      article: "border-black bg-[#f6f5ef] text-black",
      label: "bg-black text-white",
      style: "text-black",
      text: "text-black/62",
      chip: "bg-white text-black",
      button: "bg-black text-white hover:bg-[#2a2a2a]",
      outline: "border-black/25 text-black hover:bg-white",
    };
  }

  if (name === "Urban Fade") {
    return {
      article: "border-[#d7ff38] bg-[#101010] text-white",
      label: "bg-[#d7ff38] text-black",
      style: "text-[#d7ff38]",
      text: "text-white/72",
      chip: "bg-white text-black",
      button: "bg-[#ff3d81] text-white hover:bg-[#df2d6c]",
      outline: "border-[#d7ff38]/50 text-[#d7ff38] hover:bg-[#d7ff38]/10",
    };
  }

  if (name === "Soft Beauty Studio") {
    return {
      article: "border-[#efd3dc] bg-[#fff7f8] text-[#3c2b32]",
      label: "bg-[#d98aa8] text-white",
      style: "text-[#c67595]",
      text: "text-[#755763]",
      chip: "bg-white text-[#8f6073]",
      button: "bg-[#d98aa8] text-white hover:bg-[#c67595]",
      outline: "border-[#d98aa8]/35 text-[#9b6077] hover:bg-white",
    };
  }

  if (name === "Luxury Beauty Lounge") {
    return {
      article: "border-[#d5b16b] bg-[#2b1019] text-[#f7ead9]",
      label: "bg-[#d5b16b] text-[#2b1019]",
      style: "text-[#d5b16b]",
      text: "text-[#f7ead9]/72",
      chip: "bg-[#421927] text-[#f7ead9]",
      button: "bg-[#d5b16b] text-[#2b1019] hover:bg-[#c39b51]",
      outline: "border-[#d5b16b]/45 text-[#f7ead9] hover:bg-[#d5b16b]/12",
    };
  }

  return {
    article: "border-[#bde8eb] bg-[#eef8fb] text-[#102033]",
    label: "bg-[#2aa7a3] text-white",
    style: "text-[#238b88]",
    text: "text-slate-600",
    chip: "bg-white text-[#238b88]",
    button: "bg-[#2aa7a3] text-white hover:bg-[#238b88]",
    outline: "border-[#2aa7a3]/35 text-[#238b88] hover:bg-white",
  };
}

type TemplateCategory = "Berber" | "Güzellik Salonu";

const trustItems = [
  { icon: Rocket, text: "1 günde yayına hazır" },
  { icon: Smartphone, text: "Mobil uyumlu" },
  { icon: Search, text: "Google görünürlüğü için temel altyapı" },
  { icon: MessageCircle, text: "WhatsApp ile hızlı iletişim" },
  { icon: ShieldCheck, text: "Aylık bakım ve güncelleme" },
];

const templates: Array<{
  name: string;
  category: TemplateCategory;
  style: string;
  description: string;
  image: string;
  sections: string[];
}> = [
  {
    name: "Klasik Berber",
    category: "Berber",
    style: "Koyu · Vintage · Ciddi",
    description:
      "Usta işi görünüm isteyen geleneksel berberler için güçlü ve güven veren tasarım.",
    image:
      "https://images.unsplash.com/photo-1599351431202-1e0f0137899a?auto=format&fit=crop&w=1100&q=82",
    sections: [
      "Hero",
      "Hizmetler",
      "Fiyat listesi",
      "Ustalar / ekip",
      "Galeri",
      "Google Harita",
      "WhatsApp randevu",
    ],
  },
  {
    name: "Premium Barber Studio",
    category: "Berber",
    style: "Siyah-beyaz · Editorial · Premium",
    description:
      "Premium erkek bakım stüdyoları için geniş boşluklu, editorial siyah-beyaz tasarım.",
    image:
      "https://images.unsplash.com/photo-1621605815971-fbc98d665033?auto=format&fit=crop&w=1100&q=82",
    sections: [
      "Güçlü hero",
      "Hizmet kartları",
      "Paketler",
      "Önce/sonra galeri",
      "Yorumlar",
      "Randevu CTA",
    ],
  },
  {
    name: "Urban Fade",
    category: "Berber",
    style: "Genç · Poster · Enerjik",
    description:
      "Genç kitleye hitap eden enerjik urban barber tasarımı; büyük poster hero ve hızlı CTA akışı.",
    image:
      "https://images.unsplash.com/photo-1519500528352-2d1460418d41?auto=format&fit=crop&w=1100&q=82",
    sections: [
      "Büyük görsel alan",
      "Popüler hizmetler",
      "Kampanya alanı",
      "Instagram galeri",
      "Konum ve saatler",
      "WhatsApp CTA",
    ],
  },
  {
    name: "Soft Beauty Studio",
    category: "Güzellik Salonu",
    style: "Soft · Açık tonlar · Zarif",
    description:
      "Saç, makyaj, cilt bakımı ve kaş-kirpik hizmetlerini nazik bir dille sunar.",
    image:
      "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=1100&q=82",
    sections: [
      "Hero",
      "Hizmetler",
      "Cilt bakımı",
      "Makyaj / saç",
      "Galeri",
      "Yorumlar",
      "Randevu CTA",
    ],
  },
  {
    name: "Luxury Beauty Lounge",
    category: "Güzellik Salonu",
    style: "Premium · Altın detay · Lüks",
    description:
      "Daha yüksek algı isteyen salonlar için paket, ekip ve galeri odaklı premium şablon.",
    image:
      "https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=1100&q=82",
    sections: [
      "Premium hero",
      "Hizmet paketleri",
      "Uzman ekip",
      "Galeri",
      "SSS",
      "WhatsApp randevu",
    ],
  },
  {
    name: "Clean Beauty Clinic",
    category: "Güzellik Salonu",
    style: "Ferah · Klinik · Sıcak",
    description:
      "Hijyen, güven ve net hizmet açıklaması isteyen güzellik klinikleri için sade yapı.",
    image:
      "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=1100&q=82",
    sections: [
      "Hero",
      "Hizmet açıklamaları",
      "Hijyen / güven",
      "Öncesi-sonrası alanı",
      "Yorumlar",
      "Konum / iletişim",
    ],
  },
];

const filters = ["Tümü", "Berber", "Güzellik Salonu"] as const;

const steps = [
  {
    title: "Bize işletmenizi yazın",
    text: "WhatsApp'tan işletme adınızı, sektörünüzü ve istediğiniz şablonu gönderin.",
  },
  {
    title: "Ücretsiz demo hazırlayalım",
    text: "Seçtiğiniz şablonu işletmenize göre düzenleyip size demo olarak gösterelim.",
  },
  {
    title: "Onay sonrası yayına alalım",
    text: "Beğenirseniz domain, hosting, temel SEO ve mobil uyumlu şekilde sitenizi yayına alalım.",
  },
  {
    title: "Güncellemeleri biz yapalım",
    text: "Fiyat, hizmet, görsel veya kampanya değişikliklerinde size destek olalım.",
  },
];

const whyWebsite = [
  "Google'da daha profesyonel görünüm",
  "Hizmet ve fiyatları net gösterme",
  "WhatsApp ile hızlı iletişim",
  "Konum ve çalışma saatlerini tek yerde sunma",
  "Instagram dışı güvenilir vitrin",
];

const includes = [
  "Profesyonel web sitesi",
  "Mobil uyumlu tasarım",
  "Hosting ve domain kurulum desteği",
  "Google'da görünürlük için temel altyapı",
  "WhatsApp iletişim butonu",
  "Hizmet ve fiyat listesi",
  "Konum ve çalışma saatleri",
  "Aylık küçük içerik güncellemeleri",
];

const plans = [
  {
    name: "Başlangıç",
    price: "4.500₺ kurulum + 350₺/ay",
    note: "Yeni başlayan berber ve güzellik salonları için hızlı, ekonomik ve profesyonel çözüm.",
    popular: false,
  },
  {
    name: "Yıllık",
    price: "4.500₺ kurulum + 3.500₺/yıl",
    note: "Aylık ödeme yerine yıllık bakım almak isteyen işletmeler için daha avantajlı paket.",
    popular: true,
  },
];

const faqs = [
  {
    question: "Web sitem kaç günde hazır olur?",
    answer:
      "İşletme bilgileriniz ve görselleriniz hazırsa çoğu site demo onayından sonra 1 gün içinde yayına alınabilir.",
  },
  {
    question: "Paketlere neler dahil?",
    answer:
      "Web sitesi tasarımı, mobil uyum, hosting/domain kurulum desteği, WhatsApp butonu, hizmet listesi, konum bilgisi ve temel Google görünürlük altyapısı dahildir.",
  },
  {
    question: "Sonradan değişiklik yapabilir miyim?",
    answer:
      "Evet. Hizmet, fiyat, görsel, kampanya veya çalışma saati gibi küçük güncellemeler bakım paketi kapsamında yapılabilir.",
  },
  {
    question: "Instagram'ım var, yine site gerekir mi?",
    answer:
      "Evet. Instagram önemlidir ama web sitesi işletmenizi Google'da daha güvenilir gösterir. Müşteriler hizmetlerinizi, konumunuzu, fiyatlarınızı ve iletişim bilgilerinizi tek sayfada görebilir.",
  },
  {
    question: "Randevu sistemi olacak mı?",
    answer:
      "İlk aşamada WhatsApp ile hızlı randevu yönlendirmesi yapılır. İstenirse ileride özel randevu formu veya harici randevu sistemi eklenebilir.",
  },
  {
    question: "Gerçekten satış getirir mi?",
    answer:
      "Site tek başına mucize yaratmaz; ancak Google'da daha profesyonel görünmenizi, müşterinin güven duymasını ve size daha kolay ulaşmasını sağlar.",
  },
];

function PrimaryButton({
  href,
  children,
  className = "",
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <a
      className={`inline-flex h-12 items-center justify-center gap-2 rounded-md bg-[#0f766e] px-5 text-sm font-semibold text-white shadow-lg shadow-teal-950/20 transition hover:bg-[#0b5d57] focus:outline-none focus:ring-4 focus:ring-teal-200 ${className}`}
      href={href}
      rel="noreferrer"
      target="_blank"
    >
      {children}
    </a>
  );
}

function SectionHeading({
  title,
  text,
  tone = "light",
}: {
  title: string;
  text: string;
  tone?: "light" | "dark";
}) {
  return (
    <div className="mx-auto max-w-3xl text-center">
      <h2
        className={`text-3xl font-semibold md:text-5xl ${
          tone === "dark" ? "text-white" : "text-slate-950"
        }`}
      >
        {title}
      </h2>
      <p
        className={`mt-4 text-base leading-7 md:text-lg ${
          tone === "dark" ? "text-white/70" : "text-slate-600"
        }`}
      >
        {text}
      </p>
    </div>
  );
}

export default function Home() {
  const [openFaq, setOpenFaq] = useState(0);
  const [activeFilter, setActiveFilter] =
    useState<(typeof filters)[number]>("Tümü");

  const visibleTemplates = useMemo(() => {
    if (activeFilter === "Tümü") {
      return templates;
    }

    return templates.filter((template) => template.category === activeFilter);
  }, [activeFilter]);

  return (
    <main className="min-h-screen bg-white text-slate-950">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-white/15 bg-slate-950/85 text-white backdrop-blur-xl">
        <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5">
          <Link className="text-xl font-bold" href="/">
            siteüret
          </Link>
          <div className="hidden items-center gap-6 text-sm font-medium text-white/75 md:flex">
            <a href="#sablonlar">Şablonlar</a>
            <a href="#nasil-calisir">Nasıl Çalışır</a>
            <a href="#fiyatlar">Fiyatlar</a>
            <a href="#sss">SSS</a>
            <a href="#iletisim">İletişim</a>
          </div>
          <PrimaryButton
            className="hidden h-10 bg-[#16a34a] px-4 shadow-emerald-950/30 hover:bg-[#15803d] sm:inline-flex"
            href={whatsappUrl()}
          >
            <MessageCircle size={17} />
            Ücretsiz Demo Al
          </PrimaryButton>
          <PrimaryButton
            className="h-10 bg-[#16a34a] px-3 shadow-emerald-950/30 hover:bg-[#15803d] sm:hidden"
            href={whatsappUrl()}
          >
            <MessageCircle size={17} />
            Demo
          </PrimaryButton>
        </nav>
      </header>

      <section
        className="relative isolate flex min-h-[86svh] items-center overflow-hidden bg-slate-950 px-5 pb-16 pt-28 text-white"
        style={{
          backgroundImage:
            "linear-gradient(90deg, rgba(2,6,23,.94), rgba(15,23,42,.74) 45%, rgba(15,118,110,.24)), url('https://images.unsplash.com/photo-1622287162716-f311baa1a2b8?auto=format&fit=crop&w=1800&q=85')",
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-white to-transparent" />
        <div className="relative mx-auto grid w-full max-w-7xl gap-10 lg:grid-cols-[1.08fr_0.92fr] lg:items-center">
          <Reveal>
            <h1 className="max-w-4xl text-4xl font-semibold leading-[1.03] text-white sm:text-5xl md:text-7xl">
              Berber ve güzellik salonunuz için 1 günde profesyonel web sitesi.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/80 md:text-xl">
              Google&apos;da daha güvenilir görünün, hizmetlerinizi net gösterin,
              müşterileriniz size tek tıkla ulaşsın. Mobil uyumlu, hızlı ve şık
              web siteleri hazırlıyoruz.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-3 text-sm font-semibold text-white/80">
              <span className="rounded-md bg-white/10 px-3 py-2">
                Önce ücretsiz demo, sonra karar
              </span>
              <span className="rounded-md bg-white/10 px-3 py-2">
                Sürpriz maliyet yok
              </span>
            </div>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <PrimaryButton href={whatsappUrl()}>
                <MessageCircle size={18} />
                Ücretsiz Demo Al
              </PrimaryButton>
              <a
                className="inline-flex h-12 items-center justify-center gap-2 rounded-md border border-white/30 px-5 text-sm font-semibold text-white transition hover:bg-white/10 focus:outline-none focus:ring-4 focus:ring-white/20"
                href="#sablonlar"
              >
                Şablonları Gör
                <ArrowUpRight size={18} />
              </a>
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <div className="rounded-lg border border-white/15 bg-white/10 p-4 shadow-2xl shadow-black/30 backdrop-blur-md">
              <div className="rounded-md bg-slate-950/80 p-4">
                <div className="flex items-center justify-between border-b border-white/10 pb-3 text-sm font-semibold">
                  <span>Nova Barber</span>
                  <span className="text-[#5eead4]">Randevu Al</span>
                </div>
                <div className="grid gap-4 pt-5 sm:grid-cols-[1fr_0.9fr] sm:items-center">
                  <div>
                    <p className="text-xs font-semibold uppercase text-[#5eead4]">
                      Hayali demo mockup
                    </p>
                    <h2 className="mt-3 text-3xl font-semibold leading-tight">
                      Mahallenizin modern berberi
                    </h2>
                    <p className="mt-3 text-sm leading-6 text-white/65">
                      Hizmetler, fiyatlar, çalışma saatleri ve WhatsApp tek
                      sayfada.
                    </p>
                  </div>
                  <img
                    alt="Hayali Nova Barber web sitesi mockup görseli"
                    className="aspect-[4/3] rounded-md object-cover"
                    src="https://images.unsplash.com/photo-1621605815971-fbc98d665033?auto=format&fit=crop&w=900&q=82"
                  />
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="border-y border-slate-200 bg-white px-5 py-6">
        <div className="mx-auto grid max-w-7xl gap-3 sm:grid-cols-2 lg:grid-cols-5">
          {trustItems.map((item) => {
            const Icon = item.icon;
            return (
              <div
                className="flex items-center gap-3 rounded-md bg-slate-50 px-4 py-4 text-sm font-semibold text-slate-800"
                key={item.text}
              >
                <Icon className="text-[#0f766e]" size={20} />
                {item.text}
              </div>
            );
          })}
        </div>
      </section>

      <section id="sablonlar" className="px-5 py-24">
        <Reveal>
          <SectionHeading
            text="Şimdilik sadece berberler ve güzellik salonları için hazırlanmış, işletmenize göre uyarlanabilir şablonlar."
            title="Berber ve güzellik salonu şablonları"
          />
        </Reveal>

        <div className="mx-auto mt-8 flex max-w-3xl flex-wrap justify-center gap-2">
          {filters.map((filter) => (
            <button
              className={`h-10 rounded-md px-4 text-sm font-semibold transition ${
                activeFilter === filter
                  ? "bg-slate-950 text-white"
                  : "border border-slate-200 bg-white text-slate-700 hover:bg-slate-50"
              }`}
              key={filter}
              onClick={() => setActiveFilter(filter)}
              type="button"
            >
              {filter}
            </button>
          ))}
        </div>

        <div className="mx-auto mt-12 grid max-w-7xl gap-5 md:grid-cols-2 xl:grid-cols-3">
          {visibleTemplates.map((template, index) => {
            const theme = cardTheme(template.name);

            return (
            <Reveal delay={index * 0.04} key={template.name}>
              <article
                className={`flex h-full flex-col overflow-hidden rounded-lg border shadow-sm transition hover:-translate-y-1 hover:shadow-xl ${theme.article}`}
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img
                    alt={`${template.name} şablon önizleme mockup alanı`}
                    className="h-full w-full object-cover"
                    src={template.image}
                  />
                  <div className={`absolute left-3 top-3 rounded-md px-3 py-1 text-xs font-bold ${theme.label}`}>
                    {template.category}
                  </div>
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <div className={`text-xs font-bold uppercase ${theme.style}`}>
                    {template.style}
                  </div>
                  <h3 className="mt-3 text-2xl font-semibold">
                    {template.name}
                  </h3>
                  <p className={`mt-3 leading-7 ${theme.text}`}>
                    {template.description}
                  </p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {template.sections.slice(0, 5).map((section) => (
                      <span
                        className={`rounded-md px-2.5 py-1 text-xs font-semibold ${theme.chip}`}
                        key={section}
                      >
                        {section}
                      </span>
                    ))}
                  </div>
                  <div className="mt-auto grid gap-3 pt-7 sm:grid-cols-2">
                    <Link
                      className={`inline-flex h-11 items-center justify-center gap-2 rounded-md px-4 text-sm font-semibold transition ${theme.button}`}
                      href={templatePath(template.name)}
                    >
                      Canlı Önizle
                      <ArrowUpRight size={16} />
                    </Link>
                    <a
                      className={`inline-flex min-h-11 items-center justify-center gap-2 rounded-md border px-4 py-2 text-center text-sm font-semibold transition ${theme.outline}`}
                      href={whatsappUrl(
                        `Merhaba, ${template.name} şablonunu işletmeme uyarlatmak için ücretsiz demo istiyorum.`,
                      )}
                      rel="noreferrer"
                      target="_blank"
                    >
                      Bu Şablonla Demo İste
                    </a>
                  </div>
                </div>
              </article>
            </Reveal>
            );
          })}
        </div>
      </section>

      <section id="nasil-calisir" className="bg-slate-950 px-5 py-24 text-white">
        <Reveal>
          <SectionHeading
            text="İşletme sahibi için süreç kısa, anlaşılır ve zahmetsiz ilerler."
            title="Web sitenizi almak bu kadar kolay."
            tone="dark"
          />
        </Reveal>
        <div className="mx-auto mt-12 grid max-w-7xl gap-5 md:grid-cols-2 xl:grid-cols-4">
          {steps.map((step, index) => (
            <Reveal delay={index * 0.06} key={step.title}>
              <article className="h-full rounded-lg border border-white/10 bg-white/[0.04] p-6">
                <div className="flex h-11 w-11 items-center justify-center rounded-md bg-[#0f766e] text-lg font-bold">
                  {index + 1}
                </div>
                <h3 className="mt-6 text-xl font-semibold text-white">
                  {step.title}
                </h3>
                <p className="mt-3 leading-7 text-white/70">{step.text}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="bg-slate-50 px-5 py-24">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <Reveal>
            <p className="text-sm font-bold uppercase text-[#0f766e]">
              Neden web sitesi?
            </p>
            <h2 className="mt-4 max-w-2xl text-3xl font-semibold text-slate-950 md:text-5xl">
              Instagram yetmez. Müşteri sizi Google&apos;da da arıyor.
            </h2>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-600">
              Bir müşteri berber, kuaför veya güzellik salonu aradığında genelde
              Google&apos;dan konuma, yorumlara, hizmetlere ve iletişim bilgilerine
              bakar. Profesyonel bir web sitesi, işletmenizi daha güvenilir
              gösterir ve müşterinin size ulaşmasını kolaylaştırır.
            </p>
          </Reveal>
          <div className="grid gap-3 sm:grid-cols-2">
            {whyWebsite.map((item, index) => (
              <Reveal delay={index * 0.04} key={item}>
                <div className="flex h-full items-start gap-3 rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
                  <CheckCircle2 className="mt-0.5 text-[#0f766e]" size={20} />
                  <span className="font-semibold leading-6 text-slate-800">
                    {item}
                  </span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="fiyatlar" className="px-5 py-24">
        <Reveal>
          <SectionHeading
            text="Önce ücretsiz demo hazırlanır. Beğenirseniz devam ederiz."
            title="Fiyatlar"
          />
        </Reveal>
        <div className="mx-auto mt-12 grid max-w-6xl gap-5 md:grid-cols-2">
          {plans.map((plan, index) => (
            <Reveal delay={index * 0.08} key={plan.name}>
              <article
                className={`relative h-full rounded-lg border bg-white p-7 shadow-sm ${
                  plan.popular
                    ? "border-[#0f766e] shadow-xl shadow-teal-950/10"
                    : "border-slate-200"
                }`}
              >
                {plan.popular && (
                  <div className="absolute right-5 top-5 rounded-md bg-[#0f766e] px-3 py-1 text-xs font-bold text-white">
                    En Popüler
                  </div>
                )}
                <h3 className="pr-28 text-2xl font-semibold text-slate-950">
                  {plan.name}
                </h3>
                <p className="mt-4 text-3xl font-bold text-[#0f766e]">
                  {plan.price}
                </p>
                <p className="mt-3 leading-7 text-slate-600">{plan.note}</p>
                <div className="mt-6 rounded-md bg-slate-50 px-4 py-3 text-sm font-semibold text-slate-700">
                  Sürpriz maliyet yok. Demo ücretsiz hazırlanır.
                </div>
                <div className="mt-7 grid gap-3">
                  {includes.map((item) => (
                    <div className="flex items-start gap-3" key={item}>
                      <CheckCircle2 className="mt-0.5 text-[#0f766e]" size={18} />
                      <span className="text-sm font-medium leading-6 text-slate-700">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
                <PrimaryButton className="mt-8 w-full" href={whatsappUrl()}>
                  <MessageCircle size={17} />
                  Ücretsiz Demo Al
                </PrimaryButton>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section id="sss" className="bg-slate-50 px-5 py-24">
        <Reveal>
          <SectionHeading
            text="Karar vermeden önce en çok sorulan konular."
            title="SSS"
          />
        </Reveal>
        <div className="mx-auto mt-10 max-w-4xl divide-y divide-slate-200 rounded-lg border border-slate-200 bg-white shadow-sm">
          {faqs.map((faq, index) => {
            const isOpen = openFaq === index;
            return (
              <div key={faq.question}>
                <button
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left text-base font-semibold text-slate-950"
                  onClick={() => setOpenFaq(isOpen ? -1 : index)}
                  type="button"
                >
                  {faq.question}
                  <ChevronDown
                    className={`shrink-0 text-[#0f766e] transition ${
                      isOpen ? "rotate-180" : ""
                    }`}
                    size={20}
                  />
                </button>
                {isOpen && (
                  <p className="px-5 pb-5 leading-7 text-slate-600">
                    {faq.answer}
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </section>

      <section id="iletisim" className="bg-[#0f766e] px-5 py-20 text-white">
        <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-[1.1fr_0.9fr] md:items-center">
          <Reveal>
            <h2 className="max-w-3xl text-3xl font-semibold md:text-5xl">
              İşletmeniz için ücretsiz demo isteyin.
            </h2>
            <p className="mt-4 max-w-2xl text-lg leading-8 text-white/78">
              Berberiniz veya güzellik salonunuz için uygun şablonu seçelim,
              işletmenize özel ücretsiz bir demo hazırlayalım.
            </p>
          </Reveal>
          <Reveal delay={0.08}>
            <div className="rounded-lg border border-white/18 bg-white/10 p-5 backdrop-blur-md">
              <div className="flex items-center gap-3 text-sm font-semibold text-white/78">
                <Clock size={18} />
                Ortalama demo hazırlık: 1 iş günü
              </div>
              <div className="mt-4 flex items-center gap-3 text-sm font-semibold text-white/78">
                <MapPin size={18} />
                Yerel berber ve güzellik salonları odağı
              </div>
              <PrimaryButton
                className="mt-6 w-full bg-white text-[#0f766e] hover:bg-slate-100"
                href={whatsappUrl()}
              >
                <MessageCircle size={18} />
                WhatsApp&apos;tan Demo İste
              </PrimaryButton>
            </div>
          </Reveal>
        </div>
      </section>

      <footer className="bg-slate-950 px-5 pb-24 pt-10 text-white sm:pb-10">
        <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-[1.3fr_0.7fr_0.7fr]">
          <div>
            <div className="text-xl font-bold">siteüret</div>
            <p className="mt-3 max-w-md text-sm leading-6 text-white/60">
              Yerel berberler ve güzellik salonları için hızlı, şık, mobil
              uyumlu web siteleri.
            </p>
          </div>
          <div className="grid gap-2 text-sm text-white/70">
            <a href="#sablonlar">Şablonlar</a>
            <a href="#nasil-calisir">Nasıl Çalışır</a>
            <a href="#fiyatlar">Fiyatlar</a>
            <a href="#sss">SSS</a>
          </div>
          <div className="grid content-start gap-2 text-sm text-white/70">
            <a href={whatsappUrl()} rel="noreferrer" target="_blank">
              WhatsApp ile iletişim
            </a>
            <span>© 2026 siteüret</span>
          </div>
        </div>
      </footer>

      <a
        className="fixed inset-x-4 bottom-4 z-50 inline-flex h-12 items-center justify-center gap-2 rounded-md bg-[#16a34a] text-sm font-bold text-white shadow-2xl shadow-emerald-950/30 sm:hidden"
        href={whatsappUrl()}
        rel="noreferrer"
        target="_blank"
      >
        <MessageCircle size={18} />
        Ücretsiz Demo Al
      </a>
    </main>
  );
}
