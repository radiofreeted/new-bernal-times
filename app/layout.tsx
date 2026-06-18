import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "The New Bernal Times",
  description: "All the real estate news that's fit to print — Bernal Heights Edition",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-full">{children}</body>
    </html>
  );
}
