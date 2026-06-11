"use client";

import { ArrowDown, ArrowUpRight, Check, Mail, MapPin, Phone } from "lucide-react";
import Link from "next/link";
import { BookingTrigger } from "@/components/booking";
import { Reveal } from "@/components/reveal";
import type { TemplateDefinition } from "@/config/templates";

export function BlackTiePreview({ template }: { template: TemplateDefinition }) {
  const bookingTarget = { templateName: template.name, whatsapp: template.whatsapp };

  return (
    <main className="min-h-screen bg-[#f6f4ee] text-black" style={{ fontFamily: "var(--font-sans)" }}>
      {/* Minimal nav */}
      <header className="border-b border-black/10">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          <Link className="text-base font-bold uppercase tracking-[0.3em]" href="/">
            {template.brand}
          </Link>
          <nav className="hidden gap-9 text-xs font-semibold uppercase tracking-[0.25em] md:flex">
            <a href="#manifesto">00 Manifesto</a>
            <a href="#hizmet">01 Hizmet</a>
            <a href="#uyelik">02 Üyelik</a>
            <a href="#ekip">03 Ekip</a>
            <a href="#randevu">04 Randevu</a>
          </nav>
          <BookingTrigger
            className="inline-flex h-10 items-center gap-2 border border-black px-4 text-xs font-bold uppercase tracking-[0.25em] transition hover:bg-black hover:text-[#f6f4ee]"
            label="Rezerve Et"
            target={bookingTarget}
          />
        </div>
      </header>

      {/* Full-bleed editorial hero */}
      <section className="relative">
        <div className="grid min-h-[88vh] grid-cols-1 md:grid-cols-12">
          {/* Black side with cover headline */}
          <div className="relative flex flex-col justify-between bg-black px-6 py-12 text-[#f6f4ee] md:col-span-7 md:px-16 md:py-20">
            <div className="flex items-center justify-between text-xs font-semibold uppercase tracking-[0.3em] text-white/60">
              <span>Sayı 04</span>
              <span>Sonbahar / Kış</span>
            </div>
            <Reveal>
              <h1 className="text-5xl font-semibold leading-[0.95] tracking-tight md:text-[8rem]" style={{ fontFamily: "var(--font-serif)" }}>
                {template.heroTitle.split(" ").slice(0, 3).join(" ")}
                <br />
                <span className="italic text-white/70">
                  {template.heroTitle.split(" ").slice(3).join(" ")}
                </span>
              </h1>
            </Reveal>
            <div className="flex items-end justify-between gap-6">
              <p className="max-w-md text-sm leading-7 text-white/70">{template.heroText}</p>
              <a className="hidden items-center gap-2 text-xs font-semibold uppercase tracking-[0.3em] text-white/80 transition hover:text-white md:inline-flex" href="#hizmet">
                Aşağı <ArrowDown size={14} />
              </a>
            </div>
          </div>

          {/* Right column - editorial portrait block */}
          <div className="relative border-l border-black/10 bg-[#f6f4ee] md:col-span-5">
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(135deg, #f6f4ee 0%, #b8b8b8 50%, #090909 100%)",
              }}
            />
            <div className="absolute inset-0 mix-blend-multiply opacity-40" style={{ backgroundImage: "repeating-linear-gradient(45deg, rgba(0,0,0,.15) 0 2px, transparent 2px 6px)" }} />
            <div className="relative flex h-full flex-col justify-end p-8 text-white md:p-12">
              <div className="text-xs font-semibold uppercase tracking-[0.3em] text-white/70">Stüdyo</div>
              <div className="mt-2 text-3xl font-semibold" style={{ fontFamily: "var(--font-serif)" }}>
                Yalnız randevulu çalışırız.
              </div>
              <div className="mt-6 grid grid-cols-2 gap-4 border-t border-white/30 pt-5 text-xs">
                <div>
                  <div className="font-semibold uppercase tracking-widest text-white/70">Konum</div>
                  <div className="mt-1 font-semibold">{template.mapLabel}</div>
                </div>
                <div>
                  <div className="font-semibold uppercase tracking-widest text-white/70">İlk açılış</div>
                  <div className="mt-1 font-semibold">10.00</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Manifesto strip */}
      <section className="border-y border-black/10 py-12" id="manifesto">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-black/60">Manifesto</p>
            <h2 className="mt-4 max-w-3xl text-3xl leading-tight md:text-5xl" style={{ fontFamily: "var(--font-serif)" }}>
              {template.aboutTitle}
            </h2>
            <p className="mt-6 max-w-2xl text-base leading-8 text-black/70">{template.aboutText}</p>
          </Reveal>
        </div>
      </section>

      {/* Services as vertical reading list */}
      <section className="px-6 py-20" id="hizmet">
        <div className="mx-auto max-w-7xl">
          <div className="flex items-end justify-between border-b border-black pb-4">
            <h2 className="text-xs font-semibold uppercase tracking-[0.3em]">01 — Hizmet</h2>
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-black/50">
              {template.services.length} işlem
            </span>
          </div>
          <div className="mt-4 divide-y divide-black/10">
            {template.services.map((service, idx) => (
              <Reveal delay={idx * 0.05} key={service.name}>
                <article className="grid grid-cols-12 items-baseline gap-4 py-8">
                  <div className="col-span-1 text-xs font-semibold text-black/40">
                    {String(idx + 1).padStart(2, "0")}
                  </div>
                  <div className="col-span-11 md:col-span-5">
                    <h3 className="text-3xl font-semibold md:text-4xl" style={{ fontFamily: "var(--font-serif)" }}>
                      {service.name}
                    </h3>
                  </div>
                  <p className="col-span-12 text-sm leading-7 text-black/70 md:col-span-4">{service.text}</p>
                  <div className="col-span-12 flex items-baseline justify-between md:col-span-2 md:flex-col md:items-end md:justify-end">
                    <span className="text-xs uppercase tracking-widest text-black/50">{service.duration}</span>
                    <span className="text-xl font-bold">{service.price}</span>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Membership packages */}
      <section className="bg-black px-6 py-24 text-[#f6f4ee]" id="uyelik">
        <div className="mx-auto max-w-7xl">
          <div className="flex items-end justify-between border-b border-white/20 pb-4">
            <h2 className="text-xs font-semibold uppercase tracking-[0.3em]">02 — Üyelik</h2>
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-white/50">Sınırlı kontenjan</span>
          </div>
          <div className="mt-12 grid gap-px bg-white/10 md:grid-cols-2">
            {template.packages.map((pack, idx) => (
              <Reveal delay={idx * 0.06} key={pack.name}>
                <article className="flex h-full flex-col gap-8 bg-black p-10">
                  <div className="flex items-baseline justify-between">
                    <span className="text-xs font-semibold uppercase tracking-[0.3em] text-white/50">
                      Pass {String(idx + 1).padStart(2, "0")}
                    </span>
                    <span className="text-3xl font-bold">{pack.price}</span>
                  </div>
                  <h3 className="text-5xl font-semibold leading-tight" style={{ fontFamily: "var(--font-serif)" }}>
                    {pack.name}
                  </h3>
                  <p className="text-base leading-8 text-white/70">{pack.details}</p>
                  <BookingTrigger
                    className="mt-auto inline-flex h-12 items-center justify-center gap-2 border border-white/40 text-xs font-bold uppercase tracking-[0.3em] transition hover:bg-white hover:text-black"
                    label={`${pack.name} — Rezerve et`}
                    target={bookingTarget}
                  />
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Team as editorial spread */}
      <section className="px-6 py-24" id="ekip">
        <div className="mx-auto max-w-7xl">
          <div className="flex items-end justify-between border-b border-black pb-4">
            <h2 className="text-xs font-semibold uppercase tracking-[0.3em]">03 — Ekip</h2>
          </div>
          <div className="mt-12 grid gap-12 md:grid-cols-2">
            {template.team.map((member) => (
              <Reveal key={member.name}>
                <article className="grid grid-cols-[auto_1fr] gap-6">
                  <div className="flex h-32 w-32 items-center justify-center bg-black text-3xl font-bold text-[#f6f4ee]">
                    {member.avatar}
                  </div>
                  <div>
                    <div className="text-xs font-semibold uppercase tracking-[0.3em] text-black/50">{member.role}</div>
                    <h3 className="mt-1 text-3xl font-semibold" style={{ fontFamily: "var(--font-serif)" }}>
                      {member.name}
                    </h3>
                    <p className="mt-3 text-sm leading-7 text-black/70">{member.bio}</p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Single-slide editorial gallery */}
      <section className="bg-[#ece9e0] px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="flex items-end justify-between border-b border-black/15 pb-4">
            <h2 className="text-xs font-semibold uppercase tracking-[0.3em]">Stüdyo notları</h2>
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-black/50">Yatay okuma</span>
          </div>
          <div className="mt-10 overflow-x-auto pb-4">
            <div className="flex gap-6">
              {template.gallery.map((item, idx) => (
                <div className="w-72 shrink-0" key={item.title}>
                  <div
                    className="aspect-[3/4] w-full"
                    style={{
                      background: `linear-gradient(180deg, #090909, #b8b8b8 ${50 + idx * 6}%, #f6f4ee)`,
                    }}
                  />
                  <p className="mt-3 text-sm font-semibold">{item.title}</p>
                  <p className="text-xs uppercase tracking-widest text-black/50">{String(idx + 1).padStart(2, "0")} / {template.gallery.length}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Reviews as pull-quote */}
      <section className="px-6 py-24">
        <div className="mx-auto max-w-4xl text-center">
          <div className="flex items-center justify-center gap-2 text-xs font-semibold uppercase tracking-[0.3em] text-black/50">
            <span className="h-px w-12 bg-black/30" /> Söz Müşteride <span className="h-px w-12 bg-black/30" />
          </div>
          {template.reviews.map((review, idx) => (
            <Reveal delay={idx * 0.06} key={review.name}>
              <blockquote className="mt-12 first:mt-10">
                <p className="text-2xl font-semibold leading-tight md:text-4xl" style={{ fontFamily: "var(--font-serif)" }}>
                  &ldquo;{review.text}&rdquo;
                </p>
                <footer className="mt-5 text-xs font-semibold uppercase tracking-[0.3em] text-black/60">
                  — {review.name} · {review.role}
                </footer>
              </blockquote>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Booking strip */}
      <section className="border-t border-black/10 bg-black px-6 py-20 text-[#f6f4ee]" id="randevu">
        <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-[1.2fr_.8fr]">
          <div>
            <h2 className="text-4xl leading-tight md:text-6xl" style={{ fontFamily: "var(--font-serif)" }}>
              Rezervasyon, üyelik ve sorular için.
            </h2>
            <p className="mt-5 max-w-xl text-base leading-8 text-white/70">
              Stüdyomuza ulaşmak için aşağıdaki kanallar yeterli. Üyelik kontenjanı için lütfen önceden bilgi verin.
            </p>
            <div className="mt-8">
              <BookingTrigger
                className="inline-flex h-12 items-center gap-2 border border-white px-6 text-xs font-bold uppercase tracking-[0.3em] transition hover:bg-white hover:text-black"
                label="Rezerve Et"
                target={bookingTarget}
              />
            </div>
          </div>
          <div className="grid gap-4 text-sm">
            <ContactRow icon={<Phone size={16} />} label="Telefon" value={template.phone} />
            <ContactRow icon={<Mail size={16} />} label="Email" value="rezervasyon@stüdyo.demo" />
            <ContactRow icon={<MapPin size={16} />} label="Adres" value={template.address} />
            <div className="border-t border-white/20 pt-4">
              <div className="text-xs font-semibold uppercase tracking-[0.3em] text-white/50">Açılış</div>
              <div className="mt-2 grid gap-1 text-sm text-white/85">
                {template.hours.map((hour) => (
                  <p key={hour}>{hour}</p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/10 bg-black px-6 py-8 text-xs uppercase tracking-[0.3em] text-white/40">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 md:flex-row">
          <span>© {new Date().getFullYear()} {template.brand} — Demo</span>
          <Link className="hover:text-white" href="/">siteüret <ArrowUpRight size={12} className="inline" /></Link>
        </div>
      </footer>
    </main>
  );
}

function ContactRow({ icon, label, value }: { icon: React.ReactNode; label: string; value: string }) {
  return (
    <div className="flex items-start gap-3 border-b border-white/10 pb-3">
      <span className="mt-1 text-white/70">{icon}</span>
      <div>
        <div className="text-[10px] font-semibold uppercase tracking-[0.3em] text-white/50">{label}</div>
        <div className="mt-1 text-sm text-white/90">{value}</div>
      </div>
      <Check className="ml-auto mt-1 text-white/30" size={14} />
    </div>
  );
}
