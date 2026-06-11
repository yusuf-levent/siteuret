"use client";

import {
  ArrowUpRight,
  CalendarCheck,
  CheckCircle2,
  Clock,
  Leaf,
  MapPin,
  MessageCircle,
  Moon,
  Phone,
  Quote,
  Scissors,
  ShieldCheck,
  Sparkles,
  Star,
  X,
  Zap,
} from "lucide-react";
import Link from "next/link";
import { useMemo, useState } from "react";
import type { TemplateDefinition } from "@/config/templates";
import { templateWhatsAppUrl } from "@/config/templates";

type Tone = "light" | "dark";

type Theme = {
  shell: string;
  header: string;
  text: string;
  muted: string;
  accent: string;
  accentText: string;
  surface: string;
  border: string;
  button: string;
  outline: string;
  radius: string;
  font: string;
};

const themes: Record<TemplateDefinition["layout"], Theme> = {
  "heritage-barber": {
    shell: "bg-[#261711] text-[#f6dfbd]",
    header: "border-[#bd8344]/30 bg-[#261711]/90",
    text: "text-[#f6dfbd]",
    muted: "text-[#f6dfbd]/72",
    accent: "#bd8344",
    accentText: "text-[#bd8344]",
    surface: "bg-[#352117]",
    border: "border-[#bd8344]/30",
    button: "bg-[#bd8344] text-[#24130d] hover:bg-[#d39b55]",
    outline: "border-[#bd8344]/45 text-[#f6dfbd] hover:bg-[#bd8344]/12",
    radius: "rounded-md",
    font: "font-serif",
  },
  "editorial-grooming": {
    shell: "bg-[#f6f4ee] text-black",
    header: "border-black/10 bg-[#f6f4ee]/90",
    text: "text-black",
    muted: "text-black/62",
    accent: "#111111",
    accentText: "text-black",
    surface: "bg-white",
    border: "border-black/14",
    button: "bg-black text-white hover:bg-[#2a2a2a]",
    outline: "border-black/25 text-black hover:bg-white",
    radius: "rounded-none",
    font: "font-sans",
  },
  "tattoo-fade": {
    shell: "bg-[#09090d] text-white",
    header: "border-[#d7ff38]/30 bg-[#09090d]/90",
    text: "text-white",
    muted: "text-white/70",
    accent: "#d7ff38",
    accentText: "text-[#d7ff38]",
    surface: "bg-[#15151c]",
    border: "border-[#d7ff38]/35",
    button: "bg-[#ff3d81] text-white hover:bg-[#e12e70]",
    outline: "border-[#d7ff38]/55 text-[#d7ff38] hover:bg-[#d7ff38]/12",
    radius: "rounded-sm",
    font: "font-sans",
  },
  "eco-barber": {
    shell: "bg-[#e8ead9] text-[#273425]",
    header: "border-[#6f8a62]/25 bg-[#e8ead9]/92",
    text: "text-[#273425]",
    muted: "text-[#465943]",
    accent: "#6f8a62",
    accentText: "text-[#4f6f47]",
    surface: "bg-[#f8f4e8]",
    border: "border-[#6f8a62]/25",
    button: "bg-[#4f6f47] text-white hover:bg-[#3f5f38]",
    outline: "border-[#4f6f47]/35 text-[#33452f] hover:bg-[#f8f4e8]",
    radius: "rounded-2xl",
    font: "font-serif",
  },
  "pastel-beauty": {
    shell: "bg-[#fff5f7] text-[#3c2b32]",
    header: "border-[#e8c8d3]/60 bg-[#fff5f7]/92",
    text: "text-[#3c2b32]",
    muted: "text-[#755763]",
    accent: "#d98aa8",
    accentText: "text-[#bd6f90]",
    surface: "bg-white",
    border: "border-[#efd3dc]",
    button: "bg-[#d98aa8] text-white hover:bg-[#c67595]",
    outline: "border-[#d98aa8]/35 text-[#9b6077] hover:bg-white",
    radius: "rounded-[1.6rem]",
    font: "font-serif",
  },
  "velvet-luxury": {
    shell: "bg-[#2b1019] text-[#f7ead9]",
    header: "border-[#d5b16b]/30 bg-[#2b1019]/90",
    text: "text-[#f7ead9]",
    muted: "text-[#f7ead9]/72",
    accent: "#d5b16b",
    accentText: "text-[#d5b16b]",
    surface: "bg-[#421927]",
    border: "border-[#d5b16b]/35",
    button: "bg-[#d5b16b] text-[#2b1019] hover:bg-[#c39b51]",
    outline: "border-[#d5b16b]/45 text-[#f7ead9] hover:bg-[#d5b16b]/12",
    radius: "rounded-lg",
    font: "font-serif",
  },
  "clinical-minimal": {
    shell: "bg-white text-[#102033]",
    header: "border-slate-200 bg-white/92",
    text: "text-[#102033]",
    muted: "text-slate-600",
    accent: "#2aa7a3",
    accentText: "text-[#238b88]",
    surface: "bg-[#eef8fb]",
    border: "border-slate-200",
    button: "bg-[#2aa7a3] text-white hover:bg-[#238b88]",
    outline: "border-[#2aa7a3]/35 text-[#238b88] hover:bg-[#eef8fb]",
    radius: "rounded-lg",
    font: "font-sans",
  },
  "y2k-beauty": {
    shell: "bg-[#fff0fb] text-[#251232]",
    header: "border-[#ff4fb8]/25 bg-[#fff0fb]/90",
    text: "text-[#251232]",
    muted: "text-[#66406f]",
    accent: "#ff4fb8",
    accentText: "text-[#d31686]",
    surface: "bg-white",
    border: "border-[#ff4fb8]/30",
    button: "bg-[#ff4fb8] text-white hover:bg-[#e2389e]",
    outline: "border-[#7c3cff]/35 text-[#6b2ee5] hover:bg-white",
    radius: "rounded-[1.25rem]",
    font: "font-sans",
  },
};

function phoneHref(phone: string) {
  return `tel:${phone.replaceAll(" ", "")}`;
}

function GalleryMock({ item, index, theme }: { item: { title: string; tone: string }; index: number; theme: Theme }) {
  const gradients: Record<string, string> = {
    walnut: "linear-gradient(135deg,#1e120c,#7b4a24,#d6a15a)",
    brass: "linear-gradient(135deg,#2b1a10,#b57a3a,#f5dfbd)",
    steam: "linear-gradient(135deg,#423021,#e8d3b3,#ffffff)",
    blade: "linear-gradient(135deg,#101010,#777,#e9e9e9)",
    leather: "linear-gradient(135deg,#2c1710,#63341f,#aa7044)",
    amber: "linear-gradient(135deg,#27130b,#b26e2f,#ffc66d)",
    mono: "linear-gradient(135deg,#070707,#777,#f8f8f8)",
    charcoal: "linear-gradient(135deg,#050505,#1f1f1f,#707070)",
    ivory: "linear-gradient(135deg,#111,#eee,#fff)",
    stone: "linear-gradient(135deg,#e8e4dc,#999,#252525)",
    graphite: "linear-gradient(135deg,#111,#444,#aaa)",
    silver: "linear-gradient(135deg,#202020,#d8d8d8,#ffffff)",
    acid: "linear-gradient(135deg,#07070a,#d7ff38,#ff3d81)",
    ink: "radial-gradient(circle at 35% 30%,#d7ff38,transparent 18%),linear-gradient(135deg,#08080c,#171721,#000)",
    neon: "linear-gradient(135deg,#0b0b12,#7c3cff,#d7ff38)",
    hotline: "linear-gradient(135deg,#0c0c10,#ff3d81,#ffb1d0)",
    steel: "linear-gradient(135deg,#101015,#8d9aa5,#f8f8f8)",
    purple: "linear-gradient(135deg,#161020,#7c3cff,#ff3d81)",
    sage: "linear-gradient(135deg,#e8ead9,#9aad88,#4f6f47)",
    olive: "linear-gradient(135deg,#f8f4e8,#8a9a5b,#33452f)",
    wood: "linear-gradient(135deg,#e6d8bc,#8d6138,#3f2d1d)",
    linen: "linear-gradient(135deg,#faf7ec,#d8c8a5,#6f8a62)",
    moss: "linear-gradient(135deg,#263520,#6f8a62,#c7d0b5)",
    sun: "linear-gradient(135deg,#f8f4e8,#f3c96b,#6f8a62)",
    blush: "linear-gradient(135deg,#fff5f7,#f2bacd,#d98aa8)",
    lavender: "linear-gradient(135deg,#fff5f7,#d9c4ff,#f2bacd)",
    rose: "linear-gradient(135deg,#fff,#ffd7e5,#bd6f90)",
    pearl: "linear-gradient(135deg,#fff,#f4e8ef,#d98aa8)",
    cream: "linear-gradient(135deg,#fff8ee,#fff,#f1c2d4)",
    pink: "linear-gradient(135deg,#fff0f7,#ff9cc5,#d98aa8)",
    gold: "linear-gradient(135deg,#2b1019,#d5b16b,#fff0c7)",
    velvet: "linear-gradient(135deg,#2b1019,#741d3a,#d5b16b)",
    champagne: "linear-gradient(135deg,#f7ead9,#d5b16b,#7a4d22)",
    ruby: "linear-gradient(135deg,#220711,#8e1737,#f7ead9)",
    wine: "linear-gradient(135deg,#2b1019,#421927,#d5b16b)",
    bronze: "linear-gradient(135deg,#2b1019,#9f6b35,#d5b16b)",
    ice: "linear-gradient(135deg,#ffffff,#dff7fb,#2aa7a3)",
    blue: "linear-gradient(135deg,#ffffff,#bfefff,#238b88)",
    white: "linear-gradient(135deg,#ffffff,#eef8fb,#c7dce0)",
    mint: "linear-gradient(135deg,#ffffff,#dff7e7,#2aa7a3)",
    aqua: "linear-gradient(135deg,#eef8fb,#bde8eb,#2aa7a3)",
    paper: "linear-gradient(135deg,#ffffff,#f5f7f8,#dff7fb)",
    chrome: "linear-gradient(135deg,#fff0fb,#ff4fb8,#7c3cff,#ffffff)",
    hotpink: "linear-gradient(135deg,#251232,#ff4fb8,#fff0fb)",
    sticker: "linear-gradient(135deg,#fff0fb,#d7ff38,#ff4fb8)",
    violet: "linear-gradient(135deg,#fff0fb,#7c3cff,#ff4fb8)",
    flash: "linear-gradient(135deg,#ffffff,#ff4fb8,#f9ff5a)",
  };

  return (
    <figure
      className={`relative min-h-52 overflow-hidden ${theme.radius} ${index % 3 === 0 ? "md:row-span-2 md:min-h-80" : ""}`}
      style={{ background: gradients[item.tone] ?? `linear-gradient(135deg, ${theme.accent}, #ffffff)` }}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,.45),transparent_18%),linear-gradient(115deg,transparent_40%,rgba(255,255,255,.28)_42%,transparent_46%)]" />
      <figcaption className="absolute bottom-3 left-3 right-3 flex items-center justify-between rounded-md bg-black/35 px-3 py-2 text-xs font-semibold text-white backdrop-blur-md">
        {item.title}
        <span>0{index + 1}</span>
      </figcaption>
    </figure>
  );
}

function Avatar({ label, theme }: { label: string; theme: Theme }) {
  return (
    <div
      className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full text-sm font-bold text-white"
      style={{ backgroundColor: theme.accent }}
    >
      {label}
    </div>
  );
}

function BookingDrawer({
  open,
  onClose,
  template,
  theme,
}: {
  open: boolean;
  onClose: () => void;
  template: TemplateDefinition;
  theme: Theme;
}) {
  const [selected, setSelected] = useState(template.services[0].name);
  const service = template.services.find((item) => item.name === selected) ?? template.services[0];

  return (
    <div className={`fixed inset-0 z-[80] ${open ? "pointer-events-auto" : "pointer-events-none"}`} aria-hidden={!open}>
      <button
        aria-label="Randevu panelini kapat"
        className={`absolute inset-0 bg-black/55 transition-opacity ${open ? "opacity-100" : "opacity-0"}`}
        onClick={onClose}
        type="button"
      />
      <aside
        className={`absolute right-0 top-0 flex h-full w-full max-w-md flex-col bg-white p-5 text-slate-950 shadow-2xl transition-transform duration-300 ${open ? "translate-x-0" : "translate-x-full"}`}
        role="dialog"
        aria-modal="true"
        aria-label={`${template.brand} randevu formu`}
      >
        <div className="flex items-center justify-between border-b border-slate-200 pb-4">
          <div>
            <p className="text-sm font-semibold" style={{ color: theme.accent }}>
              {template.brand}
            </p>
            <h2 className="text-2xl font-semibold">Randevu Al</h2>
          </div>
          <button className="rounded-md border border-slate-200 p-2 hover:bg-slate-50" onClick={onClose} type="button">
            <X size={20} />
          </button>
        </div>

        <div className="mt-5 grid gap-3">
          {template.services.map((item) => (
            <button
              className={`rounded-lg border p-4 text-left transition ${
                item.name === selected ? "border-slate-950 bg-slate-950 text-white" : "border-slate-200 hover:bg-slate-50"
              }`}
              key={item.name}
              onClick={() => setSelected(item.name)}
              type="button"
            >
              <div className="flex items-center justify-between gap-3">
                <span className="font-semibold">{item.name}</span>
                <span>{item.price}</span>
              </div>
              <p className={`mt-2 text-sm ${item.name === selected ? "text-white/70" : "text-slate-600"}`}>
                {item.duration} - {item.text}
              </p>
            </button>
          ))}
        </div>

        <div className="mt-5 rounded-lg bg-slate-50 p-4">
          <div className="flex items-center justify-between text-sm">
            <span>Seçili hizmet</span>
            <strong>{service.name}</strong>
          </div>
          <div className="mt-3 grid grid-cols-2 gap-3 text-sm">
            <div className="rounded-md bg-white p-3">
              <Clock className="mb-2" size={18} />
              {service.duration}
            </div>
            <div className="rounded-md bg-white p-3">
              <CalendarCheck className="mb-2" size={18} />
              {service.price}
            </div>
          </div>
        </div>

        <div className="mt-5 grid gap-3">
          <input className="h-12 rounded-md border border-slate-200 px-4 text-sm" placeholder="Ad soyad" />
          <input className="h-12 rounded-md border border-slate-200 px-4 text-sm" placeholder="Telefon" />
          <select className="h-12 rounded-md border border-slate-200 px-4 text-sm" defaultValue="Bugün">
            <option>Bugün</option>
            <option>Yarın</option>
            <option>Bu hafta</option>
          </select>
        </div>

        <a
          className="mt-auto inline-flex h-12 items-center justify-center gap-2 rounded-md text-sm font-semibold text-white"
          href={templateWhatsAppUrl(template)}
          rel="noreferrer"
          style={{ backgroundColor: theme.accent }}
          target="_blank"
        >
          <MessageCircle size={18} />
          WhatsApp ile gönder
        </a>
      </aside>
    </div>
  );
}

function Header({
  template,
  theme,
  onBook,
}: {
  template: TemplateDefinition;
  theme: Theme;
  onBook: () => void;
}) {
  return (
    <header className={`sticky top-0 z-50 border-b backdrop-blur-xl ${theme.header}`}>
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5">
        <Link className={`text-xl font-semibold ${theme.font}`} href="/">
          {template.brand}
        </Link>
        <div className={`hidden items-center gap-6 text-sm font-semibold ${theme.muted} md:flex`}>
          <a href="#hakkimizda">Hakkımızda</a>
          <a href="#hizmetler">Hizmetler</a>
          <a href="#galeri">Galeri</a>
          <a href="#yorumlar">Yorumlar</a>
        </div>
        <button className={`inline-flex h-10 items-center gap-2 px-4 text-sm font-semibold ${theme.radius} ${theme.button}`} onClick={onBook} type="button">
          <CalendarCheck size={17} />
          Randevu Al
        </button>
      </nav>
    </header>
  );
}

function Hero({ template, theme, onBook }: { template: TemplateDefinition; theme: Theme; onBook: () => void }) {
  const isEditorial = template.layout === "editorial-grooming";
  const isTattoo = template.layout === "tattoo-fade";
  const isEco = template.layout === "eco-barber";
  const isLuxury = template.layout === "velvet-luxury";
  const isClinical = template.layout === "clinical-minimal";
  const isY2k = template.layout === "y2k-beauty";

  if (isEditorial) {
    return (
      <section className="px-5 py-16 md:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="grid items-end gap-10 border-b border-black pb-10 lg:grid-cols-[1.1fr_.9fr]">
            <h1 className="max-w-4xl text-6xl font-semibold uppercase leading-none md:text-8xl">{template.heroTitle}</h1>
            <div>
              <p className="text-lg leading-8 text-black/65">{template.heroText}</p>
              <button className={`mt-8 h-12 px-6 text-sm font-semibold ${theme.button}`} onClick={onBook} type="button">
                Randevu Al
              </button>
            </div>
          </div>
          <div className="mt-8 grid gap-4 md:grid-cols-4">
            {template.highlights.map((item) => (
              <div className="border-t border-black pt-4 text-sm font-semibold uppercase" key={item}>
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  if (isTattoo) {
    return (
      <section className="overflow-hidden px-5 py-16">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[.9fr_1.1fr] lg:items-center">
          <div className="relative">
            <div className="absolute -left-6 top-10 rotate-[-9deg] bg-[#d7ff38] px-4 py-2 text-sm font-black text-black">DROP NOW</div>
            <h1 className="text-6xl font-black uppercase leading-[.9] md:text-8xl">{template.heroTitle}</h1>
            <p className="mt-6 max-w-xl text-lg leading-8 text-white/72">{template.heroText}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <button className={`h-12 px-6 text-sm font-black uppercase ${theme.radius} ${theme.button}`} onClick={onBook} type="button">
                Randevu Al
              </button>
              <a className={`inline-flex h-12 items-center gap-2 border px-5 text-sm font-black uppercase ${theme.radius} ${theme.outline}`} href="#galeri">
                Galeri
                <ArrowUpRight size={18} />
              </a>
            </div>
          </div>
          <div className="grid rotate-2 gap-3 border border-[#d7ff38]/35 bg-[#15151c] p-3 shadow-2xl shadow-[#ff3d81]/15 sm:grid-cols-2">
            {template.gallery.slice(0, 4).map((item, index) => (
              <GalleryMock item={item} index={index} key={item.title} theme={theme} />
            ))}
          </div>
        </div>
      </section>
    );
  }

  if (isEco) {
    return (
      <section className="px-5 py-16">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[.95fr_1.05fr] lg:items-center">
          <div className="rounded-[2rem] border border-[#6f8a62]/25 bg-[#f8f4e8] p-8 md:p-12">
            <Leaf className="mb-8 text-[#4f6f47]" size={34} />
            <h1 className="font-serif text-5xl leading-tight md:text-7xl">{template.heroTitle}</h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-[#465943]">{template.heroText}</p>
            <button className={`mt-8 h-12 px-6 text-sm font-semibold ${theme.radius} ${theme.button}`} onClick={onBook} type="button">
              Randevu Al
            </button>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {template.highlights.map((item) => (
              <div className="rounded-[2rem] bg-[#f8f4e8] p-7 text-xl font-semibold" key={item}>
                {item}
              </div>
            ))}
            <GalleryMock item={template.gallery[0]} index={0} theme={theme} />
          </div>
        </div>
      </section>
    );
  }

  if (isLuxury) {
    return (
      <section className="px-5 py-16">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[.82fr_1.18fr] lg:items-center">
          <GalleryMock item={template.gallery[0]} index={0} theme={theme} />
          <div>
            <h1 className="font-serif text-5xl font-semibold leading-tight md:text-7xl">{template.heroTitle}</h1>
            <p className="mt-7 max-w-xl text-lg leading-8 text-[#f7ead9]/72">{template.heroText}</p>
            <div className="mt-8 border-l border-[#d5b16b] pl-6">
              {template.highlights.map((item) => (
                <p className="py-2 text-sm font-semibold uppercase text-[#d5b16b]" key={item}>{item}</p>
              ))}
            </div>
            <button className={`mt-8 h-12 px-6 text-sm font-semibold ${theme.radius} ${theme.button}`} onClick={onBook} type="button">
              Concierge Randevu
            </button>
          </div>
        </div>
      </section>
    );
  }

  if (isClinical) {
    return (
      <section className="bg-[#eef8fb] px-5 py-16">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1fr_1fr] lg:items-center">
          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-md bg-white px-3 py-2 text-sm font-semibold text-[#238b88]">
              <ShieldCheck size={17} />
              Hijyen ve süreç bilgisi önde
            </div>
            <h1 className="text-5xl font-semibold leading-tight md:text-7xl">{template.heroTitle}</h1>
            <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">{template.heroText}</p>
            <button className={`mt-8 h-12 px-6 text-sm font-semibold ${theme.radius} ${theme.button}`} onClick={onBook} type="button">
              Ön Görüşme Al
            </button>
          </div>
          <div className="grid gap-4">
            {template.services.map((service) => (
              <div className="rounded-lg bg-white p-5 shadow-sm" key={service.name}>
                <div className="flex items-center justify-between gap-4">
                  <strong>{service.name}</strong>
                  <span className="text-sm font-semibold text-[#238b88]">{service.duration}</span>
                </div>
                <p className="mt-2 text-sm text-slate-600">{service.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  if (isY2k) {
    return (
      <section className="overflow-hidden px-5 py-16">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1.05fr_.95fr] lg:items-center">
          <div>
            <div className="mb-6 inline-flex rotate-[-3deg] rounded-full bg-[#d7ff38] px-5 py-2 text-sm font-black text-[#251232]">TREND DROP</div>
            <h1 className="text-5xl font-black uppercase leading-none md:text-8xl">{template.heroTitle}</h1>
            <p className="mt-6 max-w-xl text-lg leading-8 text-[#66406f]">{template.heroText}</p>
            <button className={`mt-8 h-12 px-6 text-sm font-black uppercase ${theme.radius} ${theme.button}`} onClick={onBook} type="button">
              Randevu Al
            </button>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {template.gallery.slice(0, 4).map((item, index) => (
              <GalleryMock item={item} index={index} key={item.title} theme={theme} />
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="px-5 pb-20 pt-14">
      <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[.92fr_1.08fr] lg:items-end">
        <div>
          <div className="mb-5 h-1 w-24" style={{ backgroundColor: theme.accent }} />
          <h1 className={`text-5xl font-semibold leading-tight md:text-7xl ${theme.font}`}>{template.heroTitle}</h1>
          <p className={`mt-6 max-w-xl text-lg leading-8 ${theme.muted}`}>{template.heroText}</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <button className={`h-12 px-6 text-sm font-semibold ${theme.radius} ${theme.button}`} onClick={onBook} type="button">
              Randevu Al
            </button>
            <a className={`inline-flex h-12 items-center justify-center gap-2 border px-5 text-sm font-semibold ${theme.radius} ${theme.outline}`} href="#hizmetler">
              Hizmetleri gör
              <ArrowUpRight size={17} />
            </a>
          </div>
        </div>
        <div className={`grid gap-3 border p-3 ${theme.radius} ${theme.surface} ${theme.border}`}>
          {template.gallery.slice(0, 3).map((item, index) => (
            <GalleryMock item={item} index={index} key={item.title} theme={theme} />
          ))}
        </div>
      </div>
    </section>
  );
}

function Services({ template, theme }: { template: TemplateDefinition; theme: Theme }) {
  const compact = template.layout === "editorial-grooming" || template.layout === "clinical-minimal";
  return (
    <section className="px-5 py-20" id="hizmetler">
      <div className={`mx-auto max-w-7xl ${compact ? "" : "grid gap-8 lg:grid-cols-[.8fr_1.2fr]"}`}>
        <div>
          <h2 className={`text-4xl font-semibold md:text-6xl ${theme.font}`}>Hizmet, fiyat ve süre net</h2>
          <p className={`mt-5 max-w-2xl leading-8 ${theme.muted}`}>Randevu kararı için kritik bilgiler saklanmaz: hizmet adı, kısa açıklama, fiyat ve süre aynı satırda okunur.</p>
        </div>
        <div className={`mt-8 grid gap-4 ${compact ? "md:grid-cols-3" : ""}`}>
          {template.services.map((service) => (
            <article className={`border p-5 ${theme.radius} ${theme.surface} ${theme.border}`} key={service.name}>
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className={`text-2xl font-semibold ${theme.font}`}>{service.name}</h3>
                  <p className={`mt-2 leading-7 ${theme.muted}`}>{service.text}</p>
                </div>
                <CheckCircle2 className={theme.accentText} size={22} />
              </div>
              <div className="mt-5 flex items-center justify-between border-t border-current/15 pt-4 text-sm font-semibold">
                <span>{service.duration}</span>
                <span className={theme.accentText}>{service.price}</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function About({ template, theme }: { template: TemplateDefinition; theme: Theme }) {
  return (
    <section className={`px-5 py-20 ${template.layout === "editorial-grooming" ? "bg-black text-white" : ""}`} id="hakkimizda">
      <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1fr_1fr] lg:items-start">
        <div>
          <h2 className={`text-4xl font-semibold md:text-6xl ${theme.font}`}>{template.aboutTitle}</h2>
          <p className={`mt-6 text-lg leading-8 ${template.layout === "editorial-grooming" ? "text-white/72" : theme.muted}`}>{template.aboutText}</p>
        </div>
        <div className="grid gap-4">
          {template.team.map((member) => (
            <article className={`flex gap-4 border p-5 ${theme.radius} ${template.layout === "editorial-grooming" ? "border-white/18 bg-white/8" : `${theme.surface} ${theme.border}`}`} key={member.name}>
              <Avatar label={member.avatar} theme={theme} />
              <div>
                <h3 className="text-xl font-semibold">{member.name}</h3>
                <p className={theme.accentText}>{member.role}</p>
                <p className={`mt-2 leading-7 ${template.layout === "editorial-grooming" ? "text-white/70" : theme.muted}`}>{member.bio}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Packages({ template, theme }: { template: TemplateDefinition; theme: Theme }) {
  return (
    <section className="px-5 py-20">
      <div className="mx-auto max-w-7xl">
        <h2 className={`text-4xl font-semibold md:text-6xl ${theme.font}`}>Paketler</h2>
        <div className="mt-8 grid gap-5 md:grid-cols-2">
          {template.packages.map((pack) => (
            <article className={`border p-7 ${theme.radius} ${theme.surface} ${theme.border}`} key={pack.name}>
              <h3 className={`text-3xl font-semibold ${theme.font}`}>{pack.name}</h3>
              <p className={`mt-4 text-4xl font-bold ${theme.accentText}`}>{pack.price}</p>
              <p className={`mt-4 leading-8 ${theme.muted}`}>{pack.details}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Gallery({ template, theme }: { template: TemplateDefinition; theme: Theme }) {
  return (
    <section className="px-5 py-20" id="galeri">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div>
            <h2 className={`text-4xl font-semibold md:text-6xl ${theme.font}`}>Galeri</h2>
            <p className={`mt-4 max-w-2xl leading-8 ${theme.muted}`}>Telif riski taşımayan, CSS tabanlı görsel mockup kartlarıyla her şablonun galeri rengi ayrı tutulur.</p>
          </div>
          <span className={`inline-flex w-fit items-center gap-2 border px-4 py-2 text-sm font-semibold ${theme.radius} ${theme.border}`}>
            <Sparkles size={17} />
            6 görsel alanı
          </span>
        </div>
        <div className="mt-8 grid auto-rows-fr gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {template.gallery.map((item, index) => (
            <GalleryMock item={item} index={index} key={item.title} theme={theme} />
          ))}
        </div>
      </div>
    </section>
  );
}

function Reviews({ template, theme }: { template: TemplateDefinition; theme: Theme }) {
  return (
    <section className="px-5 py-20" id="yorumlar">
      <div className="mx-auto max-w-7xl">
        <h2 className={`text-4xl font-semibold md:text-6xl ${theme.font}`}>Müşteri yorumu ve sosyal kanıt</h2>
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {template.reviews.map((review) => (
            <article className={`border p-5 ${theme.radius} ${theme.surface} ${theme.border}`} key={review.name}>
              <Quote className={theme.accentText} size={24} />
              <p className={`mt-5 leading-7 ${theme.muted}`}>{review.text}</p>
              <div className="mt-6 flex items-center gap-3">
                <Avatar label={review.avatar} theme={theme} />
                <div>
                  <div className="font-semibold">{review.name}</div>
                  <div className={`text-sm ${theme.muted}`}>{review.role}</div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact({ template, theme, onBook }: { template: TemplateDefinition; theme: Theme; onBook: () => void }) {
  return (
    <section className="px-5 py-20" id="iletisim">
      <div className={`mx-auto grid max-w-7xl gap-6 border p-5 md:grid-cols-[.8fr_1.2fr] ${theme.radius} ${theme.surface} ${theme.border}`}>
        <div className="p-3">
          <h2 className={`text-3xl font-semibold ${theme.font}`}>Randevu ve iletişim</h2>
          <div className={`mt-6 grid gap-4 text-sm ${theme.muted}`}>
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
          <button className={`mt-7 h-12 w-full px-6 text-sm font-semibold ${theme.radius} ${theme.button}`} onClick={onBook} type="button">
            Randevu Panelini Aç
          </button>
        </div>
        <div className={`relative min-h-72 overflow-hidden ${theme.radius}`} style={{ background: `linear-gradient(135deg, ${theme.accent}, rgba(255,255,255,.6))` }}>
          <div className="absolute inset-0 map-fallback opacity-55" />
          <div className="absolute left-5 top-5 rounded-md bg-white/90 px-4 py-3 text-sm font-semibold text-slate-900 shadow-sm">
            {template.mapLabel}
          </div>
          <div className="absolute bottom-5 right-5 rounded-md bg-slate-950 px-4 py-3 text-sm font-semibold text-white shadow-xl">
            {template.brand}
          </div>
        </div>
      </div>
    </section>
  );
}

function FloatingAction({ onBook, tone }: { onBook: () => void; tone: Tone }) {
  return (
    <button
      className={`fixed bottom-5 right-5 z-40 inline-flex h-12 items-center gap-2 rounded-full px-5 text-sm font-semibold shadow-xl ${
        tone === "dark" ? "bg-white text-slate-950" : "bg-slate-950 text-white"
      }`}
      onClick={onBook}
      type="button"
    >
      <CalendarCheck size={18} />
      Randevu Al
    </button>
  );
}

export function TemplatePreview({ template }: { template: TemplateDefinition }) {
  const [bookingOpen, setBookingOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const theme = themes[template.layout];
  const tone: Tone = template.layout === "heritage-barber" || template.layout === "tattoo-fade" || template.layout === "velvet-luxury" || darkMode ? "dark" : "light";
  const darkToggle = template.layout === "clinical-minimal" || template.layout === "editorial-grooming";
  const shellClass = useMemo(() => {
    if (darkMode && darkToggle) return "bg-slate-950 text-white";
    return theme.shell;
  }, [darkMode, darkToggle, theme.shell]);

  return (
    <main className={`min-h-screen ${shellClass}`}>
      <Header onBook={() => setBookingOpen(true)} template={template} theme={theme} />
      {darkToggle ? (
        <button
          className="fixed bottom-20 left-5 z-40 inline-flex h-11 items-center gap-2 rounded-full border border-current/20 bg-white/85 px-4 text-sm font-semibold text-slate-950 shadow-lg backdrop-blur-md"
          onClick={() => setDarkMode((value) => !value)}
          type="button"
        >
          <Moon size={17} />
          {darkMode ? "Light" : "Dark"}
        </button>
      ) : null}
      <Hero onBook={() => setBookingOpen(true)} template={template} theme={theme} />
      <About template={template} theme={theme} />
      <Services template={template} theme={theme} />
      <Packages template={template} theme={theme} />
      <Gallery template={template} theme={theme} />
      <Reviews template={template} theme={theme} />
      <Contact onBook={() => setBookingOpen(true)} template={template} theme={theme} />
      <FloatingAction onBook={() => setBookingOpen(true)} tone={tone} />
      <BookingDrawer onClose={() => setBookingOpen(false)} open={bookingOpen} template={template} theme={theme} />
      <div className="sr-only">
        <Scissors />
        <Star />
        <Zap />
      </div>
    </main>
  );
}
