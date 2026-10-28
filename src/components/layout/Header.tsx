"use client";

import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { ImageWithFallback } from "../common/ImageWithFallback";

const navigationLinks = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
];

export const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 w-full md:max-w-4xl xl:max-w-7xl px-4">
      <div className="backdrop-blue-md bg-background border border-primary/30 rounded-lg px-8 sm:px-10 md:px-12 py-3 flex items-center justify-between gap-4">
        <Link href="/" className="w-10 h-10 flex items-center rounded-sm">
          <ImageWithFallback
            src="/images/logo.svg"
            alt="Logo"
            width={1400}
            height={700}
            className="object-cover w-full h-full"
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex gap-6">
          {navigationLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="relative mx-2 py-1 font-medium text-white transition-colors duration-300 cursor-pointer after:absolute after:left-0 after:-bottom-1 after:h-1 after:w-full after:origin-left after:scale-x-0 after:bg-primary after:transition-transform after:duration-300 hover:text-primary hover:after:scale-x-100"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Resume Download */}
        {/* <div className="hidden lg:flex items-center gap-2">
          <button className="p-2 bg-primary text-white rounded-sm">
            Resume
          </button>
        </div> */}
        <div className="hidden lg:flex items-center gap-2">
          <Link
            href="/resume/Tanvir-Hasan-Serazy-Resume.pdf"
            download
            className="p-2 bg-primary text-white rounded-sm"
          >
            Resume
          </Link>
        </div>

        {/* Mobile Navigation */}
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger className="lg:hidden">
            <Menu className="text-primary" size={24} />
          </SheetTrigger>
          <SheetTitle className="sr-only"></SheetTitle>
          <SheetContent
            side="right"
            className="bg-background/80 border-l border-white/20 p-4"
          >
            <div className="flex flex-col gap-6 mt-8 ">
              {navigationLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="text-secondary font-medium transition-all duration-300 cursor-pointer border-b-2 border-primary pb-2"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
};
