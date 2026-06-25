import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ThemeProvider } from "next-themes";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://promptkit.qzz.io"),
  title: "PromptKit — System Prompt Library for 200+ AI Models",
  description:
    "Expert-crafted system prompts for 200+ AI models. Copy, paste, and get optimized prompts for ChatGPT, Claude, Gemini, Midjourney, and more. Based on official documentation.",
  keywords: [
    "AI system prompt",
    "Midjourney prompt rules",
    "Flux prompt guide",
    "Sora video prompt",
    "GPT-5 system prompt",
    "Claude XML prompt",
    "Kling prompt guide",
    "Wan video prompt",
    "SDXL negative prompt",
    "prompt engineering",
    "system prompt library",
    "AI prompt documentation",
    "Midjourney parameters",
    "Flux prompting guide",
    "official AI documentation",
    "stable diffusion prompt",
    "Ideogram text rendering",
    "Runway Gen 4 prompt",
    "DeepSeek R1 reasoning",
    "Gemini system instructions",
    "GLM-5 prompt guide",
    "Qwen3.7 system prompt",
    "GPT Image 2 prompt",
    "Mercury diffusion LLM",
    "Kimi K2 prompt guide",
    "MiniMax M3 prompt",
    "Gemma 4 open model",
    "Flux Kontext editing",
    "Riverflow font control",
    "Grok Imagine prompt",
  ],
  authors: [{ name: "PromptKit" }],
  icons: {
    icon: "/icon.svg",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
    other: [
      { rel: "icon", url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { rel: "icon", url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
  },
  manifest: "/site.webmanifest",
  openGraph: {
    title: "PromptKit — System Prompt Library for 200+ AI Models",
    description:
      "Expert-crafted system prompts for 200+ AI models. Based on official docs. Copy and paste into ChatGPT, Claude, or Gemini.",
    type: "website",
    siteName: "PromptKit",
    locale: "en_US",
    url: "https://promptkit.qzz.io",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "PromptKit — System Prompt Library for 200+ AI Models" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "PromptKit — System Prompt Library for 200+ AI Models",
    description:
      "Expert-crafted system prompts for 200+ AI models. Based on official docs.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://promptkit.qzz.io",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "SoftwareApplication",
                  name: "PromptKit",
                  description: "System prompt library for AI models based on official documentation",
                  applicationCategory: "DeveloperApplication",
                  operatingSystem: "Web",
                  url: "https://promptkit.qzz.io",
                  offers: {
                    "@type": "Offer",
                    price: "0",
                    priceCurrency: "USD",
                  },
                  featureList: [
                    "200+ AI model system prompts",
                    "Official documentation sources",
                    "GPT-5.5, Claude Opus 4, Gemini 3.5, GLM-5.2, Sora 2 support",
                    "Midjourney, Flux 2, Kling 3, GPT Image 2, Qwen Image support",
                    "Chinese AI model support",
                    "Open-weight model support",
                  ],
                },
                {
                  "@type": "WebSite",
                  name: "PromptKit",
                  url: "https://promptkit.qzz.io",
                  description: "System prompt library for 200+ AI models based on official documentation",
                  potentialAction: {
                    "@type": "SearchAction",
                    target: {
                      "@type": "EntryPoint",
                      urlTemplate: "https://promptkit.qzz.io/?q={search_term_string}",
                    },
                    "query-input": "required name=search_term_string",
                  },
                },
              ],
            }),
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Toaster richColors position="bottom-right" />
        </ThemeProvider>
      </body>
    </html>
  );
}
