"use client";

import {
  Activity,
  CheckCircle2,
  Clock,
  Droplets,
  Mail,
  MapPin,
  Microscope,
  Phone,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import Link from "next/link";
import { BookingTrigger } from "@/components/booking";
import { Reveal } from "@/components/reveal";
import { getTemplateImages } from "@/config/template-images";
import type { TemplateDefinition } from "@/config/templates";

const processSteps = [
  { icon: Microscope, title: "Cilt analizi", body: "20 dakika ücretsiz değerlendirme ve bakım planı." },
  { icon: Activity, title: "Plan oluşturma", body: "Seans aralığı, ürün ve hedefler birlikte belirlenir." },
  { icon: Droplets, title: "Bakım uygulaması", body: "Steril ekipman, tek kullanımlık malzeme ve uzman dokunuş." },
  { icon: ShieldCheck, title: "Takip", body: "Her seans sonrası WhatsApp'tan ilerleme notu." },
];

const hygieneNotes = [
  "Her seansta tek kullanımlık malzeme",
  "EU sertifikalı bakım ürünleri",
  "Uzman cilt danışmanlığı dahil",
  "Hassas cilt uyumlu protokoller",
];

export function PureSkinPreview({ template }: { template: TemplateDefinition }) {
  const bookingTarget = { templateName: template.name, whatsapp: template.whatsapp };
  const images = getTemplateImages(template.slug);

  return (
    <main className="min-h-screen bg-white text-[#102033]" style={{ fontFamily: "var(--font-sans)" }}>
      <header className="border-b border-[#bde8eb]/60 bg-white">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
          <Link className="flex items-center gap-2 text-lg font-semibold tracking-tight" href="/">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#2aa7a3] text-white">
              <Droplets size={16} />
            </div>
            {template.brand}
          </Link>
          <nav className="hidden gap-7 text-sm font-medium text-[#102033]/70 md:flex">
            <a className="hover:text-[#2aa7a3]" href="#surec">Süreç</a>
            <a className="hover:text-[#2aa7a3]" href="#hizmet">Hizmetler</a>
            <a className="hover:text-[#2aa7a3]" href="#hijyen">Hijyen</a>
            <a className="hover:text-[#2aa7a3]" href="#paket">Paketler</a>
            <a className="hover:text-[#2aa7a3]" href="#analiz">Cilt analizi</a>
          </nav>
          <BookingTrigger
            className="inline-flex h-10 items-center gap-2 rounded-lg bg-[#2aa7a3] px-4 text-sm font-semibold text-white transition hover:bg-[#1f827e]"
            label="Ücretsiz analiz"
            target={bookingTarget}
          />
        </div>
      </header>

      {/* Hero */}
      <section className="relative px-6 pt-16 pb-12 md:pt-24 md:pb-20">
        <div className="absolute inset-x-0 top-0 h-72 bg-gradient-to-b from-[#eef8fb] to-transparent" />
        <div className="relative mx-auto grid max-w-6xl gap-12 lg:grid-cols-[1.1fr_.9fr] lg:items-center">
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-[#2aa7a3]/30 bg-[#eef8fb] px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-[#2aa7a3]">
              <ShieldCheck size={14} /> Klinik düzeyde hijyen
            </span>
            <h1 className="mt-6 text-4xl font-semibold leading-tight tracking-tight md:text-6xl">
              {template.heroTitle}
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-8 text-[#102033]/75">{template.heroText}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <BookingTrigger
                className="inline-flex h-12 items-center gap-2 rounded-lg bg-[#2aa7a3] px-6 text-sm font-semibold text-white shadow-md shadow-teal-200/50 transition hover:bg-[#1f827e]"
                label="Ücretsiz cilt analizi"
                target={bookingTarget}
              />
              <a className="inline-flex h-12 items-center gap-2 rounded-lg border border-[#bde8eb] bg-white px-6 text-sm font-semibold text-[#102033] transition hover:bg-[#eef8fb]" href="#surec">
                Süreci gör
              </a>
            </div>
            <ul className="mt-9 grid gap-2 sm:grid-cols-2">
              {hygieneNotes.map((note) => (
                <li className="flex items-start gap-2 text-sm text-[#102033]/80" key={note}>
                  <CheckCircle2 className="mt-0.5 text-[#2aa7a3]" size={16} />
                  {note}
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={0.08}>
            {/* Clean clinic visual */}
            <div className="relative">
              <div className="overflow-hidden rounded-3xl border border-[#bde8eb] bg-[#eef8fb] p-8 shadow-xl shadow-teal-100/60">
                <div className="relative aspect-[5/6] w-full overflow-hidden rounded-2xl">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img alt={template.brand} className="h-full w-full object-cover" loading="eager" src={images.hero} />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#2aa7a3]/35 to-transparent" />
                </div>
                <div className="mt-6 grid grid-cols-2 gap-3 text-xs">
                  <div className="rounded-xl bg-white p-3">
                    <p className="font-semibold text-[#2aa7a3]">Bakım sonrası</p>
                    <p className="mt-1 text-base font-bold text-[#102033]">+34% nem</p>
                  </div>
                  <div className="rounded-xl bg-white p-3">
                    <p className="font-semibold text-[#2aa7a3]">Müşteri</p>
                    <p className="mt-1 text-base font-bold text-[#102033]">%96 öneri</p>
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-5 -left-5 rounded-2xl border border-[#bde8eb] bg-white px-5 py-3 shadow-md">
                <p className="text-xs font-semibold uppercase tracking-widest text-[#2aa7a3]">Ücretsiz</p>
                <p className="mt-1 text-sm font-bold">İlk cilt analizi</p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Process steps */}
      <section className="border-t border-[#bde8eb]/60 bg-[#eef8fb] px-6 py-20" id="surec">
        <div className="mx-auto max-w-6xl">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-widest text-[#2aa7a3]">Süreç</p>
            <h2 className="mt-3 text-3xl font-semibold md:text-5xl">4 adımda netleşen bakım planı.</h2>
          </Reveal>
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {processSteps.map((step, idx) => (
              <Reveal delay={idx * 0.06} key={step.title}>
                <article className="h-full rounded-2xl border border-[#bde8eb] bg-white p-6">
                  <div className="flex items-center justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#dff7fb] text-[#2aa7a3]">
                      <step.icon size={22} />
                    </div>
                    <span className="text-2xl font-bold text-[#bde8eb]">{String(idx + 1).padStart(2, "0")}</span>
                  </div>
                  <h3 className="mt-5 text-lg font-semibold">{step.title}</h3>
                  <p className="mt-2 text-sm leading-7 text-[#102033]/70">{step.body}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Services as checklist */}
      <section className="px-6 py-20" id="hizmet">
        <div className="mx-auto max-w-6xl">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-widest text-[#2aa7a3]">Hizmetler</p>
            <h2 className="mt-3 text-3xl font-semibold md:text-5xl">Net süre, net süreç, net ücret.</h2>
          </Reveal>
          <div className="mt-12 overflow-hidden rounded-2xl border border-[#bde8eb]">
            <table className="w-full text-sm">
              <thead className="bg-[#eef8fb] text-xs font-semibold uppercase tracking-widest text-[#2aa7a3]">
                <tr>
                  <th className="px-5 py-3 text-left">Hizmet</th>
                  <th className="hidden px-5 py-3 text-left md:table-cell">Süreç</th>
                  <th className="px-5 py-3 text-right">Süre</th>
                  <th className="px-5 py-3 text-right">Ücret</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#bde8eb]/60">
                {template.services.map((service) => (
                  <tr className="bg-white" key={service.name}>
                    <td className="px-5 py-5 align-top">
                      <div className="font-semibold">{service.name}</div>
                      <div className="mt-1 text-xs text-[#102033]/60 md:hidden">{service.text}</div>
                    </td>
                    <td className="hidden px-5 py-5 align-top text-[#102033]/70 md:table-cell">{service.text}</td>
                    <td className="px-5 py-5 text-right align-top text-xs font-semibold uppercase tracking-widest text-[#2aa7a3]">{service.duration}</td>
                    <td className="px-5 py-5 text-right align-top text-lg font-bold text-[#102033]">{service.price}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Hygiene & expertise */}
      <section className="bg-[#102033] px-6 py-20 text-white" id="hijyen">
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[1.1fr_.9fr]">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-widest text-[#5fd1cd]">Hijyen & uzmanlık</p>
            <h2 className="mt-3 text-3xl font-semibold leading-tight md:text-5xl">{template.aboutTitle}</h2>
            <p className="mt-5 max-w-xl text-base leading-8 text-white/75">{template.aboutText}</p>
            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {hygieneNotes.map((note) => (
                <div className="flex items-start gap-3 rounded-xl border border-white/10 bg-white/5 p-3 text-sm" key={note}>
                  <ShieldCheck className="mt-0.5 text-[#5fd1cd]" size={16} /> {note}
                </div>
              ))}
            </div>
          </Reveal>
          <Reveal delay={0.05}>
            <div className="grid gap-3">
              {template.team.map((member) => (
                <article className="flex items-start gap-4 rounded-2xl border border-white/10 bg-white/5 p-5" key={member.name}>
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#5fd1cd]/20 text-[#5fd1cd] font-bold">
                    {member.avatar}
                  </div>
                  <div>
                    <h3 className="font-semibold">{member.name}</h3>
                    <p className="text-xs uppercase tracking-widest text-[#5fd1cd]">{member.role}</p>
                    <p className="mt-2 text-sm leading-7 text-white/70">{member.bio}</p>
                  </div>
                </article>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* Packages */}
      <section className="px-6 py-20" id="paket">
        <div className="mx-auto max-w-6xl">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-widest text-[#2aa7a3]">Paketler</p>
            <h2 className="mt-3 text-3xl font-semibold md:text-5xl">Şeffaf paket planları.</h2>
          </Reveal>
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {template.packages.map((pack, idx) => (
              <Reveal delay={idx * 0.06} key={pack.name}>
                <article
                  className={`relative rounded-3xl border-2 p-8 ${
                    idx === 0 ? "border-[#bde8eb] bg-white" : "border-[#2aa7a3] bg-[#eef8fb]"
                  }`}
                >
                  {idx === 1 ? (
                    <span className="absolute -top-3 right-7 inline-flex items-center gap-1 rounded-full bg-[#2aa7a3] px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-white">
                      <Sparkles size={12} /> En çok tercih edilen
                    </span>
                  ) : null}
                  <h3 className="text-2xl font-semibold">{pack.name}</h3>
                  <p className="mt-4 text-3xl font-bold text-[#2aa7a3]">{pack.price}</p>
                  <p className="mt-3 leading-7 text-[#102033]/75">{pack.details}</p>
                  <BookingTrigger
                    className="mt-7 inline-flex h-12 items-center gap-2 rounded-lg bg-[#2aa7a3] px-6 text-sm font-semibold text-white transition hover:bg-[#1f827e]"
                    label={`${pack.name} için planla`}
                    target={bookingTarget}
                  />
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Before / after */}
      <section className="bg-[#eef8fb] px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-widest text-[#2aa7a3]">Öncesi / sonrası</p>
            <h2 className="mt-3 text-3xl font-semibold md:text-5xl">Sonuçlar uzun vadeli planlama ile.</h2>
            <p className="mt-3 text-[#102033]/65">Gerçek müşteri görselleri sizin onayınızla eklenir. Demoda örnek alanlar gösteriliyor.</p>
          </Reveal>
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {template.gallery.slice(0, 6).map((item, idx) => (
              <div className="overflow-hidden rounded-2xl border border-[#bde8eb] bg-white" key={item.title}>
                <div className="grid grid-cols-2">
                  <div className="relative aspect-square overflow-hidden">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img alt="Önce" className="h-full w-full object-cover grayscale" loading="lazy" src={images.gallery[(idx * 2) % images.gallery.length]} />
                  </div>
                  <div className="relative aspect-square overflow-hidden">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img alt="Sonra" className="h-full w-full object-cover" loading="lazy" src={images.gallery[(idx * 2 + 1) % images.gallery.length]} />
                    <div className="absolute inset-0 bg-gradient-to-tr from-[#2aa7a3]/20 to-transparent" />
                  </div>
                </div>
                <div className="grid grid-cols-2 px-3 py-2 text-[10px] font-semibold uppercase tracking-widest text-[#2aa7a3]">
                  <span>Önce</span>
                  <span className="text-right">Sonra · {String(idx + 1).padStart(2, "0")}</span>
                </div>
                <div className="border-t border-[#bde8eb] px-4 py-3 text-sm font-semibold">{item.title}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-widest text-[#2aa7a3]">Müşteri</p>
            <h2 className="mt-3 text-3xl font-semibold md:text-5xl">Sade güven, doğru sonuç.</h2>
          </Reveal>
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {template.reviews.map((review, idx) => (
              <Reveal delay={idx * 0.05} key={review.name}>
                <article className="h-full rounded-2xl border border-[#bde8eb] bg-white p-6">
                  <CheckCircle2 className="text-[#2aa7a3]" size={20} />
                  <p className="mt-4 leading-7 text-[#102033]/80">“{review.text}”</p>
                  <div className="mt-5 flex items-center gap-3 border-t border-dashed border-[#bde8eb] pt-3">
                    <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#eef8fb] text-xs font-bold text-[#2aa7a3]">{review.avatar}</span>
                    <div>
                      <p className="text-sm font-semibold">{review.name}</p>
                      <p className="text-xs text-[#102033]/55">{review.role}</p>
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA / contact */}
      <section className="bg-[#102033] px-6 py-20 text-white" id="analiz">
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[1.1fr_.9fr] lg:items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-[#5fd1cd]">Ücretsiz cilt analizi</p>
            <h2 className="mt-3 text-3xl font-semibold leading-tight md:text-5xl">
              İlk seans planınızı birlikte çıkaralım.
            </h2>
            <p className="mt-4 max-w-xl text-base leading-8 text-white/75">
              20 dakikalık ön analiz tamamen ücretsiz. WhatsApp&apos;tan müsait olduğunuz saati bildirin.
            </p>
            <BookingTrigger
              className="mt-8 inline-flex h-12 items-center gap-2 rounded-lg bg-[#5fd1cd] px-7 text-sm font-semibold text-[#102033] transition hover:bg-white"
              label="Ücretsiz analiz randevusu"
              target={bookingTarget}
            />
          </div>
          <div className="grid gap-3 text-sm">
            <Row icon={<Phone size={18} />} title="Telefon" body={template.phone} />
            <Row icon={<Mail size={18} />} title="E-posta" body="randevu@klinik.demo" />
            <Row icon={<MapPin size={18} />} title="Adres" body={template.address} />
            <div className="rounded-xl border border-white/10 bg-white/5 p-4">
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#5fd1cd]"><Clock size={14} /> Çalışma saatleri</div>
              <div className="mt-3 grid gap-1 text-sm">
                {template.hours.map((hour) => <p key={hour}>{hour}</p>)}
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-[#bde8eb] bg-white px-6 py-8 text-sm text-[#102033]/65">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-2 md:flex-row">
          <span>© {new Date().getFullYear()} {template.brand} — Demo şablon</span>
          <Link className="hover:text-[#2aa7a3]" href="/">siteüret</Link>
        </div>
      </footer>
    </main>
  );
}

function Row({ icon, title, body }: { icon: React.ReactNode; title: string; body: string }) {
  return (
    <div className="flex items-start gap-3 rounded-xl border border-white/10 bg-white/5 p-4">
      <span className="mt-0.5 text-[#5fd1cd]">{icon}</span>
      <div>
        <p className="text-xs font-semibold uppercase tracking-widest text-[#5fd1cd]">{title}</p>
        <p className="mt-1 text-sm">{body}</p>
      </div>
    </div>
  );
}
