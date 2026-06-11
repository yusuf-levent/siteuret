"use client";

import { AnimatePresence, motion } from "framer-motion";
import { MessageCircle, X } from "lucide-react";
import { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";
import { WHATSAPP_PHONE, whatsappUrl } from "@/config/templates";

type BookingTarget = {
  templateName?: string;
  whatsapp?: string;
};

type BookingContextValue = {
  open: (target?: BookingTarget) => void;
};

const BookingContext = createContext<BookingContextValue | null>(null);

export function useBooking() {
  const ctx = useContext(BookingContext);
  if (!ctx) {
    throw new Error("useBooking must be used inside BookingProvider");
  }
  return ctx;
}

export function BookingProvider({ children }: { children: React.ReactNode }) {
  const [target, setTarget] = useState<BookingTarget | null>(null);
  const isOpen = target !== null;

  const open = useCallback((next?: BookingTarget) => {
    setTarget(next ?? {});
  }, []);

  const close = useCallback(() => setTarget(null), []);

  useEffect(() => {
    if (!isOpen) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") close();
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [isOpen, close]);

  const value = useMemo(() => ({ open }), [open]);

  return (
    <BookingContext.Provider value={value}>
      {children}
      <BookingSlideover isOpen={isOpen} onClose={close} target={target ?? {}} />
    </BookingContext.Provider>
  );
}

function BookingSlideover({
  isOpen,
  onClose,
  target,
}: {
  isOpen: boolean;
  onClose: () => void;
  target: BookingTarget;
}) {
  const [name, setName] = useState("");
  const [business, setBusiness] = useState("");
  const [phone, setPhone] = useState("");
  const [note, setNote] = useState("");

  useEffect(() => {
    if (!isOpen) {
      const timer = setTimeout(() => {
        setName("");
        setBusiness("");
        setPhone("");
        setNote("");
      }, 300);
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  const whatsappNumber = target.whatsapp || WHATSAPP_PHONE;
  const templateLine = target.templateName
    ? `İlgilendiğim şablon: ${target.templateName}.`
    : "Berber/güzellik salonum için ücretsiz demo istiyorum.";

  const message = [
    "Merhaba siteüret ekibi,",
    templateLine,
    name ? `Adım: ${name}` : null,
    business ? `İşletme: ${business}` : null,
    phone ? `Telefon: ${phone}` : null,
    note ? `Not: ${note}` : null,
    "Demo için geri dönüş bekliyorum.",
  ]
    .filter(Boolean)
    .join("\n");

  const sendUrl = whatsappUrl(message, whatsappNumber);

  return (
    <AnimatePresence>
      {isOpen ? (
        <motion.div
          className="fixed inset-0 z-[60] flex"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.18 }}
        >
          <button
            aria-label="Kapat"
            className="flex-1 bg-slate-950/55 backdrop-blur-sm"
            onClick={onClose}
            type="button"
          />
          <motion.aside
            className="ml-auto flex h-full w-full max-w-md flex-col bg-white shadow-2xl"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", stiffness: 320, damping: 32 }}
            role="dialog"
            aria-modal="true"
            aria-label="Ücretsiz demo iste"
          >
            <header className="flex items-start justify-between gap-4 border-b border-slate-100 px-6 py-5">
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-[#0f766e]">Ücretsiz demo</p>
                <h2 className="mt-1 text-2xl font-semibold text-slate-950">
                  {target.templateName ? `${target.templateName} şablonu` : "Demo isteğinizi alalım"}
                </h2>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  Bilgilerinizi doldurun, WhatsApp&apos;tan size 24 saat içinde demo linkiyle dönelim. Beğenmezseniz ödeme yok.
                </p>
              </div>
              <button
                aria-label="Kapat"
                className="rounded-md p-2 text-slate-500 transition hover:bg-slate-100"
                onClick={onClose}
                type="button"
              >
                <X size={20} />
              </button>
            </header>

            <form
              className="flex flex-1 flex-col gap-4 overflow-y-auto px-6 py-6"
              onSubmit={(event) => {
                event.preventDefault();
                window.open(sendUrl, "_blank", "noopener,noreferrer");
                onClose();
              }}
            >
              <Field label="Adınız" id="booking-name">
                <input
                  className="h-12 w-full rounded-md border border-slate-200 bg-white px-4 text-sm font-medium text-slate-950 outline-none transition focus:border-[#0f766e] focus:ring-4 focus:ring-teal-100"
                  id="booking-name"
                  onChange={(event) => setName(event.target.value)}
                  placeholder="Örn. Ayşe Yılmaz"
                  type="text"
                  value={name}
                />
              </Field>

              <Field label="İşletme adınız" id="booking-business">
                <input
                  className="h-12 w-full rounded-md border border-slate-200 bg-white px-4 text-sm font-medium text-slate-950 outline-none transition focus:border-[#0f766e] focus:ring-4 focus:ring-teal-100"
                  id="booking-business"
                  onChange={(event) => setBusiness(event.target.value)}
                  placeholder="Örn. Aura Berber, Blush Salon"
                  type="text"
                  value={business}
                />
              </Field>

              <Field label="Telefon (WhatsApp)" id="booking-phone">
                <input
                  className="h-12 w-full rounded-md border border-slate-200 bg-white px-4 text-sm font-medium text-slate-950 outline-none transition focus:border-[#0f766e] focus:ring-4 focus:ring-teal-100"
                  id="booking-phone"
                  onChange={(event) => setPhone(event.target.value)}
                  placeholder="05XX XXX XX XX"
                  type="tel"
                  value={phone}
                />
              </Field>

              <Field label="Eklemek istediğiniz bir not" id="booking-note">
                <textarea
                  className="min-h-28 w-full rounded-md border border-slate-200 bg-white px-4 py-3 text-sm font-medium text-slate-950 outline-none transition focus:border-[#0f766e] focus:ring-4 focus:ring-teal-100"
                  id="booking-note"
                  onChange={(event) => setNote(event.target.value)}
                  placeholder="Örn. erkek berberim, hafta içi öğleden sonra müsaitim"
                  value={note}
                />
              </Field>

              <button
                className="mt-2 inline-flex h-12 items-center justify-center gap-2 rounded-md bg-[#25D366] px-5 text-sm font-semibold text-white transition hover:bg-[#1ebe57]"
                type="submit"
              >
                <MessageCircle size={18} />
                WhatsApp ile gönder
              </button>

              <p className="text-xs leading-6 text-slate-500">
                Form bilgileriniz WhatsApp&apos;ta bir mesaj olarak hazırlanır; mesajı siz onaylayıp gönderirsiniz. Demo ücretsizdir, beğenmezseniz ödeme yapmazsınız.
              </p>
            </form>
          </motion.aside>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}

function Field({ label, id, children }: { label: string; id: string; children: React.ReactNode }) {
  return (
    <label className="grid gap-2" htmlFor={id}>
      <span className="text-xs font-semibold uppercase tracking-wider text-slate-600">{label}</span>
      {children}
    </label>
  );
}

export function StickyWhatsApp() {
  const { open } = useBooking();
  return (
    <button
      aria-label="WhatsApp ile demo iste"
      className="fixed bottom-5 right-5 z-50 inline-flex h-14 items-center gap-2 rounded-full bg-[#25D366] px-5 text-sm font-semibold text-white shadow-2xl shadow-emerald-900/30 transition hover:bg-[#1ebe57] sm:bottom-7 sm:right-7"
      onClick={() => open()}
      type="button"
    >
      <MessageCircle size={20} />
      <span className="hidden sm:inline">Ücretsiz demo iste</span>
      <span className="sm:hidden">Demo iste</span>
    </button>
  );
}

export function BookingTrigger({
  className,
  label = "Ücretsiz demo iste",
  target,
}: {
  className?: string;
  label?: string;
  target?: BookingTarget;
}) {
  const { open } = useBooking();
  return (
    <button
      className={className}
      onClick={() => open(target)}
      type="button"
    >
      {label}
    </button>
  );
}
