import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Progen5 | Turn your Vision into Reality",
  description:
    "Progen5 is a startup execution agency that helps non-technical founders go from idea to launch.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.className}>
      <body className="bg-black text-white antialiased">{children}</body>
    </html>
  );
}
