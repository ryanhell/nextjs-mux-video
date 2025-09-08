import Banner from "@/components/Banner";
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



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">



      <body
        className={`${geistSans.variable} ${geistMono.variable} tables antialiased flex min-h-screen h-screen flex-1  flex-row overflow-y-hidden shadow-[-39px_-50px_100px_47px_rgba(0,_0,_0,_1)]`}
      >
        <SidaBar className="order-first overflow-y-auto" />
        <main className="flex-1 overflow-y-auto">
          <div className="flex-1">

            <Header />
            <div className="">{children}</div>

          </div>
        </main>

        <Toaster
          className="bg-red-200 text-light"
          position="top-right"
          duration={10000}
        />
        <Toaster position="top-right" />
      </body >
    </html >
  );
}