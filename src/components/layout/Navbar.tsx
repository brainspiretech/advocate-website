"use client";

import { Menu, Phone, Scale, ShieldCheck, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { firmConfig } from "@/config/firm";

const navItems = [
  { label: "Home", href: "/" },
  { label: "About Firm", href: "/about" },
  { label: "Practice Areas", href: "/practice-areas" },
  { label: "Our Advocates", href: "/team" },
  { label: "Contact", href: "/contact" },
];

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (href: string) => {
    if (href === "/") {
      return pathname === "/";
    }
    return pathname.startsWith(href);
  };

  const closeMenu = () => setMobileMenuOpen(false);

  return (
    <>
      {/* Top Regulatory & Jurisdictional Notice Strip */}
      <div className="bg-primary-dark text-primary-foreground/75 text-[11px] py-1.5 px-4 sm:px-6 lg:px-8 border-b border-primary-light/40">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-accent" />
            <span className="hidden sm:inline">Jurisdiction:</span>
            <span className="text-primary-foreground font-medium">
              Supreme Court of India & High Court of Delhi
            </span>
          </div>
          <div className="flex items-center gap-4 text-[11px]">
            <Link
              href="/disclaimer"
              className="text-accent hover:text-accent-hover transition-colors flex items-center gap-1 font-medium"
            >
              <ShieldCheck className="w-3 h-3" /> BCI Rule 36 Compliance
            </Link>
          </div>
        </div>
      </div>

      {/* Main Sticky Navigation Bar */}
      <header className="sticky top-0 z-40 bg-surface/95 backdrop-blur-md border-b border-border transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Firm Brand / Emblem */}
            <Link href="/" className="flex items-center gap-3.5 group">
              <div className="w-11 h-11 rounded-sm bg-primary flex items-center justify-center text-accent shadow-sm border border-accent/20 group-hover:border-accent transition-colors shrink-0">
                <Scale className="w-6 h-6" />
              </div>
              <div className="flex flex-col">
                <span className="text-xl sm:text-2xl font-serif font-bold text-primary tracking-tight leading-tight group-hover:text-primary-light transition-colors">
                  {firmConfig.name}
                </span>
                <span className="text-[10px] sm:text-[11px] uppercase tracking-widest text-foreground-muted font-medium">
                  Advocates & Legal Consultants
                </span>
              </div>
            </Link>

            {/* Desktop Navigation Links */}
            <nav className="hidden md:flex items-center gap-1 lg:gap-2">
              {navItems.map((item) => {
                const active = isActive(item.href);
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`relative px-3.5 py-2 text-sm font-medium transition-colors rounded-sm ${
                      active
                        ? "text-primary font-semibold"
                        : "text-foreground-muted hover:text-primary hover:bg-surface-subtle"
                    }`}
                  >
                    {item.label}
                    {active && (
                      <span className="absolute bottom-0 left-3 right-3 h-0.5 bg-accent rounded-full" />
                    )}
                  </Link>
                );
              })}
            </nav>

            {/* Right Action / Contact Button */}
            <div className="hidden lg:flex items-center gap-3">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-primary hover:text-accent-foreground bg-surface border border-accent/40 hover:bg-accent hover:border-accent transition-all rounded-sm shadow-sm"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>Chamber Inquiry</span>
              </Link>
            </div>

            {/* Mobile Hamburger Button */}
            <div className="flex md:hidden">
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
                className="p-2 rounded-sm text-foreground-muted hover:text-primary hover:bg-surface-subtle border border-border focus:outline-none"
              >
                {mobileMenuOpen ? (
                  <X className="w-5 h-5" />
                ) : (
                  <Menu className="w-5 h-5" />
                )}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Slide-Over Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 md:hidden animate-in fade-in duration-200">
          {/* Backdrop Button */}
          <button
            type="button"
            aria-label="Close mobile navigation"
            onClick={closeMenu}
            className="fixed inset-0 bg-primary/60 backdrop-blur-sm w-full h-full cursor-default border-none p-0"
          />

          {/* Drawer Content */}
          <div className="fixed top-0 right-0 bottom-0 w-full max-w-xs bg-surface border-l border-border shadow-2xl flex flex-col justify-between p-6 overflow-y-auto">
            <div>
              {/* Drawer Header */}
              <div className="flex items-center justify-between pb-6 border-b border-border">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-sm bg-primary flex items-center justify-center text-accent">
                    <Scale className="w-4 h-4" />
                  </div>
                  <span className="font-serif font-bold text-lg text-primary">
                    {firmConfig.name}
                  </span>
                </div>
                <button
                  type="button"
                  onClick={closeMenu}
                  className="p-1.5 rounded-sm text-foreground-muted hover:text-primary border border-border"
                  aria-label="Close menu"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Navigation Links */}
              <nav className="mt-6 flex flex-col space-y-1">
                {navItems.map((item) => {
                  const active = isActive(item.href);
                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={closeMenu}
                      className={`px-3 py-2.5 rounded-sm text-sm font-medium transition-colors flex items-center justify-between ${
                        active
                          ? "bg-primary text-primary-foreground font-semibold"
                          : "text-foreground-muted hover:text-primary hover:bg-surface-subtle"
                      }`}
                    >
                      <span>{item.label}</span>
                      {active && (
                        <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                      )}
                    </Link>
                  );
                })}
              </nav>
            </div>

            {/* Drawer Footer Information */}
            <div className="pt-6 border-t border-border space-y-4 text-xs text-foreground-muted">
              <div>
                <p className="font-semibold text-foreground uppercase tracking-wider text-[10px]">
                  Chambers Address
                </p>
                <p className="mt-1">
                  {firmConfig.office.addressLine1},{" "}
                  {firmConfig.office.addressLine2}
                </p>
                <p>
                  {firmConfig.office.city}, {firmConfig.office.state}
                </p>
              </div>
              <div>
                <p className="font-semibold text-foreground uppercase tracking-wider text-[10px]">
                  Direct Contact
                </p>
                <p className="mt-1">{firmConfig.office.phone[0]}</p>
                <p>{firmConfig.office.email}</p>
              </div>
              <div className="pt-2">
                <Link
                  href="/disclaimer"
                  onClick={closeMenu}
                  className="text-accent hover:underline font-medium inline-flex items-center gap-1"
                >
                  <ShieldCheck className="w-3.5 h-3.5" /> Statutory Disclaimer
                  (BCI Rule 36)
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
