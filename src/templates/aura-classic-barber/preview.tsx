"use client";

import { Clock, MapPin, Phone, Scissors, Star } from "lucide-react";
import Link from "next/link";
import { BookingTrigger } from "@/components/booking";
import { Reveal } from "@/components/reveal";
import type { TemplateDefinition } from "@/config/templates";

export function AuraClassicPreview({ template }: { template: TemplateDefinition }) {
  const bookingTarget = { templateName: template.name, whatsapp: template.whatsapp };

  return (
    <main className="min-h-screen bg-[#1a0f0a] text-[#f5dfbd]" style={{ fontFamily: "var(--font-serif)" }}>
      {/* Top brass bar */}
      <div className="bg-[#b57a3a] py-2 text-center text-[10px] font-bold uppercase tracking-[0.4em] text-[#1a0f0a]">
        Est. 1962 · Klasik berber · Randevulu
      </div>

      <header className="border-b border-[#5b3825]/60 bg-[#261711]/95 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-5">
          <Link className="text-2xl font-semibold tracking-wide text-[#f5dfbd]" href="/">
            <span className="text-[#b57a3a]">⌖</span> {template.brand}
          </Link>
          <nav className="hidden gap-7 text-sm font-medium uppercase tracking-widest text-[#f5dfbd]/80 md:flex">
            <a href="#hizmetler">Hizmetler</a>
            <a href="#paketler">Paketler</a>
            <a href="#ustalar">Ustalar</a>
            <a href="#galeri">Galeri</a>
            <a href="#iletisim">İletişim</a>
          </nav>
          <BookingTrigger
            className="inline-flex h-10 items-center gap-2 rounded-sm border-2 border-[#b57a3a] px-4 text-xs font-bold uppercase tracking-widest text-[#b57a3a] transition hover:bg-[#b57a3a] hover:text-[#1a0f0a]"
            label="Randevu Al"
            target={bookingTarget}
          />
        </div>
      </header>

      {/* Hero with price board */}
      <section className="relative overflow-hidden border-b border-[#5b3825]/40 px-5 py-20 md:py-32">
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage:
              "repeating-linear-gradient(0deg, rgba(181,122,58,.08) 0 1px, transparent 1px 36px), repeating-linear-gradient(90deg, rgba(181,122,58,.08) 0 1px, transparent 1px 36px)",
          }}
        />
        <div className="relative mx-auto grid max-w-6xl gap-12 lg:grid-cols-[1.05fr_.95fr] lg:items-center">
          <Reveal>
            <p className="text-xs font-bold uppercase tracking-[0.4em] text-[#b57a3a]">Mahallenizin klasiği</p>
            <h1 className="mt-5 text-5xl font-semibold leading-tight md:text-7xl">{template.heroTitle}</h1>
            <p className="mt-6 max-w-xl text-lg leading-8 text-[#f5dfbd]/75" style={{ fontFamily: "var(--font-sans)" }}>
              {template.heroText}
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <BookingTrigger
                className="inline-flex h-12 items-center gap-2 rounded-sm bg-[#b57a3a] px-6 text-sm font-bold uppercase tracking-widest text-[#1a0f0a] transition hover:bg-[#d39854]"
                label="Randevu Al"
                target={bookingTarget}
              />
              <a
                className="inline-flex h-12 items-center gap-2 rounded-sm border border-[#f5dfbd]/40 px-6 text-sm font-semibold uppercase tracking-widest text-[#f5dfbd] transition hover:bg-[#f5dfbd]/10"
                href={`tel:${template.phone.replace(/\s/g, "")}`}
              >
                <Phone size={16} /> {template.phone}
              </a>
            </div>
          </Reveal>

          {/* Wooden price board */}
          <Reveal delay={0.1}>
            <div className="relative">
              <div className="absolute -inset-3 rounded-md bg-gradient-to-br from-[#b57a3a]/40 to-transparent blur-2xl" />
              <div
                className="relative rounded-md border-8 border-double border-[#b57a3a] p-7 shadow-2xl"
                style={{
                  background:
                    "linear-gradient(135deg, #2c1a11 0%, #3b2417 100%), repeating-linear-gradient(90deg, rgba(0,0,0,.1) 0 2px, transparent 2px 12px)",
                }}
              >
                <div className="text-center font-semibold uppercase tracking-[0.4em] text-[#b57a3a]">— Fiyat Panosu —</div>
                <div className="mt-6 grid gap-4">
                  {template.services.map((service) => (
                    <div className="flex items-baseline justify-between gap-4 border-b border-dashed border-[#b57a3a]/40 pb-3" key={service.name}>
                      <span className="text-lg font-semibold">{service.name}</span>
                      <span className="flex-1 mx-3 border-b border-dotted border-[#b57a3a]/40" />
                      <span className="text-lg font-bold text-[#f5dfbd]">{service.price}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-6 text-center text-[10px] uppercase tracking-[0.3em] text-[#f5dfbd]/60">
                  Süreler hizmet kartlarında belirtilmiştir
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Story */}
      <section className="border-b border-[#5b3825]/40 px-5 py-20" id="hikaye">
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[1fr_1fr] lg:items-start">
          <Reveal>
            <p className="text-xs font-bold uppercase tracking-[0.4em] text-[#b57a3a]">Hikayemiz</p>
            <h2 className="mt-4 text-4xl font-semibold md:text-5xl">{template.aboutTitle}</h2>
          </Reveal>
          <Reveal delay={0.05}>
            <p className="text-lg leading-9 text-[#f5dfbd]/80" style={{ fontFamily: "var(--font-sans)" }}>
              {template.aboutText}
            </p>
            <div className="mt-7 grid gap-3 sm:grid-cols-3">
              {template.highlights.map((item) => (
                <div className="rounded-sm border border-[#b57a3a]/40 bg-[#261711] px-4 py-3 text-center text-xs font-bold uppercase tracking-widest text-[#b57a3a]" key={item}>
                  {item}
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* Services as service cards */}
      <section className="border-b border-[#5b3825]/40 px-5 py-20" id="hizmetler">
        <div className="mx-auto max-w-6xl">
          <Reveal>
            <p className="text-xs font-bold uppercase tracking-[0.4em] text-[#b57a3a]">Hizmetler</p>
            <h2 className="mt-4 text-4xl font-semibold md:text-5xl">Usta işçilik, net süre, net fiyat.</h2>
          </Reveal>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {template.services.map((service, idx) => (
              <Reveal delay={idx * 0.05} key={service.name}>
                <article className="group h-full rounded-sm border-2 border-[#5b3825] bg-[#231410] p-7 transition hover:border-[#b57a3a]">
                  <Scissors className="text-[#b57a3a]" size={26} />
                  <h3 className="mt-5 text-2xl font-semibold">{service.name}</h3>
                  <p className="mt-3 leading-7 text-[#f5dfbd]/70" style={{ fontFamily: "var(--font-sans)" }}>
                    {service.text}
                  </p>
                  <div className="mt-6 flex items-center justify-between border-t border-[#5b3825] pt-4">
                    <span className="flex items-center gap-2 text-sm text-[#f5dfbd]/70">
                      <Clock size={14} /> {service.duration}
                    </span>
                    <span className="text-xl font-bold text-[#b57a3a]">{service.price}</span>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Packages */}
      <section className="border-b border-[#5b3825]/40 bg-[#1f1209] px-5 py-20" id="paketler">
        <div className="mx-auto max-w-6xl">
          <Reveal>
            <p className="text-xs font-bold uppercase tracking-[0.4em] text-[#b57a3a]">Paketler</p>
            <h2 className="mt-4 text-4xl font-semibold md:text-5xl">Sıklıkla seçilen paketler.</h2>
          </Reveal>
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {template.packages.map((pack, idx) => (
              <Reveal delay={idx * 0.05} key={pack.name}>
                <article className="flex h-full flex-col rounded-sm border-2 border-[#b57a3a]/60 bg-[#231410] p-8">
                  <h3 className="text-3xl font-semibold">{pack.name}</h3>
                  <p className="mt-4 text-4xl font-bold text-[#b57a3a]">{pack.price}</p>
                  <p className="mt-4 leading-8 text-[#f5dfbd]/75" style={{ fontFamily: "var(--font-sans)" }}>
                    {pack.details}
                  </p>
                  <BookingTrigger
                    className="mt-auto inline-flex h-11 items-center justify-center gap-2 rounded-sm border-2 border-[#b57a3a] text-xs font-bold uppercase tracking-widest text-[#b57a3a] transition hover:bg-[#b57a3a] hover:text-[#1a0f0a]"
                    label={`${pack.name} için Randevu`}
                    target={bookingTarget}
                  />
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Ustalar (team) */}
      <section className="border-b border-[#5b3825]/40 px-5 py-20" id="ustalar">
        <div className="mx-auto max-w-6xl">
          <Reveal>
            <p className="text-xs font-bold uppercase tracking-[0.4em] text-[#b57a3a]">Ustalar</p>
            <h2 className="mt-4 text-4xl font-semibold md:text-5xl">Koltukların arkasındaki eller.</h2>
          </Reveal>
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {template.team.map((member, idx) => (
              <Reveal delay={idx * 0.05} key={member.name}>
                <article className="flex gap-6 rounded-sm border border-[#5b3825] bg-[#231410] p-6">
                  <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-full border-2 border-[#b57a3a] text-2xl font-bold text-[#b57a3a]">
                    {member.avatar}
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold">{member.name}</h3>
                    <p className="text-sm font-bold uppercase tracking-widest text-[#b57a3a]">{member.role}</p>
                    <p className="mt-3 leading-7 text-[#f5dfbd]/75" style={{ fontFamily: "var(--font-sans)" }}>
                      {member.bio}
                    </p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Polaroid gallery */}
      <section className="border-b border-[#5b3825]/40 bg-[#1f1209] px-5 py-20" id="galeri">
        <div className="mx-auto max-w-6xl">
          <Reveal>
            <p className="text-xs font-bold uppercase tracking-[0.4em] text-[#b57a3a]">Galeri</p>
            <h2 className="mt-4 text-4xl font-semibold md:text-5xl">Anılarımız polaroidde.</h2>
            <p className="mt-3 text-[#f5dfbd]/70" style={{ fontFamily: "var(--font-sans)" }}>
              Galeri alanı işletmenizin kendi fotoğraflarıyla doldurulur.
            </p>
          </Reveal>
          <div className="mt-12 grid gap-8 sm:grid-cols-2 md:grid-cols-3">
            {template.gallery.map((item, idx) => (
              <Reveal delay={idx * 0.04} key={item.title}>
                <div
                  className="bg-[#f5dfbd] p-3 pb-12 shadow-xl"
                  style={{
                    transform: `rotate(${idx % 2 === 0 ? "-2" : "2"}deg)`,
                  }}
                >
                  <div
                    className="aspect-[4/3] w-full"
                    style={{
                      background: `linear-gradient(135deg, #261711, #b57a3a)`,
                    }}
                  />
                  <div className="mt-4 text-center font-semibold text-[#1a0f0a]" style={{ fontFamily: "var(--font-serif)" }}>
                    {item.title}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews as quote book */}
      <section className="border-b border-[#5b3825]/40 px-5 py-20">
        <div className="mx-auto max-w-6xl">
          <Reveal>
            <p className="text-xs font-bold uppercase tracking-[0.4em] text-[#b57a3a]">Yorumlar</p>
            <h2 className="mt-4 text-4xl font-semibold md:text-5xl">Müşterilerimizden.</h2>
          </Reveal>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {template.reviews.map((review, idx) => (
              <Reveal delay={idx * 0.05} key={review.name}>
                <article className="h-full rounded-sm border border-[#b57a3a]/40 bg-[#231410] p-6">
                  <div className="flex gap-1 text-[#b57a3a]">
                    {[0, 1, 2, 3, 4].map((i) => <Star key={i} size={14} fill="currentColor" />)}
                  </div>
                  <p className="mt-4 text-lg leading-8 text-[#f5dfbd]" style={{ fontFamily: "var(--font-serif)" }}>
                    “{review.text}”
                  </p>
                  <div className="mt-6 border-t border-[#5b3825] pt-4">
                    <p className="font-semibold">{review.name}</p>
                    <p className="text-xs uppercase tracking-widest text-[#b57a3a]">{review.role}</p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="px-5 py-20" id="iletisim">
        <div className="mx-auto grid max-w-6xl gap-10 rounded-sm border-2 border-double border-[#b57a3a] p-8 md:grid-cols-2">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.4em] text-[#b57a3a]">İletişim</p>
            <h2 className="mt-4 text-3xl font-semibold md:text-4xl">Bir koltuk ayıralım.</h2>
            <div className="mt-8 grid gap-4 text-base">
              <a className="flex items-center gap-3" href={`tel:${template.phone.replace(/\s/g, "")}`}>
                <Phone className="text-[#b57a3a]" size={18} /> {template.phone}
              </a>
              <div className="flex items-start gap-3">
                <MapPin className="mt-1 text-[#b57a3a]" size={18} /> {template.address}
              </div>
              <div className="flex items-start gap-3">
                <Clock className="mt-1 text-[#b57a3a]" size={18} />
                <div>
                  {template.hours.map((hour) => (
                    <p key={hour}>{hour}</p>
                  ))}
                </div>
              </div>
            </div>
            <BookingTrigger
              className="mt-8 inline-flex h-12 items-center justify-center gap-2 rounded-sm bg-[#b57a3a] px-6 text-sm font-bold uppercase tracking-widest text-[#1a0f0a] transition hover:bg-[#d39854]"
              label="Randevu Al"
              target={bookingTarget}
            />
          </div>
          <div
            className="min-h-72 rounded-sm border border-[#b57a3a]/40"
            style={{
              background: `linear-gradient(135deg, #2c1a11, #b57a3a 80%)`,
            }}
          >
            <div className="flex h-full items-center justify-center text-center">
              <div>
                <div className="text-xs uppercase tracking-[0.4em] text-[#f5dfbd]/70">Konum</div>
                <div className="mt-2 text-2xl font-semibold text-[#f5dfbd]">{template.mapLabel}</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-[#0e0703] px-5 py-10 text-center text-xs uppercase tracking-[0.3em] text-[#f5dfbd]/50">
        © {new Date().getFullYear()} {template.brand} — Demo şablon ·{" "}
        <Link className="text-[#b57a3a] hover:underline" href="/">siteüret</Link>
      </footer>
    </main>
  );
}
