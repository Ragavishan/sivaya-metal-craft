
import type { Metadata } from "next";
import {
  Manrope,
  Playfair_Display,
  Pinyon_Script,
} from "next/font/google";

import "./globals.css";
import IntroScreen from "../src/components/IntroScreen";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

const pinyon = Pinyon_Script({
  variable: "--font-pinyon",
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.yourdomain.com"),

  title: {
    default: "Sivaya Metal Craft | Stainless Steel Fabrication",
    template: "%s | Sivaya Metal Craft",
  },

  description:
    "Sivaya Metal Craft specialises in custom stainless steel fabrication, architectural staircases, handrails, balconies, gates and commercial metalwork.",

  applicationName: "Sivaya Metal Craft",

  keywords: [
    "Sivaya Metal Craft",
    "stainless steel fabrication",
    "custom metal fabrication",
    "stainless steel staircases",
    "stainless steel handrails",
    "balcony railings",
    "custom gates",
    "commercial stainless steel products",
  ],

  openGraph: {
    type: "website",
    locale: "en_IN",
    siteName: "Sivaya Metal Craft",
    title: "Sivaya Metal Craft | Stainless Steel Fabrication",
    description:
      "Precision-crafted stainless steel fabrication and custom architectural metalwork.",
    url: "/",
  },

  twitter: {
    card: "summary_large_image",
    title: "Sivaya Metal Craft | Stainless Steel Fabrication",
    description:
      "Precision-crafted stainless steel fabrication and custom architectural metalwork.",
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${manrope.variable} ${playfair.variable} ${pinyon.variable}`}
      >
        <IntroScreen />
        {children}
      </body>
    </html>
  );
}
