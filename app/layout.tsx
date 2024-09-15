import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ViewTransitions } from "next-view-transitions";
import { ThemeProvider } from "@/components/c/theme-provider";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

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
        className={`${inter.className} [scrollbar-gutter:stable]`}
      >
        <body className="antialiased tracking-tight">
          <ThemeProvider
            attribute="class"
            defaultTheme="light"
            enableSystem
            disableTransitionOnChange
          >
            <div className="min-h-screen flex flex-col justify-between pt-0 md:pt-8 p-8 text-black dark:text-white">
              <main className="max-w-[60ch] mx-auto w-full space-y-6">
                {children}
              </main>
              <Footer />
            </div>
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
      name: "youtube",
      url: "https://www.youtube.com/@leerob",
      description: "Subscribe to my YouTube channel",
      image: "/path/to/image",
      date: new Date(),
    },
    {
      name: "github",
      url: "https://github.com/zaluty",
      description: "Check out my GitHub",
      image: "/path/to/image",
      date: new Date(),
    },
  ];

  return (
    <footer className="mt-12 text-center">
      {links.map((link) => (
        <Link
          key={link.name}
          href={link.url}
          className="text-blue-500 hover:text-blue-700 space-x-2 dark:hover:text-blue-500"
        >
          {link.name}
        </Link>
      ))}
    </footer>
  );
}
