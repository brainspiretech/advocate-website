"use client";

import { Check, ChevronDown, Palette } from "lucide-react";
import { useEffect, useRef, useState } from "react";

export type HeritageTheme = "navy" | "burgundy" | "green";

export interface ThemeOption {
  id: HeritageTheme;
  name: string;
  subtitle: string;
  primaryColor: string;
  accentColor: string;
}

export const THEME_OPTIONS: ThemeOption[] = [
  {
    id: "navy",
    name: "Imperial Navy",
    subtitle: "Midnight Navy & Brass",
    primaryColor: "#0b192c",
    accentColor: "#c5a880",
  },
  {
    id: "burgundy",
    name: "Oxford Burgundy",
    subtitle: "Deep Burgundy & Amber",
    primaryColor: "#2a1217",
    accentColor: "#d4a373",
  },
  {
    id: "green",
    name: "Heritage Green",
    subtitle: "Forest Green & Bronze",
    primaryColor: "#12261b",
    accentColor: "#c29b63",
  },
];

interface ThemeSwitcherProps {
  compact?: boolean;
}

export function ThemeSwitcher({ compact = false }: ThemeSwitcherProps) {
  const [activeTheme, setActiveTheme] = useState<HeritageTheme>("navy");
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Read current theme from document attribute or storage
    const currentAttr = document.documentElement.getAttribute(
      "data-theme",
    ) as HeritageTheme | null;
    if (
      currentAttr &&
      THEME_OPTIONS.some((theme) => theme.id === currentAttr)
    ) {
      setActiveTheme(currentAttr);
      if (document.body) {
        document.body.setAttribute("data-theme", currentAttr);
      }
    } else {
      const stored = localStorage.getItem("apex_theme") as HeritageTheme | null;
      if (stored && THEME_OPTIONS.some((theme) => theme.id === stored)) {
        setActiveTheme(stored);
        document.documentElement.setAttribute("data-theme", stored);
        if (document.body) {
          document.body.setAttribute("data-theme", stored);
        }
      }
    }

    // Handle click outside to close dropdown
    const handleClickOutside = (event: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const selectTheme = (themeId: HeritageTheme) => {
    setActiveTheme(themeId);
    document.documentElement.setAttribute("data-theme", themeId);
    if (document.body) {
      document.body.setAttribute("data-theme", themeId);
    }
    try {
      localStorage.setItem("apex_theme", themeId);
    } catch {
      // Ignore storage errors in restricted iframe/browser modes
    }
    setIsOpen(false);
  };

  const currentOption =
    THEME_OPTIONS.find((t) => t.id === activeTheme) || THEME_OPTIONS[0];

  return (
    <div ref={containerRef} className="relative inline-block text-left">
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        aria-haspopup="true"
        aria-label={`Select Color Theme (Active: ${currentOption.name})`}
        className={`inline-flex items-center gap-2 px-2.5 py-1.5 rounded-sm border border-border hover:border-accent/60 bg-surface/80 hover:bg-surface text-foreground transition-all duration-200 shadow-2xs text-xs font-medium ${
          compact ? "w-full justify-between" : ""
        }`}
      >
        <div className="flex items-center gap-1.5 shrink-0">
          <Palette className="w-3.5 h-3.5 text-accent" />
          {/* Dual swatch indicator */}
          <div className="flex items-center -space-x-1">
            <span
              className="w-3 h-3 rounded-full border border-white/40 shadow-xs inline-block shrink-0"
              style={{ backgroundColor: currentOption.primaryColor }}
            />
            <span
              className="w-3 h-3 rounded-full border border-white/40 shadow-xs inline-block shrink-0"
              style={{ backgroundColor: currentOption.accentColor }}
            />
          </div>
        </div>

        <span className="hidden sm:inline-block font-sans text-xs tracking-tight">
          {currentOption.name}
        </span>

        <ChevronDown
          className={`w-3 h-3 text-foreground-muted transition-transform duration-200 ${
            isOpen ? "rotate-180 text-accent" : ""
          }`}
        />
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div
          role="menu"
          aria-orientation="vertical"
          className="absolute right-0 mt-1.5 w-56 rounded-sm bg-surface border border-border shadow-xl z-50 p-1.5 animate-in fade-in zoom-in-95 duration-100"
        >
          <div className="px-2.5 py-1.5 text-[10px] uppercase font-mono tracking-wider text-accent font-semibold border-b border-border-subtle mb-1">
            Chambers Heritage Palettes
          </div>

          <div className="space-y-1">
            {THEME_OPTIONS.map((theme) => {
              const isSelected = theme.id === activeTheme;
              return (
                <button
                  key={theme.id}
                  type="button"
                  role="menuitem"
                  onClick={() => selectTheme(theme.id)}
                  className={`w-full flex items-center justify-between px-2.5 py-2 rounded-xs text-left text-xs transition-colors ${
                    isSelected
                      ? "bg-surface-subtle font-semibold text-primary border border-accent/30"
                      : "text-foreground-muted hover:bg-surface-subtle hover:text-foreground"
                  }`}
                >
                  <div className="flex items-center gap-2.5">
                    {/* Color Swatch Pair */}
                    <div className="flex items-center -space-x-1">
                      <span
                        className="w-3.5 h-3.5 rounded-full border border-border shadow-xs inline-block shrink-0"
                        style={{ backgroundColor: theme.primaryColor }}
                      />
                      <span
                        className="w-3.5 h-3.5 rounded-full border border-border shadow-xs inline-block shrink-0"
                        style={{ backgroundColor: theme.accentColor }}
                      />
                    </div>
                    <div>
                      <div className="font-serif leading-tight text-primary">
                        {theme.name}
                      </div>
                      <div className="text-[10px] text-foreground-subtle leading-tight">
                        {theme.subtitle}
                      </div>
                    </div>
                  </div>

                  {isSelected && (
                    <Check className="w-3.5 h-3.5 text-accent shrink-0 ml-2" />
                  )}
                </button>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
