"use client";

import Script from "next/script";
import CountryPage from "@/components/pages/CountryPage";
import { useParams } from "next/navigation";

// Country data for SEO
const countryMeta: Record<
  string,
  { name: string; fullName: string; tagline: string }
> = {
  usa: {
    name: "USA",
    fullName: "United States of America",
    tagline: "World-Class Education & Unlimited Opportunities",
  },
  uk: {
    name: "UK",
    fullName: "United Kingdom",
    tagline: "Centuries of Academic Excellence",
  },
  australia: {
    name: "Australia",
    fullName: "Australia",
    tagline: "World-Class Education with Exceptional Lifestyle",
  },
  canada: {
    name: "Canada",
    fullName: "Canada",
    tagline: "Quality Education with Clear Immigration Pathways",
  },
  "new-zealand": {
    name: "New Zealand",
    fullName: "New Zealand",
    tagline: "Quality Education in Paradise",
  },
};

export default function Country() {
  const params = useParams<{ country: string }>();
  const country = params?.country || "";
  const data = countryMeta[country];

  const countrySchema = data
    ? {
        "@context": "https://schema.org",
        "@type": "WebPage",
        name: `Study in ${data.name} — Brainstorm Global Education`,
        description: `${data.tagline}. Complete guide to studying in ${data.fullName} for Nepali students.`,
        url: `https://brainstorm-global-education.vercel.app/countries/${country}`,
        mainEntity: {
          "@type": "Country",
          name: data.fullName,
        },
        provider: {
          "@type": "EducationalOrganization",
          name: "Brainstorm Global Education",
        },
      }
    : null;

  return (
    <>
      {countrySchema && (
        <Script
          id={`schema-country-${country}`}
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(countrySchema) }}
        />
      )}
      <CountryPage />
    </>
  );
}