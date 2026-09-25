import type { Metadata } from "next";
import { LegalContent } from "@/components/legal/LegalContent";

export const metadata: Metadata = {
  title: "شروط الاستخدام",
  description: "شروط الاستخدام المختصرة للموقع الرسمي لفهد المدرس.",
  alternates: {
    canonical: "/terms",
  },
};

export default function TermsPage() {
  return <LegalContent kind="terms" />;
}
