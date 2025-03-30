"use client";

import BackgroundGrid from "./_components/BackgroundGrid/BackgroundGrid";
import RailNav from "./_components/RailNav/RailNav";
import Sidebar from "./_components/Sidebar/Sidebar";

export default function ClientRootLayout(
  props: Readonly<{ children: React.ReactNode }>
) {
  return (
    <html lang="en">
      <body>
        <BackgroundGrid />
        <div className="max-content-width">
          {props.children}
          <RailNav />
          <Sidebar />
        </div>
      </body>
    </html>
  );
}
