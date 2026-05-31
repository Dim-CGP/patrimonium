import './globals.css';

export const metadata = {
  title: 'Patrimonium — Cabinet de conseil en gestion de patrimoine',
  description: 'Cabinet de conseil en gestion de patrimoine indépendant. Spécialiste SCPI à crédit, optimisation fiscale, préparation retraite, transmission. Analyse patrimoniale gratuite. Réponse sous 24h. France entière.',
  keywords: 'gestion de patrimoine, SCPI à crédit, conseiller patrimonial, optimisation fiscale, préparation retraite, transmission succession, CGP indépendant',
  openGraph: {
    title: 'Patrimonium — Conseil en gestion de patrimoine',
    description: 'Spécialiste SCPI à crédit, optimisation fiscale, retraite et transmission. Analyse gratuite. Réponse sous 24h.',
    url: 'https://cabinet-patrimonium.fr',
    siteName: 'Patrimonium',
    locale: 'fr_FR',
    type: 'website',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous"/>
        <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;1,300;1,400;1,500&family=DM+Sans:wght@300;400;500&display=swap" rel="stylesheet"/>
        <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FinancialService",
          "name": "Patrimonium — Gerber Dimitri",
          "legalName": "Gerber Dimitri",
          "taxID": "84189615200011",
          "description": "Cabinet de conseil en gestion de patrimoine indépendant. Spécialiste SCPI à crédit, optimisation fiscale, préparation retraite et transmission patrimoniale.",
          "url": "https://cabinet-patrimonium.fr",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "7 rue de la Forêt",
            "postalCode": "67190",
            "addressLocality": "Mutzig",
            "addressCountry": "FR"
          },
          "areaServed": {"@type": "Country", "name": "France"},
          "hasCredential": {"@type": "EducationalOccupationalCredential", "name": "ORIAS N° 23001099 — Agréé AMF"}
        })}}/>
      </head>
      <body>{children}</body>
    </html>
  );
}
