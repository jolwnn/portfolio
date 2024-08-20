import Link from "next/link";
export default function Navbar() {
  return (
    <nav className="flex gap-1">
      <Link
        href="#"
        className="font-medium underline-offset-4 text-slate-800/90 hover:text-indigo-700 hover:bg-indigo-100/60 px-4 py-2 group flex gap-0.5 items-center justify-center rounded-full"
        prefetch={false}
      >
        Home
        <span className="hidden group-hover:block">🏡</span>
      </Link>
      <Link
        href="#"
        className="font-medium underline-offset-4 text-slate-800/90 hover:text-indigo-700 hover:bg-indigo-100/60 rounded-full px-4 py-2 group flex gap-1 items-center justify-center"
        prefetch={false}
      >
        Projects
        <span className="hidden group-hover:block">🚀</span>
      </Link>
      <Link
        href="#"
        className="font-medium underline-offset-4 text-slate-800/90 hover:text-indigo-700 hover:bg-indigo-100/60 rounded-full px-4 py-2 group flex gap-1 items-center justify-center"
        prefetch={false}
      >
        About Me
        <span className="hidden group-hover:block">🌌</span>
      </Link>
    </nav>
  );
}
