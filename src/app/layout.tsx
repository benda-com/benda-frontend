import { Arimo } from "next/font/google";
import "./globals.css";
const arimo = Arimo({ weight: ["400"], subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={arimo.className}>{children}</body>
    </html>
  );
}
