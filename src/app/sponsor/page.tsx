import type { Metadata } from "next";

import { SiteNav } from "@/components/hero/site-nav";
import { SponsorPage } from "@/components/sponsor/sponsor-page";
import { SiteFooter } from "@/components/site-footer";

export const metadata: Metadata = {
  title: { absolute: "Sponsors | VOID CTF" },
  description:
    "The sponsors behind VOID CTF, and how to put your name on the range.",
};

export default function Sponsor() {
  return (
    <main className="relative">
      <SiteNav />
      <SponsorPage />
      <SiteFooter />
    </main>
  );
}
