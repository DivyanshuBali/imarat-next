"use client";

import Sidebar from "./_components/Sidebar/Sidebar";

export default function ClientRootLayout(
  props: Readonly<{ children: React.ReactNode }>,
) {

  return (
    <html lang="en">
      <body>
        <div className="max-content-width">
          {props.children}
          <Sidebar />
        </div>
      </body>
    </html>
  );
}
