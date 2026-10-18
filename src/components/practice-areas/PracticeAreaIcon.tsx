import {
  Briefcase,
  Building2,
  FileText,
  Landmark,
  Scale,
  ShieldAlert,
} from "lucide-react";
import type { PracticeArea } from "@/config/firm";

interface PracticeAreaIconProps {
  name: PracticeArea["iconName"];
  className?: string;
}

export function PracticeAreaIcon({
  name,
  className = "w-6 h-6",
}: PracticeAreaIconProps) {
  switch (name) {
    case "Scale":
      return <Scale className={className} aria-hidden="true" />;
    case "Building2":
      return <Building2 className={className} aria-hidden="true" />;
    case "ShieldAlert":
      return <ShieldAlert className={className} aria-hidden="true" />;
    case "Landmark":
      return <Landmark className={className} aria-hidden="true" />;
    case "Briefcase":
      return <Briefcase className={className} aria-hidden="true" />;
    case "FileText":
      return <FileText className={className} aria-hidden="true" />;
    default:
      return <Scale className={className} aria-hidden="true" />;
  }
}
