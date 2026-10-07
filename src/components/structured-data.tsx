const SITE_URL = "https://ctf.void-society.in";
const REGISTER_URL = "https://void-ctf.ctfd.io/";

// CONFIRM: where the offline finals are physically held
const FINALS_LOCATION = {
  "@type": "Place",
  name: "KIET Group of Institutions",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Ghaziabad",
    addressRegion: "Uttar Pradesh",
    addressCountry: "IN",
  },
};

const organizer = {
  "@type": "Organization",
  name: "Void Society",
  url: "https://void-society.in/",
  email: "voidsociety@kiet.edu",
  parentOrganization: {
    "@type": "University",
    name: "KIET Group of Institutions",
  },
};

const data = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: `${SITE_URL}/`,
      name: "VOID CTF",
      inLanguage: "en-IN",
      publisher: organizer,
    },
    {
      "@type": "Event",
      "@id": `${SITE_URL}/#qualifier`,
      name: "VOID CTF 2026 - Online Qualifier",
      description:
        "A 24-hour jeopardy-style online CTF across web, pwn, crypto, reversing, forensics and OSINT. The top 15 teams advance to the offline attack-defense finals.",
      startDate: "2026-10-24",
      endDate: "2026-10-25",
      eventStatus: "https://schema.org/EventScheduled",
      eventAttendanceMode: "https://schema.org/OnlineEventAttendanceMode",
      location: { "@type": "VirtualLocation", url: REGISTER_URL },
      image: [`${SITE_URL}/media/qualifier-plate-wide.webp`],
      url: `${SITE_URL}/`,
      organizer,
    },
    {
      "@type": "Event",
      "@id": `${SITE_URL}/#finals`,
      name: "VOID CTF 2026 - Attack-Defense Finals",
      description:
        "A 24-hour offline attack-defense CTF for the 15 finalist teams, played against a physical network built by the organising team.",
      startDate: "2026-11-29",
      endDate: "2026-11-30",
      eventStatus: "https://schema.org/EventScheduled",
      eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
      location: FINALS_LOCATION,
      image: [`${SITE_URL}/media/stage-card-wide.webp`],
      url: `${SITE_URL}/`,
      organizer,
    },
  ],
};

export function StructuredData() {
  return (
    <script
      type="application/ld+json"
      // "<" is escaped so no string in the data can close the script tag
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data).replace(/</g, "\\u003c"),
      }}
    />
  );
}
