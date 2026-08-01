import type { Metadata } from "next";
import { Inter_Tight, Manrope } from "next/font/google";
import "./globals.css";
import { VisualEditsMessenger } from "orchids-visual-edits";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Script from "next/script";

const interTight = Inter_Tight({
  variable: "--font-inter-tight",
  subsets: ["latin", "cyrillic"],
  weight: ["400", "500", "600", "700"],
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin", "cyrillic"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: "HoReCa demo — Кофейня и пекарня в Светлом, Молдова",
  description:
    "Уютная кофейня и пекарня в Светлом. Хороший кофе, свежая выпечка, обеды и ужины. Терраса, бесплатная парковка, Wi-Fi. Пн–Пт 09:00–22:00.",
  keywords:
    "кофейня Светлый Молдова, кафе Светлый, пекарня HoReCa demo, HoReCa demo, кофе Молдова, кафе в Светлом",
  openGraph: {
    title: "HoReCa demo",
    description: "Уютная кофейня и пекарня в Светлом, Молдова",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body
        className={`${interTight.variable} ${manrope.variable} antialiased`}
      >
        <Script
          id="orchids-browser-logs"
          src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/scripts/orchids-browser-logs.js"
          strategy="afterInteractive"
          data-orchids-project-id="c56525bc-f9da-456d-9e91-28b48ed3a8f7"
        />
        <Navbar />
        {children}
        <Footer />
        <VisualEditsMessenger />
      </body>
    </html>
  );
}
