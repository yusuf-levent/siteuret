"use client";

import { Clock, Leaf, MapPin, Phone, Recycle, Sprout, Sun } from "lucide-react";
import Link from "next/link";
import { BookingTrigger } from "@/components/booking";
import { Reveal } from "@/components/reveal";
import { getTemplateImages } from "@/config/template-images";
import type { TemplateDefinition } from "@/config/templates";

const productNotes = [
  { icon: Leaf, title: "Bitkisel şampuan", body: "Sülfatsız, vegan ve doğal kekik özlü." },
  { icon: Sprout, title: "Soğuk pres sakal yağı", body: "Argan, jojoba ve papatya bazlı bakım." },
  { icon: Sun, title: "Düşük ısı styling", body: "Doğal dokuyu koruyan ısı yönetimi." },
  { icon: Recycle, title: "Dönüşümlü ambalaj", body: "Cam şişe iade programı ile %30 indirim." },
];

export function GreenCombPreview({ template }: { template: TemplateDefinition }) {
  const bookingTarget = { templateName: template.name, whatsapp: template.whatsapp };
  const images = getTemplateImages(template.slug);

  return (
    <main className="min-h-screen bg-[#f1f1e6] text-[#1f2a1c]" style={{ fontFamily: "var(--font-sans)" }}>
      <header className="border-b border-[#6f8a62]/20 bg-[#e8ead9]/80 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
          <Link className="flex items-center gap-2 text-lg font-semibold tracking-tight" href="/">
            <Leaf className="text-[#6f8a62]" size={20} /> {template.brand}
          </Link>
          <nav className="hidden gap-7 text-sm text-[#3a4a36] md:flex">
            <a className="hover:text-[#6f8a62]" href="#felsefe">Felsefe</a>
            <a className="hover:text-[#6f8a62]" href="#hizmet">Hizmet</a>
            <a className="hover:text-[#6f8a62]" href="#urun">Ürünler</a>
            <a className="hover:text-[#6f8a62]" href="#paket">Paket</a>
            <a className="hover:text-[#6f8a62]" href="#randevu">Randevu</a>
          </nav>
          <BookingTrigger
            className="inline-flex h-10 items-center gap-2 rounded-full border border-[#6f8a62] bg-[#e8ead9] px-4 text-sm font-medium text-[#3a4a36] transition hover:bg-[#6f8a62] hover:text-white"
            label="Sessiz Randevu"
            target={bookingTarget}
          />
        </div>
      </header>

      {/* Hero - organic spacious */}
      <section className="relative overflow-hidden px-6 py-24 md:py-32">
        <div
          className="absolute inset-0 opacity-40"
          style={{
            backgroundImage:
              "radial-gradient(circle at 10% 20%, rgba(111,138,98,.25), transparent 40%), radial-gradient(circle at 90% 80%, rgba(232,234,217,.8), transparent 50%)",
          }}
        />
        <div className="absolute inset-0" style={{ backgroundImage: "url('data:image/svg+xml;utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%22120%22 height=%22120%22><path d=%22M10 60 Q60 10 110 60 T210 60%22 stroke=%22%236f8a62%22 stroke-opacity=%22.08%22 fill=%22none%22/></svg>')" }} />

        <div className="relative mx-auto grid max-w-6xl gap-12 lg:grid-cols-[1.05fr_.95fr] lg:items-center">
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-[#6f8a62]/40 bg-white/60 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-[#3a4a36]">
              <Sprout size={14} /> Sürdürülebilir berber
            </span>
            <h1 className="mt-6 text-5xl font-semibold leading-[1.05] tracking-tight md:text-7xl" style={{ fontFamily: "var(--font-serif)" }}>
              {template.heroTitle}
            </h1>
            <p className="mt-7 max-w-xl text-lg leading-9 text-[#3a4a36]/85">{template.heroText}</p>
            <div className="mt-9 flex flex-wrap gap-3">
              <BookingTrigger
                className="inline-flex h-13 items-center gap-2 rounded-full bg-[#3a4a36] px-7 py-3 text-sm font-semibold text-white transition hover:bg-[#2a3727]"
                label="Sakin bir randevu ayarla"
                target={bookingTarget}
              />
              <a className="inline-flex h-13 items-center gap-2 rounded-full border border-[#3a4a36]/30 px-6 py-3 text-sm font-semibold text-[#3a4a36] transition hover:border-[#3a4a36] hover:bg-white" href="#urun">
                Ürünleri tanı
              </a>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            {/* Botanical mockup */}
            <div className="relative">
              <div className="aspect-[4/5] w-full overflow-hidden rounded-[40%_60%_55%_45%/55%_45%_60%_40%] shadow-2xl">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img alt={template.brand} className="h-full w-full object-cover" loading="eager" src={images.hero} />
              </div>
              <div className="absolute -bottom-6 -left-6 rounded-2xl border border-[#6f8a62]/30 bg-white p-4 shadow-xl">
                <Leaf className="text-[#6f8a62]" size={22} />
                <p className="mt-2 text-xs font-semibold uppercase tracking-widest text-[#3a4a36]">100% bitkisel</p>
                <p className="text-xs text-[#3a4a36]/70">Test edilmiş cilt dostu formüller</p>
              </div>
              <div className="absolute -right-4 top-10 rounded-2xl bg-[#3a4a36] p-4 text-white shadow-xl">
                <Recycle size={22} />
                <p className="mt-2 text-xs font-semibold uppercase tracking-widest">Geri dönüşüm</p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Philosophy */}
      <section className="bg-[#e8ead9] px-6 py-20" id="felsefe">
        <div className="mx-auto max-w-5xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#6f8a62]">Felsefe</p>
          <h2 className="mt-4 text-3xl font-semibold leading-snug md:text-5xl" style={{ fontFamily: "var(--font-serif)" }}>
            {template.aboutTitle}
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-9 text-[#3a4a36]/85">{template.aboutText}</p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
            {template.highlights.map((item) => (
              <span className="rounded-full border border-[#6f8a62]/30 bg-white px-4 py-2 text-sm font-medium text-[#3a4a36]" key={item}>
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Services as natural list */}
      <section className="px-6 py-24" id="hizmet">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-12 lg:grid-cols-[1fr_1.5fr]">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#6f8a62]">Hizmet</p>
              <h2 className="mt-4 text-4xl font-semibold leading-tight md:text-5xl" style={{ fontFamily: "var(--font-serif)" }}>
                Yavaş bakım, doğal sonuçlar.
              </h2>
              <p className="mt-5 leading-8 text-[#3a4a36]/80">
                Hizmetlerimiz acele etmez. Bitkisel ürün, düşük ısı ve sakin tempo ile uzun ömürlü bir sonuç hedefleriz.
              </p>
            </div>
            <div className="space-y-4">
              {template.services.map((service, idx) => (
                <Reveal delay={idx * 0.05} key={service.name}>
                  <article className="grid gap-4 rounded-3xl border border-[#6f8a62]/30 bg-white/70 p-7 sm:grid-cols-[auto_1fr_auto] sm:items-center">
                    <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#e8ead9]">
                      <Leaf className="text-[#6f8a62]" size={24} />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold">{service.name}</h3>
                      <p className="mt-1 text-sm leading-7 text-[#3a4a36]/75">{service.text}</p>
                    </div>
                    <div className="flex flex-col items-end gap-1">
                      <span className="text-xl font-bold text-[#3a4a36]">{service.price}</span>
                      <span className="text-xs text-[#3a4a36]/60">{service.duration}</span>
                    </div>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Natural products */}
      <section className="bg-[#3a4a36] px-6 py-24 text-[#f1f1e6]" id="urun">
        <div className="mx-auto max-w-6xl">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#c7d1b8]">Doğal ürünler</p>
          <h2 className="mt-4 text-4xl font-semibold leading-tight md:text-5xl" style={{ fontFamily: "var(--font-serif)" }}>
            Kullandığımız her ürünün hikayesi var.
          </h2>
          <p className="mt-5 max-w-2xl leading-9 text-[#c7d1b8]/80">
            Saç ve cilt için sadece bitkisel, vegan ve testlerden geçmiş ürünler tercih ediyoruz. Ambalajları cam ve geri dönüşümlü.
          </p>
          <div className="mt-12 grid gap-5 sm:grid-cols-2">
            {productNotes.map((note, idx) => (
              <Reveal delay={idx * 0.05} key={note.title}>
                <article className="flex items-start gap-4 rounded-2xl border border-[#c7d1b8]/20 bg-[#2c3a29] p-6">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#6f8a62]/30">
                    <note.icon className="text-[#c7d1b8]" size={22} />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">{note.title}</h3>
                    <p className="mt-1 text-sm leading-7 text-[#c7d1b8]/75">{note.body}</p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Packages */}
      <section className="px-6 py-24" id="paket">
        <div className="mx-auto max-w-6xl">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#6f8a62]">Paket</p>
          <h2 className="mt-4 text-4xl font-semibold leading-tight md:text-5xl" style={{ fontFamily: "var(--font-serif)" }}>
            Sakin ritüeller.
          </h2>
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {template.packages.map((pack, idx) => (
              <Reveal delay={idx * 0.05} key={pack.name}>
                <article className="relative overflow-hidden rounded-[36px] border border-[#6f8a62]/30 bg-white p-8 shadow-sm">
                  <div className="absolute -right-12 -top-12 h-44 w-44 rounded-full bg-[#e8ead9]" />
                  <div className="relative">
                    <h3 className="text-3xl font-semibold" style={{ fontFamily: "var(--font-serif)" }}>{pack.name}</h3>
                    <p className="mt-4 text-3xl font-bold text-[#3a4a36]">{pack.price}</p>
                    <p className="mt-4 leading-8 text-[#3a4a36]/75">{pack.details}</p>
                    <BookingTrigger
                      className="mt-8 inline-flex h-12 items-center gap-2 rounded-full bg-[#3a4a36] px-6 text-sm font-semibold text-white transition hover:bg-[#2a3727]"
                      label={`${pack.name} için yer ayır`}
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
      <section className="bg-[#e8ead9] px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#6f8a62]">Ekip</p>
          <h2 className="mt-4 text-4xl font-semibold leading-tight md:text-5xl" style={{ fontFamily: "var(--font-serif)" }}>
            Doğal bakım uzmanları.
          </h2>
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {template.team.map((member) => (
              <article className="grid gap-5 rounded-3xl bg-white p-6 sm:grid-cols-[auto_1fr]" key={member.name}>
                <div
                  className="flex h-24 w-24 items-center justify-center rounded-[35%_65%_60%_40%/45%_55%_60%_40%] text-2xl font-bold text-[#f1f1e6]"
                  style={{ background: "linear-gradient(160deg,#6f8a62,#2f3d2f)" }}
                >
                  {member.avatar}
                </div>
                <div>
                  <h3 className="text-xl font-semibold">{member.name}</h3>
                  <p className="text-sm text-[#6f8a62]">{member.role}</p>
                  <p className="mt-3 text-sm leading-7 text-[#3a4a36]/80">{member.bio}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery as masonry-ish organic */}
      <section className="px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#6f8a62]">Atölye</p>
          <h2 className="mt-4 text-4xl font-semibold leading-tight md:text-5xl" style={{ fontFamily: "var(--font-serif)" }}>
            Sakin anlar.
          </h2>
          <div className="mt-12 grid gap-4 sm:grid-cols-3">
            {template.gallery.map((item, idx) => (
              <div
                className="relative aspect-square overflow-hidden"
                key={item.title}
                style={{
                  borderRadius: idx % 3 === 0 ? "55% 45% 65% 35%" : idx % 3 === 1 ? "35% 65% 40% 60%" : "50%",
                }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img alt={item.title} className="h-full w-full object-cover" loading="lazy" src={images.gallery[idx % images.gallery.length]} />
                <div className="absolute inset-0 bg-gradient-to-t from-[#2f3d2f]/55 to-transparent" />
                <div className="absolute inset-x-3 bottom-3 flex justify-start">
                  <span className="rounded-full bg-white/95 px-3 py-1 text-xs font-semibold text-[#3a4a36]">{item.title}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="bg-[#2f3d2f] px-6 py-24 text-[#f1f1e6]">
        <div className="mx-auto max-w-5xl">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#c7d1b8]">Notlar</p>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {template.reviews.map((review, idx) => (
              <Reveal delay={idx * 0.05} key={review.name}>
                <blockquote className="rounded-3xl border border-[#c7d1b8]/20 bg-[#3a4a36] p-6">
                  <p className="leading-8 text-[#f1f1e6]/90" style={{ fontFamily: "var(--font-serif)" }}>“{review.text}”</p>
                  <footer className="mt-5 text-sm">
                    <strong>{review.name}</strong> · <span className="text-[#c7d1b8]">{review.role}</span>
                  </footer>
                </blockquote>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Booking + contact */}
      <section className="px-6 py-24" id="randevu">
        <div className="mx-auto grid max-w-6xl gap-10 rounded-[40px] border border-[#6f8a62]/30 bg-[#e8ead9] p-10 md:grid-cols-2">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#6f8a62]">Randevu</p>
            <h2 className="mt-4 text-4xl font-semibold leading-tight md:text-5xl" style={{ fontFamily: "var(--font-serif)" }}>
              Sakin saatlerde sizi bekliyoruz.
            </h2>
            <p className="mt-5 leading-8 text-[#3a4a36]/85">
              Sessiz randevu saatlerinde stüdyo sadece sizin için ayrılır. WhatsApp&apos;tan ulaşın, müsait saati ayarlayalım.
            </p>
            <BookingTrigger
              className="mt-8 inline-flex h-12 items-center gap-2 rounded-full bg-[#3a4a36] px-7 text-sm font-semibold text-white transition hover:bg-[#2a3727]"
              label="WhatsApp ile yer ayır"
              target={bookingTarget}
            />
          </div>
          <div className="space-y-4 rounded-3xl bg-white p-6">
            <Row icon={<Phone size={18} />} title="Telefon" body={template.phone} />
            <Row icon={<MapPin size={18} />} title="Adres" body={template.address} />
            <Row
              icon={<Clock size={18} />}
              title="Çalışma saatleri"
              body={template.hours.join(" · ")}
            />
          </div>
        </div>
      </section>

      <footer className="border-t border-[#6f8a62]/20 px-6 py-8 text-sm text-[#3a4a36]/70">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-2 md:flex-row">
          <span>© {new Date().getFullYear()} {template.brand} — Demo şablon</span>
          <Link className="hover:text-[#3a4a36]" href="/">siteüret</Link>
        </div>
      </footer>
    </main>
  );
}

function Row({ icon, title, body }: { icon: React.ReactNode; title: string; body: string }) {
  return (
    <div className="flex items-start gap-3">
      <span className="mt-1 text-[#6f8a62]">{icon}</span>
      <div>
        <p className="text-xs font-semibold uppercase tracking-widest text-[#6f8a62]">{title}</p>
        <p className="mt-1 text-sm text-[#3a4a36]">{body}</p>
      </div>
    </div>
  );
}
