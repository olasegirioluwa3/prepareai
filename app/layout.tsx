import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ZED Prepare AI - Personalized Exam Preparation for WAEC, NECO, JAMB",
  description: "Prepare smarter for primary, secondary, and major examinations (WAEC, NECO, JAMB) with personalized AI-powered practice. Leveling the academic playing field for all students.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
