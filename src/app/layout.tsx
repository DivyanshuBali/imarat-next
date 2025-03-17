import type { Metadata } from "next";
import { AppProvider } from "./_contexts/AppContext";
import ClientRootLayout from "./ClientRootLayout";

import "./globals.css";

export const metadata: Metadata = {
  title: "Imarat Architects",
  description: "Imarat Architects",
  keywords: `architecture, building design, sustainable architecture, homes, construction, residence, design, interior design, exterior design`,
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout(
  props: Readonly<{ children: React.ReactNode }>
) {
  return (
    <AppProvider>
      <ClientRootLayout {...props} />
    </AppProvider>
  );
}
