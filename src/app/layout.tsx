import type { Metadata } from "next";
import "./globals.css";
import Sidebar from "./_components/Sidebar/Sidebar";

export const metadata: Metadata = {
  title: "Imarat Architects",
  description: "Imarat Architects",
  keywords: `architecture, building design, sustainable architecture, homes, construction, residence, design, interior design, exterior design`,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className="bg-grid">
        <div className="max-content-width">
          {children}
          <Sidebar />
        </div>
      </body>
    </html>
  );
}
