import Footer from "@/components/organisms/Footer";
import Navbar from "@/components/organisms/Navbar";
import { Badge } from "@/components/ui/badge";
import { ArrowUpRight, Github } from "lucide-react";
import Link from "next/link";

const PROJECTS = [
  {
    name: "Portfolio Website",
    description:
      "You are looking at it! A portfolio website built with Next.js, TailwindCSS, and Supabase.",
    image: "/placeholder.jpg",
    github: "https://github.com/jolwnn/portfolio",
    preview: null,
    tags: ["Next.js", "React", "TailwindCSS", "TypeScript"],
  },
  {
    name: "Snippet Monster",
    description:
      "An end-to-end project for organizing code snippets. Created with React and Supabase for backend, it provides user authentication, search and filtering, and real-time synchronisation.",
    image: "/snippetmonster.png",
    github: "https://github.com/jolwnn/snippet-monster",
    preview: "https://snippet-monster.vercel.app/",
    tags: ["React", "Vite", "Supabase", "TypeScript", "TailwindCSS", "Shadcn"],
  },
  {
    name: "Student Attendance Management System",
    description:
      "A facial recognition-based attendance tracking web app, complete with a student management system to perform CRUD operations.",
    image: "/samspreview.png",
    github:
      "https://github.com/jolwnn/Student-Attendance-Management-System-MERN",
    preview: null,
    tags: ["MongoDB", "Express", "React", "Node.js", "HTML", "CSS", "Flask"],
  },
  {
    name: "Car Inspection App",
    description:
      "A simple app to record the results of car inspections, built for a technical assessment.",
    image: "/carinspection.png",
    github: "https://github.com/jolwnn/Car-Inspector-App",
    preview: null,
    tags: ["Flask", "SQLite", "HTML", "CSS", "JavaScript", "Python"],
  },
  {
    name: "Chinese Idiom-based Username Generator",
    description: "A simple web-development and web-scraping passion project",
    image: "/usernamegenerator.png",
    github:
      "https://github.com/jolwnn/Chinese-Idiom-Username-Generator-wServer",
    preview: null,
    tags: ["Flask", "Html", "CSS", "JavaScript", "Python"],
  },
];

export default function Projects() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-start bg-indigo-50/70">
      <header className="flex w-full justify-center items-center py-4 px-6">
        <Navbar />
      </header>
      <section className="w-full py-16 md:py-5">
        <div className="w-full container px-4 md:px-6 lg:px-32 flex flex-col items-start justify-center gap-6">
          <h1 className="text-xl font-bold sm:text-5xl text-indigo-600/90 tracking-tighter pl-3">
            <span className="text-slate-800/90 mr-4">My</span>
            <span>Projects</span>
            <span className="text-slate-800/90">.</span>
          </h1>
        </div>
        <div className="flex flex-col items-center justify-center p-10 w-full">
          {PROJECTS.map((project, index) => (
            <article
              className="flex items-start justify-start w-[850px] gap-10 border-b py-4 px-10"
              key={index}
            >
              <img
                src={project.image}
                alt={project.name}
                width={170}
                height={90}
                className="rounded-sm object-cover mt-4"
                style={{ aspectRatio: "170/90", objectFit: "cover" }}
              />
              <div className="space-y-2 col-span-3 w-full">
                <span className="flex items-center justify-between w-full">
                  <Link
                    href={project.preview ?? project.github}
                    prefetch={false}
                    className="flex items-center font-semibold text-slate-800/90 group hover:underline"
                  >
                    {project.name}
                    {project.preview && (
                      <ArrowUpRight className="ml-4 size-5 text-indigo-500/90 group-hover:text-slate-800/90" />
                    )}
                  </Link>
                  <Link href={project.github} prefetch={false}>
                    <Github className="size-4 text-slate-800/90 hover:text-slate-800/70" />
                  </Link>
                </span>
                <div className="flex flex-wrap gap-1">
                  {project.tags.map((tag, index) => (
                    <Badge variant="secondary" key={index} className="py-0.5">
                      {tag}
                    </Badge>
                  ))}
                </div>
                <p className="text-gray-600/80 md:text-[13px] text-justify">
                  {project.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>
      <Footer />
    </main>
  );
}
