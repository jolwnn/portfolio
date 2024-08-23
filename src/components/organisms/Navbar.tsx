"use client";
import { Github, Linkedin } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();
  return (
    <nav className="relative flex items-center w-full">
      <div className="flex-1 flex justify-center">
        <Link
          href="/"
          prefetch={false}
          className={`font-medium px-3 py-1.5 group flex gap-0.5 items-center justify-center rounded-full ${
            pathname === "/"
              ? "text-indigo-700 bg-indigo-100/40"
              : "text-slate-800/90 hover:text-indigo-700 hover:bg-indigo-100/40"
          }`}
        >
          Home
          <span className="hidden group-hover:block">🏡</span>
        </Link>
        <Link
          href="#"
          className={`font-medium px-3 py-1.5 group flex gap-1 items-center justify-center rounded-full ${
            pathname === "/about"
              ? "text-indigo-700 bg-indigo-100/40"
              : "text-slate-800/90 hover:text-indigo-700 hover:bg-indigo-100/40"
          }`}
          prefetch={false}
        >
          About Me
          <span className="hidden group-hover:block">🌌</span>
        </Link>
        <Link
          href="/projects"
          className={`font-medium px-3 py-1.5 group flex gap-1 items-center justify-center rounded-full ${
            pathname === "/projects"
              ? "text-indigo-700 bg-indigo-100/40"
              : "text-slate-800/90 hover:text-indigo-700 hover:bg-indigo-100/40"
          }`}
          prefetch={false}
        >
          Projects
          <span className="hidden group-hover:block">🚀</span>
        </Link>
      </div>
      <span className="absolute right-0 flex gap-4 items-center pr-4">
        <Link href="https://github.com/jolwnn" prefetch={false}>
          <Github className="text-slate-800/70 size-5 hover:text-indigo-600" />
        </Link>
        <Link href="https://www.linkedin.com/in/zhuo-lin-wee/" prefetch={false}>
          <Linkedin className="text-slate-800/70 size-5 hover:text-indigo-600" />
        </Link>
      </span>
    </nav>
  );
}
