"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavLink {
  label: string;
  href: string;
}

interface MobileNavProps {
  navLinks: NavLink[];
}

export default function MobileNav({ navLinks }: MobileNavProps) {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  // Close menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  // Prevent scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  return (
    <>
      {/* Hamburger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="lg:hidden relative z-[70] flex flex-col items-center justify-center gap-1.5 rounded-md p-2 text-white transition-colors hover:bg-white/10"
        aria-label="Toggle menu"
      >
        <span
          className={`block h-0.5 w-6 bg-white transition-all duration-300 ${
            isOpen ? "translate-y-2 rotate-45" : ""
          }`}
        />
        <span
          className={`block h-0.5 w-6 bg-white transition-all duration-300 ${
            isOpen ? "opacity-0" : ""
          }`}
        />
        <span
          className={`block h-0.5 w-6 bg-white transition-all duration-300 ${
            isOpen ? "-translate-y-2 -rotate-45" : ""
          }`}
        />
      </button>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-[65] bg-black/60 backdrop-blur-sm transition-opacity duration-300 lg:hidden ${
          isOpen ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
        onClick={() => setIsOpen(false)}
      />

      {/* Mobile Menu */}
      <nav
        className={`fixed right-0 top-0 z-[66] h-full w-[280px] bg-gradient-to-br from-[#0a3d62] to-[#0c5460] shadow-2xl transition-transform duration-300 lg:hidden ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex h-full flex-col gap-2 px-6 py-20">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`rounded-lg px-4 py-3 text-base font-bold text-white transition-all hover:bg-white/10 ${
                pathname === link.href ? "bg-white/20" : ""
              }`}
            >
              {link.label}
            </Link>
          ))}
          <div className="mt-6 border-t border-white/20 pt-6">
            <Link
              href="https://dashboard.hsafe.net/"
              className="block rounded-lg border-2 border-white/70 bg-transparent px-6 py-3 text-center text-base font-bold text-white transition hover:bg-white/10"
            >
              ĐĂNG NHẬP
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
}
