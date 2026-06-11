"use client";

import { ArrowRight, Flame, MapPin, Phone, Zap } from "lucide-react";
import Link from "next/link";
import { BookingTrigger } from "@/components/booking";
import { Reveal } from "@/components/reveal";
import type { TemplateDefinition } from "@/config/templates";

export function InkFadePreview({ template }: { template: TemplateDefinition }) {
  const bookingTarget = { templateName: template.name, whatsapp: template.whatsapp };

  return (
    <main className="min-h-screen bg-[#09090d] text-white" style={{ fontFamily: "var(--font-sans)" }}>
      {/* Scrolling marquee */}
      <div className="overflow-hidden border-b border-[#d7ff38]/30 bg-[#d7ff38] py-2 text-xs font-black uppercase tracking-widest text-black">
        <div className="flex animate-[scroll_30s_linear_infinite] gap-12 whitespace-nowrap">
          {Array.from({ length: 8 }).map((_, i) => (
            <span key={i} className="flex items-center gap-3">
              <Flame size={14} /> FRESH DROPS · FADE · TATTOO · PIERCING · {template.brand.toUpperCase()} · {i}
            </span>
          ))}
        </div>
      </div>

      <header className="sticky top-0 z-30 border-b border-white/10 bg-[#09090d]/90 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4">
          <Link className="text-xl font-black uppercase tracking-tight" href="/">
            <span className="text-[#d7ff38]">/</span>
            {template.brand.replace(/\s/g, "")}
          </Link>
          <nav className="hidden gap-6 text-xs font-bold uppercase tracking-wider md:flex">
            <a href="#drops" className="hover:text-[#d7ff38]">Drops</a>
            <a href="#hizmet" className="hover:text-[#d7ff38]">Hizmet</a>
            <a href="#paket" className="hover:text-[#d7ff38]">Paket</a>
            <a href="#galeri" className="hover:text-[#d7ff38]">Galeri</a>
            <a href="#randevu" className="hover:text-[#ff3d81]">Randevu</a>
          </nav>
          <BookingTrigger
            className="inline-flex h-10 -rotate-2 items-center gap-2 rounded-md bg-[#d7ff38] px-4 text-xs font-black uppercase tracking-widest text-black transition hover:rotate-0 hover:bg-[#ff3d81] hover:text-white"
            label="Slot Kap"
            target={bookingTarget}
          />
        </div>
      </header>

      {/* Asymmetric poster hero */}
      <section className="relative overflow-hidden px-5 py-16 md:py-24">
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: "radial-gradient(circle at 80% 20%, #ff3d81 0, transparent 40%), radial-gradient(circle at 10% 80%, #d7ff38 0, transparent 40%)",
          }}
        />
        <div className="relative mx-auto grid max-w-7xl gap-10 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <Reveal>
              <div className="inline-flex -rotate-2 items-center gap-2 border-4 border-[#d7ff38] bg-black px-3 py-1.5 text-xs font-black uppercase tracking-widest text-[#d7ff38]">
                <Flame size={14} /> Yeni sezon · 25% off ilk randevu
              </div>
              <h1 className="mt-6 text-6xl font-black leading-[0.9] tracking-tight md:text-[7rem]" style={{ letterSpacing: "-0.04em" }}>
                {template.heroTitle.split(" ").slice(0, 2).join(" ")}
                <br />
                <span className="text-[#d7ff38]">{template.heroTitle.split(" ").slice(2, 4).join(" ")}</span>
                <br />
                <span className="text-[#ff3d81]">{template.heroTitle.split(" ").slice(4).join(" ")}</span>
              </h1>
              <p className="mt-7 max-w-xl text-base leading-7 text-white/70">{template.heroText}</p>
              <div className="mt-8 flex flex-wrap gap-4">
                <BookingTrigger
                  className="group inline-flex h-14 -rotate-1 items-center gap-3 rounded-md bg-[#ff3d81] px-7 text-sm font-black uppercase tracking-widest text-white transition hover:rotate-0"
                  label="Randevu Kap →"
                  target={bookingTarget}
                />
                <a className="inline-flex h-14 items-center gap-2 rounded-md border-2 border-white/30 px-6 text-sm font-bold uppercase tracking-widest transition hover:border-[#d7ff38] hover:text-[#d7ff38]" href="#galeri">
                  Drop&apos;ları gör
                </a>
              </div>
            </Reveal>
          </div>
          <div className="relative lg:col-span-5">
            {/* Stacked sticker stack */}
            <div className="relative h-[420px]">
              <div
                className="absolute left-4 top-4 h-72 w-72 rotate-6 border-4 border-[#d7ff38] bg-[#0b0b0f]"
                style={{ background: "linear-gradient(135deg, #09090d, #ff3d81)" }}
              />
              <div
                className="absolute right-2 top-20 h-64 w-64 -rotate-3 border-4 border-white bg-black"
                style={{ background: "linear-gradient(180deg, #d7ff38, #09090d)" }}
              />
              <div
                className="absolute bottom-6 left-12 flex h-40 w-40 -rotate-12 items-center justify-center border-4 border-[#ff3d81] bg-[#09090d]"
              >
                <div className="text-center">
                  <div className="text-3xl font-black text-[#ff3d81]">25%</div>
                  <div className="text-xs font-bold uppercase tracking-widest text-white">İlk fade</div>
                </div>
              </div>
              <div className="absolute right-4 bottom-2 inline-flex rotate-6 items-center gap-1 bg-[#d7ff38] px-3 py-1 text-[10px] font-black uppercase tracking-widest text-black">
                <Zap size={12} /> 24/7 WhatsApp
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Drops campaign strip */}
      <section className="border-y-4 border-[#d7ff38] bg-[#d7ff38] py-12 text-black" id="drops">
        <div className="mx-auto grid max-w-7xl gap-6 px-5 md:grid-cols-3">
          {[
            { tag: "Trend kesim", title: "Skin fade + line", body: "Bu hafta öne çıkan." },
            { tag: "Yeni", title: "Tattoo line detail", body: "Saç çizgisi üzeri özel desen." },
            { tag: "Limit", title: "Piercing prep", body: "Hijyen seti + danışmanlık." },
          ].map((drop, idx) => (
            <Reveal delay={idx * 0.06} key={drop.title}>
              <div className="border-4 border-black bg-white p-6">
                <div className="text-xs font-black uppercase tracking-widest text-[#ff3d81]">{drop.tag}</div>
                <h3 className="mt-3 text-2xl font-black uppercase">{drop.title}</h3>
                <p className="mt-2 text-sm font-semibold">{drop.body}</p>
                <BookingTrigger
                  className="mt-5 inline-flex items-center gap-2 border-b-4 border-black text-xs font-black uppercase tracking-widest hover:text-[#ff3d81]"
                  label={`Bu drop → randevu`}
                  target={bookingTarget}
                />
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Horizontal scroll services */}
      <section className="py-20" id="hizmet">
        <div className="mx-auto max-w-7xl px-5">
          <Reveal>
            <div className="flex items-end justify-between">
              <div>
                <p className="text-xs font-black uppercase tracking-widest text-[#d7ff38]">/ Hizmet</p>
                <h2 className="mt-3 text-4xl font-black uppercase md:text-6xl">Menü → kaydır</h2>
              </div>
              <span className="hidden text-xs font-semibold uppercase tracking-widest text-white/50 md:inline">
                yatay scroll
              </span>
            </div>
          </Reveal>
        </div>
        <div className="mt-10 overflow-x-auto pb-6">
          <div className="mx-auto flex max-w-7xl gap-5 px-5">
            {template.services.map((service, idx) => (
              <Reveal delay={idx * 0.04} key={service.name}>
                <article className="w-80 shrink-0 border-2 border-[#d7ff38]/40 bg-[#0f0f15] p-7 transition hover:border-[#d7ff38]">
                  <div className="text-6xl font-black text-[#d7ff38]/30">{String(idx + 1).padStart(2, "0")}</div>
                  <h3 className="mt-3 text-3xl font-black uppercase">{service.name}</h3>
                  <p className="mt-4 text-sm leading-7 text-white/70">{service.text}</p>
                  <div className="mt-7 flex items-center justify-between border-t border-white/15 pt-4">
                    <span className="text-xs uppercase tracking-widest text-white/60">{service.duration}</span>
                    <span className="text-2xl font-black text-[#ff3d81]">{service.price}</span>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Packages */}
      <section className="border-y-2 border-white/10 bg-[#0d0d12] py-20" id="paket">
        <div className="mx-auto max-w-7xl px-5">
          <Reveal>
            <p className="text-xs font-black uppercase tracking-widest text-[#ff3d81]">/ Paket</p>
            <h2 className="mt-3 text-4xl font-black uppercase md:text-6xl">İki seçim, net fiyat.</h2>
          </Reveal>
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {template.packages.map((pack, idx) => (
              <Reveal delay={idx * 0.05} key={pack.name}>
                <article
                  className={`relative border-4 p-8 ${
                    idx === 0 ? "border-[#d7ff38] bg-[#09090d]" : "border-[#ff3d81] bg-[#09090d]"
                  }`}
                >
                  <div className="absolute -top-4 left-7 rotate-2 bg-black px-3 py-1 text-[10px] font-black uppercase tracking-widest text-[#d7ff38]">
                    {idx === 0 ? "Hızlı drop" : "Tam set"}
                  </div>
                  <h3 className="text-4xl font-black uppercase">{pack.name}</h3>
                  <p className="mt-3 text-5xl font-black text-[#d7ff38]">{pack.price}</p>
                  <p className="mt-4 text-sm leading-7 text-white/70">{pack.details}</p>
                  <BookingTrigger
                    className="mt-8 inline-flex h-12 -rotate-1 items-center gap-2 bg-[#d7ff38] px-5 text-xs font-black uppercase tracking-widest text-black transition hover:rotate-0 hover:bg-white"
                    label={`${pack.name} → kap`}
                    target={bookingTarget}
                  />
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Crew */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-5">
          <Reveal>
            <p className="text-xs font-black uppercase tracking-widest text-[#d7ff38]">/ Crew</p>
            <h2 className="mt-3 text-4xl font-black uppercase md:text-6xl">{template.aboutTitle}</h2>
            <p className="mt-5 max-w-2xl text-base leading-7 text-white/70">{template.aboutText}</p>
          </Reveal>
          <div className="mt-12 grid gap-5 md:grid-cols-2">
            {template.team.map((member, idx) => (
              <Reveal delay={idx * 0.05} key={member.name}>
                <article className="group relative overflow-hidden border-2 border-white/15 bg-[#0f0f15] p-6 transition hover:border-[#d7ff38]">
                  <div className="absolute -right-6 -top-6 text-[10rem] font-black leading-none text-white/5">
                    {member.avatar}
                  </div>
                  <div className="relative">
                    <div className="text-xs font-black uppercase tracking-widest text-[#ff3d81]">{member.role}</div>
                    <h3 className="mt-2 text-3xl font-black uppercase">{member.name}</h3>
                    <p className="mt-4 text-sm leading-7 text-white/70">{member.bio}</p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Sticker gallery wall */}
      <section className="border-y-2 border-white/10 bg-[#0d0d12] py-20" id="galeri">
        <div className="mx-auto max-w-7xl px-5">
          <Reveal>
            <p className="text-xs font-black uppercase tracking-widest text-[#d7ff38]">/ Galeri</p>
            <h2 className="mt-3 text-4xl font-black uppercase md:text-6xl">Wall of fame</h2>
          </Reveal>
          <div className="mt-12 grid grid-cols-2 gap-3 md:grid-cols-4">
            {template.gallery.map((item, idx) => (
              <div
                className="relative aspect-square overflow-hidden border-2 border-white/10"
                key={item.title}
                style={{
                  background: `linear-gradient(${idx * 45}deg, #09090d, ${idx % 2 ? "#d7ff38" : "#ff3d81"})`,
                  transform: idx % 3 === 0 ? "rotate(-1deg)" : "rotate(1deg)",
                }}
              >
                <div className="absolute inset-x-2 bottom-2 bg-black/80 px-2 py-1 text-[10px] font-black uppercase tracking-widest text-[#d7ff38]">
                  {item.title}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews as social stickers */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-5">
          <Reveal>
            <p className="text-xs font-black uppercase tracking-widest text-[#ff3d81]">/ Söz crew&apos;da</p>
            <h2 className="mt-3 text-4xl font-black uppercase md:text-6xl">DM&apos;ler</h2>
          </Reveal>
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {template.reviews.map((review, idx) => (
              <Reveal delay={idx * 0.04} key={review.name}>
                <article
                  className="relative rounded-2xl border-2 border-white/15 bg-[#0f0f15] p-6"
                  style={{ transform: `rotate(${idx % 2 ? "-1" : "1"}deg)` }}
                >
                  <div className="absolute -top-3 left-4 rounded-full bg-[#d7ff38] px-2 py-0.5 text-[10px] font-black uppercase text-black">
                    @{review.name.toLowerCase().replace(/[^a-z]/g, "")}
                  </div>
                  <p className="text-base leading-7">{review.text}</p>
                  <div className="mt-5 flex items-center justify-between text-xs font-bold uppercase tracking-widest text-white/60">
                    <span>{review.role}</span>
                    <span className="text-[#ff3d81]">★★★★★</span>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Booking strip */}
      <section className="border-y-4 border-[#d7ff38] bg-[#d7ff38] py-16 text-black" id="randevu">
        <div className="mx-auto grid max-w-7xl gap-8 px-5 md:grid-cols-[1.2fr_.8fr] md:items-center">
          <div>
            <h2 className="text-4xl font-black uppercase leading-none md:text-6xl">Bir slot var.<br />Senin mi?</h2>
            <p className="mt-5 max-w-xl text-base font-semibold">
              Gece randevuları WhatsApp&apos;tan. Tek dokunuş, sıraya gir.
            </p>
          </div>
          <div className="grid gap-3">
            <BookingTrigger
              className="inline-flex h-14 -rotate-1 items-center justify-center gap-2 rounded-md bg-black px-6 text-sm font-black uppercase tracking-widest text-[#d7ff38] transition hover:rotate-0 hover:bg-[#ff3d81] hover:text-white"
              label="Slot Kap → WhatsApp"
              target={bookingTarget}
            />
            <a className="inline-flex h-12 items-center justify-center gap-2 rounded-md border-2 border-black text-sm font-black uppercase tracking-widest hover:bg-black hover:text-[#d7ff38]" href={`tel:${template.phone.replace(/\s/g, "")}`}>
              <Phone size={16} /> {template.phone}
            </a>
          </div>
        </div>
      </section>

      <footer className="px-5 py-10">
        <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-3">
          <div>
            <p className="text-xs font-black uppercase tracking-widest text-[#d7ff38]">Adres</p>
            <div className="mt-2 flex items-start gap-2 text-sm"><MapPin size={16} /> {template.address}</div>
          </div>
          <div>
            <p className="text-xs font-black uppercase tracking-widest text-[#d7ff38]">Saatler</p>
            <div className="mt-2 grid gap-1 text-sm">
              {template.hours.map((hour) => <p key={hour}>{hour}</p>)}
            </div>
          </div>
          <div>
            <p className="text-xs font-black uppercase tracking-widest text-[#d7ff38]">Demo</p>
            <Link className="mt-2 inline-flex items-center gap-2 text-sm font-bold hover:text-[#d7ff38]" href="/">
              siteüret <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </footer>

      <style dangerouslySetInnerHTML={{ __html: `@keyframes scroll { from { transform: translateX(0); } to { transform: translateX(-50%); } }` }} />
    </main>
  );
}
