// Sitedeki tum sayfalarda paylasilan temel Organization schema.org verisi
export const SITE_URL = "https://dijitaldesin.com";

export const ORGANIZATION_SCHEMA = {
  "@type": "Organization",
  "@id": `${SITE_URL}/#organization`,
  name: "Dijitaldesin",
  url: `${SITE_URL}/`,
  logo: `${SITE_URL}/og-image.png`,
  image: `${SITE_URL}/og-image.png`,
  description:
    "Google, Meta ve TikTok reklam yönetimi, SEO ve e-ticaret entegrasyonları sunan dijital pazarlama ajansı.",
  address: {
    "@type": "PostalAddress",
    streetAddress: "One Tower Business Club, Oran, Kudüs Cd. 6/1",
    addressLocality: "Çankaya",
    addressRegion: "Ankara",
    postalCode: "06550",
    addressCountry: "TR",
  },
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+908503090374",
    email: "info@dijitaldesin.com",
    contactType: "customer service",
    areaServed: "TR",
    availableLanguage: ["Turkish"],
  },
  sameAs: [
    "https://www.facebook.com/dijitaldesin",
    "https://www.instagram.com/dijitaldesin.co/",
    "https://www.linkedin.com/company/dijitaldesin-reklam-ajansı/",
  ],
};
