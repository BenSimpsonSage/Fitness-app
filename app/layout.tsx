import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "FitStart",
  description: "Your personal fitness & nutrition companion",
  manifest: "/manifest.json",
  appleWebApp: { capable: true, statusBarStyle: "default", title: "FitStart" },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  themeColor: "#16a34a",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="max-w-md mx-auto min-h-screen bg-gray-50">{children}</body>
    </html>
  );
}
