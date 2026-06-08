/* eslint-disable @next/next/no-img-element */
"use client";

import {
  ArrowUpRight,
  CheckCircle2,
  ChevronDown,
  MessageCircle,
  Phone,
  Rocket,
  Search,
  ShieldCheck,
  Smartphone,
} from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { Reveal } from "@/components/reveal";

const whatsapp = "https://wa.me/90XXXXXXXXXX";

const trustItems = [
  { icon: Search, text: "Google'da görünürlük" },
  { icon: Smartphone, text: "Mobil uyumlu" },
  { icon: Rocket, text: "1 günde yayında" },
  { icon: ShieldCheck, text: "Aylık bakım & güncelleme" },
];

const templates = [
  {
    name: "Güzellik & Kuaför Salonu",
    href: "/sablon/salon",
    active: true,
    image:
      "https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Restoran & Kafe",
    image:
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Berber",
    image:
      "https://images.unsplash.com/photo-1599351431202-1e0f0137899a?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Diş/Sağlık",
    image:
      "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=900&q=80",
  },
];

const steps = [
  {
    title: "Ulaşın/demo isteyin",
    text: "WhatsApp'tan işletmenizi ve ihtiyacınızı yazın; aynı gün dönüş yapalım.",
  },
  {
    title: "Ücretsiz taslak",
    text: "Sektörünüze uygun şık bir taslağı gerçekçi içerikle hazırlayalım.",
  },
  {
    title: "1 günde yayında",
    text: "Beğendiğiniz tasarımı domain, hosting ve temel SEO ile yayına alalım.",
  },
];

const plans = [
  {
    name: "Başlangıç",
    price: "4.500₺ kurulum + 350₺/ay",
    note: "Yeni başlayan işletmeler için hızlı ve ekonomik paket.",
  },
  {
    name: "Yıllık",
    price: "4.500₺ + 3.500₺/yıl",
    note: "1 ay bedava bakım ve daha düşük yıllık maliyet.",
  },
];

const includes = [
  "Profesyonel web sitesi",
  "Hosting ve domain kurulumu",
  "Google'da görünürlük altyapısı",
  "Aylık içerik güncelleme",
];

const faqs = [
  {
    question: "Ne kadar sürede yayına çıkar?",
    answer:
      "İçerikler ve temel bilgiler hazırsa demo onayından sonra çoğu işletme sitesi 1 gün içinde yayına alınır.",
  },
  {
    question: "Paketlere neler dahil?",
    answer:
      "Web sitesi kurulumu, mobil uyumlu tasarım, hosting, domain yönlendirme, temel SEO ve aylık bakım dahildir.",
  },
  {
    question: "Sonradan değişiklik yapabilir miyim?",
    answer:
      "Evet. Fotoğraf, fiyat, hizmet, çalışma saati ve kampanya gibi düzenli güncellemeler aylık bakım kapsamında yapılır.",
  },
  {
    question: "Instagram'ım var, yine site gerekir mi?",
    answer:
      "Instagram görünürlük için iyi bir kanal; web sitesi ise Google'da bulunmanızı, güven vermenizi ve randevu iletişimini kolaylaştırır.",
  },
];

function PrimaryButton({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <a
      className="inline-flex h-12 items-center justify-center gap-2 rounded-md bg-[#0f766e] px-5 text-sm font-semibold text-white shadow-lg shadow-teal-950/20 transition hover:bg-[#0b5d57] focus:outline-none focus:ring-4 focus:ring-teal-200"
      href={href}
      rel="noreferrer"
      target={href.startsWith("http") ? "_blank" : undefined}
    >
      {children}
    </a>
  );
}

function SectionHeading({
  title,
  text,
}: {
  title: string;
  text: string;
}) {
  return (
    <div className="mx-auto max-w-2xl text-center">
      <h2 className="text-3xl font-semibold tracking-tight text-slate-950 md:text-4xl">
        {title}
      </h2>
      <p className="mt-4 text-base leading-7 text-slate-600">{text}</p>
    </div>
  );
}

export default function Home() {
  const [openFaq, setOpenFaq] = useState(0);

  return (
    <main className="min-h-screen bg-white text-slate-950">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-white/15 bg-slate-950/80 text-white backdrop-blur-xl">
        <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5">
          <Link className="text-xl font-bold tracking-tight" href="/">
            siteüret
          </Link>
          <div className="hidden items-center gap-7 text-sm font-medium text-white/75 md:flex">
            <a href="#sablonlar">Şablonlar</a>
            <a href="#nasil-calisir">Nasıl Çalışır</a>
            <a href="#fiyatlar">Fiyatlar</a>
            <a href="#iletisim">İletişim</a>
          </div>
          <a
            className="inline-flex h-10 items-center justify-center gap-2 rounded-md bg-[#16a34a] px-4 text-sm font-semibold text-white shadow-lg shadow-emerald-950/30 transition hover:bg-[#15803d]"
            href={whatsapp}
            rel="noreferrer"
            target="_blank"
          >
            <MessageCircle size={17} />
            <span className="hidden sm:inline">Ücretsiz Demo Al</span>
            <span className="sm:hidden">Demo</span>
          </a>
        </nav>
      </header>

      <section
        className="relative isolate flex min-h-[82svh] items-center overflow-hidden bg-slate-950 px-5 pb-14 pt-28 text-white md:pb-20"
        style={{
          backgroundImage:
            "linear-gradient(90deg, rgba(2,6,23,.92), rgba(15,23,42,.72) 44%, rgba(15,118,110,.28)), url('https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1800&q=85')",
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-white to-transparent" />
        <div className="relative mx-auto w-full max-w-7xl">
          <Reveal className="max-w-3xl">
            <h1 className="max-w-3xl text-5xl font-semibold leading-[1.02] tracking-tight text-white md:text-7xl">
              İşletmenize 1 günde profesyonel web sitesi.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/80 md:text-xl">
              Google&apos;da çıkın, müşteri kaçırmayın. Mobil uyumlu, şık, hızlı.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <PrimaryButton href={whatsapp}>
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
        </div>
      </section>

      <section className="border-y border-slate-200 bg-white px-5 py-6">
        <div className="mx-auto grid max-w-7xl gap-3 sm:grid-cols-2 lg:grid-cols-4">
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
            text="Hazır altyapı, sektörünüze göre özelleştirilen içerik ve hızlı yayın akışıyla çalışır."
            title="Şablonlar"
          />
        </Reveal>
        <div className="mx-auto mt-12 grid max-w-7xl gap-5 md:grid-cols-2 lg:grid-cols-4">
          {templates.map((template, index) => (
            <Reveal delay={index * 0.06} key={template.name}>
              <article className="overflow-hidden rounded-lg border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    alt={`${template.name} şablon önizlemesi`}
                    className="h-full w-full object-cover"
                    src={template.image}
                  />
                  <div className="absolute left-3 top-3 rounded-md bg-white/90 px-3 py-1 text-xs font-bold text-slate-900">
                    {template.active ? "AKTİF" : "Yakında"}
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="text-lg font-semibold text-slate-950">
                    {template.name}
                  </h3>
                  {template.active ? (
                    <Link
                      className="mt-5 inline-flex h-10 w-full items-center justify-center gap-2 rounded-md bg-slate-950 px-4 text-sm font-semibold text-white transition hover:bg-[#0f766e]"
                      href={template.href}
                    >
                      Canlı Önizle
                      <ArrowUpRight size={16} />
                    </Link>
                  ) : (
                    <button
                      className="mt-5 h-10 w-full rounded-md border border-slate-200 bg-slate-50 px-4 text-sm font-semibold text-slate-400"
                      disabled
                      type="button"
                    >
                      Yakında
                    </button>
                  )}
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section id="nasil-calisir" className="bg-slate-950 px-5 py-24 text-white">
        <Reveal className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-white md:text-4xl">
            Nasıl Çalışır
          </h2>
          <p className="mt-4 text-base leading-7 text-white/70">
            Süreç kısa, net ve işletmenizin günlük akışını yormayacak şekilde ilerler.
          </p>
        </Reveal>
        <div className="mx-auto mt-12 grid max-w-6xl gap-5 md:grid-cols-3">
          {steps.map((step, index) => (
            <Reveal delay={index * 0.08} key={step.title}>
              <article className="rounded-lg border border-white/10 bg-white/[0.04] p-6">
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

      <section id="fiyatlar" className="bg-slate-50 px-5 py-24">
        <Reveal>
          <SectionHeading
            text="Site, hosting, domain, temel görünürlük ve düzenli güncelleme aynı pakette."
            title="Fiyatlar"
          />
        </Reveal>
        <div className="mx-auto mt-12 grid max-w-5xl gap-5 md:grid-cols-2">
          {plans.map((plan, index) => (
            <Reveal delay={index * 0.08} key={plan.name}>
              <article className="rounded-lg border border-slate-200 bg-white p-7 shadow-sm">
                <h3 className="text-2xl font-semibold text-slate-950">
                  {plan.name}
                </h3>
                <p className="mt-4 text-3xl font-bold tracking-tight text-[#0f766e]">
                  {plan.price}
                </p>
                <p className="mt-3 leading-7 text-slate-600">{plan.note}</p>
                <div className="mt-7 space-y-3">
                  {includes.map((item) => (
                    <div className="flex items-center gap-3" key={item}>
                      <CheckCircle2 className="text-[#0f766e]" size={19} />
                      <span className="text-sm font-medium text-slate-700">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
                <a
                  className="mt-8 inline-flex h-11 w-full items-center justify-center gap-2 rounded-md bg-slate-950 px-5 text-sm font-semibold text-white transition hover:bg-[#0f766e]"
                  href={whatsapp}
                  rel="noreferrer"
                  target="_blank"
                >
                  <MessageCircle size={17} />
                  Ücretsiz Demo Al
                </a>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="px-5 py-24">
        <Reveal>
          <SectionHeading
            text="Satın almadan önce en çok sorulan konular."
            title="SSS"
          />
        </Reveal>
        <div className="mx-auto mt-10 max-w-3xl divide-y divide-slate-200 rounded-lg border border-slate-200 bg-white">
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
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-8 md:flex-row md:items-center">
          <Reveal>
            <h2 className="max-w-2xl text-3xl font-semibold tracking-tight md:text-5xl">
              İşletmeniz için ücretsiz demo isteyin.
            </h2>
            <p className="mt-4 max-w-2xl text-lg leading-8 text-white/75">
              Kısa bir görüşmeyle sektörünüze uygun taslağı belirleyelim.
            </p>
          </Reveal>
          <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
            <a
              className="inline-flex h-12 items-center justify-center gap-2 rounded-md bg-white px-5 text-sm font-semibold text-[#0f766e] transition hover:bg-slate-100"
              href={whatsapp}
              rel="noreferrer"
              target="_blank"
            >
              <MessageCircle size={18} />
              WhatsApp
            </a>
            <a
              className="inline-flex h-12 items-center justify-center gap-2 rounded-md border border-white/35 px-5 text-sm font-semibold text-white transition hover:bg-white/10"
              href="tel:+902120000000"
            >
              <Phone size={18} />
              Telefon
            </a>
          </div>
        </div>
      </section>

      <footer className="bg-slate-950 px-5 py-10 text-white">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-6 md:flex-row">
          <div>
            <div className="text-xl font-bold">siteüret</div>
            <p className="mt-3 max-w-md text-sm leading-6 text-white/60">
              Yerel işletmeler için hızlı, şık, mobil uyumlu ve yönetilebilir web
              siteleri.
            </p>
          </div>
          <div className="grid gap-2 text-sm text-white/70">
            <a href={whatsapp} rel="noreferrer" target="_blank">
              WhatsApp ile iletişim
            </a>
            <a href="tel:+902120000000">+90 212 000 00 00</a>
            <span>© 2026 siteüret</span>
          </div>
        </div>
      </footer>
    </main>
  );
}
