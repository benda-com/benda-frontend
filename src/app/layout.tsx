import { Arimo } from "next/font/google";
import Script from "next/script";

import "./globals.css";

const arimo = Arimo({ weight: ["400"], subsets: ["latin"] });
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <Script
          src="https://kit.fontawesome.com/dd8b004c53.js"
          crossOrigin="anonymous"
        ></Script>
      </head>
      <body className={arimo.className}>{children}</body>
    </html>
  );
}
