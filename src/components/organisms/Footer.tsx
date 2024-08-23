import { Github, Linkedin } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full py-16">
      <div className="w-full container px-4 md:px-6 lg:px-32 flex justify-between items-center">
        <span>© 2024 Made with 💜 by Jolynn</span>
        <span className="flex gap-4 items-center">
          <span className="text-slate-800/90">Get in Touch:</span>
          <Link href="https://github.com/jolwnn" prefetch={false}>
            <Github className="text-slate-800/90 size-4 cursor-pointer hover:text-indigo-600" />
          </Link>
          <Link
            href="https://www.linkedin.com/in/zhuo-lin-wee/"
            prefetch={false}
          >
            <Linkedin className="text-slate-800/90 size-4 hover:text-indigo-600" />
          </Link>
        </span>
      </div>
    </footer>
  );
}
