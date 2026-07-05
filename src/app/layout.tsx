import type { Metadata } from "next";
import { Hanken_Grotesk } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { site } from "@/lib/site";

const hankenGrotesk = Hanken_Grotesk({
  variable: "--font-hanken-grotesk",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Intrastar — Déclaration EMEBI (ex-DEB) & état récapitulatif TVA",
    template: "%s | Intrastar",
  },
  description: site.description,
  keywords: [
    "EMEBI",
    "DEB",
    "déclaration EMEBI",
    "état récapitulatif TVA",
    "échanges de biens intra-UE",
    "Intrastat",
    "douanes",
    "déclaration d'échanges de biens",
    "TVA intracommunautaire",
    "externalisation déclaration douanière",
  ],
  applicationName: site.name,
  authors: [{ name: site.name }],
  creator: site.name,
  publisher: site.name,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: site.locale,
    url: site.url,
    siteName: site.name,
    title: "Intrastar — Déclaration EMEBI (ex-DEB) & état récapitulatif TVA",
    description: site.description,
    images: [
      {
        url: "/logo_long_intrastar.png",
        alt: "Intrastar — déclaration EMEBI et état récapitulatif TVA",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Intrastar — Déclaration EMEBI (ex-DEB) & état récapitulatif TVA",
    description: site.description,
    images: ["/logo_long_intrastar.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  // Après création de la propriété dans Google Search Console (méthode
  // "balise HTML"), colle ici le code de vérification :
  // verification: { google: "xxxxxxxxxxxxxxxxxxxxxxxxxxxx" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: site.name,
  description: site.description,
  url: site.url,
  email: site.email,
  telephone: site.phone,
  image: `${site.url}/logo_long_intrastar.png`,
  areaServed: { "@type": "Country", name: "France" },
  address: { "@type": "PostalAddress", addressCountry: "FR" },
  priceRange: "€€",
  knowsAbout: [
    "Déclaration EMEBI",
    "Déclaration d'échanges de biens (DEB)",
    "État récapitulatif TVA",
    "Échanges de biens intra-UE",
    "Intrastat",
    "Douanes",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={hankenGrotesk.variable}>
      <body className="a-root" style={{ fontFamily: "var(--font-hanken-grotesk), sans-serif" }}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
