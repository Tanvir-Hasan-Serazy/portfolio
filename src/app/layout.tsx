import type { Metadata } from "next";
import { Overpass_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

const overpassMono = Overpass_Mono({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.serazy.dev"),
  title: "Tanvir Hasan Serazy - Software Engineer Portfolio",
  applicationName: "Serazy",
  creator: "Tanvir Hasan Serazy",
  publisher: "Tanvir Hasan Serazy",
  description:
    "Personal portfolio of Tanvir Hasan Serazy, a software engineer specializing in web development and design. Showcasing projects, skills, and experience in creating innovative web solutions.",
  alternates: {
    canonical: "https://www.serazy.dev",
  },
  openGraph: {
    type: "website",
    url: "https://www.serazy.dev",
    title: "Tanvir Hasan Serazy - Software Engineer Portfolio",
    description:
      "Personal portfolio of Tanvir Hasan Serazy, a software engineer specializing in web development and design.",
    images: [
      {
        url: "/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "Tanvir Hasan Serazy - Software Engineer Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tanvir Hasan Serazy - Software Engineer Portfolio",
    description:
      "Personal portfolio of Tanvir Hasan Serazy, a software engineer specializing in web development and design.",
    images: ["/images/og-image.png"],
  },
  icons: {
    icon: [
      {
        url: "/favicon-48.png",
        type: "image/png",
        sizes: "48x48",
      },
      {
        url: "/favicon.png",
        type: "image/png",
        sizes: "512x512",
      },
    ],
    shortcut: "/favicon-48.png",
    apple: "/favicon.png",
  },
  manifest: "/manifest.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${overpassMono.className} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
