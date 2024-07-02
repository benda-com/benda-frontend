import { Montserrat } from "next/font/google";

import { Sidebar } from "../components/dashboard/sidebar";
const montserrat = Montserrat({ weight: ["400"], subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        {children}
        <Sidebar />
      </body>
    </html>
  );
}
