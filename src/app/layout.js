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
  title: "ThinkVerse – Automation, Web Applications & Smart Digital Systems",
  description:
    "ThinkVerse helps businesses grow with automation, customer support systems, high-performing websites, and smart web applications built for scale.",
  keywords: [
    "automation company",
    "customer support systems",
    "workflow automation",
    "web application development",
    "website development",
    "workflow automation",
    "business automation",
    "smart web systems",
    "ThinkVerse",
    "digital systems",
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
