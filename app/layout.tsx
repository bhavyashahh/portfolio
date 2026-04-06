import type { Metadata } from "next";
import localFont from "next/font/local";
import { ThemeProvider } from "next-themes";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Bhavya Nirav Shah | ML/AI Engineer",
  description:
    "Portfolio of Bhavya Nirav Shah — Machine Learning Engineer with experience at Apple, AWS, TikTok (ByteDance), and NASA. Specializing in LLM systems, distributed training, and CUDA optimization.",
  keywords: [
    "Machine Learning Engineer",
    "LLM",
    "CUDA",
    "Apple",
    "AWS",
    "TikTok",
    "ByteDance",
    "NASA",
    "Distributed Training",
    "AI Infrastructure",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} font-[family-name:var(--font-geist-sans)] antialiased`}
      >
        <ThemeProvider attribute="class" defaultTheme="dark">
          {/* Skip link for keyboard/screen reader users */}
          <a href="#about" className="skip-link">
            Skip to main content
          </a>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
