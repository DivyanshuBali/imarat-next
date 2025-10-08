import type { Metadata } from "next";
import BackgroundGrid from "./_components/BackgroundGrid/BackgroundGrid";

import "./globals.css";
import Header from "./_components/Header/Header";
import EventsPanel from "./_components/EventsPanel/EventsPanel";
import { getCldOgImageUrl } from "next-cloudinary";

const ogImage = getCldOgImageUrl({
  src: "BTM_SKETCH01_yrzjqc",
  width: 1200,
  height: 627,
  format: "jpg",
});

const twitterImage = getCldOgImageUrl({
  src: "BTM_SKETCH01_yrzjqc",
  format: "webp",
});

export const metadata: Metadata = {
  title: {
    default: "Imarat Architects",
    template: "%s | Imarat Architects",
  },
  description:
    "Imarat Architects is an architecture studio based in Chandigarh, India",
  keywords: [
    "architecture",
    "design",
    "construction",
    "sustainable design",
    "building",
  ],
  authors: [{ name: "Imarat Architects" }],
  creator: "Imarat Architects",
  publisher: "Imarat Architects",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://imaratarchitects.com"), // Replace with your actual domain
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://imaratarchitects.com",
    title: "Imarat Architects",
    description:
      "Imarat Architects is an architecture studio based in Chandigarh, India",
    siteName: "Imarat Architects",
    images: [
      {
        url: ogImage,
        width: 1200,
        height: 627,
        alt: "Imarat Architects OG Image",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Imarat Architects",
    description:
      "Imarat Architects is an architecture studio based in Chandigarh, India",
    images: [twitterImage],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout(
  props: Readonly<{ children: React.ReactNode }>
) {
  return (
    <html lang="en">
      <body>
        <BackgroundGrid />
        <Header />
        <div className="max-content-width">{props.children}</div>
        <EventsPanel />
      </body>
    </html>
  );
}
