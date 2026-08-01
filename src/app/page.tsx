"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import {
  Coffee,
  Croissant,
  Wifi,
  Car,
  Users,
  Sun,
  CreditCard,
  Star,
  ChevronRight,
  X,
  ChevronLeft,
    Clock,
    Navigation,
  } from "lucide-react";

/* ──────────────────────────────────────────
   COLOR & FONT TOKENS
────────────────────────────────────────── */
const C = {
  bg: "#F0EDE8",
  logo: "#D7A37B",
  accent: "#5C3A2E",
  text: "#2F2A27",
  muted: "#7A6E68",
  border: "#DDD7CF",
  card: "#FAFAF8",
  dark: "#2F2A27",
  sec: "#E8E2DA",
};

const heading = { fontFamily: "var(--font-inter-tight)", fontWeight: 600 } as const;
const nav     = { fontFamily: "var(--font-inter-tight)", fontWeight: 500 } as const;
const body    = { fontFamily: "var(--font-manrope)", fontWeight: 400 } as const;
const bodyAccent = { fontFamily: "var(--font-manrope)", fontWeight: 500 } as const;

/* ──────────────────────────────────────────
   UNSPLASH IMAGE HELPERS
   All images: warm café / bakery aesthetic
────────────────────────────────────────── */
const IMG = {
  heroMain:    "https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&q=80&w=1200",
  heroFloat:   "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&q=80&w=1200",
  heroBg:      "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&q=80&w=1200",
  about:       "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&q=80&w=1200",
  // Menu preview cards
  coffee:      "https://images.unsplash.com/photo-1541167760496-1628856ab772?auto=format&fit=crop&q=80&w=800",
  flatWhite:   "https://images.unsplash.com/photo-1534040385115-33dcb3acba5b?auto=format&fit=crop&q=80&w=800",
  tea:         "https://images.unsplash.com/photo-1594631252845-29fc458639bc?auto=format&fit=crop&q=80&w=800",
  croissant:   "https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&q=80&w=800",
  lunch:       "https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&q=80&w=800",
  cocktail:    "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&q=80&w=800",
  // Gallery
  g1: "https://images.unsplash.com/photo-1442512595331-e89e73853f31?auto=format&fit=crop&q=80&w=800",
  g2: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&q=80&w=800",
  g3: "https://images.unsplash.com/photo-1521017432531-fbd92d768814?auto=format&fit=crop&q=80&w=800",
  g4: "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&q=80&w=800",
  g5: "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&q=80&w=800",
  g6: "https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&q=80&w=800",
  g7: "https://images.unsplash.com/photo-1517701604599-bb29b565090c?auto=format&fit=crop&q=80&w=800",
  g8: "https://images.unsplash.com/photo-1525648199074-cee30ba79a4a?auto=format&fit=crop&q=80&w=800",
};

/* ──────────────────────────────────────────
   HERO
────────────────────────────────────────── */
function Hero() {
  return (
    <section
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{ backgroundColor: C.bg, paddingTop: "64px" }}
    >
      {/* Desktop: right-half image background layer */}
      <div className="absolute inset-0 hidden md:block pointer-events-none opacity-40">
        <div
          className="absolute right-0 top-0 bottom-0 w-[60%]"
          style={{ overflow: "hidden" }}
        >
          <Image
            src={IMG.heroMain}
            alt="Интерьер HoReCa demo"
            fill
            priority
            sizes="60vw"
            className="object-cover grayscale-[20%]"
            style={{ objectPosition: "center" }}
          />
          <div
            className="absolute inset-0"
            style={{
              background: `linear-gradient(to right, ${C.bg} 0%, transparent 60%)`,
            }}
          />
        </div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 py-24 md:py-32 w-full">
        <div className="flex flex-col lg:flex-row lg:items-center gap-12 lg:gap-24">
            <div className="max-w-xl lg:flex-1 order-2 lg:order-1">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 mb-8">
                <div
                  className="flex items-center gap-2 px-4 py-1.5 rounded-full text-xs"
                  style={{
                    backgroundColor: C.sec,
                    border: `1px solid ${C.border}`,
                    ...nav,
                    color: C.muted,
                  }}
                >
                  <span style={{ color: C.logo }}>★</span>
                  <span>4.6 · 94 отзыва · Светлый, Молдова</span>
                </div>
              </div>

              {/* H1 */}
              <h1
                className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl mb-6 leading-[1.05]"
                style={{ ...heading, color: C.text, letterSpacing: "-0.04em" }}
              >
                Место, где
                <br />
                <span style={{ color: C.logo }}>начинается</span>
                <br />
                хороший день
              </h1>

              {/* Subtitle */}
              <p
                className="text-lg md:text-xl mb-10 max-w-lg"
                style={{ ...body, color: C.muted, lineHeight: 1.7 }}
              >
                HoReCa demo — уютная кофейня и пекарня. Свежий кофе,
                домашняя выпечка, вкусный обед и тихое место для работы
                или встречи с друзьями.
              </p>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/menu"
                  className="inline-flex items-center justify-center gap-2 px-10 py-4 rounded-full text-sm transition-all hover:opacity-90 active:scale-95 shadow-lg shadow-black/5"
                  style={{ backgroundColor: C.accent, color: "#F0EDE8", ...nav }}
                >
                  Посмотреть меню
                  <ChevronRight size={16} />
                </Link>
                  <Link
                    href="/contacts"
                    className="inline-flex items-center justify-center gap-2 px-10 py-4 rounded-full text-sm transition-all hover:bg-[#E0DAD4] active:scale-95"
                    style={{
                      backgroundColor: "transparent",
                      border: `1.5px solid ${C.border}`,
                      color: C.text,
                      ...nav,
                    }}
                  >
                    Контакты
                  </Link>
                  <a
                    href="https://www.google.com/maps/dir/?api=1&destination=46.01639,28.56611"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-10 py-4 rounded-full text-sm transition-all hover:opacity-85 active:scale-95"
                    style={{
                      backgroundColor: C.sec,
                      border: `1.5px solid ${C.border}`,
                      color: C.text,
                      ...nav,
                    }}
                  >
                    <Navigation size={16} />
                    Маршрут
                  </a>
                </div>
            </div>

            {/* Accent image next to text (mobile: below title, desktop: right) */}
            <div className="lg:flex-1 order-1 lg:order-2">
              <div className="relative w-full max-w-[620px] mx-auto lg:ml-auto">
                <div
                  className="relative aspect-square lg:aspect-square rounded-[32px] md:rounded-[48px] overflow-hidden shadow-[0_48px_80px_-20px_rgba(0,0,0,0.25)]"
                  style={{ border: `6px solid ${C.card}` }}
                >
                  <Image
                    src={IMG.heroFloat}
                    alt="Атмосфера HoReCa demo"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 620px"
                    priority
                  />
                </div>

                {/* Decorative accent */}
                <div 
                  className="absolute -bottom-6 -left-6 w-32 h-32 rounded-full opacity-20 blur-3xl pointer-events-none"
                  style={{ backgroundColor: C.logo }}
                />
              </div>
            </div>
        </div>
      </div>
    </section>
  );
}

/* ──────────────────────────────────────────
   FEATURES / WHY US
────────────────────────────────────────── */
const features = [
  { icon: <Coffee size={22} />, title: "Хороший кофе", desc: "Espresso, flat white, капучино и авторские напитки — зёрна с заботой о вкусе." },
  { icon: <Croissant size={22} />, title: "Свежая выпечка", desc: "Круассаны, булочки и десерты готовятся каждый день. Никакой заморозки." },
  { icon: <Sun size={22} />, title: "Терраса", desc: "Открытая терраса — идеальное место для утреннего кофе или вечернего коктейля." },
  { icon: <Wifi size={22} />, title: "Для работы", desc: "Тихо, удобно, быстрый Wi-Fi. Идеально для ноутбука и сосредоточенной работы." },
  { icon: <Users size={22} />, title: "Для всех", desc: "Студенты, туристы, семьи с детьми, компании — здесь каждый найдёт своё место." },
  { icon: <Car size={22} />, title: "Бесплатная парковка", desc: "Приехали на машине? Паркуйтесь бесплатно рядом с кафе." },
  { icon: <CreditCard size={22} />, title: "NFC и карты", desc: "Принимаем все современные способы оплаты — карты и бесконтактные платежи." },
  { icon: <Star size={22} />, title: "Рейтинг 4.6", desc: "Оценка наших гостей — 4.6 из 5. 94 отзыва говорят сами за себя." },
];

function Features() {
  return (
    <section className="py-24 md:py-32" style={{ backgroundColor: C.bg }} id="about">
      <div className="max-w-6xl mx-auto px-6">
        <div className="max-w-xl mb-16">
          <p className="text-xs uppercase tracking-widest mb-4" style={{ ...nav, color: C.logo }}>
            Почему выбирают нас
          </p>
          <h2
            className="text-3xl md:text-4xl"
            style={{ ...heading, color: C.text, letterSpacing: "-0.02em" }}
          >
            Всё, что нужно для приятного времени
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f) => (
            <div
              key={f.title}
              className="p-6 rounded-2xl"
              style={{ backgroundColor: C.card, border: `1px solid ${C.border}` }}
            >
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center mb-4"
                style={{ backgroundColor: C.sec, color: C.accent }}
              >
                {f.icon}
              </div>
              <h3 className="text-base mb-2" style={{ ...heading, color: C.text }}>
                {f.title}
              </h3>
              <p className="text-sm" style={{ ...body, color: C.muted, lineHeight: 1.7 }}>
                {f.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ──────────────────────────────────────────
   ABOUT  — with real image
────────────────────────────────────────── */
function About() {
  return (
    <section
      className="py-24 md:py-32"
      style={{ backgroundColor: C.sec }}
      id="about-us"
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          {/* Text */}
          <div>
            <p className="text-xs uppercase tracking-widest mb-4" style={{ ...nav, color: C.logo }}>
              О нас
            </p>
            <h2
              className="text-3xl md:text-4xl mb-6"
              style={{ ...heading, color: C.text, letterSpacing: "-0.02em" }}
            >
              Место, где хочется задержаться
            </h2>
            <p className="text-base mb-4" style={{ ...body, color: C.muted, lineHeight: 1.8 }}>
              HoReCa demo — это не просто кофейня. Это пространство,
              где каждая деталь создана для вашего комфорта. Мягкое освещение,
              тёплые тона, запах свежей выпечки — с первого момента здесь
              чувствуешь себя как дома.
            </p>
            <p className="text-base mb-8" style={{ ...body, color: C.muted, lineHeight: 1.8 }}>
              Мы находимся в Светлом, Молдова, и открыты почти каждый день —
              с утреннего кофе до вечернего бокала. Приходите одни, с друзьями,
              с ноутбуком или всей семьёй.
            </p>
            <div className="flex flex-col sm:flex-row gap-6">
              {[
                { val: "4.6", label: "Средний рейтинг" },
                { val: "94",  label: "Отзыва гостей"   },
                { val: "7",   label: "Дней в неделю"   },
              ].map((stat, i) => (
                <div key={stat.label} className="flex items-start gap-6">
                  {i > 0 && (
                    <div className="hidden sm:block w-px self-stretch" style={{ backgroundColor: C.border }} />
                  )}
                  <div>
                    <div className="text-3xl mb-1" style={{ ...heading, color: C.accent }}>
                      {stat.val}
                    </div>
                    <div className="text-sm" style={{ ...bodyAccent, color: C.muted }}>
                      {stat.label}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Real image */}
          <div className="relative">
            <div
              className="relative w-full overflow-hidden rounded-3xl"
              style={{ aspectRatio: "4/5" }}
            >
              <Image
                src={IMG.about}
                alt="Атмосфера HoReCa demo"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
              {/* Bottom caption badge */}
              <div
                className="absolute bottom-6 left-6 right-6 rounded-2xl px-5 py-4 backdrop-blur-sm"
                style={{
                  backgroundColor: "rgba(240,237,232,0.88)",
                  border: `1px solid ${C.border}`,
                }}
              >
                <p className="text-sm" style={{ ...bodyAccent, color: C.text, lineHeight: 1.6 }}>
                  «Кофе с утра, десерт после обеда, коктейль вечером — всё в одном месте.»
                </p>
                <p className="text-xs mt-1" style={{ ...body, color: C.muted }}>
                  Команда HoReCa demo
                </p>
              </div>
            </div>
            {/* Warm decorative dot */}
            <div
              className="absolute -bottom-5 -right-5 w-20 h-20 rounded-full opacity-35 pointer-events-none"
              style={{ backgroundColor: C.logo }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

/* ──────────────────────────────────────────
   MENU PREVIEW  — cards with images
────────────────────────────────────────── */
const menuItems = [
  { category: "Кофе",    name: "Капучино",        desc: "Классический итальянский — нежная молочная пена",       img: IMG.coffee    },
  { category: "Кофе",    name: "Flat White",       desc: "Насыщенный эспрессо с бархатистым молоком",             img: IMG.flatWhite },
  { category: "Чай",     name: "Чайная карта",     desc: "Широкий выбор листовых и травяных чаёв",               img: IMG.tea       },
  { category: "Еда",     name: "Свежий круассан",  desc: "Золотистый, слоистый, каждое утро из печи",            img: IMG.croissant },
  { category: "Еда",     name: "Обеденное меню",   desc: "Сытные блюда на обед и ужин каждый день",              img: IMG.lunch     },
  { category: "Алкоголь",name: "Пиво и коктейли",  desc: "Лёгкий вечер начинается с правильного напитка",       img: IMG.cocktail  },
];

function MenuPreview() {
  return (
    <section className="py-24 md:py-32" style={{ backgroundColor: C.bg }} id="menu-preview">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
          <div>
            <p className="text-xs uppercase tracking-widest mb-4" style={{ ...nav, color: C.logo }}>
              Меню
            </p>
            <h2
              className="text-3xl md:text-4xl"
              style={{ ...heading, color: C.text, letterSpacing: "-0.02em" }}
            >
              Что у нас есть
            </h2>
          </div>
          <Link
            href="/menu"
            className="inline-flex items-center gap-2 text-sm transition-opacity hover:opacity-70 self-start md:self-auto"
            style={{ ...nav, color: C.accent }}
          >
            Полное меню
            <ChevronRight size={16} />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {menuItems.map((item) => (
            <div
              key={item.name}
              className="rounded-2xl overflow-hidden group transition-shadow hover:shadow-sm"
              style={{ backgroundColor: C.card, border: `1px solid ${C.border}` }}
            >
              {/* Image */}
              <div
                className="relative w-full overflow-hidden flex items-center justify-center"
                style={{ height: "180px", backgroundColor: C.sec }}
              >
                {/* Blurred bg */}
                <div className="absolute inset-0" style={{ backdropFilter: "blur(12px)", backgroundColor: C.sec }} />
                <span
                  className="relative z-10 px-4 py-2 rounded-full text-xs border"
                  style={{ ...nav, color: C.accent, borderColor: C.accent, backgroundColor: "rgba(240,237,232,0.85)", letterSpacing: "0.04em" }}
                >
                  Coming Soon
                </span>
                {/* Category pill */}
                <div
                  className="absolute top-3 left-3 px-2.5 py-1 rounded-full text-xs z-20"
                  style={{
                    backgroundColor: "rgba(240,237,232,0.92)",
                    ...nav,
                    color: C.accent,
                  }}
                >
                  {item.category}
                </div>
              </div>

              {/* Text */}
              <div className="p-5">
                <div className="text-base mb-1" style={{ ...heading, color: C.text }}>
                  {item.name}
                </div>
                <div className="text-sm" style={{ ...body, color: C.muted, lineHeight: 1.6 }}>
                  {item.desc}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ──────────────────────────────────────────
   GALLERY  — «Увидеть легче чем описать»
────────────────────────────────────────── */
const galleryPhotos = [
  { src: IMG.g1, alt: "Кофе в HoReCa demo" },
  { src: IMG.g2, alt: "Уютная атмосфера" },
  { src: IMG.g3, alt: "Интерьер кафе" },
  { src: IMG.g4, alt: "Свежий кофе" },
  { src: IMG.g5, alt: "Еда и десерты" },
  { src: IMG.g6, alt: "Выпечка" },
  { src: IMG.g7, alt: "Напитки" },
  { src: IMG.g8, alt: "Стол у окна" },
];

// Masonry-style layout weights
const galleryLayout = [
  { col: "col-span-2 row-span-2" },  // 0 — large left, rows 1-2
  { col: "" },                        // 1 — col 3, row 1
  { col: "" },                        // 2 — col 4, row 1
  { col: "" },                        // 3 — col 3, row 2
  { col: "" },                        // 4 — col 4, row 2
  { col: "col-span-2" },             // 5 — cols 1-2, row 3
  { col: "" },                        // 6 — col 3, row 3
  { col: "" },                        // 7 — col 4, row 3
];

function GalleryLightbox({
  photos,
  index,
  onClose,
  onPrev,
  onNext,
}: {
  photos: typeof galleryPhotos;
  index: number;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}) {
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center"
      style={{ backgroundColor: "rgba(47,42,39,0.92)", backdropFilter: "blur(6px)" }}
      onClick={onClose}
    >
      {/* Image wrapper */}
      <div
        className="relative max-w-4xl w-full mx-4"
        style={{ maxHeight: "85vh" }}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative w-full overflow-hidden rounded-2xl" style={{ aspectRatio: "4/3" }}>
          <Image
            src={photos[index].src}
            alt={photos[index].alt}
            fill
            sizes="90vw"
            className="object-cover"
            priority
          />
        </div>

        {/* Counter */}
        <div
          className="absolute top-4 left-4 px-3 py-1 rounded-full text-xs"
          style={{ backgroundColor: "rgba(240,237,232,0.2)", ...nav, color: "#F0EDE8" }}
        >
          {index + 1} / {photos.length}
        </div>

        {/* Close */}
        <button
          className="absolute top-4 right-4 w-9 h-9 flex items-center justify-center rounded-full transition-colors hover:bg-white/20"
          style={{ color: "#F0EDE8" }}
          onClick={onClose}
        >
          <X size={18} />
        </button>

        {/* Prev */}
        <button
          className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center rounded-full transition-colors hover:bg-white/20"
          style={{ color: "#F0EDE8" }}
          onClick={onPrev}
        >
          <ChevronLeft size={22} />
        </button>

        {/* Next */}
        <button
          className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center rounded-full transition-colors hover:bg-white/20"
          style={{ color: "#F0EDE8" }}
          onClick={onNext}
        >
          <ChevronRight size={22} />
        </button>
      </div>
    </div>
  );
}

function Gallery() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const open  = (i: number) => setLightboxIndex(i);
  const close = () => setLightboxIndex(null);
  const prev  = () => setLightboxIndex((i) => (i === null ? 0 : (i - 1 + galleryPhotos.length) % galleryPhotos.length));
  const next  = () => setLightboxIndex((i) => (i === null ? 0 : (i + 1) % galleryPhotos.length));

  return (
    <section className="py-24 md:py-32" style={{ backgroundColor: C.sec }}>
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-14">
          <p className="text-xs uppercase tracking-widest mb-4" style={{ ...nav, color: C.logo }}>
            Атмосфера
          </p>
          <h2
            className="text-3xl md:text-4xl"
            style={{ ...heading, color: C.text, letterSpacing: "-0.02em" }}
          >
            Увидеть легче чем описать
          </h2>
          <p
            className="mt-4 max-w-sm mx-auto text-sm"
            style={{ ...body, color: C.muted, lineHeight: 1.7 }}
          >
            Просто загляните — кофе, выпечка, свет и та самая атмосфера, в которой хочется остаться.
          </p>
        </div>

        {/* Desktop: asymmetric grid */}
        <div
          className="hidden md:grid gap-3"
          style={{
            gridTemplateColumns: "repeat(4, 1fr)",
            gridAutoRows: "220px",
          }}
        >
          {galleryPhotos.map((photo, i) => (
            <div
              key={i}
              className={`relative overflow-hidden rounded-2xl cursor-pointer group flex items-center justify-center ${galleryLayout[i].col}`}
              style={{ backgroundColor: C.sec, border: `2px dashed ${C.border}` }}
            >
              <span
                className="relative z-10 px-4 py-2 rounded-full text-xs border"
                style={{ ...nav, color: C.accent, borderColor: C.accent, backgroundColor: "rgba(240,237,232,0.85)", letterSpacing: "0.04em" }}
              >
                Coming Soon
              </span>
            </div>
          ))}
        </div>

        {/* Mobile: 2-col simple grid */}
        <div className="md:hidden grid grid-cols-2 gap-3">
          {galleryPhotos.map((photo, i) => (
            <div
              key={i}
              className="relative overflow-hidden rounded-xl flex items-center justify-center"
              style={{ aspectRatio: "1/1", backgroundColor: C.sec, border: `2px dashed ${C.border}` }}
            >
              <span
                className="relative z-10 px-3 py-1.5 rounded-full text-xs border"
                style={{ ...nav, color: C.accent, borderColor: C.accent, backgroundColor: "rgba(240,237,232,0.85)", letterSpacing: "0.04em" }}
              >
                Coming Soon
              </span>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-10 text-center">
          <Link
            href="/contacts"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full text-sm transition-opacity hover:opacity-85"
            style={{ backgroundColor: C.accent, color: "#F0EDE8", ...nav }}
          >
            Прийти и убедиться лично
            <ChevronRight size={16} />
          </Link>
        </div>
      </div>

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <GalleryLightbox
          photos={galleryPhotos}
          index={lightboxIndex}
          onClose={close}
          onPrev={prev}
          onNext={next}
        />
      )}
    </section>
  );
}

/* ──────────────────────────────────────────
   REVIEWS
────────────────────────────────────────── */
const reviews = [
  { name: "Мария К.", rating: 5, text: "Прекрасная атмосфера, вкусный кофе и очень приветливый персонал. Стала постоянным гостем." },
  { name: "Андрей В.", rating: 5, text: "Отличное место для работы — тихо, удобно, хороший Wi-Fi. Круассаны просто супер." },
  { name: "Елена М.", rating: 4, text: "Уютная обстановка, большой выбор десертов. Приходили с семьёй — всем понравилось." },
];

function Reviews() {
  return (
    <section className="py-24 md:py-32" style={{ backgroundColor: C.bg }}>
      <div className="max-w-6xl mx-auto px-6">
        <div className="max-w-xl mb-16">
          <p className="text-xs uppercase tracking-widest mb-4" style={{ ...nav, color: C.logo }}>
            Отзывы
          </p>
          <h2
            className="text-3xl md:text-4xl"
            style={{ ...heading, color: C.text, letterSpacing: "-0.02em" }}
          >
            Гости о нас
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviews.map((r) => (
            <div
              key={r.name}
              className="p-8 rounded-2xl flex flex-col gap-4"
              style={{ backgroundColor: C.card, border: `1px solid ${C.border}` }}
            >
              <div className="flex gap-1">
                {Array.from({ length: r.rating }).map((_, i) => (
                  <Star key={i} size={14} fill={C.logo} style={{ color: C.logo }} />
                ))}
              </div>
              <p className="text-sm flex-1" style={{ ...body, color: C.text, lineHeight: 1.7 }}>
                {r.text}
              </p>
              <p className="text-sm" style={{ ...bodyAccent, color: C.muted }}>
                — {r.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ──────────────────────────────────────────
   HOURS STRIP
────────────────────────────────────────── */
function HoursStrip() {
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

  const schedule = [
    { label: "Пн–Пт", time: "09:00–22:00", days: [1, 2, 3, 4, 5] },
    { label: "Суббота", time: "11:00–22:00", days: [6] },
    { label: "Воскресенье", time: "09:00–22:00", days: [0] },
  ];

  return (
    <section className="py-16" style={{ backgroundColor: C.accent }}>
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <h2
                className="text-2xl md:text-3xl text-white"
                style={{ ...heading, letterSpacing: "-0.02em" }}
              >
                Мы открыты каждый день
              </h2>
              {today !== null && (
                <div
                  className={`flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] uppercase tracking-wider ${
                    isOpen ? "bg-green-500/20 text-green-400" : "bg-red-500/20 text-red-400"
                  }`}
                  style={{ ...nav, border: isOpen ? "1px solid rgba(34,197,94,0.3)" : "1px solid rgba(239,68,68,0.3)" }}
                >
                  <div className={`w-1.5 h-1.5 rounded-full ${isOpen ? "bg-green-500 animate-pulse" : "bg-red-500"}`} />
                  {isOpen ? "Открыто" : "Закрыто"}
                </div>
              )}
            </div>
            <p className="text-sm" style={{ ...body, color: "rgba(240,237,232,0.7)" }}>
              Загляните утром за кофе или вечером на ужин
            </p>
          </div>

          <div
            className="rounded-2xl px-8 py-6 flex flex-col gap-2 min-w-[280px]"
            style={{ backgroundColor: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.15)" }}
          >
            {schedule.map((row) => {
              const isActive = today !== null && row.days.includes(today);
              return (
                <div
                  key={row.label}
                  className="flex justify-between gap-8 text-sm py-1"
                  style={{
                    ...bodyAccent,
                    color: isActive ? "#F0EDE8" : "rgba(240,237,232,0.6)",
                  }}
                >
                  <span className="flex items-center gap-2">
                    {row.label}
                    {isActive && (
                      <span className="text-[10px] bg-white/10 px-2 py-0.5 rounded-full text-white/80 uppercase">
                        Сегодня
                      </span>
                    )}
                  </span>
                  <span style={{ fontWeight: isActive ? 600 : 400 }}>{row.time}</span>
                </div>
              );
            })}
          </div>

            <div className="flex flex-col gap-3">
                <a
                  href="https://www.google.com/maps/dir/?api=1&destination=46.01639,28.56611"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-7 py-3 rounded-full text-sm transition-opacity hover:opacity-85 whitespace-nowrap"
                  style={{ backgroundColor: "#F0EDE8", color: C.accent, ...nav }}
                >
                  <Navigation size={16} />
                  Проложить маршрут
                </a>
              <a
                href="tel:+37360045800"
                className="inline-flex items-center justify-center gap-2 px-7 py-3 rounded-full text-sm transition-colors"
                style={{ border: "1.5px solid rgba(240,237,232,0.5)", color: "#F0EDE8", ...nav }}
              >
                Позвонить нам
              </a>
              <Link
                href="/contacts"
                className="inline-flex items-center justify-center gap-2 px-7 py-3 rounded-full text-sm transition-colors"
                style={{ border: "1.5px solid rgba(240,237,232,0.5)", color: "#F0EDE8", ...nav }}
              >
                Контакты
              </Link>
            </div>
        </div>
      </div>
    </section>
  );
}

/* ──────────────────────────────────────────
   PAGE
────────────────────────────────────────── */
export default function HomePage() {
  return (
    <main>
      <Hero />
      <Features />
      <About />
      <MenuPreview />
      <Gallery />
      <Reviews />
      <HoursStrip />
    </main>
  );
}
