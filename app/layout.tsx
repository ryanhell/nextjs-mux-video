import Banner from "@/components/Banner";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";
import Logo from "@/components/Logo";
import { ArrowRight, Menu } from 'lucide-react';

import Header from "@/components/Header";
import SidaBar from "@/components/SidaBar";
import { Button } from "@/components/ui/Button";
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from '@/components/ui/sheet';


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const navItems = [
  {
    title: 'Serverity',
    href: '/#severity',
  }, {
    title: '911',
    href: '/CADFiles',
  },
  {
    title: 'Police',
    href: '/PoliceReport',
  },
  {
    title: 'Videos',
    href: '/videos',
  },
  {
    title: 'Mysterious',
    href: '/SallyBagshaw',
  },
  {
    title: '911 Director',
    href: '/JeremiahJohnson',
  },
  {
    title: 'Contact',
    href: '/aboutRyan',
  },
];

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
            <div className=""><nav className="mx-auto flex h-18 w-full max-w-7xl items-center gap-12 px-6 sm:px-4">
              <Logo />
              <div className="hidden gap-3 lg:inline-flex">
                {navItems.map((item) => (
                  <Button key={item.title} asChild variant={'ghost'}>
                    <a href={item.href}>{item.title}</a>
                  </Button>
                ))}
              </div>
              <div className="hidden flex-1 justify-end gap-3 lg:inline-flex">

              </div>
              <Sheet>
                <SheetTrigger asChild className="ml-auto lg:hidden">
                  <Button variant="outline" size="icon" aria-label="Open Menu">
                    <Menu />
                  </Button>
                </SheetTrigger>
                <SheetContent side="right" className="flex w-[90%] max-w-sm flex-col px-6 py-6">
                  <SheetTitle>
                    <a href="#" className="[&_svg]:fill-primary [&_svg]:text-primary inline-flex h-9 items-center gap-2 text-2xl/none font-bold tracking-tight [&_svg]:size-7">
                      <svg width="28" height="28" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect width="30" height="30" rx="15" fill="var(--primary)"></rect>

                      </svg>
                      LEGAL EVIDENCE HELP NEEDED
                    </a>
                  </SheetTitle>
                  <nav className="-mx-4 my-6 flex flex-1 flex-col gap-2">
                    {navItems.map((item) => (
                      <Button key={item.title} asChild className="justify-start text-base" variant={'ghost'}>
                        <a href={item.href}>{item.title}</a>
                      </Button>
                    ))}
                  </nav>

                </SheetContent>
              </Sheet>
            </nav>{children}</div>

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