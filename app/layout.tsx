import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { PERSON_JSON_LD, PROFILE_URL, SITE } from "@/lib/cv";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: SITE.title,
  description: SITE.description,
  metadataBase: new URL(PROFILE_URL),
  authors: [{ name: SITE.name, url: PROFILE_URL }],
  keywords: [
    "Senior UX Manager",
    "Head of Design",
    "Product Designer",
    "UX Leader",
    "Design Ops",
    "Design Systems",
    "AI UX",
    "Enterprise SaaS",
    "BigPicture",
    "Appfire",
  ],
  openGraph: {
    title: SITE.title,
    description: SITE.description,
    type: "profile",
    firstName: "Marcin",
    lastName: "Nowak",
    username: "therealnowaczek",
    url: PROFILE_URL,
    locale: "en_US",
  },
  alternates: {
    canonical: PROFILE_URL,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans antialiased`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(PERSON_JSON_LD) }}
        />
        {children}
      </body>
    </html>
  );
}
