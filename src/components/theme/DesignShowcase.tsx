"use client";

import { Check, ChevronDown, Paintbrush } from "lucide-react";
import { useEffect, useRef, useState } from "react";

export type DesignTheme =
  | "obsidian"
  | "ila"
  | "ivory"
  | "emerald"
  | "monochrome"
  | "sandstone"
  | "steel"
  | "burgundy"
  | "nordic"
  | "cinematic"
  | "marble"
  | "midnight"
  | "champagne"
  | "sapphire"
  | "kyoto";

export interface DesignOption {
  id: DesignTheme;
  name: string;
  subtitle: string;
  primaryColor: string;
  accentColor: string;
  bgColor: string;
}

export const DESIGN_OPTIONS: DesignOption[] = [
  {
    id: "ila",
    name: "ILA Chambers (Signature)",
    subtitle: "Slate navy & champagne gold",
    primaryColor: "#1E2D3D",
    accentColor: "#C5A880",
    bgColor: "#FFFFFF",
  },
  {
    id: "obsidian",
    name: "Midnight Obsidian",
    subtitle: "Ultra-dark luxury",
    primaryColor: "#0D0D0D",
    accentColor: "#D4AF37",
    bgColor: "#0D0D0D",
  },
  {
    id: "ivory",
    name: "Ivory & Slate",
    subtitle: "Editorial minimalist",
    primaryColor: "#1E293B",
    accentColor: "#B87333",
    bgColor: "#FDFBF7",
  },
  {
    id: "emerald",
    name: "Emerald Chambers",
    subtitle: "Heritage green",
    primaryColor: "#0A2F1F",
    accentColor: "#C19A49",
    bgColor: "#F8F4E8",
  },
  {
    id: "monochrome",
    name: "Monochrome Authority",
    subtitle: "Black & white razor",
    primaryColor: "#000000",
    accentColor: "#E8A838",
    bgColor: "#FFFFFF",
  },
  {
    id: "sandstone",
    name: "Warm Sandstone",
    subtitle: "Earthy & approachable",
    primaryColor: "#3E2723",
    accentColor: "#C0704D",
    bgColor: "#F5E6D3",
  },
  {
    id: "steel",
    name: "Steel & Glass",
    subtitle: "Modern corporate",
    primaryColor: "#1A1A2E",
    accentColor: "#2563EB",
    bgColor: "#F7F8FA",
  },
  {
    id: "burgundy",
    name: "Burgundy Court",
    subtitle: "Regal & commanding",
    primaryColor: "#4A0E2B",
    accentColor: "#D4A843",
    bgColor: "#FDF8F0",
  },
  {
    id: "nordic",
    name: "Nordic Clean",
    subtitle: "Scandinavian simplicity",
    primaryColor: "#0F172A",
    accentColor: "#6B8F71",
    bgColor: "#FAFAFA",
  },
  {
    id: "cinematic",
    name: "Cinematic Parallax",
    subtitle: "Story-driven scroll",
    primaryColor: "#111827",
    accentColor: "#F59E0B",
    bgColor: "#111827",
  },
  {
    id: "marble",
    name: "Classical Marble",
    subtitle: "Neo-classical elegance",
    primaryColor: "#1B2A4A",
    accentColor: "#B8955A",
    bgColor: "#F0EDE8",
  },
  {
    id: "midnight",
    name: "Midnight Gradient",
    subtitle: "Contemporary dark",
    primaryColor: "#0F0C29",
    accentColor: "#00D4FF",
    bgColor: "#0F0C29",
  },
  {
    id: "champagne",
    name: "Champagne & Charcoal",
    subtitle: "Quiet luxury",
    primaryColor: "#2D2D2D",
    accentColor: "#B76E79",
    bgColor: "#F5F0E8",
  },
  {
    id: "sapphire",
    name: "Oxford Sapphire",
    subtitle: "Deep navy & cyan precision",
    primaryColor: "#0A192F",
    accentColor: "#64FFDA",
    bgColor: "#0A192F",
  },
  {
    id: "kyoto",
    name: "Kyoto Minimalist",
    subtitle: "Sumi ink & crimson seal",
    primaryColor: "#1A1A1A",
    accentColor: "#E63946",
    bgColor: "#F9F6F0",
  },
];

import { useTheme } from "@/components/theme/ThemeContext";

interface DesignShowcaseProps {
  compact?: boolean;
}

export function DesignShowcase({ compact = false }: DesignShowcaseProps) {
  const { activeTheme, setTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
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

  const selectTheme = (themeId: DesignTheme) => {
    setTheme(themeId);
    setIsOpen(false);
  };

  const currentOption =
    DESIGN_OPTIONS.find((d) => d.id === activeTheme) || DESIGN_OPTIONS[0];

  return (
    <div ref={containerRef} className="relative inline-block text-left">
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        aria-haspopup="true"
        aria-label={`Select Design (Active: ${currentOption.name})`}
        className={`design-switcher-btn inline-flex items-center gap-2 px-3 py-2 rounded-md border transition-all duration-200 text-xs font-medium ${
          compact ? "w-full justify-between" : ""
        }`}
      >
        <div className="flex items-center gap-2 shrink-0">
          <Paintbrush className="w-3.5 h-3.5 opacity-70" />
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

        <span className="hidden sm:inline-block tracking-tight">
          {currentOption.name}
        </span>

        <ChevronDown
          className={`w-3 h-3 opacity-50 transition-transform duration-200 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>

      {isOpen && (
        <div
          role="menu"
          aria-orientation="vertical"
          className="design-switcher-dropdown absolute right-0 mt-2 w-64 rounded-lg border shadow-2xl z-50 p-1.5 max-h-[70vh] overflow-y-auto"
        >
          <div className="px-3 py-2 text-[10px] uppercase tracking-widest font-semibold border-b mb-1 opacity-60">
            Design Showcase — 12 Styles
          </div>

          <div className="space-y-0.5">
            {DESIGN_OPTIONS.map((design) => {
              const isSelected = design.id === activeTheme;
              return (
                <button
                  key={design.id}
                  type="button"
                  role="menuitem"
                  onClick={() => selectTheme(design.id)}
                  className={`w-full flex items-center justify-between px-3 py-2.5 rounded-md text-left text-xs transition-all duration-150 ${
                    isSelected
                      ? "design-option-active"
                      : "design-option-inactive hover:opacity-90"
                  }`}
                >
                  <div className="flex items-center gap-2.5">
                    <div className="flex items-center -space-x-1 shrink-0">
                      <span
                        className="w-4 h-4 rounded-full border-2 border-white/50 shadow-sm inline-block"
                        style={{ backgroundColor: design.primaryColor }}
                      />
                      <span
                        className="w-4 h-4 rounded-full border-2 border-white/50 shadow-sm inline-block"
                        style={{ backgroundColor: design.accentColor }}
                      />
                    </div>
                    <div>
                      <div className="font-semibold leading-tight">
                        {design.name}
                      </div>
                      <div className="text-[10px] opacity-60 leading-tight">
                        {design.subtitle}
                      </div>
                    </div>
                  </div>

                  {isSelected && (
                    <Check className="w-3.5 h-3.5 shrink-0 ml-2 opacity-80" />
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
