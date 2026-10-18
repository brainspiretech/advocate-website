import type { Metadata } from "next";
import { Inter, Lora } from "next/font/google";
import { DisclaimerModal } from "@/components/disclaimer/DisclaimerModal";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { firmConfig } from "@/config/firm";
import "./globals.css";

const lora = Lora({
  variable: "--font-lora",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    template: `%s | ${firmConfig.name}`,
    default: `${firmConfig.name} | ${firmConfig.tagline}`,
  },
  description: firmConfig.shortDescription,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${lora.variable} ${inter.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <head>
        <script
          // biome-ignore lint/security/noDangerouslySetInnerHtml: Static inline script required for zero-flicker theme restoration
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem("apex_theme");if(t&&("navy"===t||"burgundy"===t||"green"===t)){document.documentElement.setAttribute("data-theme",t)}}catch(e){}})();`,
          }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-background text-foreground selection:bg-accent/20 selection:text-primary">
        <DisclaimerModal />
        <Navbar />
        <main className="flex-1 flex flex-col">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
