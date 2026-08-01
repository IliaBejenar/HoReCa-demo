"use client";

import Image from "next/image";
import { useState } from "react";

const C = {
  bg: "#F0EDE8",
  logo: "#D7A37B",
  accent: "#5C3A2E",
  text: "#2F2A27",
  muted: "#7A6E68",
  border: "#DDD7CF",
  card: "#FAFAF8",
  sec: "#E8E2DA"
};

const heading = { fontFamily: "var(--font-inter-tight)", fontWeight: 600 } as const;
const nav = { fontFamily: "var(--font-inter-tight)", fontWeight: 500 } as const;
const body = { fontFamily: "var(--font-manrope)", fontWeight: 400 } as const;

type MenuItem = {name: string;desc: string;img: string;};
type Category = {id: string;label: string;hero: string;items: MenuItem[];};

const categories: Category[] = [
{
  id: "coffee",
  label: "Кофе",
  hero: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&q=80&w=1200",
  items: [
  { name: "Эспрессо", desc: "Концентрированный, насыщенный, классика без компромиссов", img: "https://images.unsplash.com/photo-1510591509098-f4fdc6d0ff04?auto=format&fit=crop&q=80&w=800" },
  { name: "Американо", desc: "Мягкий кофе на основе эспрессо, разбавленный горячей водой", img: "https://images.unsplash.com/photo-1551030173-122aabc4489c?auto=format&fit=crop&q=80&w=800" },
  { name: "Капучино", desc: "Нежная молочная пена, идеальный баланс кофе и молока", img: "https://images.unsplash.com/photo-1557006021-b85faa2bc51b?auto=format&fit=crop&q=80&w=800" },
  { name: "Латте", desc: "Больше молока, мягкий вкус — для тех, кто любит мягкость", img: "https://images.unsplash.com/photo-1561882468-9110e03e0f78?auto=format&fit=crop&q=80&w=800" },
  { name: "Flat White", desc: "Насыщенный двойной эспрессо с бархатистым велюровым молоком", img: "https://images.unsplash.com/photo-1534040385115-33dcb3acba5b?auto=format&fit=crop&q=80&w=800" },
  { name: "Раф", desc: "Авторский напиток на основе эспрессо со сливками и ванилью", img: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=800" },
  { name: "Кортадо", desc: "Эспрессо с небольшим количеством теплого молока", img: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&q=80&w=800" },
  { name: "Айс-латте", desc: "Холодный освежающий кофе со льдом и молоком", img: "https://images.unsplash.com/photo-1517701604599-bb29b565090c?auto=format&fit=crop&q=80&w=800" }]

},
{
  id: "tea",
  label: "Чай и напитки",
  hero: "https://images.unsplash.com/photo-1594631252845-29fc458639bc?auto=format&fit=crop&q=80&w=1200",
  items: [
  { name: "Зелёный чай", desc: "Деликатный, свежий, листовой", img: "https://images.unsplash.com/photo-1627435601361-ec25f5b1d0e5?auto=format&fit=crop&q=80&w=800" },
  { name: "Чёрный чай", desc: "Крепкий классический чай, согревающий в любое время", img: "https://images.unsplash.com/photo-1544787219-7f47ccb76574?auto=format&fit=crop&q=80&w=800" },
  { name: "Травяные чаи", desc: "Мята, ромашка, липа — натуральные сборы для спокойствия", img: "https://images.unsplash.com/photo-1563911892437-1feda0179cf3?auto=format&fit=crop&q=80&w=800" },
  { name: "Чай с молоком", desc: "Мягкий и уютный — английская классика", img: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&q=80&w=800" },
  { name: "Свежевыжатый сок", desc: "Апельсин, яблоко или сезонные фрукты", img: "https://images.unsplash.com/photo-1622597467836-f3285f2131b8?auto=format&fit=crop&q=80&w=800" },
  { name: "Лимонад", desc: "Домашний, освежающий, со свежей мятой и цитрусом", img: "https://images.unsplash.com/photo-1621263764928-df1444c5e859?auto=format&fit=crop&q=80&w=800" }]

},
{
  id: "bakery",
  label: "Выпечка и десерты",
  hero: "https://images.unsplash.com/photo-1509365465985-25d11c17e812?auto=format&fit=crop&q=80&w=1200",
  items: [
  { name: "Круассан классический", desc: "Слоистый, золотистый, свежий каждое утро из печи", img: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&q=80&w=800" },
  { name: "Круассан с начинкой", desc: "С шоколадом, сыром или ветчиной — выбирай свой", img: "https://images.unsplash.com/photo-1501963422762-3d89bd989e69?auto=format&fit=crop&q=80&w=800" },
  { name: "Булочка с корицей", desc: "Мягкая, ароматная, покрытая нежной глазурью", img: "https://images.unsplash.com/photo-1509365465985-25d11c17e812?auto=format&fit=crop&q=80&w=800" },
  { name: "Маффин", desc: "Черника, шоколад или банан — домашняя мягкость", img: "https://images.unsplash.com/photo-1607958996333-41aef7caefaa?auto=format&fit=crop&q=80&w=800" },
  { name: "Чизкейк", desc: "Кремовый, без излишней сладости, тающий во рту", img: "https://images.unsplash.com/photo-1533134242443-d4fd215305ad?auto=format&fit=crop&q=80&w=800" },
  { name: "Тирамису", desc: "Итальянская классика с насыщенным вкусом кофе и маскарпоне", img: "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?auto=format&fit=crop&q=80&w=800" },
  { name: "Пирог дня", desc: "Меняется каждый день — спрашивайте у персонала", img: "https://images.unsplash.com/photo-1464305795204-6f5bbfc7fb81?auto=format&fit=crop&q=80&w=800" }]

},
{
  id: "food",
  label: "Еда",
  hero: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&q=80&w=1200",
  items: [
  { name: "Завтрак", desc: "Яйца разных способов приготовления, тосты, свежие овощи", img: "https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&q=80&w=800" },
  { name: "Сэндвич", desc: "Свежий хлеб, качественные ингредиенты, сытный перекус", img: "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?auto=format&fit=crop&q=80&w=800" },
  { name: "Суп дня", desc: "Домашний суп — меняется ежедневно по сезону", img: "https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&q=80&w=800" },
  { name: "Горячее блюдо", desc: "Основное блюдо дня на обед и ужин", img: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&q=80&w=1200" },
  { name: "Салат", desc: "Свежие сезонные салаты с лёгкой заправкой", img: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&q=80&w=800" },
  { name: "Десерт дня", desc: "Сезонное сладкое — уточняйте у персонала", img: "https://images.unsplash.com/photo-1488477181946-6428a0291777?auto=format&fit=crop&q=80&w=800" }]

},
{
  id: "alcohol",
  label: "Алкоголь",
  hero: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&q=80&w=1200",
  items: [
  { name: "Пиво разливное", desc: "Местное и крафтовое — холодное, с пеной", img: "https://images.unsplash.com/photo-1535958636474-b021ee887b13?auto=format&fit=crop&q=80&w=800" },
  { name: "Пиво бутылочное", desc: "Широкий выбор — светлое, тёмное, нефильтрованное", img: "https://images.unsplash.com/photo-1608270586620-248524c67de9?auto=format&fit=crop&q=80&w=800" },
  { name: "Вино бокал", desc: "Красное или белое — к ужину или просто так", img: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&q=80&w=800" },
  { name: "Апероль Шприц", desc: "Лёгкий летний коктейль — просекко, апероль, лёд", img: "https://images.unsplash.com/photo-1560508179-b2c9a3f8e92b?auto=format&fit=crop&q=80&w=800" },
  { name: "Авторские коктейли", desc: "Сезонные миксы от нашего бармена — спрашивайте карту", img: "https://images.unsplash.com/photo-1551538827-9c037cb4f32a?auto=format&fit=crop&q=80&w=800" },
  { name: "Мохито", desc: "Освежающий и сбалансированный — классика для вечера", img: "https://images.unsplash.com/photo-1560508179-b2c9a3f8e92b?auto=format&fit=crop&q=80&w=800" }]

}];


export default function MenuPage() {
  const [activeTab, setActiveTab] = useState("coffee");

  return (
    <main style={{ backgroundColor: C.bg, paddingTop: "64px" }}>
        {/* Hero */}
        <section className="relative overflow-hidden" style={{ height: "420px" }}>
          <Image
          src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&q=85&w=1600"
          alt="HoReCa demo — меню"
          fill
          className="object-cover"
          priority />

        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(to bottom, rgba(47,42,39,0.45) 0%, rgba(47,42,39,0.72) 100%)" }} />

        <div className="absolute inset-0 flex flex-col justify-end max-w-6xl mx-auto px-6 pb-14">
          <p className="text-xs uppercase tracking-widest mb-3" style={{ ...nav, color: C.logo }}>
            Наше меню
          </p>
          <h1
            className="text-4xl md:text-6xl"
            style={{ ...heading, color: "#F0EDE8", letterSpacing: "-0.03em", lineHeight: 1.1 }}>

            Всё для вашего удовольствия
          </h1>
          <p className="mt-4 text-base max-w-lg" style={{ ...body, color: "rgba(240,237,232,0.75)", lineHeight: 1.7 }}>
            Свежие ингредиенты, домашняя рецептура и забота о каждой чашке.
          </p>
        </div>
      </section>

      {/* Sticky tab nav */}
      <div
        className="sticky top-16 z-30 overflow-x-auto"
        style={{ backgroundColor: C.sec, borderBottom: `1px solid ${C.border}` }}>

        <div className="max-w-6xl mx-auto px-6">
          <div className="flex gap-0 min-w-max">
            {categories.map((cat) =>
            <button
              key={cat.id}
              onClick={() => {
                setActiveTab(cat.id);
                document.getElementById(cat.id)?.scrollIntoView({ behavior: "smooth", block: "start" });
              }}
              className="px-5 py-4 text-sm transition-all relative"
              style={{
                ...nav,
                color: activeTab === cat.id ? C.accent : C.muted,
                borderBottom: activeTab === cat.id ? `2px solid ${C.accent}` : "2px solid transparent",
                background: "none",
                cursor: "pointer",
                whiteSpace: "nowrap"
              }}>

                {cat.label}
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Menu sections */}
      <section className="py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-6 flex flex-col gap-24">
          {categories.map((cat) =>
          <div key={cat.id} id={cat.id}>
              {/* Category hero image */}
              <div className="relative rounded-3xl overflow-hidden mb-10 flex items-center justify-center" style={{ height: "260px", backgroundColor: C.sec }}>
                <div className="absolute inset-0" style={{ backdropFilter: "blur(16px)", backgroundColor: C.sec }} />
                <div className="absolute inset-0 flex items-end p-8">
                  <h2
                  className="text-3xl md:text-4xl relative z-10"
                  style={{ ...heading, color: C.text, letterSpacing: "-0.02em" }}>
                    {cat.label}
                  </h2>
                </div>
                <span
                  className="relative z-10 px-5 py-2.5 rounded-full text-sm border mb-10"
                  style={{ ...nav, color: C.accent, borderColor: C.accent, backgroundColor: "rgba(240,237,232,0.85)", letterSpacing: "0.04em" }}
                >
                  Coming Soon
                </span>
              </div>

              {/* Items grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                {cat.items.map((item) =>
              <div
                key={item.name}
                className="rounded-2xl overflow-hidden flex flex-col"
                style={{
                  backgroundColor: C.card,
                  border: `1px solid ${C.border}`
                }}>

                    {/* Item photo */}
                    <div className="relative overflow-hidden flex items-center justify-center" style={{ height: "160px", backgroundColor: C.sec }}>
                      <div className="absolute inset-0" style={{ backdropFilter: "blur(12px)", backgroundColor: C.sec }} />
                      <span
                        className="relative z-10 px-4 py-2 rounded-full text-xs border"
                        style={{ fontFamily: "var(--font-inter-tight)", fontWeight: 500, color: C.accent, borderColor: C.accent, backgroundColor: "rgba(240,237,232,0.85)", letterSpacing: "0.04em" }}
                      >
                        Coming Soon
                      </span>
                    </div>
                    {/* Item text */}
                    <div className="p-4 flex flex-col gap-1">
                      <h3
                    className="text-sm"
                    style={{ ...heading, color: C.text }}>

                        {item.name}
                      </h3>
                      <p
                    className="text-xs"
                    style={{ ...body, color: C.muted, lineHeight: 1.6 }}>

                        {item.desc}
                      </p>
                    </div>
                  </div>
              )}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Note */}
      <section className="py-16" style={{ backgroundColor: C.sec }}>
        <div className="max-w-6xl mx-auto px-6 text-center">
          <p
            className="text-sm max-w-xl mx-auto"
            style={{ ...body, color: C.muted, lineHeight: 1.8 }}>

            Актуальные цены уточняйте у персонала или по телефону.
            Часть позиций меняется по сезону. Ждём вас в Светлом, Молдова.
          </p>
          <a
            href="tel:+37360045800"
            className="inline-flex items-center gap-2 mt-6 px-8 py-3.5 rounded-full text-sm transition-opacity hover:opacity-85"
            style={{ backgroundColor: C.accent, color: "#F0EDE8", ...nav }}>

            Позвонить: +373 600 45 800
          </a>
        </div>
      </section>
    </main>);

}
