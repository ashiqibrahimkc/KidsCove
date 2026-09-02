export function SchoolJsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "School",
    name: "Kids covE School of Excellence",
    alternateName: ["Kids covE", "Kids covE Ozhukur", "Kids covE School"],
    url: "https://kidscoveschool.com",
    logo: "https://kidscoveschool.com/images/school.jpeg",
    image: "https://kidscoveschool.com/images/school.jpeg",
    description:
      "Kids covE School of Excellence is a premier Montessori and Primary school in Ozhukur, Malappuram, Kerala, offering holistic early education, Montessori lab, swimming, karate, roller skating, yoga, and interactive smart classrooms at affordable fees.",
    foundingDate: "2022",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Ozhukur Palathinghal, Ozhukur Post, Mongam Via",
      addressLocality: "Ozhukur",
      addressRegion: "Kerala",
      postalCode: "673642",
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "11.1687",
      longitude: "75.9862",
    },
    telephone: "+918113000247",
    email: "ozhukurkids@gmail.com",
    priceRange: "₹₹",
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
        ],
        opens: "09:20",
        closes: "15:30",
      },
    ],
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: "+91-8113000247",
        contactType: "Admissions Desk",
        areaServed: "IN",
        availableLanguage: ["English", "Malayalam"],
      },
      {
        "@type": "ContactPoint",
        telephone: "+91-8330800247",
        contactType: "Chairman Desk",
        areaServed: "IN",
        availableLanguage: ["English", "Malayalam"],
      },
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Academic Programs & Extracurriculars",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Course",
            name: "Montessori Education (Montessori 1 to Montessori 3)",
            description: "Sensory, linguistic, and foundational early development.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Course",
            name: "Primary Schooling (Grade 1 to Grade 4)",
            description: "Foundational literacy, numeracy, science curiosity, and character building.",
          },
        },
      ],
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function BreadcrumbJsonLd({
  items,
}: {
  items: { name: string; url: string }[];
}) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function FaqJsonLd({
  faqs,
}: {
  faqs: { question: string; answer: string }[];
}) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
