import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Playfair_Display, Crimson_Text, Fira_Code } from "next/font/google";
import "./globals.css";

// Elegant classical serif font for headings and display text
const playfairDisplay = Playfair_Display({
  variable: "--font-display",
  subsets: ["latin"],
  display: "swap",
});

// Refined serif font for body text
const crimsonText = Crimson_Text({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["400", "600"],
  display: "swap",
});

// Clean monospace font for technical elements
const firaCode = Fira_Code({
  variable: "--font-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Bird Valley Golf Course — Client Onboarding",
  description: "Exclusive member onboarding for Bird Valley Golf Course services.",
  icons: {
    icon: "/bird-valley-logo.png",
    shortcut: "/bird-valley-logo.png",
    apple: "/bird-valley-logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="min-h-full">
      <body className={`${crimsonText.variable} ${firaCode.variable} ${playfairDisplay.variable} antialiased text-golf-ink min-h-full`}>
        <header className="w-full relative z-10" style={{
          background: 'linear-gradient(180deg, #1c2c19 0%, #1c2c19 40%, rgba(28, 44, 25, 0.8) 70%, rgba(28, 44, 25, 0.3) 100%)',
          borderBottom: '1px solid rgba(200, 168, 130, 0.3)'
        }}>
          <div className="mx-auto max-w-5xl px-4 md:px-6 py-3 flex items-center justify-center">
            <Link href="/" aria-label="Bird Valley Golf Course" className="block">
              <Image 
                src="/bird-valley-logo.png" 
                alt="Bird Valley Golf Course" 
                width={350} 
                height={175} 
                className="mx-auto w-56 md:w-72 h-auto" 
              />
            </Link>
          </div>
        </header>
        {children}
      </body>
    </html>
  );
}