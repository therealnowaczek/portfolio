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
    "Head of Design",
    "Senior UX Manager",
    "Lead Product Designer",
    "UX Leader",
    "AI UX",
    "Design Engineering",
    "Design Ops",
    "Design Systems",
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
    images: [
      {
        url: `${PROFILE_URL}og.jpg`,
        width: 1200,
        height: 630,
        alt: "Marcin Nowak · Head of Design · Senior UX Manager · Lead Product Designer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: SITE.title,
    description: SITE.description,
    images: [`${PROFILE_URL}og.jpg`],
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
