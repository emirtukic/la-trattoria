import type { Metadata } from "next";
import { Newsreader, Inter } from "next/font/google";
import "./globals.css";

const display = Newsreader({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
});

const sans = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "La Trattoria | Sarajevo",
  description:
    "La Trattoria - restoran i pizzeria u srcu Sarajeva. Svježa tjestenina, pizze i pinse pripremljene s ljubavlju.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="bs"
      className={`${display.variable} ${sans.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans">{children}</body>
    </html>
  );
}
