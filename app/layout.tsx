import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono, Instrument_Serif } from "next/font/google";
import { profile } from "./_content/profile";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument-serif",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: {
    default: profile.fullName,
    template: `%s — ${profile.fullName}`,
  },
  description: profile.metaDescription,
  authors: [{ name: profile.fullName, url: profile.github.href }],
  creator: profile.fullName,
  // Text-only sharing tags. TODO: add `metadataBase` (production URL) and an
  // Open Graph image once both are decided.
  openGraph: {
    type: "website",
    siteName: profile.fullName,
    title: profile.fullName,
    description: profile.metaDescription,
    locale: "en_US",
  },
  twitter: {
    card: "summary",
    title: profile.fullName,
    description: profile.metaDescription,
  },
};

export const viewport: Viewport = {
  themeColor: "#121416",
  colorScheme: "dark",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${instrumentSerif.variable} antialiased`}
    >
      <body className="surface min-h-dvh font-sans text-fg">{children}</body>
    </html>
  );
}
