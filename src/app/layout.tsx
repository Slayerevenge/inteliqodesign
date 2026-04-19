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
  metadataBase: new URL("https://inteliqodesign.com"),
  title: {
    default: "Inteliqo | Interior Design & Turnkey Solutions in Bangalore & Mysore",
    template: "%s | Inteliqo Interiors",
  },
  description:
    "Inteliqo is a trusted interior design firm in Bangalore and Mysore specializing in home interiors, corporate office design, modular kitchens, renovations, and turnkey solutions. Transform your space with thoughtful, functional design.",
  keywords: [
    "interior designers in bangalore",
    "interior designers in mysore",
    "office interior design bangalore",
    "home interiors bangalore",
    "residential interior design bangalore",
    "corporate interior design",
    "modular kitchen bangalore",
    "turnkey interior solutions bangalore",
    "luxury interiors karnataka",
    "interior decoration mysore",
    "space planning bangalore",
    "interior fit-out bangalore",
    "renovation contractors bangalore",
    "best interior designers bangalore",
    "affordable interior design bangalore",
    "commercial office interiors",
    "Inteliqo interiors",
    "Inteliqo design",
  ],
  authors: [{ name: "Inteliqo Interiors & Turnkey Solutions" }],
  creator: "Inteliqo Interiors & Turnkey Solutions",
  publisher: "Inteliqo Interiors & Turnkey Solutions",
  alternates: {
    canonical: "https://inteliqodesign.com",
  },
  openGraph: {
    title: "Inteliqo | Interior Design & Turnkey Solutions in Bangalore & Mysore",
    description:
      "Trusted interior design firm in Bangalore & Mysore. Home interiors, corporate offices, renovations, and turnkey solutions crafted with care.",
    url: "https://inteliqodesign.com",
    siteName: "Inteliqo Interiors & Turnkey Solutions",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/projects/e-city-tower-1/3.jpg",
        width: 1200,
        height: 630,
        alt: "Inteliqo Interior Design - Corporate Office Project",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Inteliqo | Interior Design & Turnkey Solutions in Bangalore & Mysore",
    description:
      "Trusted interior design firm in Bangalore & Mysore. Home interiors, corporate offices, renovations & turnkey solutions.",
    images: ["/projects/e-city-tower-1/3.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "InteriorDesigner",
              name: "Inteliqo Interiors & Turnkey Solutions",
              url: "https://inteliqodesign.com",
              telephone: "+919945688225",
              email: "agk6464@yahoo.com",
              description:
                "Trusted interior design firm in Bangalore and Mysore specializing in home interiors, corporate office design, modular kitchens, renovations, and turnkey solutions.",
              areaServed: [
                { "@type": "City", name: "Bangalore", "@id": "https://www.wikidata.org/wiki/Q1355" },
                { "@type": "City", name: "Mysore", "@id": "https://www.wikidata.org/wiki/Q228405" },
              ],
              address: {
                "@type": "PostalAddress",
                addressLocality: "Bangalore",
                addressRegion: "Karnataka",
                addressCountry: "IN",
              },
              priceRange: "$$",
              serviceType: [
                "Home Interior Design",
                "Corporate Office Interiors",
                "Turnkey Interior Solutions",
                "Modular Kitchen Design",
                "Renovation",
                "Civil Construction",
              ],
              sameAs: [],
            }),
          }}
        />
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}
