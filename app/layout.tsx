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
  metadataBase: new URL("https://latrattoria.ba"),
  alternates: {
    canonical: "/",
  },
  verification: {
    google: "YCDtsAEywr9lpZ4To_kueB0KZfFciTUbBhp-u1KF3CI",
  },
  openGraph: {
    title: "La Trattoria | Sarajevo",
    description:
      "La Trattoria - restoran i pizzeria u srcu Sarajeva. Svježa tjestenina, pizze i pinse pripremljene s ljubavlju.",
    url: "https://latrattoria.ba",
    siteName: "La Trattoria",
    locale: "bs_BA",
    type: "website",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Restaurant",
  name: "La Trattoria",
  description:
    "La Trattoria - restoran i pizzeria u srcu Sarajeva. Svježa tjestenina, pizze i pinse pripremljene s ljubavlju.",
  url: "https://latrattoria.ba",
  telephone: "+38733864470",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Radićeva 4a",
    addressLocality: "Sarajevo",
    addressCountry: "BA",
  },
  openingHours: "Mo-Su 09:00-23:30",
  servesCuisine: ["Italian", "Pizza"],
  sameAs: [
    "https://www.facebook.com/people/La-Trattoria/61591024044855/",
    "https://www.instagram.com/latrattoria.sarajevo/",
  ],
  image: "https://latrattoria.ba/images/restoran.jpg",
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
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col font-sans">{children}</body>
    </html>
  );
}
