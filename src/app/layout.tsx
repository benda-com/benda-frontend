import { Montserrat } from "next/font/google";
import "./globals.css";
const inter = Montserrat({ weight: ["400"], subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
