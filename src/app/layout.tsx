import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import Navbar from "@/components/Navbar";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const playfairDisplay = Playfair_Display({
  variable: "--font-playfair-display",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Inteliqo | Interiors & Turnkey Solutions - Bangalore & Mysore",
  description:
    "Inteliqo is a warm, inviting interior design and architecture studio in Bangalore and Mysore. We craft thoughtful residential interiors, welcoming office spaces, bespoke modular kitchens, and turnkey solutions that feel like home. Let us bring warmth and character to your space.",
  keywords: [
    "interior design bangalore",
    "interior designers mysore",
    "office interiors bangalore",
    "home interiors bangalore",
    "residential interior design",
    "commercial interior design",
    "modular kitchen bangalore",
    "architecture firm bangalore",
    "turnkey interior solutions",
    "luxury interiors karnataka",
    "interior decoration mysore",
    "space planning bangalore",
    "interior fit-out",
    "Inteliqo interiors",
  ],
  authors: [{ name: "Inteliqo Interiors & Turnkey Solutions" }],
  creator: "Inteliqo Interiors & Turnkey Solutions",
  publisher: "Inteliqo Interiors & Turnkey Solutions",
  openGraph: {
    title: "Inteliqo | Interiors & Turnkey Solutions - Bangalore & Mysore",
    description:
      "Warm, thoughtful interior design and architecture services in Bangalore and Mysore. Residential, commercial, and office interiors crafted with care and timeless elegance.",
    url: "https://inteliqo.com",
    siteName: "Inteliqo Interiors & Turnkey Solutions",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Inteliqo | Interiors & Turnkey Solutions - Bangalore & Mysore",
    description:
      "Warm, inviting interior design and architecture services in Bangalore and Mysore.",
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
    <html
      lang="en"
      className={`${inter.variable} ${playfairDisplay.variable}`}
    >
      <body className="min-h-screen antialiased">
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}
