"use client";

import { Crown, Diamond, Mail, MapPin, Phone, Sparkles, Star } from "lucide-react";
import Link from "next/link";
import { BookingTrigger } from "@/components/booking";
import { Reveal } from "@/components/reveal";
import { getTemplateImages } from "@/config/template-images";
import type { TemplateDefinition } from "@/config/templates";

export function VelvetGlowPreview({ template }: { template: TemplateDefinition }) {
  const bookingTarget = { templateName: template.name, whatsapp: template.whatsapp };
  const images = getTemplateImages(template.slug);

  return (
    <main className="min-h-screen bg-[#2b1019] text-[#f7ead9]" style={{ fontFamily: "var(--font-serif)" }}>
      {/* Gold ribbon header */}
      <div className="bg-gradient-to-r from-[#a07526] via-[#d5b16b] to-[#a07526] py-2 text-center text-[10px] font-bold uppercase tracking-[0.5em] text-[#2b1019]">
        ✦ Private Beauty Lounge · Concierge ile randevu · İstanbul ✦
      </div>

      <header className="border-b border-[#d5b16b]/30 bg-[#2b1019]/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          <Link className="flex items-center gap-3 text-2xl tracking-wide" href="/">
            <Crown className="text-[#d5b16b]" size={24} />
            <span style={{ fontFamily: "var(--font-serif)" }}>{template.brand}</span>
          </Link>
          <nav className="hidden gap-8 text-xs font-semibold uppercase tracking-[0.3em] text-[#f7ead9]/70 md:flex" style={{ fontFamily: "var(--font-sans)" }}>
            <a className="hover:text-[#d5b16b]" href="#vip">VIP</a>
            <a className="hover:text-[#d5b16b]" href="#ritual">Ritueller</a>
            <a className="hover:text-[#d5b16b]" href="#paket">Pasalar</a>
            <a className="hover:text-[#d5b16b]" href="#concierge">Concierge</a>
          </nav>
          <BookingTrigger
            className="inline-flex h-10 items-center gap-2 border border-[#d5b16b] px-5 text-xs font-bold uppercase tracking-[0.3em] text-[#d5b16b] transition hover:bg-[#d5b16b] hover:text-[#2b1019]"
            label="Concierge"
            target={bookingTarget}
          />
        </div>
      </header>

      {/* Dramatic hero */}
      <section className="relative overflow-hidden px-6 py-24 md:py-36">
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(circle at 50% 100%, rgba(213,177,107,.25), transparent 60%), radial-gradient(circle at 20% 0%, rgba(123,33,55,.4), transparent 50%)",
          }}
        />
        <div
          className="absolute inset-x-0 top-0 h-32 opacity-30"
          style={{
            backgroundImage:
              "repeating-linear-gradient(90deg, rgba(213,177,107,.4) 0 1px, transparent 1px 80px)",
          }}
        />
        <div className="relative mx-auto max-w-5xl text-center">
          <Reveal>
            <p className="inline-flex items-center gap-2 border-y border-[#d5b16b]/60 px-6 py-2 text-xs font-semibold uppercase tracking-[0.5em] text-[#d5b16b]" style={{ fontFamily: "var(--font-sans)" }}>
              <Diamond size={12} /> Sayı XVIII — Premium beauty lounge <Diamond size={12} />
            </p>
            <h1 className="mt-8 text-6xl font-semibold leading-[0.95] tracking-tight md:text-[8rem]">
              <span className="block italic text-[#d5b16b]">{template.heroTitle.split(" ").slice(0, 2).join(" ")}</span>
              <span className="mt-2 block">{template.heroTitle.split(" ").slice(2).join(" ")}</span>
            </h1>
            <p className="mx-auto mt-10 max-w-2xl text-lg leading-9 text-[#f7ead9]/80" style={{ fontFamily: "var(--font-sans)" }}>
              {template.heroText}
            </p>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-3" style={{ fontFamily: "var(--font-sans)" }}>
              <BookingTrigger
                className="inline-flex h-13 items-center gap-2 bg-[#d5b16b] px-8 py-3 text-xs font-bold uppercase tracking-[0.4em] text-[#2b1019] transition hover:bg-[#f7ead9]"
                label="Concierge ile randevu"
                target={bookingTarget}
              />
              <a className="inline-flex h-13 items-center gap-2 border border-[#f7ead9]/40 px-7 py-3 text-xs font-bold uppercase tracking-[0.4em] text-[#f7ead9] transition hover:border-[#d5b16b] hover:text-[#d5b16b]" href="#paket">
                Pasalara bak
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Numbers strip */}
      <section className="border-y border-[#d5b16b]/20 bg-[#1c0a10] py-12">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-6 px-6 text-center md:grid-cols-4" style={{ fontFamily: "var(--font-sans)" }}>
          {[
            { value: "18+", label: "Yıl tecrübe" },
            { value: "%97", label: "Geri dönüş" },
            { value: "12", label: "Uzman" },
            { value: "Concierge", label: "Hat" },
          ].map((stat) => (
            <div key={stat.label}>
              <div className="text-4xl font-semibold text-[#d5b16b]" style={{ fontFamily: "var(--font-serif)" }}>{stat.value}</div>
              <div className="mt-2 text-[10px] font-bold uppercase tracking-[0.4em] text-[#f7ead9]/60">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Story */}
      <section className="px-6 py-24" id="vip">
        <div className="mx-auto grid max-w-6xl gap-14 lg:grid-cols-[1fr_1fr] lg:items-center">
          <Reveal>
            <div className="relative aspect-[5/6] w-full overflow-hidden">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img alt={template.brand} className="h-full w-full object-cover" loading="eager" src={images.hero} />
              <div className="absolute inset-0 bg-gradient-to-tr from-[#2b1019]/70 via-[#7b2137]/30 to-[#d5b16b]/15 mix-blend-multiply" />
              <div className="absolute inset-3 border border-[#d5b16b]/40" />
            </div>
          </Reveal>
          <Reveal delay={0.05}>
            <p className="text-xs font-bold uppercase tracking-[0.4em] text-[#d5b16b]" style={{ fontFamily: "var(--font-sans)" }}>Hikaye</p>
            <h2 className="mt-4 text-4xl leading-tight md:text-6xl">{template.aboutTitle}</h2>
            <p className="mt-7 text-lg leading-9 text-[#f7ead9]/80" style={{ fontFamily: "var(--font-sans)" }}>
              {template.aboutText}
            </p>
            <div className="mt-8 flex flex-wrap gap-3" style={{ fontFamily: "var(--font-sans)" }}>
              {template.highlights.map((item) => (
                <span className="border border-[#d5b16b]/40 px-4 py-1.5 text-[10px] font-bold uppercase tracking-[0.3em] text-[#d5b16b]" key={item}>
                  {item}
                </span>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* Rituals (services) - elegant list */}
      <section className="bg-[#1c0a10] px-6 py-24" id="ritual">
        <div className="mx-auto max-w-6xl">
          <Reveal>
            <p className="text-xs font-bold uppercase tracking-[0.4em] text-[#d5b16b]" style={{ fontFamily: "var(--font-sans)" }}>Ritueller</p>
            <h2 className="mt-4 text-4xl leading-tight md:text-6xl">Her seans bir tören.</h2>
          </Reveal>
          <div className="mt-12 grid gap-8 md:grid-cols-2">
            {template.services.map((service, idx) => (
              <Reveal delay={idx * 0.05} key={service.name}>
                <article className="group flex items-start gap-6 border-b border-[#d5b16b]/15 pb-8">
                  <div className="text-4xl text-[#d5b16b]/60">{String(idx + 1).padStart(2, "0")}</div>
                  <div className="flex-1">
                    <h3 className="text-3xl leading-tight">{service.name}</h3>
                    <p className="mt-3 text-sm leading-7 text-[#f7ead9]/75" style={{ fontFamily: "var(--font-sans)" }}>
                      {service.text}
                    </p>
                    <div className="mt-5 flex items-center justify-between text-xs" style={{ fontFamily: "var(--font-sans)" }}>
                      <span className="uppercase tracking-[0.3em] text-[#f7ead9]/50">{service.duration}</span>
                      <span className="text-xl font-bold text-[#d5b16b]">{service.price}</span>
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Pasalar (packages) - VIP cards */}
      <section className="px-6 py-24" id="paket">
        <div className="mx-auto max-w-6xl">
          <Reveal>
            <p className="text-xs font-bold uppercase tracking-[0.4em] text-[#d5b16b]" style={{ fontFamily: "var(--font-sans)" }}>Pasalar</p>
            <h2 className="mt-4 text-4xl leading-tight md:text-6xl">VIP üyelikler.</h2>
          </Reveal>
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {template.packages.map((pack, idx) => (
              <Reveal delay={idx * 0.06} key={pack.name}>
                <article
                  className="relative overflow-hidden border-2 p-10"
                  style={{
                    borderColor: "#d5b16b",
                    background:
                      idx === 0
                        ? "linear-gradient(160deg, #2b1019, #1c0a10)"
                        : "linear-gradient(160deg, #7b2137, #2b1019)",
                  }}
                >
                  <div className="absolute -top-10 -right-10 h-44 w-44 rounded-full bg-[#d5b16b]/10" />
                  <div className="relative">
                    <Crown className="text-[#d5b16b]" size={28} />
                    <h3 className="mt-5 text-5xl leading-tight">{pack.name}</h3>
                    <p className="mt-6 text-5xl font-bold text-[#d5b16b]">{pack.price}</p>
                    <p className="mt-6 text-base leading-8 text-[#f7ead9]/80" style={{ fontFamily: "var(--font-sans)" }}>{pack.details}</p>
                    <BookingTrigger
                      className="mt-10 inline-flex h-12 items-center gap-2 border border-[#d5b16b] px-6 text-xs font-bold uppercase tracking-[0.4em] text-[#d5b16b] transition hover:bg-[#d5b16b] hover:text-[#2b1019]"
                      label="Pasaya başvur"
                      target={bookingTarget}
                    />
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="bg-[#1c0a10] px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <Reveal>
            <p className="text-xs font-bold uppercase tracking-[0.4em] text-[#d5b16b]" style={{ fontFamily: "var(--font-sans)" }}>Ekip</p>
            <h2 className="mt-4 text-4xl leading-tight md:text-6xl">Uzman lounge ekibi.</h2>
          </Reveal>
          <div className="mt-12 grid gap-8 md:grid-cols-2">
            {template.team.map((member) => (
              <article className="flex items-start gap-6 border border-[#d5b16b]/20 bg-[#2b1019] p-7" key={member.name}>
                <div
                  className="flex h-20 w-20 shrink-0 items-center justify-center border border-[#d5b16b] text-xl font-bold text-[#d5b16b]"
                  style={{ fontFamily: "var(--font-sans)" }}
                >
                  {member.avatar}
                </div>
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.4em] text-[#d5b16b]" style={{ fontFamily: "var(--font-sans)" }}>{member.role}</p>
                  <h3 className="mt-1 text-2xl">{member.name}</h3>
                  <p className="mt-3 text-sm leading-7 text-[#f7ead9]/75" style={{ fontFamily: "var(--font-sans)" }}>{member.bio}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Editorial gallery */}
      <section className="px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <Reveal>
            <p className="text-xs font-bold uppercase tracking-[0.4em] text-[#d5b16b]" style={{ fontFamily: "var(--font-sans)" }}>Editorial</p>
            <h2 className="mt-4 text-4xl leading-tight md:text-6xl">Lounge anları.</h2>
          </Reveal>
          <div className="mt-12 grid gap-4 md:grid-cols-3">
            {template.gallery.map((item, idx) => (
              <div
                className={`overflow-hidden border-2 border-[#d5b16b]/30 ${idx === 0 ? "md:col-span-2 md:row-span-2" : ""}`}
                key={item.title}
              >
                <div className={`relative w-full ${idx === 0 ? "aspect-[5/6]" : "aspect-[4/5]"}`}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img alt={item.title} className="h-full w-full object-cover" loading="lazy" src={images.gallery[idx % images.gallery.length]} />
                  <div className="absolute inset-0 bg-gradient-to-tr from-[#2b1019]/55 via-transparent to-[#d5b16b]/15 mix-blend-multiply" />
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#2b1019] to-transparent p-5">
                    <p className="text-xs font-semibold uppercase tracking-[0.4em] text-[#d5b16b]" style={{ fontFamily: "var(--font-sans)" }}>
                      {String(idx + 1).padStart(2, "0")} / Velvet
                    </p>
                    <p className="mt-1 text-xl">{item.title}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews as cover pull */}
      <section className="bg-[#1c0a10] px-6 py-24">
        <div className="mx-auto max-w-5xl text-center">
          <Sparkles className="mx-auto text-[#d5b16b]" size={28} />
          {template.reviews.map((review, idx) => (
            <Reveal delay={idx * 0.06} key={review.name}>
              <blockquote className="mt-14 first:mt-10">
                <div className="flex justify-center gap-1 text-[#d5b16b]">
                  {[0, 1, 2, 3, 4].map((i) => <Star key={i} size={14} fill="currentColor" />)}
                </div>
                <p className="mt-6 text-3xl leading-snug md:text-5xl">“{review.text}”</p>
                <footer className="mt-6 text-xs font-bold uppercase tracking-[0.4em] text-[#d5b16b]" style={{ fontFamily: "var(--font-sans)" }}>
                  — {review.name} · {review.role}
                </footer>
              </blockquote>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Concierge contact */}
      <section className="px-6 py-24" id="concierge">
        <div className="mx-auto grid max-w-6xl gap-10 border-2 border-[#d5b16b] p-10 md:grid-cols-[1.1fr_.9fr]">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.4em] text-[#d5b16b]" style={{ fontFamily: "var(--font-sans)" }}>Concierge</p>
            <h2 className="mt-4 text-4xl leading-tight md:text-6xl">Özel hat. Sessiz hizmet.</h2>
            <p className="mt-6 text-lg leading-8 text-[#f7ead9]/80" style={{ fontFamily: "var(--font-sans)" }}>
              Lounge müşterilerimiz için ayrı bir randevu hattımız bulunur. Concierge ekibimize WhatsApp&apos;tan ulaşın, sizin için uygun saati ayarlayalım.
            </p>
            <BookingTrigger
              className="mt-8 inline-flex h-12 items-center gap-2 bg-[#d5b16b] px-7 text-xs font-bold uppercase tracking-[0.4em] text-[#2b1019] transition hover:bg-[#f7ead9]"
              label="Concierge hattını aç"
              target={bookingTarget}
            />
          </div>
          <div className="space-y-5 text-sm" style={{ fontFamily: "var(--font-sans)" }}>
            <Row icon={<Phone size={18} />} title="Hat" body={template.phone} />
            <Row icon={<Mail size={18} />} title="E-posta" body="concierge@lounge.demo" />
            <Row icon={<MapPin size={18} />} title="Lounge" body={template.address} />
            <div className="border-t border-[#d5b16b]/30 pt-4">
              <p className="text-[10px] font-bold uppercase tracking-[0.4em] text-[#d5b16b]">Açılış</p>
              <div className="mt-2 grid gap-1 text-sm text-[#f7ead9]/85">
                {template.hours.map((hour) => <p key={hour}>{hour}</p>)}
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-[#d5b16b]/20 bg-[#1c0a10] px-6 py-8 text-center text-[10px] uppercase tracking-[0.4em] text-[#f7ead9]/50" style={{ fontFamily: "var(--font-sans)" }}>
        © {new Date().getFullYear()} {template.brand} — Demo şablon ·{" "}
        <Link className="text-[#d5b16b] hover:underline" href="/">siteüret</Link>
      </footer>
    </main>
  );
}

function Row({ icon, title, body }: { icon: React.ReactNode; title: string; body: string }) {
  return (
    <div className="flex items-start gap-3 border-b border-[#d5b16b]/15 pb-3">
      <span className="mt-1 text-[#d5b16b]">{icon}</span>
      <div>
        <p className="text-[10px] font-bold uppercase tracking-[0.4em] text-[#d5b16b]">{title}</p>
        <p className="mt-1 text-sm text-[#f7ead9]">{body}</p>
      </div>
    </div>
  );
}
