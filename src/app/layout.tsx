import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const outfit = Outfit({ subsets: ["latin"], variable: "--font-outfit" });

export const metadata: Metadata = {
  title: "Depot Air Tirta Segar | Sumber Air Minum Terbaik Karawang",
  description: "Layanan isi ulang air minum higienis dan menyegarkan di Karawang. Hubungi kami untuk pemesanan cepat.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className="scroll-smooth">
      <body className={`${inter.variable} ${outfit.variable} font-sans bg-slate-950 text-slate-50 antialiased relative overflow-x-hidden min-h-screen flex flex-col`}>
        {children}
      </body>
    </html>
  );
}
