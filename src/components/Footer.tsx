import Link from "next/link";
import { MapPin, Phone, Clock } from "lucide-react";

export default function Footer() {
  return (
    <footer
      style={{
        backgroundColor: "#2F2A27",
        color: "#F0EDE8",
      }}
    >
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand */}
          <div>
            <div
              className="text-2xl mb-4 tracking-tight"
              style={{
                fontFamily: "var(--font-inter-tight)",
                fontWeight: 600,
              }}
            >
              <span style={{ color: "#D7A37B" }}>HoReCa</span>{" "}
              <span style={{ color: "#F0EDE8" }}>demo</span>
            </div>
            <p
              className="text-sm leading-relaxed"
              style={{
                fontFamily: "var(--font-manrope)",
                fontWeight: 400,
                color: "#A09890",
              }}
            >
              Уютное место в Светлом, где хороший кофе встречается
              с домашней выпечкой. Для тех, кто ценит спокойствие
              и качество.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4
              className="text-sm uppercase tracking-wider mb-4"
              style={{
                fontFamily: "var(--font-inter-tight)",
                fontWeight: 600,
                color: "#D7A37B",
              }}
            >
              Навигация
            </h4>
            <ul className="flex flex-col gap-3">
              {[
                { href: "/", label: "Главная" },
                { href: "/menu", label: "Меню" },
                { href: "/contacts", label: "Контакты" },
              ].map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-sm transition-opacity hover:opacity-70"
                    style={{
                      fontFamily: "var(--font-inter-tight)",
                      fontWeight: 500,
                      color: "#F0EDE8",
                    }}
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Info */}
          <div>
            <h4
              className="text-sm uppercase tracking-wider mb-4"
              style={{
                fontFamily: "var(--font-inter-tight)",
                fontWeight: 600,
                color: "#D7A37B",
              }}
            >
              Информация
            </h4>
            <ul className="flex flex-col gap-3">
              <li className="flex items-start gap-3">
                <MapPin size={16} className="mt-0.5 shrink-0" style={{ color: "#D7A37B" }} />
                <span
                  className="text-sm"
                  style={{
                    fontFamily: "var(--font-manrope)",
                    fontWeight: 400,
                    color: "#A09890",
                  }}
                >
                  Светлый, Молдова
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Phone size={16} className="mt-0.5 shrink-0" style={{ color: "#D7A37B" }} />
                <a
                  href="tel:+37360045800"
                  className="text-sm transition-opacity hover:opacity-70"
                  style={{
                    fontFamily: "var(--font-manrope)",
                    fontWeight: 400,
                    color: "#A09890",
                  }}
                >
                  +373 600 45 800
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Clock size={16} className="mt-0.5 shrink-0" style={{ color: "#D7A37B" }} />
                <div
                  className="text-sm"
                  style={{
                    fontFamily: "var(--font-manrope)",
                    fontWeight: 400,
                    color: "#A09890",
                    lineHeight: 1.7,
                  }}
                >
                  <span>Пн–Пт, Вс: 09:00–22:00</span>
                  <br />
                  <span>Сб: 11:00–22:00</span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div
          className="mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4"
          style={{ borderTop: "1px solid #3D3733" }}
        >
          <p
            className="text-xs"
            style={{
              fontFamily: "var(--font-manrope)",
              fontWeight: 400,
              color: "#6B6460",
            }}
          >
            © 2024 HoReCa demo. Светлый, Молдова.
          </p>
          <p
            className="text-xs"
            style={{
              fontFamily: "var(--font-manrope)",
              fontWeight: 400,
              color: "#6B6460",
            }}
          >
            Рейтинг 4.6 ★ · 94 отзыва
          </p>
        </div>
      </div>
    </footer>
  );
}
