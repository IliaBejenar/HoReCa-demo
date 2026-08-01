import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Контакты — HoReCa demo | Светлый, Молдова",
  description:
    "Адрес, часы работы и контакты HoReCa demo. Светлый, Молдова. +373 600 45 800.",
};

export default function ContactsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
