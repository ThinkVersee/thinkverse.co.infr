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
        url:
          "data:image/svg+xml;utf8," +
          encodeURIComponent(`
            <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'>
              <text x='50%' y='60%' text-anchor='middle' font-size='70' font-family='Arial' fill='#7C3AED'>t</text>
            </svg>
          `),
        type: "image/svg+xml",
      },
    ],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head />
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
