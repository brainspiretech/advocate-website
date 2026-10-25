"use client";

import { BrutalistLayout } from "@/components/layouts/BrutalistLayout";
import { CorporateLayout } from "@/components/layouts/CorporateLayout";
import { EditorialLayout } from "@/components/layouts/EditorialLayout";
import { HeritageLayout } from "@/components/layouts/HeritageLayout";
import { IlaLayout } from "@/components/layouts/IlaLayout";
import { LuxuryLayout } from "@/components/layouts/LuxuryLayout";
import { useTheme } from "@/components/theme/ThemeContext";

export default function HomePage() {
  const { archetype } = useTheme();

  switch (archetype) {
    case "ila":
      return <IlaLayout />;
    case "editorial":
      return <EditorialLayout />;
    case "heritage":
      return <HeritageLayout />;
    case "brutalist":
      return <BrutalistLayout />;
    case "corporate":
      return <CorporateLayout />;
    default:
      return <LuxuryLayout />;
  }
}
