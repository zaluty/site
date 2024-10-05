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
    default: "Zaluty",
    template: "%s | Zaluty",
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
          <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
            <div className="min-h-screen flex flex-col justify-between pt-0 md:pt-8 p-8 text-black dark:text-white">
              <main className="">{children}</main>
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
      name: "github",
      url: "https://github.com/zaluty",
      description: "Check out my GitHub",
      image: "/path/to/image",
      date: new Date(),
    },
  ];

  return (
    <footer className="mt-12 text-center">
      <div className="flex justify-center gap-4">
        {links.map((link) => (
          <Link
            key={link.name}
            href={link.url}
            className="text-blue-500 hover:text-blue-700 space-x-2 dark:hover:text-blue-500"
          >
            {link.name}
          </Link>
        ))}
      </div>
    </footer>
  );
}
