import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "James Sanchez — Architectural Designer",
  description: "Portfolio of James Sanchez, Architectural Designer at SCHRADERGROUP in the Greater Philadelphia area. BArch, Thomas Jefferson University 2023.",
  openGraph: {
    title: "James Sanchez — Architectural Designer",
    description: "Architecture portfolio — mixed-use residential, wellness centers, adaptive reuse, and sustainable urban design.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&family=JetBrains+Mono:wght@300;400&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
