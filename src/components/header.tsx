import { Menu } from "lucide-react";

import { Accordion } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import config from "@/constants/config";
import Image from "next/image";
import Link from "next/link";
import Logo from "./logo";

interface MenuItem {
  title: string;
  url: string;
}

export default function Header() {
  return (
    <section className="py-4 fixed top-0 left-0 right-0 z-50 bg-background">
      <div className="container mx-auto">
        <nav className="hidden justify-between lg:flex">
          <div className="flex items-center gap-6">
            <Logo />
            <div className="flex items-center">
              {config.HEADER.map((item) => (
                <Button key={item.name} variant="ghost" size="sm" asChild>
                  <Link href={item.href}>{item.name}</Link>
                </Button>
              ))}
            </div>
          </div>
          <div className="flex gap-2">
            <Button asChild variant="outline" size="sm">
              <Link href="/sign-in">Sign In</Link>
            </Button>
            <Button asChild variant="action" size="sm">
              <Link href="/sign-up">Get Started</Link>
            </Button>
          </div>
        </nav>

        <div className="block lg:hidden">
          <div className="flex items-center justify-between">
            <Logo />
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline" size="icon">
                  <Menu className="size-4" />
                </Button>
              </SheetTrigger>
              <SheetContent className="overflow-y-auto">
                <SheetHeader>
                  <SheetTitle>
                    <Link href={"/"} className="flex items-center gap-2">
                      <Image src={"/assets/images/logo.png"} className="max-h-8" alt={"logo"} />
                    </Link>
                  </SheetTitle>
                </SheetHeader>
                <div className="flex flex-col gap-6 p-4">
                  <Accordion type="single" collapsible className="flex w-full flex-col gap-4">
                    {config.HEADER.map((item) => (
                      <Link key={item.name} href={item.href} className="text-md font-semibold">
                        {item.name}
                      </Link>
                    ))}
                  </Accordion>

                  <div className="flex flex-col gap-3">
                    <Button asChild variant="outline">
                      <Link href="/sign-in">Sign In</Link>
                    </Button>
                    <Button asChild>
                      <Link href="/sign-up">Sign Up</Link>
                    </Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </section>
  );
}
