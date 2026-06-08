/* eslint-disable @next/next/no-img-element */
"use client";

import {
  ArrowUpRight,
  Camera,
  CheckCircle2,
  ChevronDown,
  MapPin,
  MessageCircle,
  Paintbrush,
  Phone,
  Scissors,
  Sparkles,
  Star,
  X,
} from "lucide-react";
import Link from "next/link";
import { useMemo, useState } from "react";
import { CountUp, Reveal } from "@/components/reveal";
import { salonConfig } from "../../../../config/salon";

const serviceIcons = [Scissors, Paintbrush, Sparkles];

const navTargets: Record<string, string> = {
  "Ana Sayfa": "#ana-sayfa",
  Hizmetler: "#hizmetler",
  Hakkımızda: "#hakkimizda",
  Galeri: "#galeri",
  İletişim: "#iletisim",
};

function SalonButton({
  href,
  children,
  variant = "dark",
}: {
  href: string;
  children: React.ReactNode;
  variant?: "dark" | "light";
}) {
  const className =
    variant === "light"
      ? "inline-flex h-12 items-center justify-center gap-2 rounded-md bg-white px-5 text-sm font-semibold text-[#4b3027] shadow-lg shadow-stone-950/15 transition hover:bg-[#fbf6f0]"
      : "inline-flex h-12 items-center justify-center gap-2 rounded-md bg-[#4b3027] px-5 text-sm font-semibold text-white shadow-lg shadow-stone-950/20 transition hover:bg-[#6e4538]";

  return (
    <a
      className={className}
      href={href}
      rel={href.startsWith("http") ? "noreferrer" : undefined}
      target={href.startsWith("http") ? "_blank" : undefined}
    >
      {children}
    </a>
  );
}

export default function SalonPage() {
  const [faqOpen, setFaqOpen] = useState(0);
  const [filter, setFilter] = useState("Tümü");
  const [lightbox, setLightbox] = useState<string | null>(null);

  const gallery = useMemo(
    () =>
      salonConfig.galeri.filter(
        (item) => filter === "Tümü" || item.etiket === filter,
      ),
    [filter],
  );

  return (
    <main className="min-h-screen bg-[#fbf6f0] text-[#2b2522]">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-white/20 bg-[#2b2522]/80 text-white backdrop-blur-xl">
        <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5">
          <Link className="font-serif text-2xl font-semibold" href="/">
            {salonConfig.isletmeAdi}
          </Link>
          <div className="hidden items-center gap-6 text-sm font-medium text-white/75 lg:flex">
            {salonConfig.metinler.nav.map((item) => (
              <a href={navTargets[item]} key={item}>
                {item}
              </a>
            ))}
          </div>
          <a
            className="inline-flex h-10 items-center justify-center gap-2 rounded-md bg-[#b77b5b] px-4 text-sm font-semibold text-white transition hover:bg-[#9a6549]"
            href={salonConfig.whatsapp}
            rel="noreferrer"
            target="_blank"
          >
            <MessageCircle size={17} />
            <span className="hidden sm:inline">{salonConfig.metinler.randevu}</span>
            <span className="sm:hidden">Randevu</span>
          </a>
        </nav>
      </header>

      <section
        className="relative isolate flex min-h-[86svh] items-center overflow-hidden px-5 pb-14 pt-28 text-white"
        id="ana-sayfa"
        style={{
          backgroundImage: `linear-gradient(90deg, rgba(43,37,34,.82), rgba(73,48,38,.56) 46%, rgba(183,123,91,.16)), url('${salonConfig.heroGorsel}')`,
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[#fbf6f0] to-transparent" />
        <div className="relative mx-auto w-full max-w-7xl">
          <Reveal className="max-w-3xl">
            <div className="mb-5 text-sm font-semibold tracking-[0.22em] text-white/75">
              {salonConfig.sehir} · {salonConfig.mahalle}
            </div>
            <h1 className="font-serif text-5xl font-semibold leading-[1.02] tracking-tight md:text-7xl">
              {salonConfig.metinler.heroBaslik}
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/80 md:text-xl">
              {salonConfig.metinler.heroAlt}
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <SalonButton href={`tel:${salonConfig.telefon.replaceAll(" ", "")}`} variant="light">
                <Phone size={18} />
                {salonConfig.metinler.hemenAra}
              </SalonButton>
              <SalonButton href={salonConfig.whatsapp}>
                <MessageCircle size={18} />
                {salonConfig.metinler.whatsappRandevu}
              </SalonButton>
            </div>
          </Reveal>
          <div className="mt-12 grid max-w-2xl gap-3 sm:grid-cols-3">
            {salonConfig.istatistikler.map((stat) => (
              <div
                className="rounded-lg border border-white/20 bg-white/15 p-4 backdrop-blur-md"
                key={stat.etiket}
              >
                <CountUp
                  label={stat.etiket}
                  suffix={stat.ek}
                  tone="light"
                  value={stat.deger}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-24" id="hizmetler">
        <Reveal className="mx-auto max-w-2xl text-center">
          <h2 className="font-serif text-4xl font-semibold tracking-tight md:text-5xl">
            {salonConfig.metinler.hizmetlerBaslik}
          </h2>
          <p className="mt-4 leading-8 text-[#7b6b62]">
            {salonConfig.metinler.hizmetlerAlt}
          </p>
        </Reveal>
        <div className="mx-auto mt-12 grid max-w-7xl gap-5 lg:grid-cols-3">
          {salonConfig.hizmetler.map((service, index) => {
            const Icon = serviceIcons[index] ?? Sparkles;
            return (
              <Reveal delay={index * 0.08} key={service.baslik}>
                <article className="rounded-lg border border-[#eadbd2] bg-white p-7 shadow-sm">
                  <div className="flex h-12 w-12 items-center justify-center rounded-md bg-[#f4e3d9] text-[#9a6549]">
                    <Icon size={24} />
                  </div>
                  <h3 className="mt-6 font-serif text-3xl font-semibold">
                    {service.baslik}
                  </h3>
                  <p className="mt-4 leading-7 text-[#7b6b62]">
                    {service.aciklama}
                  </p>
                  <div className="mt-6 space-y-3">
                    {service.maddeler.map((item) => (
                      <div className="flex items-center gap-3" key={item}>
                        <CheckCircle2 className="text-[#b77b5b]" size={18} />
                        <span className="text-sm font-medium text-[#51443d]">
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>
                  <a
                    className="mt-7 inline-flex h-11 w-full items-center justify-center gap-2 rounded-md border border-[#d8c0b0] px-4 text-sm font-semibold text-[#4b3027] transition hover:bg-[#fbf6f0]"
                    href={salonConfig.whatsapp}
                    rel="noreferrer"
                    target="_blank"
                  >
                    Bilgi Al
                    <ArrowUpRight size={16} />
                  </a>
                </article>
              </Reveal>
            );
          })}
        </div>
      </section>

      <section className="bg-white px-5 py-24" id="hakkimizda">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <Reveal>
            <div className="overflow-hidden rounded-lg">
              <img
                alt={`${salonConfig.isletmeAdi} salon atmosferi`}
                className="aspect-[4/5] h-full w-full object-cover"
                src={salonConfig.hakkimizdaGorsel}
              />
            </div>
          </Reveal>
          <Reveal delay={0.08}>
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#b77b5b]">
              {salonConfig.metinler.hakkimizdaAlt}
            </p>
            <h2 className="mt-4 font-serif text-4xl font-semibold tracking-tight md:text-6xl">
              {salonConfig.metinler.hakkimizdaBaslik}
            </h2>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-[#6c5a51]">
              {salonConfig.metinler.hakkimizdaMetin}
            </p>
            <div className="mt-8 grid gap-3 sm:grid-cols-3">
              {salonConfig.metinler.ozellikler.map((feature) => (
                <div
                  className="rounded-lg border border-[#eadbd2] bg-[#fbf6f0] p-4 text-sm font-semibold text-[#4b3027]"
                  key={feature}
                >
                  {feature}
                </div>
              ))}
            </div>
            <div className="mt-10 grid gap-6 sm:grid-cols-3">
              {salonConfig.istatistikler.map((stat) => (
                <CountUp
                  key={stat.etiket}
                  label={stat.etiket}
                  suffix={stat.ek}
                  value={stat.deger}
                />
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="px-5 py-24">
        <Reveal className="mx-auto max-w-2xl text-center">
          <div className="flex justify-center gap-1 text-[#b77b5b]">
            {Array.from({ length: 5 }).map((_, index) => (
              <Star fill="currentColor" key={index} size={20} />
            ))}
          </div>
          <h2 className="mt-4 font-serif text-4xl font-semibold tracking-tight md:text-5xl">
            {salonConfig.metinler.yorumlarBaslik}
          </h2>
          <p className="mt-4 leading-8 text-[#7b6b62]">
            5.0 Google Puanı · {salonConfig.metinler.yorumlarAlt}
          </p>
        </Reveal>
        <div className="mx-auto mt-12 grid max-w-6xl gap-5 md:grid-cols-3">
          {salonConfig.yorumlar.map((review, index) => (
            <Reveal delay={index * 0.08} key={review.isim}>
              <article className="rounded-lg border border-[#eadbd2] bg-white p-6 shadow-sm">
                <div className="flex gap-1 text-[#b77b5b]">
                  {Array.from({ length: 5 }).map((_, starIndex) => (
                    <Star fill="currentColor" key={starIndex} size={16} />
                  ))}
                </div>
                <p className="mt-5 leading-7 text-[#5f5048]">
                  &ldquo;{review.metin}&rdquo;
                </p>
                <div className="mt-6 text-sm font-semibold text-[#2b2522]">
                  {review.isim}
                </div>
                <div className="mt-1 text-sm text-[#8b7a70]">{review.zaman}</div>
              </article>
            </Reveal>
          ))}
        </div>
        <div className="mt-10 text-center">
          <a
            className="inline-flex h-11 items-center justify-center gap-2 rounded-md bg-[#4b3027] px-5 text-sm font-semibold text-white transition hover:bg-[#6e4538]"
            href={salonConfig.googleYorumLinki}
            rel="noreferrer"
            target="_blank"
          >
            {salonConfig.metinler.tumYorumlar}
            <ArrowUpRight size={16} />
          </a>
        </div>
      </section>

      <section className="bg-white px-5 py-24" id="galeri">
        <Reveal className="mx-auto max-w-2xl text-center">
          <h2 className="font-serif text-4xl font-semibold tracking-tight md:text-5xl">
            {salonConfig.metinler.galeriBaslik}
          </h2>
          <p className="mt-4 leading-8 text-[#7b6b62]">
            {salonConfig.metinler.galeriAlt}
          </p>
        </Reveal>
        <div className="mx-auto mt-8 flex max-w-3xl flex-wrap justify-center gap-2">
          {salonConfig.metinler.galeriFiltreleri.map((item) => (
            <button
              className={`h-10 rounded-md px-4 text-sm font-semibold transition ${
                filter === item
                  ? "bg-[#4b3027] text-white"
                  : "border border-[#eadbd2] bg-[#fbf6f0] text-[#5f5048] hover:bg-[#f4e3d9]"
              }`}
              key={item}
              onClick={() => setFilter(item)}
              type="button"
            >
              {item}
            </button>
          ))}
        </div>
        <div className="mx-auto mt-10 grid max-w-7xl gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {gallery.map((item) => (
            <button
              className="group overflow-hidden rounded-lg text-left"
              key={item.url}
              onClick={() => setLightbox(item.url)}
              type="button"
            >
              <img
                alt={item.alt}
                className="aspect-[4/3] w-full object-cover transition duration-500 group-hover:scale-105"
                src={item.url}
              />
              <span className="sr-only">{item.alt} görselini büyüt</span>
            </button>
          ))}
        </div>
      </section>

      <section className="px-5 py-24">
        <Reveal className="mx-auto max-w-2xl text-center">
          <h2 className="font-serif text-4xl font-semibold tracking-tight md:text-5xl">
            {salonConfig.metinler.sssBaslik}
          </h2>
        </Reveal>
        <div className="mx-auto mt-10 max-w-3xl divide-y divide-[#eadbd2] rounded-lg border border-[#eadbd2] bg-white">
          {salonConfig.sss.map((faq, index) => {
            const isOpen = faqOpen === index;
            return (
              <div key={faq.soru}>
                <button
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left font-semibold text-[#2b2522]"
                  onClick={() => setFaqOpen(isOpen ? -1 : index)}
                  type="button"
                >
                  {faq.soru}
                  <ChevronDown
                    className={`shrink-0 text-[#b77b5b] transition ${
                      isOpen ? "rotate-180" : ""
                    }`}
                    size={20}
                  />
                </button>
                {isOpen && (
                  <p className="px-5 pb-5 leading-7 text-[#6c5a51]">
                    {faq.cevap}
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </section>

      <section className="bg-[#4b3027] px-5 py-20 text-white">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-8 md:flex-row md:items-center">
          <Reveal>
            <h2 className="max-w-2xl font-serif text-4xl font-semibold tracking-tight md:text-5xl">
              {salonConfig.metinler.ctaBaslik}
            </h2>
            <p className="mt-4 max-w-2xl leading-8 text-white/75">
              {salonConfig.metinler.ctaAlt}
            </p>
          </Reveal>
          <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
            <SalonButton href={`tel:${salonConfig.telefon.replaceAll(" ", "")}`} variant="light">
              <Phone size={18} />
              {salonConfig.metinler.hemenAra}
            </SalonButton>
            <SalonButton href={salonConfig.whatsapp}>
              <MessageCircle size={18} />
              WhatsApp
            </SalonButton>
          </div>
        </div>
      </section>

      <section className="bg-white px-5 py-24" id="iletisim">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <Reveal>
            <h2 className="font-serif text-4xl font-semibold tracking-tight md:text-5xl">
              {salonConfig.metinler.iletisimBaslik}
            </h2>
            <div className="mt-8 space-y-5 text-[#5f5048]">
              <a className="flex items-start gap-3" href={`tel:${salonConfig.telefon.replaceAll(" ", "")}`}>
                <Phone className="mt-1 text-[#b77b5b]" size={20} />
                <span>{salonConfig.telefon}</span>
              </a>
              <a
                className="flex items-start gap-3"
                href={salonConfig.whatsapp}
                rel="noreferrer"
                target="_blank"
              >
                <MessageCircle className="mt-1 text-[#b77b5b]" size={20} />
                <span>{salonConfig.metinler.whatsappRandevu}</span>
              </a>
              <div className="flex items-start gap-3">
                <MapPin className="mt-1 text-[#b77b5b]" size={20} />
                <span>{salonConfig.adres}</span>
              </div>
              <a
                className="flex items-start gap-3"
                href={salonConfig.instagram}
                rel="noreferrer"
                target="_blank"
              >
                <Camera className="mt-1 text-[#b77b5b]" size={20} />
                <span>Instagram</span>
              </a>
            </div>
            <div className="mt-8 rounded-lg border border-[#eadbd2] bg-[#fbf6f0] p-5">
              <h3 className="font-semibold text-[#2b2522]">Çalışma Saatleri</h3>
              <div className="mt-3 space-y-2 text-sm text-[#6c5a51]">
                {salonConfig.calismaSaatleri.map((item) => (
                  <div key={item}>{item}</div>
                ))}
              </div>
            </div>
          </Reveal>
          <Reveal delay={0.08}>
            <div className="map-fallback relative h-[420px] overflow-hidden rounded-lg border border-[#eadbd2]">
              <iframe
                className="absolute inset-0 h-full w-full border-0 opacity-80"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                src={salonConfig.mapEmbedUrl}
                title={`${salonConfig.isletmeAdi} harita konumu`}
              />
              <div className="pointer-events-none absolute left-5 top-5 rounded-md bg-white/90 px-4 py-3 text-sm font-semibold text-[#4b3027] shadow-sm">
                {salonConfig.mahalle} · {salonConfig.sehir}
              </div>
              <div className="pointer-events-none absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 items-center gap-2 rounded-md bg-[#4b3027] px-4 py-3 text-sm font-semibold text-white shadow-xl shadow-stone-950/20">
                <MapPin size={18} />
                {salonConfig.isletmeAdi}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <footer className="bg-[#2b2522] px-5 py-10 text-white">
        <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-[1.2fr_0.8fr_0.8fr]">
          <div>
            <div className="font-serif text-2xl font-semibold">
              {salonConfig.isletmeAdi}
            </div>
            <p className="mt-3 max-w-md text-sm leading-6 text-white/60">
              {salonConfig.metinler.footerAciklama}
            </p>
          </div>
          <div className="space-y-2 text-sm text-white/70">
            {salonConfig.hizmetler.map((service) => (
              <a className="block" href="#hizmetler" key={service.baslik}>
                {service.baslik}
              </a>
            ))}
          </div>
          <div className="space-y-2 text-sm text-white/70">
            <a className="block" href={`tel:${salonConfig.telefon.replaceAll(" ", "")}`}>
              {salonConfig.telefon}
            </a>
            <a className="block" href={salonConfig.whatsapp} rel="noreferrer" target="_blank">
              WhatsApp
            </a>
            <span className="block">© 2026</span>
          </div>
        </div>
      </footer>

      {lightbox && (
        <div className="fixed inset-0 z-[80] flex items-center justify-center bg-black/80 p-5">
          <button
            aria-label="Galeriyi kapat"
            className="absolute right-5 top-5 flex h-11 w-11 items-center justify-center rounded-md bg-white text-[#2b2522]"
            onClick={() => setLightbox(null)}
            type="button"
          >
            <X size={22} />
          </button>
          <img
            alt="Büyütülmüş galeri görseli"
            className="max-h-[86vh] rounded-lg object-contain"
            src={lightbox}
          />
        </div>
      )}
    </main>
  );
}
