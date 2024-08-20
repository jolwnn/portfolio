"use client";
import { Button } from "../ui/button";
import * as React from "react";

const jobs = ["Vucar", "Datature", "DSTA", "LCCL Coding Academy"];
type Job = (typeof jobs)[number];

export default function JobDisplay() {
  const [focused, setFocused] = React.useState<Job>(jobs[0]);
  return (
    <div className="grid grid-cols-4 w-full gap-4 px-4">
      <div className="col-span-1 flex flex-col items-start justify-start border-l-2 border-slate-800/50">
        {jobs.map((job, index) => (
          <Button
            key={index}
            variant="ghost"
            className={`justify-start w-full rounded-none hover:border-l-2 hover:border-indigo-600 hover:text-indigo-600 text-md ${
              job === focused
                ? "border-l-2 border-indigo-600 text-indigo-600"
                : "text-slate-800/80"
            }`}
            onClick={() => setFocused(job)}
          >
            {job}
          </Button>
        ))}
      </div>
    </div>
  );
}
