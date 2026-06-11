"use client";

import { ArrowRight, Clock, Heart, MapPin, Phone, Sparkles, Star } from "lucide-react";
import Link from "next/link";
import { BookingTrigger } from "@/components/booking";
import { Reveal } from "@/components/reveal";
import { getTemplateImages } from "@/config/template-images";
import type { TemplateDefinition } from "@/config/templates";

export function BlushRoomPreview({ template }: { template: TemplateDefinition }) {
  const bookingTarget = { templateName: template.name, whatsapp: template.whatsapp };
  const images = getTemplateImages(template.slug);

  return (
    <main className="min-h-screen bg-[#fff5f7] text-[#3c2b32]" style={{ fontFamily: "var(--font-sans)" }}>
      <header className="sticky top-0 z-30 border-b border-[#efd3dc]/60 bg-[#fff5f7]/85 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
          <Link className="flex items-center gap-2 text-xl font-semibold tracking-tight" href="/">
            <Heart className="text-[#d98aa8]" fill="currentColor" size={18} /> {template.brand}
          </Link>
          <nav className="hidden gap-7 text-sm font-medium text-[#8f6073] md:flex">
            <a className="hover:text-[#d98aa8]" href="#hizmet">Hizmetler</a>
            <a className="hover:text-[#d98aa8]" href="#favori">Favoriler</a>
            <a className="hover:text-[#d98aa8]" href="#paket">Paketler</a>
            <a className="hover:text-[#d98aa8]" href="#ekip">Ekibimiz</a>
            <a className="hover:text-[#d98aa8]" href="#randevu">Randevu</a>
          </nav>
          <BookingTrigger
            className="inline-flex h-10 items-center gap-2 rounded-full bg-[#d98aa8] px-4 text-sm font-semibold text-white shadow-sm shadow-rose-200 transition hover:bg-[#c46f8f]"
            label="Randevu Al"
            target={bookingTarget}
          />
        </div>
      </header>

      {/* Soft hero */}
      <section className="relative overflow-hidden px-5 py-20 md:py-28">
        <div
          className="absolute inset-0 opacity-70"
          style={{
            background:
              "radial-gradient(circle at 80% 20%, #fce4ec 0, transparent 45%), radial-gradient(circle at 20% 80%, #f8d7e0 0, transparent 50%)",
          }}
        />
        <div className="relative mx-auto grid max-w-6xl gap-12 lg:grid-cols-[1fr_1fr] lg:items-center">
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-[#d98aa8] shadow-sm">
              <Sparkles size={14} /> Davetkar güzellik salonu
            </span>
            <h1 className="mt-6 text-5xl font-semibold leading-tight md:text-7xl" style={{ fontFamily: "var(--font-serif)" }}>
              {template.heroTitle}
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-9 text-[#8f6073]">{template.heroText}</p>
            <div className="mt-9 flex flex-wrap gap-3">
              <BookingTrigger
                className="inline-flex h-12 items-center gap-2 rounded-full bg-[#d98aa8] px-7 text-sm font-semibold text-white shadow-lg shadow-rose-200/70 transition hover:bg-[#c46f8f]"
                label="Yandan randevu al"
                target={bookingTarget}
              />
              <a className="inline-flex h-12 items-center gap-2 rounded-full border border-[#efd3dc] bg-white px-6 text-sm font-semibold text-[#8f6073] transition hover:bg-[#fff0f4]" href="#favori">
                En çok tercih edilenler
                <ArrowRight size={16} />
              </a>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="relative">
              <div className="absolute -inset-4 rounded-[40px] bg-gradient-to-br from-[#fce4ec] via-[#f8d7e0] to-[#fff5f7] blur-2xl" />
              <div className="relative rounded-[36px] border border-[#efd3dc] bg-white p-6 shadow-2xl shadow-rose-200/40">
                <div className="relative aspect-[5/6] overflow-hidden rounded-3xl">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img alt={template.brand} className="h-full w-full object-cover" loading="eager" src={images.hero} />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#d98aa8]/35 to-transparent" />
                </div>
                <div className="mt-5 flex items-center justify-between">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-widest text-[#d98aa8]">Bugün açık</p>
                    <p className="text-sm font-semibold">{template.hours[0]}</p>
                  </div>
                  <BookingTrigger
                    className="inline-flex h-10 items-center gap-2 rounded-full bg-[#fff0f4] px-3 text-xs font-bold uppercase tracking-widest text-[#d98aa8] hover:bg-[#d98aa8] hover:text-white"
                    label="Slot"
                    target={bookingTarget}
                  />
                </div>
              </div>
              <div className="absolute -bottom-5 -left-6 rounded-2xl border border-[#efd3dc] bg-white px-4 py-3 shadow-lg">
                <div className="flex items-center gap-2">
                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#fce4ec] text-[#d98aa8]"><Heart size={16} fill="currentColor" /></span>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-widest text-[#d98aa8]">98%</p>
                    <p className="text-xs text-[#8f6073]">tekrar gelen müşteri</p>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Trust strip */}
      <section className="px-5 pb-12">
        <div className="mx-auto grid max-w-6xl gap-3 sm:grid-cols-2 md:grid-cols-4">
          {[
            { title: "5.0 yorumlar", body: "Düzenli müşteri puanı" },
            { title: "WhatsApp randevu", body: "Tek tıkla yer ayır" },
            { title: "Premium ürün", body: "Marka iş birlikleri" },
            { title: "Bekleme yok", body: "Sıraya alınmazsınız" },
          ].map((item) => (
            <div className="rounded-2xl border border-[#efd3dc] bg-white px-5 py-4 shadow-sm shadow-rose-100/60" key={item.title}>
              <p className="text-sm font-semibold text-[#d98aa8]">{item.title}</p>
              <p className="mt-1 text-xs text-[#8f6073]">{item.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Services as bubble cards */}
      <section className="px-5 py-20" id="hizmet">
        <div className="mx-auto max-w-6xl">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-widest text-[#d98aa8]">Hizmet menüsü</p>
            <h2 className="mt-3 text-4xl font-semibold md:text-5xl" style={{ fontFamily: "var(--font-serif)" }}>Her ihtiyaca özen.</h2>
          </Reveal>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {template.services.map((service, idx) => (
              <Reveal delay={idx * 0.05} key={service.name}>
                <article className="group h-full rounded-[32px] border border-[#efd3dc] bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-rose-200/40">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#fff0f4] text-[#d98aa8]">
                    <Sparkles size={22} />
                  </div>
                  <h3 className="mt-6 text-2xl font-semibold">{service.name}</h3>
                  <p className="mt-3 leading-7 text-[#8f6073]">{service.text}</p>
                  <div className="mt-6 flex items-center justify-between border-t border-dashed border-[#efd3dc] pt-4 text-sm">
                    <span className="rounded-full bg-[#fff0f4] px-3 py-1 text-xs font-bold uppercase tracking-widest text-[#d98aa8]">
                      {service.duration}
                    </span>
                    <span className="text-xl font-bold text-[#d98aa8]">{service.price}</span>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Favorites highlight */}
      <section className="bg-white px-5 py-20" id="favori">
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[1fr_1.3fr] lg:items-center">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-widest text-[#d98aa8]">En çok tercih edilenler</p>
            <h2 className="mt-4 text-4xl font-semibold leading-tight md:text-5xl" style={{ fontFamily: "var(--font-serif)" }}>
              {template.aboutTitle}
            </h2>
            <p className="mt-5 text-lg leading-9 text-[#8f6073]">{template.aboutText}</p>
            <BookingTrigger
              className="mt-8 inline-flex h-12 items-center gap-2 rounded-full bg-[#3c2b32] px-7 text-sm font-semibold text-white transition hover:bg-[#2c1e25]"
              label="Bir favorimi denemek istiyorum"
              target={bookingTarget}
            />
          </Reveal>
          <Reveal delay={0.05}>
            <div className="grid gap-4">
              {template.services.map((service, idx) => (
                <div className="flex items-center justify-between rounded-2xl border border-[#efd3dc] bg-[#fff0f4] px-5 py-4" key={service.name}>
                  <div className="flex items-center gap-3">
                    <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-[#d98aa8]">
                      {String(idx + 1).padStart(2, "0")}
                    </span>
                    <div>
                      <p className="font-semibold">{service.name}</p>
                      <p className="text-xs text-[#8f6073]">{service.duration} · favori</p>
                    </div>
                  </div>
                  <span className="text-base font-bold text-[#d98aa8]">{service.price}</span>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* Packages */}
      <section className="px-5 py-20" id="paket">
        <div className="mx-auto max-w-6xl">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-widest text-[#d98aa8]">Paketler</p>
            <h2 className="mt-3 text-4xl font-semibold md:text-5xl" style={{ fontFamily: "var(--font-serif)" }}>Birlikte daha keyifli.</h2>
          </Reveal>
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {template.packages.map((pack, idx) => (
              <Reveal delay={idx * 0.05} key={pack.name}>
                <article className={`relative overflow-hidden rounded-[36px] border-2 p-8 ${idx === 0 ? "border-[#efd3dc] bg-white" : "border-[#d98aa8] bg-gradient-to-br from-white to-[#fff0f4]"}`}>
                  <div className="absolute -top-12 -right-8 h-44 w-44 rounded-full bg-[#fce4ec]" />
                  <div className="relative">
                    {idx === 1 ? (
                      <span className="inline-flex items-center gap-1 rounded-full bg-[#d98aa8] px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-white">
                        <Sparkles size={11} /> Favori paket
                      </span>
                    ) : null}
                    <h3 className="mt-3 text-3xl font-semibold" style={{ fontFamily: "var(--font-serif)" }}>{pack.name}</h3>
                    <p className="mt-4 text-3xl font-bold text-[#d98aa8]">{pack.price}</p>
                    <p className="mt-4 leading-8 text-[#8f6073]">{pack.details}</p>
                    <BookingTrigger
                      className="mt-8 inline-flex h-12 items-center gap-2 rounded-full bg-[#3c2b32] px-6 text-sm font-semibold text-white transition hover:bg-[#2c1e25]"
                      label={`${pack.name} → randevu`}
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
      <section className="bg-[#fff0f4] px-5 py-20" id="ekip">
        <div className="mx-auto max-w-6xl">
          <p className="text-xs font-semibold uppercase tracking-widest text-[#d98aa8]">Ekibimiz</p>
          <h2 className="mt-3 text-4xl font-semibold md:text-5xl" style={{ fontFamily: "var(--font-serif)" }}>Sıcak ve uzman eller.</h2>
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {template.team.map((member) => (
              <article className="grid items-center gap-5 rounded-[32px] border border-[#efd3dc] bg-white p-6 sm:grid-cols-[auto_1fr]" key={member.name}>
                <div
                  className="flex h-24 w-24 items-center justify-center rounded-full text-2xl font-bold text-white"
                  style={{ background: "linear-gradient(160deg, #d98aa8, #8f6073)" }}
                >
                  {member.avatar}
                </div>
                <div>
                  <h3 className="text-xl font-semibold">{member.name}</h3>
                  <p className="text-sm text-[#d98aa8]">{member.role}</p>
                  <p className="mt-3 text-sm leading-7 text-[#8f6073]">{member.bio}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Soft gallery */}
      <section className="px-5 py-20">
        <div className="mx-auto max-w-6xl">
          <p className="text-xs font-semibold uppercase tracking-widest text-[#d98aa8]">Atölye</p>
          <h2 className="mt-3 text-4xl font-semibold md:text-5xl" style={{ fontFamily: "var(--font-serif)" }}>Salondan kareler.</h2>
          <div className="mt-10 grid gap-4 sm:grid-cols-3 lg:grid-cols-3">
            {template.gallery.map((item, idx) => (
              <div
                className="overflow-hidden rounded-[32px] border border-[#efd3dc] bg-white p-3 shadow-sm shadow-rose-100/60"
                key={item.title}
              >
                <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img alt={item.title} className="h-full w-full object-cover" loading="lazy" src={images.gallery[idx % images.gallery.length]} />
                </div>
                <div className="px-2 py-3 text-center text-sm font-semibold text-[#8f6073]">{item.title}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="bg-[#fff0f4] px-5 py-20">
        <div className="mx-auto max-w-6xl">
          <p className="text-xs font-semibold uppercase tracking-widest text-[#d98aa8]">Sevgiyle</p>
          <h2 className="mt-3 text-4xl font-semibold md:text-5xl" style={{ fontFamily: "var(--font-serif)" }}>Müşteri notları.</h2>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {template.reviews.map((review, idx) => (
              <Reveal delay={idx * 0.05} key={review.name}>
                <article className="h-full rounded-[28px] border border-[#efd3dc] bg-white p-6 shadow-sm shadow-rose-100/60">
                  <div className="flex gap-1 text-[#d98aa8]">
                    {[0, 1, 2, 3, 4].map((i) => <Star key={i} size={14} fill="currentColor" />)}
                  </div>
                  <p className="mt-4 leading-8 text-[#8f6073]">“{review.text}”</p>
                  <div className="mt-6 flex items-center gap-3 border-t border-dashed border-[#efd3dc] pt-4">
                    <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#fff0f4] text-xs font-bold text-[#d98aa8]">{review.avatar}</span>
                    <div>
                      <p className="text-sm font-semibold">{review.name}</p>
                      <p className="text-xs text-[#8f6073]">{review.role}</p>
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Contact / soft booking module */}
      <section className="px-5 py-20" id="randevu">
        <div className="mx-auto grid max-w-6xl gap-10 rounded-[40px] bg-gradient-to-br from-white to-[#fff0f4] p-10 shadow-lg shadow-rose-100/60 md:grid-cols-[1fr_.9fr]">
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-[#d98aa8]">Randevu</p>
            <h2 className="mt-4 text-4xl font-semibold leading-tight md:text-5xl" style={{ fontFamily: "var(--font-serif)" }}>
              Sizin için yer ayıralım.
            </h2>
            <p className="mt-5 leading-8 text-[#8f6073]">
              Tek dokunuşla salonumuza ulaşın; WhatsApp&apos;tan müsait saati birlikte seçelim.
            </p>
            <BookingTrigger
              className="mt-8 inline-flex h-12 items-center gap-2 rounded-full bg-[#d98aa8] px-7 text-sm font-semibold text-white shadow-lg shadow-rose-200/60 transition hover:bg-[#c46f8f]"
              label="Yandan randevu formunu aç"
              target={bookingTarget}
            />
          </div>
          <div className="grid gap-3 rounded-3xl border border-[#efd3dc] bg-white p-6">
            <Row icon={<Phone size={18} />} title="Telefon" body={template.phone} />
            <Row icon={<MapPin size={18} />} title="Adres" body={template.address} />
            <div className="flex items-start gap-3">
              <span className="mt-1 text-[#d98aa8]"><Clock size={18} /></span>
              <div>
                <p className="text-xs font-semibold uppercase tracking-widest text-[#d98aa8]">Saatler</p>
                <div className="mt-1 grid gap-0.5 text-sm text-[#3c2b32]">
                  {template.hours.map((hour) => <p key={hour}>{hour}</p>)}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-[#efd3dc] bg-white px-5 py-8 text-sm text-[#8f6073]">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-2 md:flex-row">
          <span>© {new Date().getFullYear()} {template.brand} — Demo şablon</span>
          <Link className="hover:text-[#d98aa8]" href="/">siteüret</Link>
        </div>
      </footer>
    </main>
  );
}

function Row({ icon, title, body }: { icon: React.ReactNode; title: string; body: string }) {
  return (
    <div className="flex items-start gap-3">
      <span className="mt-1 text-[#d98aa8]">{icon}</span>
      <div>
        <p className="text-xs font-semibold uppercase tracking-widest text-[#d98aa8]">{title}</p>
        <p className="mt-1 text-sm text-[#3c2b32]">{body}</p>
      </div>
    </div>
  );
}
