"use client";

import { useTranslations } from "next-intl";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  { key: "about", href: "/quienes-somos" },
  { key: "legal", href: "/marco-legal" },
  { key: "project", href: "/proyecto-cancha" },
  { key: "news", href: "/comunicados" },
  { key: "contact", href: "/contactenos" },
] as const;

interface HeaderProps {
  locale: string;
}

export function Header({ locale }: HeaderProps) {
  const t = useTranslations("nav");
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const localePath = (href: string) => `/${locale}${href}`;

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-white/95 backdrop-blur-md border-b border-border shadow-sm"
          : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link
            href={`/${locale}`}
            className="flex items-center gap-3 flex-shrink-0"
          >
            <div className="relative w-10 h-10 lg:w-12 lg:h-12">
              <Image
                src="/images/logo_asopadres.jpg"
                alt="ASOPADRES CCSDS"
                fill
                className="object-contain rounded-sm"
                priority
              />
            </div>
            <div className="hidden sm:block">
              <p className="font-serif font-bold text-brand-blue text-sm lg:text-base leading-tight">
                ASOPADRES
              </p>
              <p className="text-xs text-muted-foreground leading-tight">
                CCSDS — Anolaima
              </p>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {NAV_LINKS.map(({ key, href }) => (
              <Link
                key={key}
                href={localePath(href)}
                className="px-3 py-2 text-sm font-medium text-foreground/75 hover:text-brand-blue transition-colors rounded-md hover:bg-brand-blue/5"
              >
                {t(key)}
              </Link>
            ))}
          </nav>

          {/* Right side */}
          <div className="flex items-center gap-2">
            <LanguageSwitcher className="hidden md:flex" />

            <Link href={localePath("/afiliate")} className="hidden md:block">
              <Button
                size="sm"
                className="bg-brand-blue hover:bg-brand-blue-dark text-white font-medium"
              >
                {t("cta")}
              </Button>
            </Link>

            {/* Mobile menu button */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="lg:hidden p-2 rounded-md text-foreground/70 hover:text-foreground hover:bg-muted transition-colors"
              aria-label={menuOpen ? t("close") : t("menu")}
            >
              {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="lg:hidden bg-white border-t border-border shadow-lg">
          <div className="max-w-7xl mx-auto px-4 py-4 space-y-1">
            {NAV_LINKS.map(({ key, href }) => (
              <Link
                key={key}
                href={localePath(href)}
                onClick={() => setMenuOpen(false)}
                className="block px-3 py-2 text-sm font-medium text-foreground/75 hover:text-brand-blue hover:bg-brand-blue/5 rounded-md transition-colors"
              >
                {t(key)}
              </Link>
            ))}
            <div className="pt-3 border-t border-border flex items-center justify-between">
              <LanguageSwitcher />
              <Link href={localePath("/afiliate")} onClick={() => setMenuOpen(false)}>
                <Button size="sm" className="bg-brand-blue hover:bg-brand-blue-dark text-white">
                  {t("cta")}
                </Button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
