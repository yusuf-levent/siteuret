"use client";

import {
  ArrowUpRight,
  CalendarCheck,
  CheckCircle2,
  ChevronDown,
  Clock,
  MapPin,
  MessageCircle,
  Search,
  ShieldCheck,
  Smartphone,
  Sparkles,
} from "lucide-react";
import Link from "next/link";
import { useMemo, useState } from "react";
import { Reveal } from "@/components/reveal";
import { templates, templateWhatsAppUrl, whatsappUrl } from "@/config/templates";
import type { TemplateCategory, TemplateDefinition } from "@/config/templates";

const DEMO_MESSAGE =
  "Merhaba, berber/güzellik salonum için ücretsiz web sitesi demosu almak istiyorum.";

const filters = ["Tümü", "Berber", "Güzellik Salonu"] as const;

const trustItems = [
  { icon: Sparkles, text: "8 farklı salon şablonu" },
  { icon: Smartphone, text: "Mobil uyumlu" },
  { icon: Search, text: "Google görünürlüğü için temel altyapı" },
  { icon: CalendarCheck, text: "Randevu odaklı sayfa akışı" },
  { icon: ShieldCheck, text: "Güvenlik başlıkları ve statik yayın" },
];

const steps = [
  {
    title: "Şablonu seçin",
    text: "Berber veya güzellik salonunuzun segmentine en yakın tasarımı seçin.",
  },
  {
    title: "Bilgileri gönderin",
    text: "Marka adı, telefon, hizmetler, fiyatlar, saatler ve görseller business.json mantığıyla değişir.",
  },
  {
    title: "Ücretsiz demo görün",
    text: "Seçilen şablonu işletmenize uyarlayıp canlı demo olarak gösteririz.",
  },
  {
    title: "Yayına alın",
    text: "Onay sonrası statik çıktı Cloudflare Pages veya mevcut hosting akışına hazır olur.",
  },
];

const plans = [
  {
    name: "Başlangıç",
    price: "Teklif ile",
    note: "Tek şablon, temel içerik uyarlama, mobil uyum ve yayın dosyası.",
    popular: false,
  },
  {
    name: "Salon Pro",
    price: "Teklif ile",
    note: "Şablon uyarlama, hizmet/fiyat düzeni, randevu CTA, SSS ve bakım desteği.",
    popular: true,
  },
];

const includes = [
  "Ana sayfa ve canlı şablon önizlemesi",
  "Randevu CTA ve WhatsApp akışı",
  "Hizmet, fiyat ve süre alanları",
  "Galeri, ekip, yorum ve hakkımızda bölümü",
  "Statik build çıktısı ve temel güvenlik başlıkları",
];

const faqs = [
  {
    question: "Bu şablonlar hangi sektörlere uygun?",
    answer: "Sadece berber, erkek bakım stüdyosu, güzellik salonu, nail bar ve cilt bakım/wellness odaklı salonlara göre hazırlandı.",
  },
  {
    question: "Randevu formu gerçekten çalışıyor mu?",
    answer: "Sayfa içinde hizmet seçimi, fiyat ve süre gösteren bir panel var. Gönderim WhatsApp akışına bağlanır; veritabanı gerekmez.",
  },
  {
    question: "Fotoğraflar telif riski taşır mı?",
    answer: "Bu demoda dışarıdan gerçek marka veya kişi fotoğrafı kullanılmadı. Galeriler telif riski düşük CSS tabanlı mockup alanlarıyla tasarlandı.",
  },
  {
    question: "Cloudflare Pages için ne gerekir?",
    answer: "Build komutu npm run build, çıktı klasörü out. Bu proje statik export mantığıyla hazırlandı.",
  },
];

function PrimaryButton({
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
      className={`inline-flex h-12 items-center justify-center gap-2 rounded-md bg-[#0f766e] px-5 text-sm font-semibold text-white transition hover:bg-[#0b4f4a] focus:outline-none focus:ring-4 focus:ring-teal-200 ${className}`}
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
      <h2 className={`text-3xl font-semibold md:text-5xl ${tone === "dark" ? "text-white" : "text-slate-950"}`}>
        {title}
      </h2>
      <p className={`mt-4 text-lg leading-8 ${tone === "dark" ? "text-white/70" : "text-slate-600"}`}>{text}</p>
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
    <div className="relative min-h-56 overflow-hidden rounded-md" style={{ background: `linear-gradient(135deg, ${a}, ${b}, ${c})` }}>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_22%_18%,rgba(255,255,255,.48),transparent_18%),linear-gradient(115deg,transparent_35%,rgba(255,255,255,.28)_37%,transparent_43%)]" />
      <div className="absolute left-4 top-4 rounded-md bg-white/88 px-3 py-2 text-xs font-bold text-slate-950">
        {template.category}
      </div>
      <div className="absolute bottom-4 left-4 right-4 rounded-md bg-black/35 p-4 text-white backdrop-blur-md">
        <div className="text-lg font-semibold">{template.thumbnail.title}</div>
        <p className="mt-1 text-sm text-white/75">{template.thumbnail.note}</p>
      </div>
    </div>
  );
}

export default function Home() {
  const [activeFilter, setActiveFilter] = useState<(typeof filters)[number]>("Tümü");
  const [openFaq, setOpenFaq] = useState(0);

  const filteredTemplates = useMemo(() => {
    if (activeFilter === "Tümü") return templates;
    return templates.filter((template) => template.category === activeFilter);
  }, [activeFilter]);

  const categoryCounts = useMemo(() => {
    return templates.reduce(
      (acc, template) => {
        acc[template.category as TemplateCategory] += 1;
        return acc;
      },
      { Berber: 0, "Güzellik Salonu": 0 } as Record<TemplateCategory, number>,
    );
  }, []);

  return (
    <main className="min-h-screen bg-white text-slate-950">
      <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/90 backdrop-blur-xl">
        <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5">
          <Link className="text-xl font-bold" href="/">
            siteüret
          </Link>
          <div className="hidden items-center gap-7 text-sm font-semibold text-slate-600 md:flex">
            <a href="#sablonlar">Şablonlar</a>
            <a href="#nasil-calisir">Nasıl Çalışır</a>
            <a href="#fiyatlar">Fiyatlar</a>
            <a href="#sss">SSS</a>
          </div>
          <PrimaryButton className="h-10 px-4" href={whatsappUrl(DEMO_MESSAGE)}>
            <MessageCircle size={17} />
            Demo İste
          </PrimaryButton>
        </nav>
      </header>

      <section className="px-5 py-20 md:py-28">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1fr_.95fr] lg:items-center">
          <Reveal>
            <h1 className="max-w-4xl text-5xl font-semibold leading-tight md:text-7xl">
              Berber ve güzellik salonları için ayrışan web sitesi şablonları.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
              Siteüret artık sekiz farklı salon segmentine göre tasarlanmış canlı önizleme sunuyor: klasik berber, premium grooming, tattoo fade, eco barber, pastel beauty, luxury lounge, klinik minimal ve Y2K nail bar.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <PrimaryButton href={whatsappUrl(DEMO_MESSAGE)}>
                <MessageCircle size={18} />
                Ücretsiz Demo Al
              </PrimaryButton>
              <a className="inline-flex h-12 items-center justify-center gap-2 rounded-md border border-slate-300 px-5 text-sm font-semibold text-slate-950 transition hover:bg-slate-50" href="#sablonlar">
                Şablonları İncele
                <ArrowUpRight size={17} />
              </a>
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <div className="grid gap-3 sm:grid-cols-2">
              {templates.slice(0, 4).map((template, index) => (
                <Link
                  className={`block rounded-lg border p-3 transition hover:-translate-y-1 hover:shadow-xl ${cardClasses(template)} ${index === 0 ? "sm:row-span-2" : ""}`}
                  href={`/sablon/${template.slug}`}
                  key={template.slug}
                >
                  <TemplateThumbnail template={template} />
                  <div className="mt-4 text-sm font-semibold">{template.name}</div>
                </Link>
              ))}
            </div>
          </Reveal>
        </div>

        <div className="mx-auto mt-12 grid max-w-7xl gap-3 sm:grid-cols-2 lg:grid-cols-5">
          {trustItems.map((item, index) => (
            <Reveal delay={index * 0.04} key={item.text}>
              <div className="flex h-full items-center gap-3 rounded-lg border border-slate-200 bg-slate-50 p-4">
                <item.icon className="text-[#0f766e]" size={20} />
                <span className="text-sm font-semibold text-slate-700">{item.text}</span>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="bg-slate-50 px-5 py-24" id="sablonlar">
        <Reveal>
          <SectionHeading
            title="8 canlı şablon, 8 ayrı görsel dil."
            text={`Berber: ${categoryCounts.Berber} şablon. Güzellik Salonu: ${categoryCounts["Güzellik Salonu"]} şablon. Kartlar sadece renk değil; layout, hizmet sunumu, galeri ve randevu akışı da farklı.`}
          />
        </Reveal>

        <div className="mx-auto mt-8 flex max-w-7xl flex-wrap justify-center gap-2">
          {filters.map((filter) => (
            <button
              className={`h-11 rounded-md border px-4 text-sm font-semibold transition ${
                activeFilter === filter ? "border-[#0f766e] bg-[#0f766e] text-white" : "border-slate-200 bg-white text-slate-700 hover:border-[#0f766e]/40"
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
                  <p className="mt-3 leading-7 opacity-75">{template.description}</p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {template.highlights.map((item) => (
                      <span className="rounded-md bg-white/18 px-2.5 py-1 text-xs font-semibold" key={item}>
                        {item}
                      </span>
                    ))}
                  </div>
                  <div className="mt-auto grid gap-3 pt-7">
                    <Link className="inline-flex h-11 items-center justify-center gap-2 rounded-md bg-white px-4 text-sm font-semibold text-slate-950 transition hover:bg-white/85" href={`/sablon/${template.slug}`}>
                      Canlı Önizle
                      <ArrowUpRight size={16} />
                    </Link>
                    <a className="inline-flex min-h-11 items-center justify-center gap-2 rounded-md border border-white/35 px-4 py-2 text-center text-sm font-semibold transition hover:bg-white/10" href={templateWhatsAppUrl(template)} rel="noreferrer" target="_blank">
                      Bu Şablonla Demo İste
                    </a>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="bg-slate-950 px-5 py-24 text-white" id="nasil-calisir">
        <Reveal>
          <SectionHeading text="İşletme sahibi için süreç kısa, anlaşılır ve zahmetsiz ilerler." title="Web sitenizi almak bu kadar kolay." tone="dark" />
        </Reveal>
        <div className="mx-auto mt-12 grid max-w-7xl gap-5 md:grid-cols-2 xl:grid-cols-4">
          {steps.map((step, index) => (
            <Reveal delay={index * 0.06} key={step.title}>
              <article className="h-full rounded-lg border border-white/10 bg-white/[0.04] p-6">
                <div className="flex h-11 w-11 items-center justify-center rounded-md bg-[#0f766e] text-lg font-bold">{index + 1}</div>
                <h3 className="mt-6 text-xl font-semibold text-white">{step.title}</h3>
                <p className="mt-3 leading-7 text-white/70">{step.text}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="bg-white px-5 py-24">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <Reveal>
            <h2 className="max-w-2xl text-3xl font-semibold text-slate-950 md:text-5xl">Instagram yetmez. Müşteri hizmet, fiyat ve randevuyu tek yerde görmek istiyor.</h2>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-600">
              Araştırmada başarılı salon sitelerinde üç ortak nokta öne çıkıyor: güçlü ilk ekran, randevuya kısa yol ve güven veren sosyal kanıt. Yeni şablonlar bu üç noktayı her segmentte farklı şekilde kullanır.
            </p>
          </Reveal>
          <div className="grid gap-3 sm:grid-cols-2">
            {includes.map((item, index) => (
              <Reveal delay={index * 0.04} key={item}>
                <div className="flex h-full items-start gap-3 rounded-lg border border-slate-200 bg-slate-50 p-5">
                  <CheckCircle2 className="mt-0.5 text-[#0f766e]" size={20} />
                  <span className="font-semibold leading-6 text-slate-800">{item}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-50 px-5 py-24" id="fiyatlar">
        <Reveal>
          <SectionHeading text="Önce ücretsiz demo hazırlanır. Beğenirseniz devam ederiz." title="Fiyatlar" />
        </Reveal>
        <div className="mx-auto mt-12 grid max-w-6xl gap-5 md:grid-cols-2">
          {plans.map((plan, index) => (
            <Reveal delay={index * 0.08} key={plan.name}>
              <article className={`relative h-full rounded-lg border bg-white p-7 shadow-sm ${plan.popular ? "border-[#0f766e] shadow-xl shadow-teal-950/10" : "border-slate-200"}`}>
                {plan.popular ? <div className="absolute right-5 top-5 rounded-md bg-[#0f766e] px-3 py-1 text-xs font-bold text-white">En Popüler</div> : null}
                <h3 className="pr-28 text-2xl font-semibold text-slate-950">{plan.name}</h3>
                <p className="mt-4 text-3xl font-bold text-[#0f766e]">{plan.price}</p>
                <p className="mt-3 leading-7 text-slate-600">{plan.note}</p>
                <div className="mt-7 grid gap-3">
                  {includes.map((item) => (
                    <div className="flex items-start gap-3" key={item}>
                      <CheckCircle2 className="mt-0.5 text-[#0f766e]" size={18} />
                      <span className="text-sm font-medium leading-6 text-slate-700">{item}</span>
                    </div>
                  ))}
                </div>
                <PrimaryButton className="mt-8 w-full" href={whatsappUrl(DEMO_MESSAGE)}>
                  <MessageCircle size={17} />
                  Ücretsiz Demo Al
                </PrimaryButton>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="bg-white px-5 py-24" id="sss">
        <Reveal>
          <SectionHeading text="Karar vermeden önce en çok sorulan konular." title="SSS" />
        </Reveal>
        <div className="mx-auto mt-10 max-w-4xl divide-y divide-slate-200 rounded-lg border border-slate-200 bg-white shadow-sm">
          {faqs.map((faq, index) => {
            const isOpen = openFaq === index;
            return (
              <div key={faq.question}>
                <button aria-expanded={isOpen} className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left text-base font-semibold text-slate-950" onClick={() => setOpenFaq(isOpen ? -1 : index)} type="button">
                  {faq.question}
                  <ChevronDown className={`shrink-0 text-[#0f766e] transition ${isOpen ? "rotate-180" : ""}`} size={20} />
                </button>
                {isOpen ? <p className="px-5 pb-5 leading-7 text-slate-600">{faq.answer}</p> : null}
              </div>
            );
          })}
        </div>
      </section>

      <section className="bg-[#0f766e] px-5 py-20 text-white" id="iletisim">
        <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-[1.1fr_0.9fr] md:items-center">
          <Reveal>
            <h2 className="max-w-3xl text-3xl font-semibold md:text-5xl">İşletmeniz için ücretsiz demo isteyin.</h2>
            <p className="mt-4 max-w-2xl text-lg leading-8 text-white/78">Berberiniz veya güzellik salonunuz için uygun şablonu seçelim, işletmenize özel ücretsiz demo hazırlayalım.</p>
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
              <PrimaryButton className="mt-6 w-full bg-white text-[#0f766e] hover:bg-slate-100" href={whatsappUrl(DEMO_MESSAGE)}>
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
            <p className="mt-3 max-w-md text-sm leading-6 text-white/60">Yerel berberler ve güzellik salonları için hızlı, şık, mobil uyumlu web siteleri.</p>
          </div>
          <div className="grid gap-2 text-sm text-white/70">
            <a href="#sablonlar">Şablonlar</a>
            <a href="#nasil-calisir">Nasıl Çalışır</a>
            <a href="#fiyatlar">Fiyatlar</a>
            <a href="#sss">SSS</a>
          </div>
          <div className="grid content-start gap-2 text-sm text-white/70">
            <a href={whatsappUrl(DEMO_MESSAGE)} rel="noreferrer" target="_blank">WhatsApp ile iletişim</a>
            <span>© 2026 siteüret</span>
          </div>
        </div>
      </footer>

      <a className="fixed inset-x-4 bottom-4 z-50 inline-flex h-12 items-center justify-center gap-2 rounded-md bg-[#16a34a] text-sm font-bold text-white shadow-2xl shadow-emerald-950/30 sm:hidden" href={whatsappUrl(DEMO_MESSAGE)} rel="noreferrer" target="_blank">
        <MessageCircle size={18} />
        Ücretsiz Demo Al
      </a>
    </main>
  );
}
