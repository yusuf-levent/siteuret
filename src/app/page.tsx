"use client";

import {
  ArrowUpRight,
  CalendarCheck,
  CheckCircle2,
  ChevronDown,
  Clock,
  Mail,
  MapPin,
  MessageCircle,
  Search,
  Smartphone,
  Sparkles,
  Wand2,
} from "lucide-react";
import Link from "next/link";
import { useMemo, useState } from "react";
import { Reveal } from "@/components/reveal";
import { BookingTrigger, useBooking } from "@/components/booking";
import { templates } from "@/config/templates";
import type { TemplateCategory, TemplateDefinition } from "@/config/templates";

const filters = ["Tümü", "Berber", "Güzellik Salonu"] as const;
type Filter = (typeof filters)[number];

const trustItems = [
  { icon: CalendarCheck, text: "24 saatte demo" },
  { icon: Smartphone, text: "Mobil uyumlu tasarım" },
  { icon: Search, text: "Google'da görünür olun" },
  { icon: MessageCircle, text: "WhatsApp randevu butonu" },
  { icon: Wand2, text: "Tüm ayarları biz yaparız" },
];

const steps = [
  {
    title: "Şablonu seçin",
    text: "İşletmenize en yakın tarzdaki şablonu seçin; renkler ve içerik size göre uyarlanır.",
  },
  {
    title: "Bilgileri gönderin",
    text: "İşletme adınızı, hizmetlerinizi, fiyatlarınızı ve birkaç fotoğrafı WhatsApp'tan iletmeniz yeterli.",
  },
  {
    title: "24 saatte demo",
    text: "Bilgileriniz şablona yerleştirilir, canlı önizleme linkiniz size gönderilir.",
  },
  {
    title: "Onaylayın, yayına alın",
    text: "Beğendiyseniz kendi alan adınızla yayına alınır. Beğenmezseniz hiçbir ödeme yapmazsınız.",
  },
];

const whyUs = [
  {
    title: "Instagram müşteriyi randevuya çevirmiyor",
    text: "Hizmet, fiyat, çalışma saatleri ve konumu tek sayfada gören müşteri daha hızlı karar veriyor.",
  },
  {
    title: "Google'da bulunmazsanız yoksunuz",
    text: "Web siteniz, mahallenizde aratıldığınızda işletmenizi öne çıkarır; sosyal medyanız da bağlanır.",
  },
  {
    title: "Mobilde her şey kolay olmalı",
    text: "Müşterinin yüzde 80'i siteyi telefondan açar. Tek tıkla WhatsApp randevusu olmazsa kapatır.",
  },
  {
    title: "Sizden tek istediğimiz bilgiler",
    text: "Domain, hosting, kurulum, içerik yerleştirme — hepsini biz hallederiz. Siz sadece bilgileri yollayın.",
  },
];

const plans = [
  {
    name: "Başlangıç",
    price: "Teklif ile",
    note: "Kurulum + ilk ay bakım dahil.",
    popular: false,
    features: [
      "Size uyarlanmış tek şablon",
      "Mobil uyumlu tasarım",
      "Hizmet, fiyat ve çalışma saatleri",
      "WhatsApp randevu butonu",
      "Kendi alan adınızla yayın",
      "İlk ay içerik güncellemesi",
    ],
  },
  {
    name: "Yıllık",
    price: "Teklif ile",
    note: "Kurulum + 12 ay bakım, en avantajlı paket.",
    popular: true,
    features: [
      "Başlangıç paketindeki her şey",
      "Galeri, ekip ve müşteri yorumları bölümleri",
      "Sık sorulan sorular ve kampanya alanı",
      "12 ay boyunca içerik ve fiyat güncellemeleri",
      "Öncelikli WhatsApp desteği",
      "Yıllık alan adı ücreti dahil",
    ],
  },
];

const faqs = [
  {
    question: "Demo gerçekten ücretsiz mi?",
    answer:
      "Evet. Bilgilerinizi gönderdikten sonra şablonu işletmenize uyarlayıp size canlı demo linki yolluyoruz. Beğenmezseniz hiçbir ödeme yapmazsınız.",
  },
  {
    question: "Randevu sistemi nasıl çalışıyor?",
    answer:
      "Müşteriniz hizmet, fiyat ve süreyi görür; tek tıkla doğrudan WhatsApp'ınıza randevu mesajı düşer. İleride takvim tabanlı rezervasyon sistemi de ekleyebiliyoruz.",
  },
  {
    question: "Fotoğrafları kim sağlıyor?",
    answer:
      "Siteniz kendi işletmenizin fotoğraflarıyla hazırlanır; WhatsApp'tan göndermeniz yeterli. Şablon demolarında telifsiz, stok veya yapay görseller kullanıyoruz; gerçek müşteri veya marka görseli yok.",
  },
  {
    question: "Alan adı ve barındırma için ne yapmam gerekiyor?",
    answer:
      "Alan adınız (örn. salonunuz.com) sizin adınıza alınır ve size aittir. Barındırma için ek ücret ödemezsiniz; siteniz hızlı ve güvenli bir altyapıda yayınlanır.",
  },
  {
    question: "Site sonradan güncellenebiliyor mu?",
    answer:
      "Evet. Yıllık paketle aylık içerik güncellemeleri (fiyat, hizmet, ekip değişikliği, kampanya) dahil. Başlangıç paketinde ilk ay güncelleme dahil; sonrası talep üzerine.",
  },
  {
    question: "Hangi sektörlere uygun?",
    answer:
      "Sadece berber, erkek bakım stüdyosu, güzellik salonu, nail bar ve cilt bakım/wellness odaklı salonlara göre hazırlandı. Şablonlarımız bu tarzlara göre özelleşmiştir.",
  },
];

const navLinks = [
  { href: "#sablonlar", label: "Şablonlar" },
  { href: "#nasil-calisir", label: "Nasıl Çalışır" },
  { href: "#fiyatlar", label: "Fiyatlar" },
  { href: "#sss", label: "SSS" },
  { href: "#iletisim", label: "İletişim" },
];

function PrimaryButton({
  children,
  onClick,
  href,
  className = "",
}: {
  children: React.ReactNode;
  onClick?: () => void;
  href?: string;
  className?: string;
}) {
  const base =
    "inline-flex h-12 items-center justify-center gap-2 rounded-md bg-[#0f766e] px-5 text-sm font-semibold text-white transition hover:bg-[#0b4f4a] focus:outline-none focus:ring-4 focus:ring-teal-200";
  if (href) {
    return (
      <a className={`${base} ${className}`} href={href}>
        {children}
      </a>
    );
  }
  return (
    <button className={`${base} ${className}`} onClick={onClick} type="button">
      {children}
    </button>
  );
}

function SecondaryButton({
  children,
  href,
  className = "",
}: {
  children: React.ReactNode;
  href: string;
  className?: string;
}) {
  return (
    <a
      className={`inline-flex h-12 items-center justify-center gap-2 rounded-md border border-slate-300 px-5 text-sm font-semibold text-slate-950 transition hover:border-[#0f766e] hover:text-[#0f766e] ${className}`}
      href={href}
    >
      {children}
    </a>
  );
}

function SectionHeading({
  eyebrow,
  title,
  text,
  tone = "light",
}: {
  eyebrow?: string;
  title: string;
  text?: string;
  tone?: "light" | "dark";
}) {
  return (
    <div className="mx-auto max-w-3xl text-center">
      {eyebrow ? (
        <p className={`text-xs font-bold uppercase tracking-[0.18em] ${tone === "dark" ? "text-[#5eead4]" : "text-[#0f766e]"}`}>
          {eyebrow}
        </p>
      ) : null}
      <h2 className={`mt-3 text-3xl font-semibold leading-tight md:text-5xl ${tone === "dark" ? "text-white" : "text-slate-950"}`}>
        {title}
      </h2>
      {text ? (
        <p className={`mt-4 text-lg leading-8 ${tone === "dark" ? "text-white/70" : "text-slate-600"}`}>
          {text}
        </p>
      ) : null}
    </div>
  );
}

function cardClasses(template: TemplateDefinition) {
  const palettes: Record<TemplateDefinition["layout"], string> = {
    "heritage-barber": "border-[#5b3825] bg-[#261711] text-[#f6dfbd]",
    "editorial-grooming": "border-black bg-[#f6f4ee] text-black",
    "tattoo-fade": "border-[#d7ff38] bg-[#09090d] text-white",
    "eco-barber": "border-[#6f8a62]/35 bg-[#e8ead9] text-[#273425]",
    "pastel-beauty": "border-[#efd3dc] bg-[#fff5f7] text-[#3c2b32]",
    "velvet-luxury": "border-[#d5b16b] bg-[#2b1019] text-[#f7ead9]",
    "clinical-minimal": "border-[#bde8eb] bg-[#eef8fb] text-[#102033]",
    "y2k-beauty": "border-[#ff4fb8]/35 bg-[#fff0fb] text-[#251232]",
  };
  return palettes[template.layout];
}

function TemplateThumbnail({ template }: { template: TemplateDefinition }) {
  const [a, b, c] = template.thumbnail.palette;
  return (
    <div
      className="relative h-44 w-full overflow-hidden rounded-md p-5 text-white"
      style={{
        background: `linear-gradient(135deg, ${a} 0%, ${b} 60%, ${c} 100%)`,
      }}
    >
      <div className="absolute inset-0 opacity-25 mix-blend-overlay" style={{ background: `radial-gradient(circle at 20% 20%, white, transparent 45%)` }} />
      <div className="relative flex h-full flex-col justify-between">
        <div className="text-xs font-bold uppercase tracking-widest opacity-80">{template.category}</div>
        <div>
          <div className="text-lg font-semibold leading-tight">{template.thumbnail.title}</div>
          <p className="mt-1 text-sm leading-5 text-white/80">{template.thumbnail.note}</p>
        </div>
      </div>
    </div>
  );
}

export default function Home() {
  const [activeFilter, setActiveFilter] = useState<Filter>("Tümü");
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const { open: openBooking } = useBooking();

  const filteredTemplates = useMemo(() => {
    if (activeFilter === "Tümü") return templates;
    return templates.filter((template) => template.category === activeFilter);
  }, [activeFilter]);

  const categoryCounts = useMemo(() => {
    return templates.reduce(
      (acc, template) => {
        acc[template.category] = (acc[template.category] || 0) + 1;
        return acc;
      },
      {} as Record<TemplateCategory, number>,
    );
  }, []);

  return (
    <main className="bg-white text-slate-950">
      <header className="sticky top-0 z-40 border-b border-slate-100 bg-white/85 backdrop-blur">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5">
          <Link className="text-xl font-semibold tracking-tight text-slate-950" href="/">
            siteüret
          </Link>
          <nav className="hidden items-center gap-7 md:flex">
            {navLinks.map((link) => (
              <a className="text-sm font-medium text-slate-700 transition hover:text-[#0f766e]" href={link.href} key={link.href}>
                {link.label}
              </a>
            ))}
          </nav>
          <BookingTrigger
            className="inline-flex h-10 items-center gap-2 rounded-md bg-[#0f766e] px-4 text-sm font-semibold text-white transition hover:bg-[#0b4f4a]"
            label="Demo İste"
          />
        </div>
      </header>

      <section className="px-5 pt-14 pb-20 md:pt-20 md:pb-28">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1.1fr_.9fr] lg:items-center">
          <Reveal>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#0f766e]">
              Berber ve güzellik salonları için
            </p>
            <h1 className="mt-5 text-4xl font-semibold leading-tight tracking-tight text-slate-950 md:text-6xl">
              1 günde yayına hazır profesyonel web siteniz.
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">
              Google&apos;da görünür olun, hizmetlerinizi net gösterin, müşteriniz tek tıkla WhatsApp&apos;tan randevu alsın. Bilgileri yollayın, gerisini biz hallederiz.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <PrimaryButton onClick={() => openBooking()}>
                <MessageCircle size={18} />
                Ücretsiz Demo Al
              </PrimaryButton>
              <SecondaryButton href="#sablonlar">
                Şablonları Gör
                <ArrowUpRight size={17} />
              </SecondaryButton>
            </div>
            <div className="mt-10 grid gap-3 sm:grid-cols-2">
              {trustItems.slice(0, 4).map((item) => (
                <div className="flex items-center gap-3 rounded-md border border-slate-100 bg-slate-50/60 px-4 py-3" key={item.text}>
                  <item.icon className="text-[#0f766e]" size={18} />
                  <span className="text-sm font-semibold text-slate-700">{item.text}</span>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <HeroMockup />
          </Reveal>
        </div>
      </section>

      <section className="border-y border-slate-100 bg-slate-50 px-5 py-10">
        <div className="mx-auto grid max-w-7xl gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {trustItems.map((item) => (
            <div className="flex items-center gap-3 rounded-md bg-white px-4 py-3 shadow-sm shadow-slate-200/40" key={item.text}>
              <item.icon className="text-[#0f766e]" size={18} />
              <span className="text-sm font-semibold text-slate-700">{item.text}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="px-5 py-24" id="sablonlar">
        <Reveal>
          <SectionHeading
            eyebrow="Şablonlar"
            title="İşletmenize en yakın tarzdan başlayın."
            text={`Berber: ${categoryCounts.Berber} şablon · Güzellik Salonu: ${categoryCounts["Güzellik Salonu"]} şablon. Her şablon farklı bir kitle ve atmosfer için, sıfırdan ayrı tasarlandı.`}
          />
        </Reveal>

        <div className="mx-auto mt-10 flex max-w-7xl flex-wrap justify-center gap-2">
          {filters.map((filter) => (
            <button
              className={`h-11 rounded-md border px-4 text-sm font-semibold transition ${
                activeFilter === filter
                  ? "border-[#0f766e] bg-[#0f766e] text-white"
                  : "border-slate-200 bg-white text-slate-700 hover:border-[#0f766e]/40"
              }`}
              key={filter}
              onClick={() => setActiveFilter(filter)}
              type="button"
            >
              {filter}
            </button>
          ))}
        </div>

        <div className="mx-auto mt-10 grid max-w-7xl gap-5 md:grid-cols-2 xl:grid-cols-4">
          {filteredTemplates.map((template, index) => (
            <Reveal delay={index * 0.04} key={template.slug}>
              <article className={`flex h-full flex-col rounded-lg border p-4 shadow-sm ${cardClasses(template)}`}>
                <TemplateThumbnail template={template} />
                <div className="flex flex-1 flex-col pt-5">
                  <div className="text-xs font-bold uppercase opacity-70">{template.style}</div>
                  <h3 className="mt-3 text-2xl font-semibold">{template.name}</h3>
                  <p className="mt-3 leading-7 opacity-80">{template.description}</p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {template.highlights.map((item) => (
                      <span className="rounded-md bg-white/18 px-2.5 py-1 text-xs font-semibold" key={item}>
                        {item}
                      </span>
                    ))}
                  </div>
                  <div className="mt-auto grid gap-3 pt-7">
                    <Link
                      className="inline-flex h-11 items-center justify-center gap-2 rounded-md bg-white px-4 text-sm font-semibold text-slate-950 transition hover:bg-white/85"
                      href={`/sablon/${template.slug}`}
                    >
                      Canlı Önizle
                      <ArrowUpRight size={16} />
                    </Link>
                    <BookingTrigger
                      className="inline-flex min-h-11 items-center justify-center gap-2 rounded-md border border-white/35 px-4 py-2 text-center text-sm font-semibold transition hover:bg-white/10"
                      label="Bu Şablonla Demo İste"
                      target={{ templateName: template.name, whatsapp: template.whatsapp }}
                    />
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="bg-slate-950 px-5 py-24 text-white" id="neden">
        <Reveal>
          <SectionHeading
            eyebrow="Neden siteüret?"
            title="Salon sahibinin değil, müşterinin diliyle konuşuruz."
            text="Başarılı salon sitelerini inceledik. Hepsinde aynı üç şey öne çıkıyor: net hizmet/fiyat bilgisi, tek dokunuşla randevu ve mobilde hızlı açılış."
            tone="dark"
          />
        </Reveal>
        <div className="mx-auto mt-12 grid max-w-7xl gap-5 md:grid-cols-2">
          {whyUs.map((item, index) => (
            <Reveal delay={index * 0.05} key={item.title}>
              <article className="rounded-lg border border-white/10 bg-white/[0.04] p-7">
                <div className="flex h-10 w-10 items-center justify-center rounded-md bg-[#0f766e] text-sm font-bold">
                  {String(index + 1).padStart(2, "0")}
                </div>
                <h3 className="mt-5 text-xl font-semibold text-white">{item.title}</h3>
                <p className="mt-3 leading-7 text-white/75">{item.text}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="px-5 py-24" id="nasil-calisir">
        <Reveal>
          <SectionHeading
            eyebrow="Nasıl çalışır"
            title="4 adımda yayında."
            text="Süreç hızlı, basit ve sizden teknik bilgi beklemiyor. Tek yapmanız gereken işletme bilgilerinizi göndermek."
          />
        </Reveal>
        <div className="mx-auto mt-12 grid max-w-7xl gap-5 md:grid-cols-2 xl:grid-cols-4">
          {steps.map((step, index) => (
            <Reveal delay={index * 0.05} key={step.title}>
              <article className="relative h-full overflow-hidden rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
                <div className="absolute right-3 top-3 text-7xl font-black text-slate-100">{index + 1}</div>
                <div className="relative">
                  <div className="flex h-11 w-11 items-center justify-center rounded-md bg-[#0f766e] text-lg font-bold text-white">
                    {index + 1}
                  </div>
                  <h3 className="mt-5 text-xl font-semibold text-slate-950">{step.title}</h3>
                  <p className="mt-3 leading-7 text-slate-600">{step.text}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="bg-[#fbf6f0] px-5 py-24" id="fiyatlar">
        <Reveal>
          <SectionHeading
            eyebrow="Fiyatlar"
            title="Şeffaf, net ve risksiz."
            text="Demo ücretsizdir. Beğenmezseniz hiçbir ödeme yapmazsınız."
          />
        </Reveal>
        <div className="mx-auto mt-12 grid max-w-5xl gap-5 md:grid-cols-2">
          {plans.map((plan, index) => (
            <Reveal delay={index * 0.06} key={plan.name}>
              <article
                className={`relative flex h-full flex-col rounded-lg border p-7 shadow-sm ${
                  plan.popular ? "border-[#0f766e] bg-white" : "border-slate-200 bg-white"
                }`}
              >
                {plan.popular ? (
                  <span className="absolute -top-3 left-7 inline-flex items-center gap-1 rounded-md bg-[#0f766e] px-3 py-1 text-xs font-bold uppercase tracking-wider text-white">
                    <Sparkles size={13} />
                    En çok tercih edilen
                  </span>
                ) : null}
                <h3 className="text-2xl font-semibold text-slate-950">{plan.name}</h3>
                <p className="mt-4 text-3xl font-bold text-[#0f766e]">{plan.price}</p>
                <p className="mt-3 leading-7 text-slate-600">{plan.note}</p>
                <div className="mt-7 grid gap-3">
                  {plan.features.map((item) => (
                    <div className="flex items-start gap-3" key={item}>
                      <CheckCircle2 className="mt-0.5 text-[#0f766e]" size={18} />
                      <span className="text-sm font-medium leading-6 text-slate-700">{item}</span>
                    </div>
                  ))}
                </div>
                <BookingTrigger
                  className="mt-8 inline-flex h-12 items-center justify-center gap-2 rounded-md bg-[#0f766e] px-5 text-sm font-semibold text-white transition hover:bg-[#0b4f4a]"
                  label="Demo İste"
                />
              </article>
            </Reveal>
          ))}
        </div>
        <p className="mx-auto mt-8 max-w-xl text-center text-sm text-slate-600">
          Net teklif almak için WhatsApp&apos;tan iletişime geçin. Tüm paketlerde alan adı + barındırma + ilk içerik yerleştirme dahildir.
        </p>
      </section>

      <section className="px-5 py-24" id="sss">
        <Reveal>
          <SectionHeading
            eyebrow="Sık sorulan sorular"
            title="Aklınızdaki ilk soruların cevabı burada."
          />
        </Reveal>
        <div className="mx-auto mt-12 max-w-3xl divide-y divide-slate-200 rounded-lg border border-slate-200 bg-white">
          {faqs.map((faq, index) => {
            const isOpen = openFaq === index;
            return (
              <div key={faq.question}>
                <button
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                  onClick={() => setOpenFaq(isOpen ? null : index)}
                  type="button"
                >
                  <span className="text-base font-semibold text-slate-950">{faq.question}</span>
                  <ChevronDown
                    className={`text-[#0f766e] transition-transform ${isOpen ? "rotate-180" : ""}`}
                    size={20}
                  />
                </button>
                {isOpen ? (
                  <p className="px-6 pb-6 text-base leading-7 text-slate-600">{faq.answer}</p>
                ) : null}
              </div>
            );
          })}
        </div>
      </section>

      <section className="bg-[#0f766e] px-5 py-20 text-white" id="iletisim">
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[1.2fr_.8fr] lg:items-center">
          <Reveal>
            <h2 className="text-3xl font-semibold leading-tight md:text-5xl">
              Demonuz 24 saat içinde hazır olsun.
            </h2>
            <p className="mt-4 max-w-xl text-lg leading-8 text-white/85">
              Bilgilerinizi WhatsApp&apos;tan iletin, hemen başlayalım. Beğenmezseniz ödeme yok.
            </p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <BookingTrigger
                className="inline-flex h-12 items-center justify-center gap-2 rounded-md bg-white px-5 text-sm font-semibold text-[#0b4f4a] transition hover:bg-white/90"
                label="Ücretsiz Demo İste"
              />
              <a
                className="inline-flex h-12 items-center justify-center gap-2 rounded-md border border-white/40 px-5 text-sm font-semibold text-white transition hover:bg-white/10"
                href="#sablonlar"
              >
                Şablonları İncele
                <ArrowUpRight size={17} />
              </a>
            </div>
          </Reveal>
          <Reveal delay={0.06}>
            <div className="rounded-lg border border-white/15 bg-white/[0.07] p-6">
              <h3 className="text-lg font-semibold text-white">İletişim</h3>
              <div className="mt-5 grid gap-4 text-sm">
                <div className="flex items-start gap-3">
                  <MessageCircle className="mt-0.5" size={18} />
                  <div>
                    <p className="font-semibold text-white">WhatsApp</p>
                    <p className="text-white/75">Demo ve teklif için tek dokunuş</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Mail className="mt-0.5" size={18} />
                  <div>
                    <p className="font-semibold text-white">E-posta</p>
                    <p className="text-white/75">merhaba@siteuret.com</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Clock className="mt-0.5" size={18} />
                  <div>
                    <p className="font-semibold text-white">Yanıt süresi</p>
                    <p className="text-white/75">Hafta içi 09.00 – 19.00 / 1 saat içinde</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <MapPin className="mt-0.5" size={18} />
                  <div>
                    <p className="font-semibold text-white">Konum</p>
                    <p className="text-white/75">Türkiye geneli uzaktan hizmet</p>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <footer className="border-t border-slate-200 bg-white px-5 py-10 text-sm text-slate-600">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-base font-semibold text-slate-950">siteüret</p>
            <p className="mt-1">Berber ve güzellik salonları için profesyonel web siteleri.</p>
          </div>
          <div className="flex flex-wrap gap-5">
            {navLinks.map((link) => (
              <a className="transition hover:text-[#0f766e]" href={link.href} key={link.href}>
                {link.label}
              </a>
            ))}
          </div>
          <p className="text-xs text-slate-500">© {new Date().getFullYear()} siteüret. Tüm hakları saklıdır.</p>
        </div>
      </footer>
    </main>
  );
}

function HeroMockup() {
  return (
    <div className="relative mx-auto w-full max-w-md">
      <div className="absolute -inset-3 rounded-2xl bg-gradient-to-br from-[#0f766e]/20 via-[#b77b5b]/20 to-[#fbf6f0]/40 blur-2xl" />
      <div className="relative overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-2xl shadow-slate-300/40">
        <div className="flex items-center gap-2 border-b border-slate-100 bg-slate-50 px-4 py-3">
          <span className="h-3 w-3 rounded-full bg-rose-300" />
          <span className="h-3 w-3 rounded-full bg-amber-300" />
          <span className="h-3 w-3 rounded-full bg-emerald-300" />
          <span className="ml-3 truncate rounded-md bg-white px-3 py-1 text-xs font-medium text-slate-600">
            siz.siteuret.com
          </span>
        </div>
        <div className="grid gap-4 p-5">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-xs font-bold uppercase tracking-widest text-[#0f766e]">Aura Berber</div>
              <div className="mt-1 text-lg font-semibold text-slate-950">Mahallenizin klasiği</div>
            </div>
            <span className="inline-flex h-9 items-center gap-1 rounded-md bg-[#0f766e] px-3 text-xs font-bold text-white">
              <MessageCircle size={14} />
              Randevu
            </span>
          </div>
          <div className="grid grid-cols-3 gap-2">
            <div className="h-16 rounded-md bg-gradient-to-br from-[#261711] to-[#b57a3a]" />
            <div className="h-16 rounded-md bg-gradient-to-br from-[#b57a3a] to-[#f5dfbd]" />
            <div className="h-16 rounded-md bg-gradient-to-br from-[#f5dfbd] to-[#261711]" />
          </div>
          <div className="grid gap-2">
            {[
              { name: "Klasik Kesim", price: "450 TL", duration: "35 dk" },
              { name: "Sıcak Havlu Sakal", price: "320 TL", duration: "25 dk" },
              { name: "Damat Hazırlığı", price: "1.350 TL", duration: "90 dk" },
            ].map((service) => (
              <div className="flex items-center justify-between rounded-md border border-slate-100 bg-slate-50 px-3 py-2 text-xs" key={service.name}>
                <span className="font-semibold text-slate-950">{service.name}</span>
                <span className="flex items-center gap-3 text-slate-600">
                  <span>{service.duration}</span>
                  <span className="font-bold text-[#0f766e]">{service.price}</span>
                </span>
              </div>
            ))}
          </div>
          <div className="flex items-center justify-between rounded-md bg-slate-950 px-3 py-3 text-xs text-white">
            <span className="font-semibold">Google&apos;da görünür</span>
            <span className="rounded-md bg-white/15 px-2 py-1 font-mono">5.0 ★</span>
          </div>
        </div>
      </div>
    </div>
  );
}
