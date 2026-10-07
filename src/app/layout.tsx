import type { Metadata, Viewport } from "next";
import { Archivo_Black, JetBrains_Mono, Lora } from "next/font/google";
import "./globals.css";

import { VisitBeacon } from "@/components/visit-beacon";

// wordmark face used only for the mark
const archivoBlack = Archivo_Black({
  variable: "--font-archivo-black",
  weight: "400",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

// nav brand only — a plain classical serif, variable across the weights the
// wordmark and its 700 mark need
const lora = Lora({
  variable: "--font-lora",
  subsets: ["latin"],
});

const SITE_URL = "https://ctf.void-society.in";
const TITLE = "VOID CTF 2026 | AD/ICS/SCADA Attack-Defense CTF by KIET";
const DESCRIPTION =
  "VOID CTF, 2026 by KIET, Void Society: A 24-hour online qualifier (24-25 Oct) and an offline Attack-Defense final (29-30 Nov). Register your team now.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: TITLE,
    template: "%s | VOID CTF",
  },
  description: DESCRIPTION,
  applicationName: "VOID CTF",
  keywords: [
    "VOID CTF",
    "CTF 2026",
    "Capture The Flag, India",
    "Attack-Defense CTF",
    "AD, ICS & SCADA CTF",
    "KIET, CTF",
    "Void Society",
  ],
  authors: [{ name: "Void Society, KIET" }],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  alternates: {
    // "./" resolves per page, so / and /sponsor each get their own canonical
    canonical: "./",
  },
  openGraph: {
    type: "website",
    siteName: "VOID CTF",
    title: TITLE,
    description: DESCRIPTION,
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
  },
};

export const viewport: Viewport = {
  themeColor: "#0b0604",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en-IN"
      // data-theme / data-intro are set pre-paint by the inline script below
      suppressHydrationWarning
      className={`${archivoBlack.variable} ${jetbrainsMono.variable} ${lora.variable} h-full antialiased`}
    >
      <head>
        {/* the preloader clip is the first thing on screen and the largest
            asset on the page; without this the browser only discovers it when
            the video element mounts, which delays the whole intro */}
        <link
          rel="preload"
          as="video"
          href="/media/preloader-facility.mp4"
          type="video/mp4"
          media="(prefers-reduced-motion: no-preference)"
        />
      </head>
      <body className="flex min-h-full flex-col bg-iron-950">
        <script
          dangerouslySetInnerHTML={{
            __html: `try{if(localStorage.getItem('void-theme')==='deep')document.documentElement.setAttribute('data-theme','deep')}catch(e){}try{if(/(?:^|; )void-intro=1/.test(document.cookie))document.documentElement.setAttribute('data-intro','seen')}catch(e){}`,
          }}
        />
        {children}
        <VisitBeacon />
      </body>
    </html>
  );
}
