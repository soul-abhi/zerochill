import type { MetadataRoute } from "next";

const SITE_URL = "https://ctf.void-society.in";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: `${SITE_URL}/`, changeFrequency: "weekly", priority: 1 },
    { url: `${SITE_URL}/sponsor`, changeFrequency: "monthly", priority: 0.5 },
  ];
}
