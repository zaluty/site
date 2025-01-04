import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog",
  description: "Blog",
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>
  <main className="max-w-[60ch] mx-auto w-full space-y-6">
  {children}
  </main>
  </>;
}
