import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Toaster } from "sonner";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";
import { profile } from "@/data/content";
import { CommandMenuProvider } from "@/components/ui/CommandMenu";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap"
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap"
});

const siteUrl = "https://manoharchawada.vercel.app";
const description =
  "Experienced React Native and Full Stack Developer with 3+ years of experience building scalable mobile and web applications using React Native, React.js, Node.js, Express.js, MongoDB, Firebase, AWS, and TypeScript.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${profile.name} — ${profile.role}`,
    template: `%s · ${profile.name}`
  },
  description,
  keywords: [
    "Manohar Chawada",
    "React Native Developer",
    "Full Stack Developer",
    "React Native & Full Stack Developer",
    "React.js",
    "JavaScript",
    "TypeScript",
    "Node.js",
    "Express.js",
    "MongoDB",
    "Firebase",
    "AWS",
    "REST APIs",
    "Redux",
    "Git",
    "Mobile App Developer",
    "Software Engineer",
    "Portfolio"
  ],
  authors: [{ name: profile.name, url: siteUrl }],
  creator: profile.name,
  publisher: profile.name,
  alternates: {
    canonical: siteUrl
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: `${profile.name} — Portfolio`,
    title: `${profile.name} — ${profile.role}`,
    description,
    images: [
      {
        url: `${siteUrl}/opengraph-image`,
        width: 1200,
        height: 630,
        alt: `${profile.name} — ${profile.role}`
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: `${profile.name} — ${profile.role}`,
    description,
    images: [`${siteUrl}/opengraph-image`],
    creator: "@manoharchawada"
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1
    }
  },
  icons: {
    icon: [
      { url: "/icon", sizes: "32x32", type: "image/png" },
      { url: "/favicon.ico" }
    ],
    apple: [{ url: "/apple-icon", sizes: "180x180", type: "image/png" }]
  }
};

export const viewport: Viewport = {
  themeColor: "#07080c",
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": `${siteUrl}/#person`,
        name: profile.name,
        url: siteUrl,
        jobTitle: profile.role,
        email: `mailto:${profile.email}`,
        image: `${siteUrl}/avatar.png`,
        sameAs: [profile.github, profile.linkedin].filter(Boolean),
        address: {
          "@type": "PostalAddress",
          addressLocality: "Indore",
          addressCountry: "India"
        },
        knowsAbout: [
          "React Native",
          "React.js",
          "JavaScript",
          "TypeScript",
          "Node.js",
          "Express.js",
          "MongoDB",
          "Firebase",
          "AWS",
          "REST APIs",
          "Redux",
          "Git"
        ]
      },
      {
        "@type": "WebSite",
        "@id": `${siteUrl}/#website`,
        url: siteUrl,
        name: `${profile.name} — Portfolio`,
        description,
        publisher: {
          "@id": `${siteUrl}/#person`
        }
      }
    ]
  };

  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      suppressHydrationWarning>
      <body className="min-h-full flex flex-col" suppressHydrationWarning>
        <a href="#main" className="skip-link">
          Skip to content
        </a>
        <CommandMenuProvider>{children}</CommandMenuProvider>
        <Toaster
          position="bottom-right"
          theme="dark"
          toastOptions={{
            style: {
              background: "rgba(20, 25, 37, 0.9)",
              border: "1px solid rgba(255,255,255,0.08)",
              color: "#e6e8ee",
              backdropFilter: "blur(8px)"
            }
          }}
        />
        <Analytics />
        <SpeedInsights />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}
