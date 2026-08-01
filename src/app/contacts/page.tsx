"use client";
import { useState, useEffect } from "react";
import { MapPin, Phone, Clock, CreditCard, Car, Wifi, Navigation } from "lucide-react";

const C = {
  bg: "#F0EDE8",
  logo: "#D7A37B",
  accent: "#5C3A2E",
  text: "#2F2A27",
  muted: "#7A6E68",
  border: "#DDD7CF",
  card: "#FAFAF8",
  sec: "#E8E2DA",
};

const heading = { fontFamily: "var(--font-inter-tight)", fontWeight: 600 } as const;
const nav = { fontFamily: "var(--font-inter-tight)", fontWeight: 500 } as const;
const body = { fontFamily: "var(--font-manrope)", fontWeight: 400 } as const;
const bodyAccent = { fontFamily: "var(--font-manrope)", fontWeight: 500 } as const;

const hours = [
  { day: "Понедельник", time: "09:00–22:00" },
  { day: "Вторник", time: "09:00–22:00" },
  { day: "Среда", time: "09:00–22:00" },
  { day: "Четверг", time: "09:00–22:00" },
  { day: "Пятница", time: "09:00–22:00" },
  { day: "Суббота", time: "11:00–22:00" },
  { day: "Воскресенье", time: "09:00–22:00" },
];

const amenities = [
  { icon: <Car size={18} />, label: "Бесплатная парковка" },
  { icon: <Wifi size={18} />, label: "Wi-Fi для гостей" },
  { icon: <CreditCard size={18} />, label: "Карты и NFC" },
  { icon: <MapPin size={18} />, label: "Терраса" },
];

export default function ContactsPage() {
  const [today, setToday] = useState<number | null>(null);
  const [isOpen, setIsOpen] = useState<boolean>(false);

  useEffect(() => {
    const now = new Date();
    const day = now.getDay(); // 0=Sun, 1=Mon, ..., 6=Sat
    const hours = now.getHours();
    setToday(day);

    // Opening hours logic:
    // Mon-Fri: 9-22
    // Sat: 11-22
    // Sun: 9-22
    let openTime = 9;
    const closeTime = 22;
    if (day === 6) openTime = 11;

    setIsOpen(hours >= openTime && hours < closeTime);
  }, []);

  return (
    <main style={{ backgroundColor: C.bg, paddingTop: "64px" }}>
      {/* Header */}
      <section className="py-20 md:py-28" style={{ backgroundColor: C.sec }}>
        <div className="max-w-6xl mx-auto px-6">
          <p
            className="text-xs uppercase tracking-widest mb-4"
            style={{ ...nav, color: C.logo }}
          >
            Контакты
          </p>
          <h1
            className="text-4xl md:text-5xl lg:text-6xl mb-6"
            style={{ ...heading, color: C.text, letterSpacing: "-0.03em" }}
          >
            Мы ждём вас
          </h1>
          <p
            className="text-lg max-w-xl"
            style={{ ...body, color: C.muted, lineHeight: 1.7 }}
          >
            Приходите на кофе, обед или просто так. Мы в Светлом, Молдова —
            с бесплатной парковкой и открытой террасой.
          </p>
        </div>
      </section>

      {/* Main content */}
      <section className="py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left: Info */}
            <div className="flex flex-col gap-8">
              {/* Address */}
              <div
                className="p-8 rounded-2xl"
                style={{ backgroundColor: C.card, border: `1px solid ${C.border}` }}
              >
                <div className="flex items-start gap-4">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                    style={{ backgroundColor: C.sec, color: C.accent }}
                  >
                    <MapPin size={18} />
                  </div>
                  <div>
                    <h3
                      className="text-base mb-1"
                      style={{ ...heading, color: C.text }}
                    >
                      Адрес
                    </h3>
                      <p
                        className="text-sm mb-5"
                        style={{ ...body, color: C.muted, lineHeight: 1.7 }}
                      >
                        Светлый, Молдова
                      </p>
                        <div className="flex flex-col sm:flex-row gap-3">
                          <a
                            href="https://www.google.com/maps/dir/?api=1&destination=46.01639,28.56611"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full text-sm transition-opacity hover:opacity-85 whitespace-nowrap"
                            style={{ backgroundColor: C.accent, color: "#F0EDE8", ...nav }}
                          >
                            <Navigation size={14} />
                            Проложить маршрут
                          </a>
                          <a
                            href="https://www.google.com/maps/search/HoReCa+demo+Svetliy+Moldova/@46.01639,28.56611,16z"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full text-sm transition-colors hover:bg-black/5 whitespace-nowrap"
                            style={{ border: `1px solid ${C.border}`, color: C.text, ...nav }}
                          >
                            Google Maps
                          </a>
                        </div>
                  </div>
                </div>
              </div>

              {/* Phone */}
              <div
                className="p-8 rounded-2xl"
                style={{ backgroundColor: C.card, border: `1px solid ${C.border}` }}
              >
                <div className="flex items-start gap-4">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                    style={{ backgroundColor: C.sec, color: C.accent }}
                  >
                    <Phone size={18} />
                  </div>
                  <div>
                    <h3
                      className="text-base mb-1"
                      style={{ ...heading, color: C.text }}
                    >
                      Телефон
                    </h3>
                    <a
                      href="tel:+37360045800"
                      className="text-2xl transition-opacity hover:opacity-70"
                      style={{ ...heading, color: C.accent }}
                    >
                      +373 600 45 800
                    </a>
                    <p
                      className="text-sm mt-1"
                      style={{ ...body, color: C.muted }}
                    >
                      Звоните в любое время в часы работы
                    </p>
                  </div>
                </div>
              </div>

              {/* Amenities */}
              <div
                className="p-8 rounded-2xl"
                style={{ backgroundColor: C.card, border: `1px solid ${C.border}` }}
              >
                <h3
                  className="text-base mb-5"
                  style={{ ...heading, color: C.text }}
                >
                  Удобства
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  {amenities.map((a) => (
                    <div key={a.label} className="flex items-center gap-3">
                      <div
                        className="w-9 h-9 rounded-lg flex items-center justify-center shrink-0"
                        style={{ backgroundColor: C.sec, color: C.accent }}
                      >
                        {a.icon}
                      </div>
                      <span
                        className="text-sm"
                        style={{ ...bodyAccent, color: C.text }}
                      >
                        {a.label}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right: Hours */}
            <div>
              <div
                className="p-8 rounded-2xl sticky top-24"
                style={{ backgroundColor: C.card, border: `1px solid ${C.border}` }}
              >
                <div className="flex items-center justify-between gap-3 mb-6">
                  <div className="flex items-center gap-3">
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center"
                      style={{ backgroundColor: C.sec, color: C.accent }}
                    >
                      <Clock size={18} />
                    </div>
                    <h3
                      className="text-base"
                      style={{ ...heading, color: C.text }}
                    >
                      Часы работы
                    </h3>
                  </div>
                  {today !== null && (
                    <div
                      className={`flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] uppercase tracking-wider ${
                        isOpen ? "bg-green-500/10 text-green-600" : "bg-red-500/10 text-red-600"
                      }`}
                      style={{ ...nav, border: isOpen ? "1px solid rgba(34,197,94,0.2)" : "1px solid rgba(239,68,68,0.2)" }}
                    >
                      <div className={`w-1.5 h-1.5 rounded-full ${isOpen ? "bg-green-500 animate-pulse" : "bg-red-500"}`} />
                      {isOpen ? "Открыто" : "Закрыто"}
                    </div>
                  )}
                </div>

                <ul className="flex flex-col gap-3">
                  {hours.map((h, i) => {
                    // Map index to JS day (0=Sun, 1=Mon...)
                    const jsDay = i === 6 ? 0 : i + 1;
                    const isToday = today === jsDay;
                    return (
                        <li
                          key={h.day}
                          className="flex justify-between items-center gap-4 py-2 px-3 rounded-xl text-sm"
                          style={{
                            backgroundColor: isToday ? `${C.accent}15` : "transparent",
                            border: isToday ? `1px solid ${C.accent}30` : "1px solid transparent",
                          }}
                        >
                        <span
                          style={{
                            ...bodyAccent,
                            color: isToday ? C.accent : C.muted,
                            fontWeight: isToday ? 600 : 400,
                          }}
                        >
                          {h.day}
                          {isToday && (
                            <span
                              className="ml-2 text-xs"
                              style={{ ...nav, color: C.logo }}
                            >
                              сегодня
                            </span>
                          )}
                        </span>
                        <span
                          style={{
                            ...heading,
                            color: isToday ? C.accent : C.text,
                            fontWeight: isToday ? 600 : 500,
                          }}
                        >
                          {h.time}
                        </span>
                      </li>
                    );
                  })}
                </ul>

                <div
                  className="mt-6 pt-6"
                  style={{ borderTop: `1px solid ${C.border}` }}
                >
                  <a
                    href="tel:+37360045800"
                    className="w-full inline-flex items-center justify-center gap-2 py-3.5 rounded-full text-sm transition-opacity hover:opacity-85"
                    style={{
                      backgroundColor: C.accent,
                      color: "#F0EDE8",
                      ...nav,
                    }}
                  >
                    Позвонить: +373 600 45 800
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map placeholder */}
      <section className="pb-20">
        <div className="max-w-6xl mx-auto px-6">
          <div
            className="w-full h-64 md:h-96 rounded-3xl overflow-hidden relative"
            style={{ border: `1px solid ${C.border}` }}
          >
            {/* Satellite map via OpenStreetMap iframe */}
            <iframe
              src="https://www.openstreetmap.org/export/embed.html?bbox=28.48%2C45.96%2C28.66%2C46.07&layer=mapnik&marker=46.01639%2C28.56611"
              className="absolute inset-0 w-full h-full"
              style={{ border: 0, filter: "saturate(0.85) contrast(1.05)" }}
              loading="lazy"
              title="HoReCa demo на карте"
            />
            {/* Bottom overlay with CTA */}
            <div
              className="absolute bottom-0 left-0 right-0 px-6 py-5 flex items-center justify-between"
              style={{
                background: "linear-gradient(to top, rgba(47,42,39,0.82) 0%, transparent 100%)",
              }}
            >
              <div className="flex items-center gap-3">
                <div
                  className="w-9 h-9 rounded-full flex items-center justify-center shrink-0"
                  style={{ backgroundColor: C.accent, color: "#F0EDE8" }}
                >
                  <MapPin size={16} />
                </div>
                <span
                  className="text-sm"
                  style={{ ...bodyAccent, color: "#F0EDE8" }}
                >
                  HoReCa demo · Светлый, Молдова
                </span>
              </div>
                  <div className="flex items-center gap-2 sm:gap-3">
                    <a
                      href="https://www.google.com/maps/search/HoReCa+demo+Svetliy+Moldova/@46.01639,28.56611,16z"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-4 sm:px-5 py-2 rounded-full text-xs sm:text-sm transition-opacity hover:opacity-85 whitespace-nowrap"
                      style={{ border: "1px solid rgba(240,237,232,0.4)", color: "#F0EDE8", ...nav }}
                    >
                      Google Maps
                    </a>
                    <a
                      href="https://www.google.com/maps/dir/?api=1&destination=46.01639,28.56611"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-4 sm:px-5 py-2 rounded-full text-xs sm:text-sm transition-opacity hover:opacity-85 whitespace-nowrap"
                      style={{ backgroundColor: C.accent, color: "#F0EDE8", ...nav }}
                    >
                      <Navigation size={14} />
                      Маршрут
                    </a>
                  </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
