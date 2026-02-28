import type { Metadata } from "next";

import "./globals.css";

export const metadata: Metadata = {
  title: "Blooming Reasons I Love You",
  description: "A private flower-themed funny-cute website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
