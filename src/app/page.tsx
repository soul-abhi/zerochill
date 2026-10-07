import { VoidLanding } from "@/components/void-landing";
import { Operation } from "@/components/sections/operation";
import { Protocol } from "@/components/sections/protocol";
import { Timeline } from "@/components/sections/timeline";
import { SiteFooter } from "@/components/site-footer";
import { StructuredData } from "@/components/structured-data";

export default function Home() {
  return (
    <main className="relative">
      <StructuredData />
      <h1 className="sr-only">
        VOID CTF, a 24-hour offensive security competition on industrial
        control systems
      </h1>

      <VoidLanding />

      <Operation />
      <Protocol />
      <Timeline />

      <SiteFooter />
    </main>
  );
}
