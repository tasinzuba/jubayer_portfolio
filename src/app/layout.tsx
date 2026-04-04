import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Md Jubayer Ahamed — Full Stack Developer",
  description:
    "Full Stack Developer & Digital Marketing Expert. Next.js, Go, React, Node.js portfolio with interactive terminal.",
  keywords:
    "web developer, full stack, react, next.js, go, golang, node.js, digital marketing, SEO, portfolio, Bangladesh",
  authors: [{ name: "Md Jubayer Ahamed" }],
  icons: {
    icon: "/favicon.svg",
  },
  openGraph: {
    title: "Md Jubayer Ahamed — Full Stack Developer",
    description:
      "Full Stack Developer & Digital Marketing Expert. Explore my interactive terminal portfolio.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${jetbrainsMono.variable}`}
    >
      <body className="bg-secondary-dark text-text-primary font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
