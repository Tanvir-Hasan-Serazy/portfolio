import type { Metadata } from "next";
import { Overpass_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

const overpassMono = Overpass_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Tanvir Hasan Serazy - Software Engineer Portfolio",
  description:
    "Personal portfolio of Tanvir Hasan Serazy, a software engineer specializing in web development and design. Showcasing projects, skills, and experience in creating innovative web solutions.",
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
