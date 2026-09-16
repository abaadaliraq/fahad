import type { Metadata } from "next";
import { MotionRoot } from "@/components/motion/MotionRoot";
import "./globals.css";

export const metadata: Metadata = {
  title: "Fahad Al Modares",
  description: "The personal brand website of Fahad Al Modares.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="ar" dir="rtl">
      <body><MotionRoot>{children}</MotionRoot></body>
    </html>
  );
}
