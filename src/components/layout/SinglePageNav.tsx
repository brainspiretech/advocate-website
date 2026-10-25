"use client";

import { Menu, Scale, X } from "lucide-react";
import { useEffect, useState } from "react";
import { DesignShowcase } from "@/components/theme/DesignShowcase";
import { firmConfig } from "@/config/firm";

const sections = [
  { label: "Home", anchor: "#hero" },
  { label: "About", anchor: "#about" },
  { label: "Practice Areas", anchor: "#practice" },
  { label: "Advocates", anchor: "#team" },
  { label: "Jurisdictions", anchor: "#jurisdictions" },
  { label: "Contact", anchor: "#contact" },
];

export function SinglePageNav() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      // Determine active section
      const sectionEls = sections
        .map((s) => ({
          id: s.anchor.replace("#", ""),
          el: document.getElementById(s.anchor.replace("#", "")),
        }))
        .filter((s) => s.el);

      const scrollPos = window.scrollY + 120;
      for (let i = sectionEls.length - 1; i >= 0; i--) {
        const el = sectionEls[i].el;
        if (el && el.offsetTop <= scrollPos) {
          setActiveSection(sectionEls[i].id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (anchor: string) => {
    const id = anchor.replace("#", "");
    const el = document.getElementById(id);
    if (el) {
      const offset = 80;
      const top = el.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: "smooth" });
    }
    setMobileOpen(false);
  };

  return (
    <header
      className={`sp-nav sticky top-0 z-40 transition-all duration-300 ${
        scrolled ? "sp-nav-scrolled" : ""
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-18">
          {/* Logo */}
          <button
            type="button"
            onClick={() => scrollTo("#hero")}
            className="sp-nav-logo flex items-center gap-2.5 group"
          >
            <div className="sp-nav-emblem w-9 h-9 rounded-md flex items-center justify-center shrink-0 transition-all">
              <Scale className="w-5 h-5" />
            </div>
            <div className="flex flex-col">
              <span className="text-lg sm:text-xl font-serif font-bold tracking-tight leading-tight sp-nav-title">
                {firmConfig.shortName}
              </span>
              <span className="text-[9px] sm:text-[10px] uppercase tracking-widest sp-nav-subtitle opacity-60">
                Immigration & Dispute Counsel
              </span>
            </div>
          </button>

          {/* Desktop: Normal Page Nav Items */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2">
            {sections.map((section) => {
              const isActive =
                activeSection === section.anchor.replace("#", "");
              return (
                <button
                  key={section.anchor}
                  type="button"
                  onClick={() => scrollTo(section.anchor)}
                  className={`px-3 py-1.5 rounded-md text-xs lg:text-sm font-medium transition-all ${
                    isActive
                      ? "text-accent bg-accent/10 font-semibold"
                      : "text-foreground-muted hover:text-foreground hover:bg-surface-subtle"
                  }`}
                >
                  {section.label}
                </button>
              );
            })}
          </nav>

          {/* Right: Design Theme Switcher (Dropdown only) */}
          <div className="hidden md:flex items-center gap-3">
            <DesignShowcase />
          </div>

          {/* Mobile: Design Switcher + Hamburger */}
          <div className="flex items-center gap-2 md:hidden">
            <DesignShowcase compact />
            <button
              type="button"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              className="sp-nav-hamburger p-2 rounded-md"
            >
              {mobileOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className="fixed inset-0 z-50 md:hidden">
          <button
            type="button"
            aria-label="Close mobile navigation"
            onClick={() => setMobileOpen(false)}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm w-full h-full cursor-default border-none p-0"
          />
          <div className="sp-mobile-drawer fixed top-0 right-0 bottom-0 w-full max-w-xs border-l shadow-2xl flex flex-col p-6 overflow-y-auto">
            <div className="flex items-center justify-between pb-4 border-b border-current/10 mb-4">
              <span className="font-serif font-bold text-lg">
                {firmConfig.shortName}
              </span>
              <button
                type="button"
                onClick={() => setMobileOpen(false)}
                className="p-1.5 rounded-md"
                aria-label="Close"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <nav className="flex flex-col space-y-1">
              {sections.map((section) => {
                const isActive =
                  activeSection === section.anchor.replace("#", "");
                return (
                  <button
                    key={section.anchor}
                    type="button"
                    onClick={() => scrollTo(section.anchor)}
                    className={`sp-mobile-nav-item text-left px-3 py-2.5 rounded-md text-sm font-medium transition-all ${
                      isActive ? "sp-mobile-nav-active" : ""
                    }`}
                  >
                    {section.label}
                  </button>
                );
              })}
            </nav>

            <div className="mt-6 pt-4 border-t border-current/10">
              <p className="text-[10px] uppercase tracking-widest opacity-50 mb-2 font-semibold">
                Design Theme
              </p>
              <DesignShowcase compact />
            </div>

            <div className="mt-auto pt-6 text-xs opacity-50 space-y-1">
              <p>{firmConfig.office.addressLine1}</p>
              <p>
                {firmConfig.office.city}, {firmConfig.office.state}
              </p>
              <p>{firmConfig.office.phone[0]}</p>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
