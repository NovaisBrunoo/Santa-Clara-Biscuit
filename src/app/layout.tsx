import { Analytics } from "@vercel/analytics/react";
import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});
const epilogue = localFont({
  src: "./fonts/Epilogue-VariableFont_wght.ttf",
  variable: "--font-epilogue",
  weight: "400 600",
});

export const metadata: Metadata = {
  title: "Santa Clara Biscuit",
  description: "Nova marca de biscoitos artesanais ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${epilogue.variable} antialiased`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
