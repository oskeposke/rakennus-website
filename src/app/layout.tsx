import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ny-Bygg — Professionella byggtjänster i Raseborg",
  description:
    "Professionella byggtjänster för takbyte, nybyggnation och renovering med kvalitet i fokus.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="sv">
      <body className={`${geistSans.variable} antialiased`}>{children}</body>
    </html>
  );
}
