"use client";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Github, Linkedin, Menu } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavbarSheet() {
  const pathname = usePathname();

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline" size="icon" className="shrink-0 md:hidden">
          <Menu className="h-5 w-5" />
          <span className="sr-only">Toggle navigation menu</span>
        </Button>
      </SheetTrigger>
      <SheetTitle className="hidden">
        <span className="sr-only">Navigation menu</span>
      </SheetTitle>
      <SheetContent
        side="left"
        className="flex flex-col items-start justify-start p-6 w-5/6"
      >
        <div className="flex flex-col items-start justify-between gap-4 h-full">
          <nav className="flex flex-col items-start gap-2">
            <Link
              href="/"
              className={`flex w-full items-center gap-2 rounded-md px-3 py-2 text-sm font-medium ${
                pathname === "/" ? "text-indigo-700" : "text-slate-800/90"
              }`}
              prefetch={false}
            >
              Home
            </Link>
            <Link
              href="#"
              className="flex w-full items-center gap-2 rounded-md px-3 py-2 text-sm font-medium ${
               text-slate-800/90"
              prefetch={false}
            >
              About
            </Link>
            <Link
              href="/projects"
              className={`flex w-full items-center gap-2 rounded-md px-3 py-2 text-sm font-medium ${
                pathname === "/projects"
                  ? "text-indigo-700"
                  : "text-slate-800/90"
              }`}
              prefetch={false}
            >
              Projects
            </Link>
          </nav>
          <div className="flex flex-col md:flex-row items-start gap-2 md:gap-4">
            <span
              className="flex w-full items-center gap-2 rounded-md px-3 py-2 text-sm font-medium ${
               text-slate-800/90"
            >
              Get in Touch:
            </span>
            <div className="flex gap-4 px-3">
              <Link href="https://github.com/jolwnn" prefetch={false}>
                <Github className="text-gray-600 w-5 h-5 hover:text-indigo-600 transition-colors duration-300" />
              </Link>
              <Link
                href="https://www.linkedin.com/in/zhuo-lin-wee/"
                prefetch={false}
              >
                <Linkedin className="text-gray-600 w-5 h-5 hover:text-indigo-600 transition-colors duration-300" />
              </Link>
            </div>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}
