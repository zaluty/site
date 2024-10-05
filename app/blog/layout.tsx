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
  return <>{children}</>;
}
