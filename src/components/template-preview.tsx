/* eslint-disable @next/next/no-img-element */
"use client";

import {
  ArrowUpRight,
  CheckCircle2,
  Clock,
  MapPin,
  MessageCircle,
  Phone,
  Quote,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import Link from "next/link";
import type { TemplateDefinition } from "@/config/templates";
import { templateWhatsAppUrl } from "@/config/templates";

function phoneHref(phone: string) {
  return `tel:${phone.replaceAll(" ", "")}`;
}

function Cta({
  template,
  className = "",
  dark = false,
}: {
  template: TemplateDefinition;
  className?: string;
  dark?: boolean;
}) {
  return (
    <a
      className={`inline-flex h-12 items-center justify-center gap-2 rounded-md px-5 text-sm font-semibold transition focus:outline-none focus:ring-4 ${
        dark
          ? "bg-white text-slate-950 hover:bg-slate-100 focus:ring-white/30"
          : "bg-[#16a34a] text-white shadow-lg shadow-emerald-950/20 hover:bg-[#15803d] focus:ring-emerald-200"
      } ${className}`}
      href={templateWhatsAppUrl(template)}
      rel="noreferrer"
      target="_blank"
    >
      <MessageCircle size={18} />
      WhatsApp Randevu
    </a>
  );
}

function MiniMap({ template, tone = "light" }: { template: TemplateDefinition; tone?: "light" | "dark" }) {
  return (
    <div
      className={`map-fallback relative min-h-[280px] overflow-hidden rounded-lg border ${
        tone === "dark" ? "border-white/15" : "border-slate-200"
      }`}
    >
      <div className="absolute left-5 top-5 rounded-md bg-white/90 px-4 py-3 text-sm font-semibold text-slate-900 shadow-sm">
        {template.mapLabel}
      </div>
      <div
        className="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 items-center gap-2 rounded-md px-4 py-3 text-sm font-semibold text-white shadow-xl"
        style={{ backgroundColor: template.accent }}
      >
        <MapPin size={18} />
        {template.brand}
      </div>
    </div>
  );
}

function ContactBand({
  template,
  dark = false,
}: {
  template: TemplateDefinition;
  dark?: boolean;
}) {
  return (
    <section
      className={`px-5 py-16 ${
        dark ? "bg-slate-950 text-white" : "bg-white text-slate-950"
      }`}
      id="iletisim"
    >
      <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-[0.85fr_1.15fr] lg:items-stretch">
        <div className={`rounded-lg p-6 ${dark ? "bg-white/8" : "bg-slate-50"}`}>
          <h2 className="text-3xl font-semibold">Randevu ve iletişim</h2>
          <div className={`mt-6 grid gap-4 text-sm ${dark ? "text-white/75" : "text-slate-650"}`}>
            <a className="flex items-center gap-3" href={phoneHref(template.phone)}>
              <Phone size={18} />
              {template.phone}
            </a>
            <a className="flex items-center gap-3" href={templateWhatsAppUrl(template)} rel="noreferrer" target="_blank">
              <MessageCircle size={18} />
              WhatsApp ile randevu al
            </a>
            <div className="flex items-start gap-3">
              <MapPin className="mt-0.5" size={18} />
              {template.address}
            </div>
            <div className="flex items-start gap-3">
              <Clock className="mt-0.5" size={18} />
              <div className="grid gap-1">
                {template.hours.map((hour) => (
                  <span key={hour}>{hour}</span>
                ))}
              </div>
            </div>
          </div>
          <Cta className="mt-7 w-full" dark={dark} template={template} />
        </div>
        <MiniMap template={template} tone={dark ? "dark" : "light"} />
      </div>
    </section>
  );
}

function ReviewCards({
  template,
  className = "",
}: {
  template: TemplateDefinition;
  className?: string;
}) {
  return (
    <div className={`grid gap-4 md:grid-cols-2 ${className}`}>
      {template.reviews.map((review) => (
        <article className="rounded-lg border border-current/15 p-5" key={review.name}>
          <Quote className="mb-4 opacity-60" size={22} />
          <p className="leading-7">{review.text}</p>
          <div className="mt-5 text-sm font-semibold">{review.name}</div>
        </article>
      ))}
    </div>
  );
}

function ClassicBarber({ template }: { template: TemplateDefinition }) {
  return (
    <main className="min-h-screen bg-[#251812] text-[#f8ead5]">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-[#f2c27d]/25 bg-[#251812]/90 backdrop-blur-xl">
        <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5">
          <Link className="font-serif text-2xl font-semibold" href="/">
            {template.brand}
          </Link>
          <div className="hidden items-center gap-6 text-sm font-semibold text-[#f8ead5]/75 md:flex">
            <a href="#hizmetler">Hizmetler</a>
            <a href="#fiyatlar">Fiyat Panosu</a>
            <a href="#galeri">Galeri</a>
            <a href="#iletisim">İletişim</a>
          </div>
          <Cta className="h-10 px-4" template={template} />
        </nav>
      </header>

      <section className="px-5 pb-20 pt-28">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.92fr_1.08fr] lg:items-end">
          <div>
            <div className="mb-5 h-1 w-24 bg-[#d39b55]" />
            <h1 className="font-serif text-5xl font-semibold leading-none md:text-7xl">
              {template.heroTitle}
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-8 text-[#f8ead5]/75">
              {template.heroText}
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Cta template={template} />
              <a
                className="inline-flex h-12 items-center justify-center gap-2 rounded-md border border-[#d39b55]/50 px-5 text-sm font-semibold text-[#f8ead5] transition hover:bg-[#d39b55]/15"
                href="#fiyatlar"
              >
                Fiyat panosuna bak
                <ArrowUpRight size={17} />
              </a>
            </div>
          </div>
          <div className="relative">
            <img
              alt={`${template.brand} klasik berber demo görseli`}
              className="aspect-[4/3] w-full rounded-lg object-cover"
              src={template.heroImage}
            />
            <div className="absolute -bottom-6 left-5 right-5 rounded-lg border border-[#d39b55]/30 bg-[#3a251a] p-5 shadow-2xl shadow-black/30">
              <div className="grid gap-3 sm:grid-cols-3">
                {template.highlights.map((item) => (
                  <div className="text-sm font-semibold" key={item}>
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#f8ead5] px-5 py-20 text-[#251812]" id="fiyatlar">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <h2 className="font-serif text-4xl font-semibold">Tahta fiyat panosu</h2>
            <p className="mt-4 leading-7 text-[#6f4a32]">
              Geleneksel berber müşterisi için en kritik bilgiler: hizmet, fiyat,
              saat ve hızlı randevu aynı ekranda.
            </p>
          </div>
          <div className="rounded-lg bg-[#2f1d15] p-4 text-[#f8ead5] shadow-xl">
            {template.services.map((service) => (
              <div
                className="grid gap-3 border-b border-[#d39b55]/20 py-5 sm:grid-cols-[1fr_auto]"
                key={service.name}
              >
                <div>
                  <h3 className="font-serif text-2xl">{service.name}</h3>
                  <p className="mt-1 text-sm leading-6 text-[#f8ead5]/70">
                    {service.text}
                  </p>
                </div>
                <div className="font-serif text-2xl text-[#d39b55]">
                  {service.price}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-20" id="hizmetler">
        <div className="mx-auto grid max-w-7xl gap-5 md:grid-cols-2">
          {template.packages.map((pack) => (
            <article className="rounded-lg border border-[#d39b55]/25 bg-[#311f17] p-7" key={pack.name}>
              <h3 className="font-serif text-3xl">{pack.name}</h3>
              <p className="mt-4 text-3xl font-bold text-[#d39b55]">{pack.price}</p>
              <p className="mt-3 leading-7 text-[#f8ead5]/70">{pack.details}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-[#1a100c] px-5 py-20" id="galeri">
        <div className="mx-auto max-w-7xl">
          <h2 className="font-serif text-4xl font-semibold">Dükkan atmosferi</h2>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {template.gallery.map((item, index) => (
              <img
                alt={item.alt}
                className={`h-72 w-full rounded-lg object-cover ${index === 1 ? "md:mt-10" : ""}`}
                key={item.src}
                src={item.src}
              />
            ))}
          </div>
          <ReviewCards className="mt-10 text-[#f8ead5]" template={template} />
        </div>
      </section>

      <ContactBand dark template={template} />
    </main>
  );
}

function PremiumBarber({ template }: { template: TemplateDefinition }) {
  return (
    <main className="min-h-screen bg-[#f6f5ef] text-[#111111]">
      <header className="sticky top-0 z-50 border-b border-black/10 bg-[#f6f5ef]/90 backdrop-blur-xl">
        <nav className="mx-auto grid h-16 max-w-7xl grid-cols-[1fr_auto_1fr] items-center px-5 text-sm font-semibold">
          <Link href="/">{template.brand}</Link>
          <div className="hidden gap-7 md:flex">
            <a href="#servisler">Servisler</a>
            <a href="#paketler">Paketler</a>
            <a href="#iletisim">Randevu</a>
          </div>
          <a className="justify-self-end border-b border-black pb-1" href={templateWhatsAppUrl(template)} rel="noreferrer" target="_blank">
            Book Studio
          </a>
        </nav>
      </header>

      <section className="px-5 py-16">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.08fr_0.92fr] lg:items-center">
          <div>
            <h1 className="max-w-4xl text-5xl font-semibold leading-none md:text-7xl">
              {template.heroTitle}
            </h1>
            <p className="mt-8 max-w-xl text-lg leading-8 text-black/62">
              {template.heroText}
            </p>
            <div className="mt-10 grid max-w-xl border-y border-black">
              {template.highlights.map((item) => (
                <div className="flex items-center justify-between border-b border-black/15 py-4 text-sm font-semibold last:border-b-0" key={item}>
                  {item}
                  <ArrowUpRight size={16} />
                </div>
              ))}
            </div>
          </div>
          <img
            alt={`${template.brand} premium barber studio demo görseli`}
            className="aspect-[3/4] w-full object-cover grayscale"
            src={template.heroImage}
          />
        </div>
      </section>

      <section className="border-y border-black bg-[#111] px-5 py-10 text-[#f6f5ef]" id="servisler">
        <div className="mx-auto flex max-w-7xl snap-x gap-4 overflow-x-auto pb-2">
          {template.services.map((service) => (
            <article className="min-w-[280px] border border-white/20 p-6" key={service.name}>
              <div className="text-sm text-white/55">{service.price}</div>
              <h3 className="mt-5 text-2xl font-semibold">{service.name}</h3>
              <p className="mt-4 leading-7 text-white/62">{service.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="px-5 py-20" id="paketler">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.7fr_1.3fr]">
          <h2 className="text-4xl font-semibold md:text-6xl">Minimal paket tablosu</h2>
          <div className="grid gap-0 border-y border-black">
            {template.packages.map((pack) => (
              <div className="grid gap-4 border-b border-black/15 py-7 last:border-b-0 md:grid-cols-[1fr_auto]" key={pack.name}>
                <div>
                  <h3 className="text-2xl font-semibold">{pack.name}</h3>
                  <p className="mt-2 text-black/62">{pack.details}</p>
                </div>
                <div className="text-3xl font-semibold">{pack.price}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 pb-20">
        <div className="mx-auto grid max-w-7xl gap-4 md:grid-cols-[1.2fr_0.8fr_0.8fr]">
          {template.gallery.map((item) => (
            <img alt={item.alt} className="h-[420px] w-full object-cover grayscale" key={item.src} src={item.src} />
          ))}
        </div>
        <div className="mx-auto mt-12 max-w-5xl border-l-4 border-black pl-6">
          <p className="text-3xl leading-tight md:text-5xl">
            “{template.reviews[0].text}”
          </p>
          <div className="mt-5 text-sm font-semibold">{template.reviews[0].name}</div>
        </div>
      </section>

      <ContactBand template={template} />
    </main>
  );
}

function UrbanFade({ template }: { template: TemplateDefinition }) {
  return (
    <main className="min-h-screen bg-[#101010] text-white">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-[#d7ff38]/40 bg-[#101010]/90 backdrop-blur-xl">
        <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5">
          <Link className="text-2xl font-black uppercase" href="/">
            {template.brand}
          </Link>
          <div className="hidden items-center gap-5 text-sm font-black uppercase md:flex">
            <a href="#servisler">Cuts</a>
            <a href="#galeri">Grid</a>
            <a href="#iletisim">WhatsApp</a>
          </div>
          <Cta className="h-10 bg-[#d7ff38] px-4 text-black hover:bg-[#c2ed20]" template={template} />
        </nav>
      </header>

      <section className="relative isolate overflow-hidden px-5 pb-16 pt-28">
        <div className="absolute inset-0 bg-[linear-gradient(135deg,#101010_0%,#101010_42%,#d7ff38_42%,#d7ff38_56%,#ff3d81_56%,#ff3d81_68%,#101010_68%)] opacity-80" />
        <div className="relative mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div className="order-2 lg:order-1">
            <div className="inline-flex rotate-[-2deg] bg-[#d7ff38] px-4 py-2 text-sm font-black uppercase text-black">
              Bugün fresh görün
            </div>
            <h1 className="mt-6 text-5xl font-black uppercase leading-none md:text-8xl">
              {template.heroTitle}
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-8 text-white/76">
              {template.heroText}
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Cta className="bg-[#ff3d81] hover:bg-[#e52f72]" template={template} />
              <a className="inline-flex h-12 items-center justify-center rounded-md border border-white/30 px-5 text-sm font-black uppercase" href="#servisler">
                Kesimleri gör
              </a>
            </div>
          </div>
          <div className="relative order-1 lg:order-2">
            <img alt={`${template.brand} urban fade demo görseli`} className="aspect-[4/3] w-full rotate-1 rounded-lg object-cover shadow-2xl shadow-black/50" src={template.heroImage} />
            <div className="absolute -bottom-5 left-5 rotate-[-3deg] bg-[#d7ff38] px-5 py-3 text-xl font-black uppercase text-black">
              Fade Menü
            </div>
          </div>
        </div>
      </section>

      <section className="px-5 py-16" id="servisler">
        <div className="mx-auto grid max-w-7xl gap-4 md:grid-cols-3">
          {template.services.map((service, index) => (
            <article className={`rounded-lg p-6 text-black ${index === 1 ? "bg-[#d7ff38]" : "bg-white"}`} key={service.name}>
              <div className="text-4xl font-black">{service.price}</div>
              <h3 className="mt-6 text-2xl font-black uppercase">{service.name}</h3>
              <p className="mt-3 leading-7 text-black/70">{service.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-[#d7ff38] px-5 py-12 text-black">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-4 md:flex-row md:items-center">
          <h2 className="text-4xl font-black uppercase md:text-6xl">Haftanın kampanyası: fresh cut + sakal</h2>
          <Cta className="bg-black text-white hover:bg-[#222]" template={template} />
        </div>
      </section>

      <section className="px-5 py-20" id="galeri">
        <div className="mx-auto grid max-w-7xl gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {template.gallery.concat(template.gallery.slice(0, 1)).map((item, index) => (
            <img alt={item.alt} className={`w-full rounded-lg object-cover ${index % 2 === 0 ? "h-80" : "h-56"}`} key={`${item.src}-${index}`} src={item.src} />
          ))}
        </div>
        <ReviewCards className="mx-auto mt-10 max-w-5xl text-white" template={template} />
      </section>

      <ContactBand dark template={template} />
    </main>
  );
}

function SoftBeauty({ template }: { template: TemplateDefinition }) {
  return (
    <main className="min-h-screen bg-[#fff7f8] text-[#3c2b32]">
      <header className="sticky top-0 z-50 border-b border-[#efd3dc] bg-[#fff7f8]/88 backdrop-blur-xl">
        <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5">
          <Link className="font-serif text-2xl font-semibold" href="/">
            {template.brand}
          </Link>
          <div className="hidden items-center gap-6 text-sm font-semibold text-[#7c5b66] md:flex">
            <a href="#hizmetler">Hizmetler</a>
            <a href="#galeri">Galeri</a>
            <a href="#iletisim">Randevu</a>
          </div>
          <Cta className="h-10 bg-[#d98aa8] px-4 hover:bg-[#c67595]" template={template} />
        </nav>
      </header>

      <section className="px-5 py-16">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1fr_1fr] lg:items-center">
          <div>
            <h1 className="font-serif text-5xl font-semibold leading-tight md:text-7xl">
              {template.heroTitle}
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-8 text-[#755763]">
              {template.heroText}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              {template.highlights.map((item) => (
                <span className="rounded-full bg-white px-4 py-2 text-sm font-semibold text-[#8f6073] shadow-sm" key={item}>
                  {item}
                </span>
              ))}
            </div>
            <Cta className="mt-9 bg-[#d98aa8] hover:bg-[#c67595]" template={template} />
          </div>
          <div className="relative">
            <img alt={`${template.brand} pastel güzellik salonu demo görseli`} className="aspect-[4/5] w-full rounded-[2rem] object-cover shadow-xl shadow-pink-950/10" src={template.heroImage} />
            <div className="absolute -bottom-6 -left-2 rounded-[1.5rem] bg-white p-5 shadow-xl shadow-pink-950/10">
              <Sparkles className="text-[#d98aa8]" size={24} />
              <p className="mt-2 max-w-48 text-sm font-semibold">Sakin, zarif ve mobil uyumlu güzellik vitrini.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="px-5 py-20" id="hizmetler">
        <div className="mx-auto grid max-w-7xl gap-5 md:grid-cols-3">
          {template.services.map((service) => (
            <article className="rounded-[1.5rem] bg-white p-7 shadow-sm shadow-pink-950/8" key={service.name}>
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#f8dfe8] text-[#c67595]">
                <Sparkles size={22} />
              </div>
              <h3 className="mt-6 font-serif text-3xl">{service.name}</h3>
              <p className="mt-3 leading-7 text-[#755763]">{service.text}</p>
              <div className="mt-5 text-xl font-semibold text-[#d98aa8]">{service.price}</div>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-white px-5 py-20" id="galeri">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <h2 className="font-serif text-4xl font-semibold md:text-6xl">Soft galeri akışı</h2>
            <p className="mt-5 leading-8 text-[#755763]">Görseller büyük, nefes alan ve salon karakterini yumuşak anlatacak şekilde yerleşir.</p>
            <ReviewCards className="mt-8" template={template} />
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {template.gallery.map((item, index) => (
              <img alt={item.alt} className={`w-full rounded-[1.5rem] object-cover ${index === 0 ? "h-80 sm:col-span-2" : "h-64"}`} key={item.src} src={item.src} />
            ))}
          </div>
        </div>
      </section>

      <ContactBand template={template} />
    </main>
  );
}

function LuxuryBeauty({ template }: { template: TemplateDefinition }) {
  return (
    <main className="min-h-screen bg-[#2b1019] text-[#f7ead9]">
      <header className="sticky top-0 z-50 border-b border-[#d5b16b]/25 bg-[#2b1019]/90 backdrop-blur-xl">
        <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5">
          <Link className="font-serif text-2xl font-semibold" href="/">
            {template.brand}
          </Link>
          <div className="hidden items-center gap-7 text-sm font-semibold text-[#f7ead9]/70 md:flex">
            <a href="#paketler">Paketler</a>
            <a href="#galeri">Galeri</a>
            <a href="#iletisim">Concierge</a>
          </div>
          <Cta className="h-10 bg-[#d5b16b] px-4 text-[#2b1019] hover:bg-[#c39b51]" template={template} />
        </nav>
      </header>

      <section className="px-5 py-16">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <img alt={`${template.brand} luxury beauty lounge demo görseli`} className="aspect-[4/5] w-full rounded-t-full object-cover" src={template.heroImage} />
          <div>
            <h1 className="font-serif text-5xl font-semibold leading-tight md:text-7xl">
              {template.heroTitle}
            </h1>
            <p className="mt-7 max-w-xl text-lg leading-8 text-[#f7ead9]/72">
              {template.heroText}
            </p>
            <div className="mt-10 grid max-w-xl gap-4 border-l border-[#d5b16b] pl-6">
              {template.highlights.map((item) => (
                <div className="text-sm font-semibold uppercase text-[#d5b16b]" key={item}>
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#f7ead9] px-5 py-20 text-[#2b1019]" id="paketler">
        <div className="mx-auto max-w-7xl">
          <h2 className="font-serif text-5xl font-semibold md:text-7xl">Signature paketler</h2>
          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {template.packages.map((pack) => (
              <article className="rounded-lg border border-[#d5b16b] bg-white/45 p-8" key={pack.name}>
                <h3 className="font-serif text-4xl">{pack.name}</h3>
                <p className="mt-5 text-4xl font-semibold text-[#8a6532]">{pack.price}</p>
                <p className="mt-5 leading-8 text-[#634152]">{pack.details}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-20">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.72fr_1.28fr]">
          <div>
            <h2 className="font-serif text-4xl font-semibold">Lounge servisleri</h2>
            <p className="mt-5 leading-8 text-[#f7ead9]/70">Servisler lüks algıyı bozmadan kısa, sakin ve paketlerle ilişkili sunulur.</p>
          </div>
          <div className="grid gap-4">
            {template.services.map((service) => (
              <div className="grid gap-4 border-b border-[#d5b16b]/25 pb-5 md:grid-cols-[1fr_auto]" key={service.name}>
                <div>
                  <h3 className="font-serif text-3xl">{service.name}</h3>
                  <p className="mt-2 text-[#f7ead9]/68">{service.text}</p>
                </div>
                <div className="text-2xl text-[#d5b16b]">{service.price}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 pb-20" id="galeri">
        <div className="mx-auto grid max-w-7xl gap-5 md:grid-cols-3">
          {template.gallery.map((item) => (
            <img alt={item.alt} className="h-[460px] w-full rounded-lg object-cover" key={item.src} src={item.src} />
          ))}
        </div>
        <div className="mx-auto mt-12 max-w-4xl text-center">
          <p className="font-serif text-4xl leading-tight">“{template.reviews[0].text}”</p>
          <div className="mt-5 text-[#d5b16b]">{template.reviews[0].name}</div>
        </div>
      </section>

      <ContactBand dark template={template} />
    </main>
  );
}

function CleanClinic({ template }: { template: TemplateDefinition }) {
  return (
    <main className="min-h-screen bg-white text-[#102033]">
      <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/92 backdrop-blur-xl">
        <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5">
          <Link className="text-xl font-semibold" href="/">
            {template.brand}
          </Link>
          <div className="hidden items-center gap-6 text-sm font-semibold text-slate-600 md:flex">
            <a href="#hizmetler">Uygulamalar</a>
            <a href="#surec">Süreç</a>
            <a href="#iletisim">İletişim</a>
          </div>
          <Cta className="h-10 bg-[#2aa7a3] px-4 hover:bg-[#238b88]" template={template} />
        </nav>
      </header>

      <section className="bg-[#eef8fb] px-5 py-16">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1fr_1fr] lg:items-center">
          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-md bg-white px-3 py-2 text-sm font-semibold text-[#2aa7a3]">
              <ShieldCheck size={17} />
              Hijyen ve süreç bilgisi önde
            </div>
            <h1 className="text-5xl font-semibold leading-tight md:text-7xl">
              {template.heroTitle}
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">
              {template.heroText}
            </p>
            <Cta className="mt-8 bg-[#2aa7a3] hover:bg-[#238b88]" template={template} />
          </div>
          <div className="rounded-lg bg-white p-3 shadow-xl shadow-cyan-950/10">
            <img alt={`${template.brand} clean clinic demo görseli`} className="aspect-[4/3] w-full rounded-md object-cover" src={template.heroImage} />
            <div className="grid gap-3 p-4 sm:grid-cols-3">
              {template.highlights.map((item) => (
                <div className="rounded-md bg-[#eef8fb] p-3 text-sm font-semibold text-[#238b88]" key={item}>
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="px-5 py-20" id="hizmetler">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <h2 className="text-4xl font-semibold md:text-6xl">Net hizmet açıklamaları</h2>
            <p className="mt-5 leading-8 text-slate-600">Klinik tipte müşterinin aradığı şey netliktir: ne yapılır, süreç nasıl işler ve randevu nasıl alınır.</p>
          </div>
          <div className="grid gap-4">
            {template.services.map((service) => (
              <article className="rounded-lg border border-slate-200 p-5" key={service.name}>
                <div className="flex items-start gap-4">
                  <CheckCircle2 className="mt-1 text-[#2aa7a3]" size={22} />
                  <div>
                    <h3 className="text-2xl font-semibold">{service.name}</h3>
                    <p className="mt-2 leading-7 text-slate-600">{service.text}</p>
                    <div className="mt-3 text-sm font-semibold text-[#238b88]">{service.price}</div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-950 px-5 py-20 text-white" id="surec">
        <div className="mx-auto grid max-w-7xl gap-5 md:grid-cols-3">
          {["Ön görüşme", "Bakım planı", "Takip"].map((step, index) => (
            <article className="rounded-lg border border-white/12 bg-white/6 p-6" key={step}>
              <div className="flex h-11 w-11 items-center justify-center rounded-md bg-[#2aa7a3] font-semibold">
                {index + 1}
              </div>
              <h3 className="mt-6 text-2xl font-semibold">{step}</h3>
              <p className="mt-3 leading-7 text-white/66">
                Demo süreç alanı. Müşteri ne olacağını sayfada açıkça görür.
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="px-5 py-20">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1fr_1fr] lg:items-center">
          <div className="grid gap-4 sm:grid-cols-2">
            {template.gallery.map((item, index) => (
              <img alt={item.alt} className={`w-full rounded-lg object-cover ${index === 0 ? "h-80 sm:col-span-2" : "h-56"}`} key={item.src} src={item.src} />
            ))}
          </div>
          <div>
            <h2 className="text-4xl font-semibold md:text-6xl">Güven veren klinik sayfa akışı</h2>
            <ReviewCards className="mt-8" template={template} />
          </div>
        </div>
      </section>

      <ContactBand template={template} />
    </main>
  );
}

export function TemplatePreview({ template }: { template: TemplateDefinition }) {
  if (template.layout === "classic-barber") return <ClassicBarber template={template} />;
  if (template.layout === "premium-barber") return <PremiumBarber template={template} />;
  if (template.layout === "urban-fade") return <UrbanFade template={template} />;
  if (template.layout === "soft-beauty") return <SoftBeauty template={template} />;
  if (template.layout === "luxury-beauty") return <LuxuryBeauty template={template} />;
  return <CleanClinic template={template} />;
}
