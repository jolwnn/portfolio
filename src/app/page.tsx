import Footer from "@/components/organisms/Footer";
import JobDisplay from "@/components/organisms/JobDisplay";
import Navbar from "@/components/organisms/Navbar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { FlipWords } from "@/components/ui/flip-words";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-start bg-indigo-50/70">
      <header className="flex w-full justify-center items-center py-4 px-6">
        <Navbar />
      </header>
      <section className="w-full py-16">
        <div className="w-full container px-4 md:px-6 lg:px-32">
          <div className="grid gap-6 lg:grid-cols-[1fr_450px] lg:gap-12">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-6">
                <p className="text-lg text-slate-800/90 md:text-xl pl-3 tracking-tight">
                  Hi, I&apos;m Jolynn 👋 I am a
                </p>
                <FlipWords
                  words={[
                    "Software Engineer",
                    "Full-Stack Developer",
                    "CS Student @ NUS",
                    "Problem Solver",
                    "Coding Enthusiast",
                  ]}
                  className="text-xl font-bold sm:text-7xl text-indigo-600/90 tracking-tighter"
                />
                <p className="w-[440px] text-slate-700/70 md:text-lg tracking-tight pl-3 leading-3">
                  I&apos;m a computer science student based in Singapore with a
                  strong passion for technology and building web applications.
                </p>
              </div>
              <div className="flex flex-col justify-start gap-2 md:flex-row md:p-3">
                <Button className="hover:shadow-lg rounded-full">
                  <Link
                    href="/projects"
                    prefetch={false}
                    className="py-0 px-3 text-sm"
                  >
                    View My Work <span className="text-lg">👀</span>
                  </Link>
                </Button>
                <Button
                  variant="outline"
                  className="hover:shadow-lg rounded-full"
                >
                  <Link
                    href="#"
                    prefetch={false}
                    className="py-0 px-2 text-sm text-slate-800/90"
                  >
                    Get My Resume <span className="text-lg">📬</span>
                  </Link>
                </Button>
                {/* <Button
                  variant="outline"
                  className="hover:shadow-lg rounded-full group"
                >
                  <Link
                    href="#"
                    prefetch={false}
                    className="py-0 px-2 text-sm group"
                  >
                    <span className="text-sm hidden group-hover:block transition duration-500 text-slate-800/90">
                      Get in Touch
                    </span>
                    <span className="text-lg group-hover:hidden transition duration-500">
                      ☎️
                    </span>
                  </Link>
                </Button> */}
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full py-16 md:py-5">
        <div className="w-full container px-4 md:px-6 lg:px-32 flex flex-col items-start justify-center gap-6">
          <h1 className="flex items-center text-xl font-bold sm:text-5xl text-indigo-600/90 tracking-tighter pl-3">
            <span className="text-slate-800/90 mr-4">My</span>
            <span>Projects</span>
            <span className="text-slate-800/90">.</span>
            <Link href="/projects" prefetch={false}>
              <ArrowUpRight className="ml-6 size-9 text-indigo-500/90 hover:text-slate-800/90" />
            </Link>
          </h1>
          <p className="text-slate-700/90 md:text-lg pl-4">
            I&apos;ve worked on a variety of projects, from web applications to
            building machine learning models. Here are some of my favourites:
            <Link
              href="/projects"
              prefetch={false}
              className="text-indigo-600/90 italic underline ml-2 hover:text-indigo-800"
            >
              (View All)
            </Link>
          </p>
          <div className="grid grid-cols-9 w-full gap-6">
            <div className="col-span-5 bg-indigo-100/40 flex items-center justify-center p-6 rounded-xl">
              <Image
                src="/snippetmonster.png"
                alt="Snippet Monster"
                width={520}
                height={520}
                className="object-contain hover:scale-105 shadow-lg"
                unoptimized
                priority
              />
            </div>
            <div className="col-span-4 bg-indigo-100/40 flex items-center justify-center rounded-xl p-0">
              <Image
                src="/sams.png"
                alt="Student Attendance Management System"
                width={800}
                height={800}
                className="object-contain hover:scale-105"
                unoptimized
                priority
              />
            </div>
            <div className="col-span-5 p-2 flex flex-col items-start justify-start gap-2">
              <Link
                href="https://github.com/jolwnn/snippet-monster"
                prefetch={false}
                className="text-lg font-bold sm:text-2xl text-slate-800/90 tracking-tight hover:underline text-left"
              >
                Snippet Monster 👾
              </Link>
              <p className="text-gray-600/80 md:text-[14px] text-justify mr-4">
                An end-to-end project for organizing code snippets. Created with
                React and Supabase for backend, it provides user authentication,
                search and filtering, and real-time synchronisation.
                <Link
                  href="https://snippet-monster.vercel.app/"
                  prefetch={false}
                  className="ml-2 text-indigo-600/90 underline font-semibold hover:text-indigo-800"
                >
                  Try it out here!
                </Link>
              </p>
              <div className="mt-4 flex flex-col items-start justify-start gap-2">
                <span className="text-slate-800/90 text-sm font-semibold">
                  Tech Stack 🚀:
                </span>
                <span className="flex gap-1 flex-wrap">
                  <Badge variant="secondary">Vite</Badge>
                  <Badge variant="secondary">React</Badge>
                  <Badge variant="secondary">TypeScript</Badge>
                  <Badge variant="secondary">Supabase</Badge>
                  <Badge variant="secondary">TailwindCSS</Badge>
                  <Badge variant="secondary">Shadcn</Badge>
                </span>
              </div>
            </div>
            <div className="col-span-4 p-2 flex flex-col items-start justify-start gap-2">
              <Link
                href="https://github.com/jolwnn/Student-Attendance-Management-System-MERN"
                prefetch={false}
                className="text-lg font-bold sm:text-2xl text-slate-800/90 tracking-tight hover:underline text-left"
              >
                Student Attendance
                <br /> Management System 📝
              </Link>
              <p className="text-gray-600/80 md:text-[14px] text-justify mr-4">
                A facial recognition-based attendance tracking web app, complete
                with a student management system to perform CRUD operations.
              </p>
              <div className="mt-4 flex flex-col items-start justify-start gap-2">
                <span className="text-slate-800/90 text-sm font-semibold">
                  Tech Stack 🚀:
                </span>
                <span className="flex gap-1 flex-wrap">
                  <Badge variant="secondary">MongoDB</Badge>
                  <Badge variant="secondary">Express</Badge>
                  <Badge variant="secondary">React</Badge>
                  <Badge variant="secondary">Node.js</Badge>
                  <Badge variant="secondary">HTML / CSS</Badge>
                  <Badge variant="secondary">Flask</Badge>
                </span>
              </div>
            </div>
          </div>
          <div className="flex w-full justify-center"></div>
        </div>
      </section>
      <section className="w-full py-16 md:py-5">
        <div className="w-full container px-4 md:px-6 lg:px-32 flex flex-col items-start justify-center gap-6">
          <h1 className="text-xl font-bold sm:text-5xl text-indigo-600/90 tracking-tighter pl-3">
            <span className="text-slate-800/90 mr-4">Where</span>
            <span className="text-slate-800/90 mr-4">I've</span>
            <span>Worked</span>
            <span className="text-slate-800/90">.</span>
          </h1>
          <JobDisplay />
        </div>
      </section>
      <Footer />
    </main>
  );
}
