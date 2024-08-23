"use client";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import Link from "next/link";
import * as React from "react";

const jobs = [
  { company: "Vucar", date: "2024" },
  { company: "Datature", date: "2023" },
  { company: "DSTA", date: `2021` },
  { company: "LCCL Academy", date: "2020" },
];

export default function JobDisplay() {
  const [focused, setFocused] = React.useState<String>(jobs[0].company);
  return (
    <div className="grid grid-cols-4 w-full">
      <div className="col-span-1 flex flex-col items-start justify-start border-l-2 border-slate-800/50">
        {jobs.map((job, index) => (
          <Button
            key={index}
            variant="ghost"
            className={`gap-4 grid grid-cols-3 w-full rounded-none hover:border-l-2 hover:border-indigo-600 group ${
              job.company === focused ? "border-l-2 border-indigo-600" : ""
            }`}
            onClick={() => setFocused(job.company)}
          >
            <span
              className={`col-span-1 font-light text-xs group-hover:text-indigo-600 ${
                job.company === focused
                  ? "text-indigo-600"
                  : "text-slate-800/80"
              }`}
            >
              {job.date}
            </span>
            <span
              className={`text-left col-span-2 text-md group-hover:text-indigo-600
                ${
                  job.company === focused
                    ? "text-indigo-600"
                    : "text-slate-800/90"
                }
              `}
            >
              {job.company}
            </span>
          </Button>
        ))}
      </div>
      <div className="col-span-3 mx-4">
        {focused === "Vucar" && <Vucar />}
        {focused === "Datature" && <Datature />}
        {focused === "DSTA" && <Dsta />}
        {focused === "LCCL Academy" && <Lccl />}
      </div>
    </div>
  );
}

function Vucar() {
  return (
    // note i set gap to gap-4
    <div className="flex flex-col items-start justify-start gap-4 w-full">
      <div className="flex flex-col items-start justify-start gap-1">
        <span className="text-xl flex items-start justify-start gap-1 font-semibold">
          <span className="text-slate-800">Software Engineer Intern</span>
          <Link href="#" className="text-indigo-600 hover:underline">
            @ Vucar
          </Link>
        </span>
        <span className="text-[14px] text-slate-800/80">
          May — August 2024 &nbsp;&nbsp;|&nbsp;&nbsp; Onsite in Ho Chi Minh City
        </span>
      </div>
      <p className="text-gray-600/80 md:text-[14px]">
        Vucar is a C2B AI-enabled used car marketplace. I interned at Vucar
        through the NUS Overseas Colleges Southeast Asia 3-month Program, an
        experiential learning program with a focus on entrepreneurship.
      </p>
      <div className="text-gray-600/80 md:text-[14px] gap-2 grid grid-cols-12 w-full">
        <Check className="text-indigo-600 size-5 col-span-1 mt-1" />
        <span className="col-span-11">
          Developed both frontend and backend for a report and form builder for
          car inspections, set up CRUD operations and designed the database
          using Drizzle ORM and PostgreSQL.
        </span>
        <Check className="text-indigo-600 size-5 col-span-1 mt-1" />
        <span className="col-span-11">
          Built the end-to-end flow for car sellers from the landing page to the
          car auction site, involving multi-step forms.
        </span>
        <Check className="text-indigo-600 size-5 col-span-1 mt-1" />
        <span className="col-span-11">
          Created display for car penalty tickets and cut fetch times by 95%
          through caching with SWR and Zustand.
        </span>
      </div>
      <div className="flex flex-col items-start justify-start gap-2">
        <span className="text-slate-800/90 text-[14px] font-semibold">
          Technologies Used 🚀:
        </span>
        <span className="flex gap-1 flex-wrap">
          <Badge variant="secondary">Drizzle ORM</Badge>
          <Badge variant="secondary">PostgreSQL</Badge>
          <Badge variant="secondary">React</Badge>
          <Badge variant="secondary">Next.js</Badge>
          <Badge variant="secondary">TypeScript</Badge>
          <Badge variant="secondary">Shadcn</Badge>
          <Badge variant="secondary">Tailwind CSS</Badge>
          <Badge variant="secondary">Nginx</Badge>
          <Badge variant="secondary">Docker</Badge>
        </span>
      </div>
    </div>
  );
}

function Datature() {
  return (
    <div className="flex flex-col items-start justify-start gap-3 w-full">
      <div className="flex flex-col items-start justify-start gap-1">
        <span className="text-xl flex items-start justify-start gap-1 font-semibold">
          <span className="text-slate-800">
            Software Engineer and Quality Assurance Intern
          </span>
          <Link href="#" className="text-indigo-600 hover:underline">
            @ Datature
          </Link>
        </span>
        <span className="text-[14px] text-slate-800/80">
          May — July 2023 &nbsp;&nbsp;|&nbsp;&nbsp; Onsite in Singapore
        </span>
      </div>
      <p className="text-gray-600/80 md:text-[14px]">
        Datature is an end-to-end no-code ml-ops platform.
      </p>
      <div className="text-gray-600/80 md:text-[14px] gap-2 grid grid-cols-12 w-full">
        <Check className="text-indigo-600 size-5 col-span-1 mt-1" />
        <span className="col-span-11">
          Created Python script to automate testing for API.
        </span>
        <Check className="text-indigo-600 size-5 col-span-1 mt-1" />
        <span className="col-span-11">
          Designed and executed test cases. Maintained detailed reports for
          issues with Jira / Confluence. Optimized quality assurance process
          with product manager.
        </span>
      </div>
      <div className="flex flex-col items-start justify-start gap-2">
        <span className="text-slate-800/90 text-[14px] font-semibold">
          Technologies Used 🚀:
        </span>
        <span className="flex gap-1 flex-wrap">
          <Badge variant="secondary">Python</Badge>
          <Badge variant="secondary">Jira</Badge>
          <Badge variant="secondary">Confluence</Badge>
          <Badge variant="secondary">Jupyter Notebook</Badge>
        </span>
      </div>
    </div>
  );
}

function Dsta() {
  return (
    <div className="flex flex-col items-start justify-start gap-3 w-full">
      <div className="flex flex-col items-start justify-start gap-1">
        <span className="text-xl flex items-start justify-start gap-1 font-semibold">
          <span className="text-slate-800">Video Analytics Intern</span>
          <Link
            href="#"
            prefetch={false}
            className="text-indigo-600 hover:underline"
          >
            @ DSTA
          </Link>
        </span>
        <span className="text-[14px] text-slate-800/80">
          Nov — Dec 2021 &nbsp;&nbsp;|&nbsp;&nbsp; Onsite in Singapore
        </span>
      </div>
      <p className="text-gray-600/80 md:text-[14px]">
        The Defence Science and Technology Agency (DSTA) is a statutory board
        under the Ministry of Defence of Singapore.
      </p>
      <div className="text-gray-600/80 md:text-[14px] gap-2 grid grid-cols-12 w-full">
        <Check className="text-indigo-600 size-5 col-span-1 mt-1" />
        <span className="col-span-11">
          Assessed 15+ commercial video analytics software by testing and
          meetings with companies.
        </span>
        <Check className="text-indigo-600 size-5 col-span-1 mt-1" />
        <span className="col-span-11">
          Researched computer vision models and annotated datasets for people
          re-identification. Final product deployed for counter-terrorism at
          national events.
        </span>
      </div>
    </div>
  );
}

function Lccl() {
  return (
    <div className="flex flex-col items-start justify-start gap-3 w-full">
      <div className="flex flex-col items-start justify-start gap-1">
        <span className="text-xl flex items-start justify-start gap-1 font-semibold">
          <span className="text-slate-800">
            Teaching Assistant and Admin Intern
          </span>
          <Link
            href="#"
            prefetch={false}
            className="text-indigo-600 hover:underline"
          >
            @ LCCL Coding Academy
          </Link>
        </span>
        <span className="text-[14px] text-slate-800/80">
          Dec 2020 &nbsp;&nbsp;|&nbsp;&nbsp; Onsite in Singapore
        </span>
      </div>
      <p className="text-gray-600/80 md:text-[14px]">
        Taught programming to 10+ children. Designed and facilitated lessons for
        Lego robotics camp. Wrote script to automate data entry after
        understanding needs from supervisor.
      </p>
    </div>
  );
}
