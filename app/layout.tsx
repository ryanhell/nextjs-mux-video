import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";
import Header from "@/components/Header";
import SidaBar from "@/components/SidaBar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "video uploader",
  description: "Next + MuxVideo Uploader + Webhook",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased flex min-h-screen h-screen flex-1  flex-row overflow-y-hidden `}
      >
        <main className="flex-1   overflow-y-auto">
          <div className="p-6  px-8  flex-1 ">
            <Header />
            <div className="">{children}</div>
          </div>
        </main>
        <SidaBar className="order-first  overflow-y-auto" />

        <Toaster
          className="bg-purple-darker text-light"
          position="top-right"
          duration={10000}
        />
      </body>
    </html>
  );
}
