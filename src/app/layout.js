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
  openGraph: {
    title: "ThinkVerse – Software Development & IT Services",
    description:
      "Build scalable software, web apps, and digital solutions with ThinkVerse.",
    url: "https://thinkverse.co.in",
    siteName: "ThinkVerse",
    type: "website",
  },
  icons: {
    icon: [
      {
        url:
          "data:image/svg+xml;utf8," +
          encodeURIComponent(`
            <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'>
              <rect width='100' height='100' rx='20' fill='#7C3AED'/>
              <text x='50%' y='58%' text-anchor='middle' font-size='55' font-family='Arial' fill='#ffffff'>t</text>
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
