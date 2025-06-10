import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { SkipProvider } from "./context/SkipContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "We Want Waste - Skip Hire",
  description: "Book your skip hire online with We Want Waste",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className} suppressHydrationWarning>
        <SkipProvider>{children}</SkipProvider>
      </body>
    </html>
  );
}
