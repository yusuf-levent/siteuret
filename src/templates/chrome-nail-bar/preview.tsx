"use client";

import { ArrowRight, Heart, MapPin, MessageCircle, Phone, Sparkles, Zap } from "lucide-react";
import Link from "next/link";
import { BookingTrigger } from "@/components/booking";
import { Reveal } from "@/components/reveal";
import type { TemplateDefinition } from "@/config/templates";

export function ChromeNailPreview({ template }: { template: TemplateDefinition }) {
  const bookingTarget = { templateName: template.name, whatsapp: template.whatsapp };

  return (
    <main className="min-h-screen bg-[#fff0fb] text-[#251232]" style={{ fontFamily: "var(--font-sans)" }}>
      <header className="sticky top-0 z-30 border-b border-[#ff4fb8]/20 bg-[#fff0fb]/85 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
          <Link className="flex items-center gap-2 text-xl font-black tracking-tight" href="/">
            <span className="rounded-md bg-gradient-to-br from-[#ff4fb8] to-[#7c3cff] px-2 py-1 text-white">✦</span>
            {template.brand}
          </Link>
          <nav className="hidden gap-6 text-sm font-bold uppercase tracking-wider md:flex">
            <a className="hover:text-[#ff4fb8]" href="#drop">Drop</a>
            <a className="hover:text-[#ff4fb8]" href="#hizmet">Menü</a>
            <a className="hover:text-[#ff4fb8]" href="#paket">Pop pack</a>
            <a className="hover:text-[#ff4fb8]" href="#galeri">Wall</a>
            <a className="hover:text-[#7c3cff]" href="#randevu">Slot</a>
          </nav>
          <BookingTrigger
            className="inline-flex h-10 items-center gap-2 rounded-full bg-gradient-to-r from-[#ff4fb8] to-[#7c3cff] px-4 text-xs font-black uppercase tracking-widest text-white transition hover:from-[#ff7acb] hover:to-[#9b5cff]"
            label="Slot Kap ✦"
            target={bookingTarget}
          />
        </div>
      </header>

      {/* Glossy chrome hero */}
      <section className="relative overflow-hidden px-5 py-20 md:py-28">
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(circle at 80% 10%, rgba(124,60,255,.25), transparent 50%), radial-gradient(circle at 10% 90%, rgba(255,79,184,.3), transparent 55%)",
          }}
        />
        <div
          className="absolute inset-x-0 top-1/3 h-40 opacity-50"
          style={{ background: "linear-gradient(180deg, transparent, #fff0fb)" }}
        />
        <div className="relative mx-auto grid max-w-6xl gap-10 lg:grid-cols-[1.1fr_.9fr] lg:items-center">
          <Reveal>
            <div className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-1.5 text-[10px] font-black uppercase tracking-widest text-[#7c3cff] shadow-md shadow-purple-200/60">
              <Sparkles size={12} /> Bu hafta drop · 25% chrome
            </div>
            <h1 className="mt-6 text-5xl font-black leading-[0.95] tracking-tight md:text-[7rem]" style={{ letterSpacing: "-0.04em" }}>
              {template.heroTitle.split(" ").slice(0, 3).join(" ")}
              <br />
              <span
                className="bg-gradient-to-r from-[#ff4fb8] via-[#9b5cff] to-[#7c3cff] bg-clip-text text-transparent"
              >
                {template.heroTitle.split(" ").slice(3).join(" ")}
              </span>
            </h1>
            <p className="mt-6 max-w-xl text-base leading-7 text-[#251232]/75">{template.heroText}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <BookingTrigger
                className="group inline-flex h-14 items-center gap-2 rounded-full bg-gradient-to-r from-[#ff4fb8] to-[#7c3cff] px-7 text-sm font-black uppercase tracking-widest text-white shadow-xl shadow-pink-300/40 transition hover:from-[#ff7acb] hover:to-[#9b5cff]"
                label="Slot Kap → ✦"
                target={bookingTarget}
              />
              <a className="inline-flex h-14 items-center gap-2 rounded-full border-2 border-[#251232]/15 bg-white px-6 text-sm font-bold uppercase tracking-widest hover:border-[#ff4fb8] hover:text-[#ff4fb8]" href="#galeri">
                Walli gör
              </a>
            </div>
            {/* Chat bubbles */}
            <div className="mt-10 grid max-w-md gap-3">
              <Bubble side="left">Bu hafta kontenjan dolmak üzere ✨</Bubble>
              <Bubble side="right">Chrome manikür 50 dk, fiyat 950 TL</Bubble>
              <Bubble side="left">Gece slotu istersen WhatsApp&apos;tan yaz</Bubble>
            </div>
          </Reveal>
          <Reveal delay={0.08}>
            <div className="relative h-[520px]">
              <div
                className="absolute inset-6 rounded-[44px] shadow-2xl shadow-purple-300/30"
                style={{ background: "linear-gradient(135deg, #ff4fb8, #9b5cff 50%, #7c3cff)" }}
              />
              <div
                className="absolute right-0 top-12 h-44 w-44 rounded-3xl bg-white p-3 shadow-2xl"
                style={{ transform: "rotate(8deg)" }}
              >
                <div className="aspect-square rounded-2xl" style={{ background: "linear-gradient(135deg, #fff0fb, #ff4fb8)" }} />
                <p className="mt-2 text-center text-xs font-black uppercase tracking-widest text-[#ff4fb8]">Chrome ✦</p>
              </div>
              <div
                className="absolute -bottom-2 left-2 h-40 w-40 rounded-3xl bg-white p-3 shadow-2xl"
                style={{ transform: "rotate(-6deg)" }}
              >
                <div className="aspect-square rounded-2xl" style={{ background: "linear-gradient(135deg, #7c3cff, #251232)" }} />
                <p className="mt-2 text-center text-xs font-black uppercase tracking-widest text-[#7c3cff]">Lash pop</p>
              </div>
              <div
                className="absolute left-1/2 top-1/2 inline-flex -translate-x-1/2 -translate-y-1/2 rotate-6 items-center gap-1 rounded-full bg-[#251232] px-4 py-2 text-[10px] font-black uppercase tracking-widest text-[#d7ff38] shadow-xl"
              >
                <Zap size={12} /> 24/7 WhatsApp
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Drop banner */}
      <section className="px-5 pb-10" id="drop">
        <div className="mx-auto max-w-6xl overflow-hidden rounded-[36px] bg-gradient-to-r from-[#ff4fb8] via-[#9b5cff] to-[#7c3cff] p-8 text-white shadow-xl shadow-purple-200/50">
          <div className="grid items-center gap-6 md:grid-cols-[1fr_auto]">
            <div>
              <p className="text-xs font-black uppercase tracking-widest text-white/80">Sınırlı drop</p>
              <h2 className="mt-2 text-3xl font-black leading-tight md:text-4xl">Chrome Manikür + Lash Pop · Bu hafta -25%</h2>
              <p className="mt-2 text-sm text-white/85">Slotlar pazartesi saat 21:00 itibariyle açılır. WhatsApp&apos;tan sıraya gir.</p>
            </div>
            <BookingTrigger
              className="inline-flex h-12 items-center gap-2 rounded-full bg-white px-6 text-sm font-black uppercase tracking-widest text-[#7c3cff] transition hover:bg-[#251232] hover:text-white"
              label="Bu drop'ta slot al ✦"
              target={bookingTarget}
            />
          </div>
        </div>
      </section>

      {/* Menu grid */}
      <section className="px-5 py-20" id="hizmet">
        <div className="mx-auto max-w-6xl">
          <Reveal>
            <p className="text-xs font-black uppercase tracking-widest text-[#ff4fb8]">Menü</p>
            <h2 className="mt-3 text-4xl font-black md:text-6xl">Trend kesimler ve drop&apos;lar.</h2>
          </Reveal>
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {template.services.map((service, idx) => (
              <Reveal delay={idx * 0.05} key={service.name}>
                <article className="group relative overflow-hidden rounded-[28px] border-2 border-[#ff4fb8]/20 bg-white p-6 transition hover:-translate-y-1 hover:border-[#ff4fb8]">
                  <div
                    className="absolute right-0 top-0 h-24 w-24 rounded-bl-[28px]"
                    style={{ background: idx % 2 ? "linear-gradient(135deg,#7c3cff,#ff4fb8)" : "linear-gradient(135deg,#ff4fb8,#9b5cff)" }}
                  />
                  <div className="relative">
                    <div className="text-xs font-black uppercase tracking-widest text-[#7c3cff]">Drop {String(idx + 1).padStart(2, "0")}</div>
                    <h3 className="mt-3 text-2xl font-black">{service.name}</h3>
                    <p className="mt-3 text-sm leading-7 text-[#251232]/70">{service.text}</p>
                    <div className="mt-6 flex items-center justify-between border-t-2 border-dashed border-[#ff4fb8]/30 pt-4">
                      <span className="rounded-full bg-[#fff0fb] px-3 py-1 text-[10px] font-black uppercase tracking-widest text-[#7c3cff]">
                        {service.duration}
                      </span>
                      <span
                        className="bg-gradient-to-r from-[#ff4fb8] to-[#7c3cff] bg-clip-text text-2xl font-black text-transparent"
                      >
                        {service.price}
                      </span>
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Story sticker */}
      <section className="px-5 py-16">
        <div className="mx-auto max-w-6xl rounded-[36px] border-2 border-dashed border-[#ff4fb8]/30 bg-white p-10">
          <div className="grid gap-10 lg:grid-cols-[1.1fr_.9fr] lg:items-center">
            <div>
              <p className="text-xs font-black uppercase tracking-widest text-[#7c3cff]">About</p>
              <h2 className="mt-3 text-3xl font-black leading-tight md:text-5xl">{template.aboutTitle}</h2>
              <p className="mt-5 text-base leading-7 text-[#251232]/75">{template.aboutText}</p>
              <div className="mt-7 flex flex-wrap gap-2">
                {template.highlights.map((item) => (
                  <span
                    className="rounded-full bg-gradient-to-r from-[#fff0fb] to-[#fce4ff] px-4 py-1.5 text-xs font-black uppercase tracking-widest text-[#7c3cff]"
                    key={item}
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-3">
              {template.team.map((member, idx) => (
                <article
                  className="rounded-2xl bg-gradient-to-br from-[#fff0fb] to-[#fce4ff] p-5"
                  key={member.name}
                  style={{ transform: idx % 2 ? "rotate(2deg)" : "rotate(-2deg)" }}
                >
                  <div
                    className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-[#ff4fb8] to-[#7c3cff] text-lg font-black text-white"
                  >
                    {member.avatar}
                  </div>
                  <h3 className="mt-3 text-lg font-black">{member.name}</h3>
                  <p className="text-xs font-bold uppercase tracking-widest text-[#7c3cff]">{member.role}</p>
                  <p className="mt-2 text-xs leading-6 text-[#251232]/70">{member.bio}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Pop packs */}
      <section className="px-5 py-20" id="paket">
        <div className="mx-auto max-w-6xl">
          <Reveal>
            <p className="text-xs font-black uppercase tracking-widest text-[#ff4fb8]">Pop pack</p>
            <h2 className="mt-3 text-4xl font-black md:text-6xl">İkili kombolar.</h2>
          </Reveal>
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {template.packages.map((pack, idx) => (
              <Reveal delay={idx * 0.06} key={pack.name}>
                <article
                  className="relative overflow-hidden rounded-[36px] p-8 text-white shadow-xl"
                  style={{
                    background:
                      idx === 0
                        ? "linear-gradient(135deg, #ff4fb8, #9b5cff)"
                        : "linear-gradient(135deg, #7c3cff, #251232)",
                  }}
                >
                  <div className="absolute -bottom-12 -right-12 h-48 w-48 rounded-full bg-white/15" />
                  <div className="relative">
                    <div className="inline-flex items-center gap-2 rounded-full bg-white/20 px-3 py-1 text-[10px] font-black uppercase tracking-widest">
                      {idx === 0 ? "Hızlı pop" : "Full pop"}
                    </div>
                    <h3 className="mt-4 text-4xl font-black">{pack.name}</h3>
                    <p className="mt-5 text-5xl font-black">{pack.price}</p>
                    <p className="mt-4 text-sm leading-7 text-white/90">{pack.details}</p>
                    <BookingTrigger
                      className="mt-8 inline-flex h-12 items-center gap-2 rounded-full bg-white px-6 text-xs font-black uppercase tracking-widest text-[#7c3cff] transition hover:bg-[#251232] hover:text-white"
                      label={`${pack.name} → slot ✦`}
                      target={bookingTarget}
                    />
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Wall (gallery) */}
      <section className="px-5 py-20" id="galeri">
        <div className="mx-auto max-w-6xl">
          <Reveal>
            <p className="text-xs font-black uppercase tracking-widest text-[#ff4fb8]">Wall</p>
            <h2 className="mt-3 text-4xl font-black md:text-6xl">Bu ay öne çıkan işler.</h2>
          </Reveal>
          <div className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
            {template.gallery.map((item, idx) => (
              <div
                className="relative aspect-square overflow-hidden rounded-2xl"
                key={item.title}
                style={{
                  background: `linear-gradient(${idx * 45}deg, #ff4fb8, #9b5cff ${50 + (idx * 5) % 30}%, #7c3cff)`,
                  transform: idx % 3 === 0 ? "rotate(-1deg)" : "rotate(1deg)",
                }}
              >
                <div className="absolute left-2 top-2 rounded-full bg-white px-2 py-0.5 text-[10px] font-black uppercase text-[#7c3cff]">
                  #{idx + 1}
                </div>
                <div className="absolute inset-x-2 bottom-2 rounded-xl bg-white/90 px-2 py-1 text-xs font-black uppercase tracking-widest text-[#251232]">
                  {item.title}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews as DM bubbles */}
      <section className="bg-white px-5 py-20">
        <div className="mx-auto max-w-6xl">
          <Reveal>
            <p className="text-xs font-black uppercase tracking-widest text-[#7c3cff]">DM</p>
            <h2 className="mt-3 text-4xl font-black md:text-6xl">Müşteri sözü.</h2>
          </Reveal>
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {template.reviews.map((review, idx) => (
              <Reveal delay={idx * 0.05} key={review.name}>
                <article
                  className="rounded-[28px] border-2 border-[#ff4fb8]/20 bg-[#fff0fb] p-6"
                  style={{ transform: `rotate(${idx % 2 ? "1" : "-1"}deg)` }}
                >
                  <div className="flex items-center gap-2">
                    <span className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-[#ff4fb8] to-[#7c3cff] text-xs font-black text-white">
                      {review.avatar}
                    </span>
                    <div>
                      <p className="text-sm font-black">@{review.name.toLowerCase().replace(/[^a-z]/g, "")}</p>
                      <p className="text-[10px] font-bold uppercase tracking-widest text-[#7c3cff]">{review.role}</p>
                    </div>
                  </div>
                  <p className="mt-4 leading-7 text-[#251232]/85">{review.text}</p>
                  <div className="mt-3 flex items-center gap-2 text-xs font-black text-[#ff4fb8]">
                    <Heart size={14} fill="currentColor" /> 234 · 4 saat önce
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Booking */}
      <section className="px-5 py-20" id="randevu">
        <div className="mx-auto grid max-w-6xl gap-10 overflow-hidden rounded-[40px] bg-gradient-to-br from-[#251232] via-[#7c3cff] to-[#ff4fb8] p-10 text-white shadow-2xl shadow-purple-300/40 md:grid-cols-[1.1fr_.9fr]">
          <div>
            <p className="text-xs font-black uppercase tracking-widest text-white/80">Slot kap</p>
            <h2 className="mt-3 text-4xl font-black leading-tight md:text-6xl">Bu hafta için sıra açıldı.</h2>
            <p className="mt-5 max-w-xl text-base text-white/85">
              Tek tıkla WhatsApp&apos;a düşelim. Adın, hizmet ve müsait saatin yeterli.
            </p>
            <BookingTrigger
              className="mt-8 inline-flex h-14 items-center gap-2 rounded-full bg-white px-7 text-sm font-black uppercase tracking-widest text-[#7c3cff] transition hover:bg-[#fff0fb]"
              label="WhatsApp ile slot al ✦"
              target={bookingTarget}
            />
          </div>
          <div className="grid gap-3 rounded-3xl bg-white/15 p-5 text-sm backdrop-blur">
            <Row icon={<Phone size={18} />} title="Hat" body={template.phone} />
            <Row icon={<MessageCircle size={18} />} title="WhatsApp" body="24/7 mesajlaş" />
            <Row icon={<MapPin size={18} />} title="Adres" body={template.address} />
            <div className="rounded-xl bg-white/15 p-3">
              <p className="text-[10px] font-black uppercase tracking-widest">Saatler</p>
              <div className="mt-2 grid gap-0.5 text-xs">
                {template.hours.map((hour) => <p key={hour}>{hour}</p>)}
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="px-5 py-10">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 text-xs font-bold uppercase tracking-widest text-[#251232]/60 md:flex-row">
          <span>© {new Date().getFullYear()} {template.brand} ✦ Demo</span>
          <Link className="hover:text-[#ff4fb8]" href="/">siteüret <ArrowRight size={12} className="inline" /></Link>
        </div>
      </footer>
    </main>
  );
}

function Bubble({ side, children }: { side: "left" | "right"; children: React.ReactNode }) {
  return (
    <div className={`flex ${side === "right" ? "justify-end" : "justify-start"}`}>
      <div
        className={`max-w-xs rounded-2xl px-4 py-2 text-sm shadow-md ${
          side === "right"
            ? "rounded-br-sm bg-gradient-to-r from-[#ff4fb8] to-[#7c3cff] text-white"
            : "rounded-bl-sm border border-[#ff4fb8]/20 bg-white text-[#251232]"
        }`}
      >
        {children}
      </div>
    </div>
  );
}

function Row({ icon, title, body }: { icon: React.ReactNode; title: string; body: string }) {
  return (
    <div className="flex items-start gap-3 rounded-xl bg-white/15 p-3">
      <span className="mt-0.5">{icon}</span>
      <div>
        <p className="text-[10px] font-black uppercase tracking-widest">{title}</p>
        <p className="mt-0.5 text-sm">{body}</p>
      </div>
    </div>
  );
}
