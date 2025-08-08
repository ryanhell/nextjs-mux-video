import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";
import Header from "@/components/Header";
import SidaBar from "@/components/SidaBar";
import BagShawGallery from "@/components/BagShawGallery";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ryan Hell Defense Evidence case # 2410025304",
  description: "Case evidence Ryan Hell vs Chelan County Washington State Case # 2410025304",
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
            <div className="">
              <h1>Chelan County Superior Court Case 2410025304</h1>
              <h3>3 Counts of Felony Harassment</h3>
              <p>Deep state kidnapping and attemopted murder foiled and they are charging me with completely bogus alligations after they denied us ambulance for declared life threatening medical emrgenciues, verified as life in danger by one of them; instead of ambulance they took us to an iolated desert canyon road to a home where our cell ophones would not work. They had unknown men go steal my truck and drive it to this house where they began demanding a cash ransom and assaulting me, denied us phone calls for over 2 hours; threatened to shoot me, would not let us leave or talk to each other threatenmed to shoot me. Called a chelan county sheriff deputy buddy and ordered me to be disappeared for good. They have tried to hide evidence. Tampered with video and denied me a digital forenics preservation motion. </p>
              <p>Sometime towards the end of this ordeal a woman was ordered to flee the scene so deputies could come onto the property. </p>

              <p>Ive since identified this woman as Sally Bagshaw, a formre CHIEF PROSECUTIOR in King County and a Seattle City Council Woman who was unusually protective of Ed Murray the disgraced and resigned SERIAL pedophile mayor who prayed on black CPS kids he was trusted with/</p>
              {children}
              <BagShawGallery />
            </div>
          </div>
        </main>
        <SidaBar className="order-first  overflow-y-auto" />

        <Toaster
          className="bg-purple-darker text-light"
          position="top-right"
          duration={10000}
        />
      </body>
    </html >
  );
}
