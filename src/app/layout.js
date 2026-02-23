import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "ThinkVerse – Software Development & Digital Solutions",
  description:
    "ThinkVerse is a software company offering custom development, SaaS products, IT consulting, and digital solutions to help businesses scale.",
  keywords: [
    "software company",
    "custom software development",
    "IT services",
    "web development",
    "mobile app development",
    "SaaS products",
    "digital solutions",
    "ThinkVerse",
    "technology consulting",
  ],
  icons: {
    icon: [
      {
        url: "/Group3.svg",
        sizes: "100x100",
        type: "image/svg+xml",
      },
      
    ],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
