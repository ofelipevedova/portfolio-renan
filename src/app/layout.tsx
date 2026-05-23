import type { Metadata } from "next";
import { Manrope, Space_Grotesk } from "next/font/google";
import "./globals.css";

import { LanguageProvider } from "@/contexts/LanguageContext";
import { site } from "@/data/site";
import { publicUrl } from "@/lib/site-path";

const display = Space_Grotesk({
  variable: "--font-heading",
  subsets: ["latin"],
});

const body = Manrope({
  variable: "--font-body",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: site.title,
    template: `%s | ${site.title}`,
  },
  description: site.description,
  applicationName: site.name,
  authors: [{ name: site.name }],
  creator: site.name,
  publisher: site.name,
  icons: {
    icon: publicUrl("/favicon.svg"),
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${display.variable} ${body.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-bg font-sans text-ink">
          <LanguageProvider>{children}</LanguageProvider>
        </body>
    </html>
  );
}
