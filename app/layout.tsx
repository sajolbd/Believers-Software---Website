// app/layout.tsx

import type { Metadata } from "next";
import "./globals.css";

import { Josefin_Sans } from "next/font/google";
import ClientLayout from "./client-layout";
import RootLayoutComponent from "components/layout/RootLayout";


const josefinSans = Josefin_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-josefin-sans",
});

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ||
  (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : "https://believerssoftware.vercel.app");

/* ---------------- METADATA ---------------- */

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Believers Software — Custom Web Apps, WordPress, SEO & Security",
  description:
    "Believers Software is a full-service web & digital growth agency offering custom JavaScript & WordPress development, SEO, digital marketing, and security under one roof.",
  keywords: [
    "JavaScript Development",
    "WordPress Development",
    "WooCommerce",
    "React",
    "Next.js",
    "SEO Services",
    "WordPress Security",
    "Website Maintenance",
  ],
  icons: {
    icon: [
      { url: "/favicon-transparent.png", type: "image/png" },
      { url: "/favicon.png", type: "image/png" },
      { url: "/favicon.ico", sizes: "any" },
    ],
    shortcut: "/favicon-transparent.png",
    apple: [
      { url: "/apple-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  openGraph: {
    title: "Believers Software — Full-Service Web & Digital Growth Agency",
    description:
      "A website that actually earns its keep — custom JavaScript apps, WordPress development, SEO, marketing, and security handled by one accountable team.",
    url: siteUrl,
    siteName: "Believers Software",
    images: [
      {
        url: "/og-image-1200x630.png",
        width: 1200,
        height: 630,
        alt: "Believers Software — Full-Service Web & Digital Growth Agency",
      },
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Believers Software — Web Development, SEO & Security",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Believers Software — Full-Service Web & Digital Growth Agency",
    description:
      "A website that actually earns its keep — custom JavaScript apps, WordPress development, SEO, marketing, and security.",
    images: ["/og-image-1200x630.png", "/og-image.png"],
  },
};

/* ---------------- ROOT LAYOUT ---------------- */

import Header from "components/layout/Header";
import Footer from "components/layout/Footer";
import FloatingCTA from "components/layout/FloatingCTA";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={josefinSans.variable}>
      <body>
        {/* NoScript Fallback */}
        <noscript>
          <style>
            {`
              * {
                opacity: 1 !important;
                transform: none !important;
              }
            `}
          </style>
        </noscript>

        <RootLayoutComponent>
          <ClientLayout>
            <div className="flex flex-col min-h-screen">
              <Header />
              <main className="flex-grow">{children}</main>
              <Footer />
              <FloatingCTA />
            </div>
          </ClientLayout>
        </RootLayoutComponent>
      </body>
    </html>
  );
}
