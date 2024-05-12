import { Navbar } from "@/components/navbar";
import { spaceGrotesk } from "@/config/fonts";
import { siteConfig } from "@/config/site";
import "@/styles/globals.css";
import clsx from "clsx";
import { Metadata, Viewport } from "next";
import { Providers } from "./providers";
import Sidebar from "@/components/sidebar";

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  icons: {
    icon: "/favicon.ico",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body
        className={clsx(
          "min-h-screen bg-background font-sans antialiased",
          spaceGrotesk.variable
        )}
      >
        <Providers
          themeProps={{
            attribute: "class",
            defaultTheme: "dark",
            children: "",
          }}
        >
          <div className="relative flex gap-2">
            <aside className="hidden sm:block">
              <Sidebar />
            </aside>
            <div className="relative flex flex-grow flex-col h-screen px-2">
              <main className="w-full mx-auto">
                <Navbar />
                <div className="max-w-5xl mx-auto overflow-hidden pr-3">
                  {children}
                </div>
              </main>
            </div>
          </div>
        </Providers>
      </body>
    </html>
  );
}
