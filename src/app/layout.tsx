import type { Metadata } from "next";
import { cookies } from "next/headers";
import { MotionRoot } from "@/components/motion/MotionRoot";
import { FullscreenProvider } from "@/components/providers/FullscreenProvider";
import { LanguageProvider } from "@/components/providers/LanguageProvider";
import type { Language } from "@/lib/i18n";
import "./globals.css";

const siteUrl = "https://www.fahadalmodares.com";
const siteTitle = "فهد المدرس | رائد أعمال وتطوير أعمال في العراق";
const siteDescription =
  "الموقع الرسمي لفهد المدرس، رائد أعمال عراقي بخبرة في تطوير الأعمال، التسويق، العلاقات العامة، العقارات وبناء الشراكات والمشاريع.";

function resolveLanguage(value?: string): Language {
  return value === "en" ? "en" : "ar";
}

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: siteTitle,
    template: "%s | فهد المدرس",
  },
  description: siteDescription,
  applicationName: "Fahad Al Modares",
  authors: [{ name: "Fahad Al Modares", url: siteUrl }],
  creator: "Fahad Al Modares",
  publisher: "Fahad Al Modares",
  category: "Personal Website",
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
  },
  openGraph: {
    type: "website",
    locale: "ar_IQ",
    url: siteUrl,
    siteName: "Fahad Al Modares",
    title: siteTitle,
    description: siteDescription,
    images: [
      {
        url: "/images/fahadhero.jpg",
        width: 1200,
        height: 630,
        alt: "فهد المدرس - Fahad Al Modares",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription,
    images: ["/images/fahadhero.jpg"],
  },
};

export default async function RootLayout({ children }: LayoutProps<"/">) {
  const cookieStore = await cookies();
  const language = resolveLanguage(cookieStore.get("fahad-language")?.value);
  const direction = language === "ar" ? "rtl" : "ltr";

  return (
    <html lang={language} dir={direction}>
      <body>
        <LanguageProvider initialLanguage={language}>
          <FullscreenProvider>
            <MotionRoot>{children}</MotionRoot>
          </FullscreenProvider>
        </LanguageProvider>
      </body>
    </html>
  );
}