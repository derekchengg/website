import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { NavbarNew } from "@/components/navbar";
import { ModeToggle } from "@/components/ui/ModeToggle";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Derek's Portfolio",
  description: "Derek's Portfolio",
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({
  children,
}: Readonly<RootLayoutProps>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased min-h-screen bg-background`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="grid md:grid-cols-2">
            <div className="fixed top-0 left-0 right-0 z-50">
              <NavbarNew />
            </div>

            <div className="fixed bottom-2 right-1 z-50">
              <ModeToggle />
            </div>
          </div>

          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}