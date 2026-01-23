import type { Metadata } from "next";
import { Playfair_Display, Sora } from "next/font/google";
import { LanguageProvider } from "@/components/language-provider";
import SiteFooter from "@/components/site-footer";
import SiteHeader from "@/components/site-header";
import "./globals.css";

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "হাবিবা ইন্টারন্যাশনাল স্কুল",
  description:
    "হাবিবা ইন্টারন্যাশনাল স্কুলের শিক্ষার্থী, শিক্ষক ও প্রশাসনিক পোর্টাল।",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="bn">
      <body className={`${sora.variable} ${playfair.variable} antialiased`}>
        <LanguageProvider>
          <div className="relative min-h-screen overflow-hidden bg-[var(--color-surface)]">
            <div className="pointer-events-none absolute -top-40 right-[-5%] h-[420px] w-[420px] rounded-full bg-[radial-gradient(circle,var(--color-blue-100),transparent_65%)] opacity-80 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-48 left-[-10%] h-[460px] w-[460px] rounded-full bg-[radial-gradient(circle,var(--color-gold-100),transparent_70%)] opacity-70 blur-3xl" />
            <SiteHeader />
            <main className="relative z-10">{children}</main>
            <SiteFooter />
          </div>
        </LanguageProvider>
      </body>
    </html>
  );
}
