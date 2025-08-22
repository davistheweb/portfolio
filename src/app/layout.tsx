import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Josiah Davis | Portfolio",
  description: "I'm Josiah Davis, with 3+ Years of experience.",
  keywords: [
    "Davistheweb",
    "Web Developer",
    "Fullstack Developer",
    "Nigeria Developer",
    "Davistheweb Dev",
  ],
  authors: [{ name: "Josiah Davis" }],
  themeColor: "#061417",
  verification: {
    google: "ZuNx7mDeY7yQfX8ZKLR4FBsXcFZPFWzbXILnaAGmdMo",
  },
  openGraph: {
    title: "Davistheweb - Portfolio",
    description:
      "Highly skilled at backend, progressive enhancement, design systems & UI Engineering - performance and scalability are top objectives on my radar.",
    type: "website",
    url: "https://domain.com",
    images: [
      {
        url: "/images/davistheweb.png",
        width: 1200,
        height: 630,
        alt: "Josiah Davis | Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Davistheweb - Portfolio",
    description:
      "Highly skilled at progressive enhancement, design systems & UI Engineering - performance and scalability are top objectives on my radar.",
    images: ["/images/davistheweb.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/images/davistheweb.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
