"use client";

import {
  createContext,
  type ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import {
  DESIGN_OPTIONS,
  type DesignTheme,
} from "@/components/theme/DesignShowcase";

export type LayoutArchetype =
  | "luxury"
  | "editorial"
  | "heritage"
  | "brutalist"
  | "corporate"
  | "ila";

export function getLayoutArchetype(theme: DesignTheme): LayoutArchetype {
  switch (theme) {
    case "ila":
      return "ila";
    case "obsidian":
    case "cinematic":
    case "midnight":
    case "sapphire":
      return "luxury";
    case "ivory":
    case "champagne":
      return "editorial";
    case "emerald":
    case "burgundy":
    case "marble":
      return "heritage";
    case "monochrome":
    case "kyoto":
      return "brutalist";
    default:
      return "corporate";
  }
}

interface ThemeContextType {
  activeTheme: DesignTheme;
  archetype: LayoutArchetype;
  setTheme: (theme: DesignTheme) => void;
}

const ThemeContext = createContext<ThemeContextType>({
  activeTheme: "obsidian",
  archetype: "luxury",
  setTheme: () => {},
});

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [activeTheme, setActiveTheme] = useState<DesignTheme>("obsidian");

  useEffect(() => {
    const currentAttr = document.documentElement.getAttribute(
      "data-theme",
    ) as DesignTheme | null;
    if (currentAttr && DESIGN_OPTIONS.some((d) => d.id === currentAttr)) {
      setActiveTheme(currentAttr);
    } else {
      const stored = localStorage.getItem("apex_design") as DesignTheme | null;
      if (stored && DESIGN_OPTIONS.some((d) => d.id === stored)) {
        setActiveTheme(stored);
        document.documentElement.setAttribute("data-theme", stored);
      } else {
        document.documentElement.setAttribute("data-theme", "obsidian");
      }
    }
  }, []);

  const setTheme = (theme: DesignTheme) => {
    setActiveTheme(theme);
    document.documentElement.setAttribute("data-theme", theme);
    try {
      localStorage.setItem("apex_design", theme);
    } catch {
      // Ignore local storage errors
    }
  };

  const archetype = getLayoutArchetype(activeTheme);

  return (
    <ThemeContext.Provider value={{ activeTheme, archetype, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}
