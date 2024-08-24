import { Github, Linkedin } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full py-8">
      <div className="container mx-auto px-4 md:px-6 lg:px-32 flex flex-col md:flex-row items-center justify-between">
        <span className="text-sm text-gray-600 mb-4 md:mb-0 text-center md:text-left">
          © 2024 Made with 💜 by Jolynn
        </span>
        <div className="flex flex-col md:flex-row items-center gap-2 md:gap-4">
          <span className="text-sm text-gray-600">Get in Touch:</span>
          <div className="flex gap-4">
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
    </footer>
  );
}
