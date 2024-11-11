import "./globals.css";
import type { Metadata } from "next";
import { ViewTransitions } from "next-view-transitions";
import { ThemeProvider } from "@/components/c/theme-provider";
import Link from "next/link";
import { GeistMono } from 'geist/font/mono';
import { Analytics } from "@vercel/analytics/react"

 

export const metadata: Metadata = {
  metadataBase: new URL("https://zaluty.dev"),
  title: {
    default: "essafar hamza",
    template: "%s | zaluty",
  },
  description: "fullstack developer, optimist, community builder.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ViewTransitions>
      <html
        lang="en"
        className={`${GeistMono.className} [scrollbar-gutter:stable]`}
      >
        <body className="antialiased tracking-tight">
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem   storageKey="ZalutyTheme"
            disableTransitionOnChange
          >
            <div className="min-h-screen flex flex-col justify-between pt-0 md:pt-8 p-8 text-black dark:text-white">
              <main className="max-w-[60ch] mx-auto w-full space-y-6">
                {children}
              </main>
              <Footer />
            </div>
            <Analytics framework="nextjs" debug={false} />
          </ThemeProvider>
        </body>
      </html>
    </ViewTransitions>
  );
}

function Footer() {
  const links = [
    {
      name: "@zaluty",
      url: "https://x.com/zaluty",
      description: "Follow me on X",
      image: "/path/to/image",
      date: new Date(),
    },
     {
      name: "X",
      url: "https://x.com/zalutydev",
    }
  ];

  return (
    <footer className="mt-12 text-center">
      <div className="flex justify-center space-x-4 tracking-tight">
        {links.map((link) => (
          <Link
            key={link.name}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-blue-500 transition-colors duration-200"
          >
            {link.name}
          </Link>
        ))}
      </div>
    </footer>
  );
}