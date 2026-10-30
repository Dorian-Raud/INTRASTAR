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
  applicationName: site.name,
  authors: [{ name: site.name, url: site.url }],
  creator: site.name,
  publisher: site.name,
  // Pas de canonique ni d'og:url ici : ils seraient hérités par toutes les
  // pages qui n'en déclarent pas, et les feraient pointer vers l'accueil.
  // Chaque page les définit via pageMetadata() (src/lib/seo.ts).
  openGraph: {
    type: "website",
    locale: site.locale,
    siteName: site.name,
  },
  twitter: {
    card: "summary_large_image",
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
  formatDetection: { telephone: false, email: false, address: false },
  // Propriété Search Console vérifiée par fichier HTML (public/google…html).
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "ProfessionalService",
      "@id": `${site.url}/#organization`,
      name: site.name,
      legalName: site.legalName,
      description: site.description,
      url: site.url,
      logo: `${site.url}/logo_long_intrastar.png`,
      image: `${site.url}/opengraph-image`,
      email: site.email,
      telephone: site.phone,
      priceRange: "€€",
      address: {
        "@type": "PostalAddress",
        streetAddress: site.address.street,
        postalCode: site.address.postalCode,
        addressLocality: site.address.locality,
        addressCountry: site.address.country,
      },
      areaServed: { "@type": "Country", name: "France" },
      contactPoint: {
        "@type": "ContactPoint",
        contactType: "customer service",
        email: site.email,
        telephone: site.phone,
        areaServed: "FR",
        availableLanguage: "French",
      },
      knowsAbout: [
        "Déclaration EMEBI",
        "Déclaration d'échanges de biens (DEB)",
        "État récapitulatif TVA",
        "Échanges de biens intra-UE",
        "Intrastat",
        "Douanes",
      ],
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Services Intrastar",
        itemListElement: [
          "Déclaration EMEBI à l'Introduction",
          "Déclaration EMEBI à l'Expédition",
          "État récapitulatif TVA",
          "Conseil en échanges de biens intra-UE",
        ].map((name) => ({
          "@type": "Offer",
          itemOffered: { "@type": "Service", name, areaServed: "FR" },
        })),
      },
    },
    {
      "@type": "WebSite",
      "@id": `${site.url}/#website`,
      url: site.url,
      name: site.name,
      description: site.description,
      inLanguage: "fr-FR",
      publisher: { "@id": `${site.url}/#organization` },
    },
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
