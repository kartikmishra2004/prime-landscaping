import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Prime Landscaping | Premium Landscape Design Studio",
  description:
    "Editorial landscape design studio crafting calm, sustainable gardens for homes, public spaces, and boutique environments.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
