import type { Metadata } from "next";
import { AppProvider } from "./_contexts/AppContext";
import BackgroundGrid from "./_components/BackgroundGrid/BackgroundGrid";

import "./globals.css";
import Header from "./_components/Header/Header";
import EventsPanel from "./_components/EventsPanel/EventsPanel";

export const metadata: Metadata = {
  title: "Imarat Architects",
  description: "Imarat Architects",
  keywords: `architecture, building design, sustainable architecture, homes, construction, residence, design, interior design, exterior design`,
  icons: {
    icon: "/favicon.png",
  },
};

export default function RootLayout(
  props: Readonly<{ children: React.ReactNode }>
) {
  return (
    <AppProvider>
      <html lang="en">
        <body>
          <BackgroundGrid />
          <Header />
          <div className="max-content-width">{props.children}</div>
          <EventsPanel />
        </body>
      </html>
    </AppProvider>
  );
}
