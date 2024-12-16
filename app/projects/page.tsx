import { projects } from "@/app/projects/data";
import Link from "next/link";
// import {
//     Card,
//     CardContent,
//     CardDescription,
//     CardFooter,
//     CardHeader,
//     CardTitle,
//   } from "@/components/ui/card"

import Card from "@/components/Card";
import { ScrollArea } from "@/components/ui/scroll-area"


export default function Projects() {
  return (
    <div className="flex flex-auto justify-center items-center xl:px-12 font-[family-name:var(--font-geist-sans)]">
      <ScrollArea className="h-[800px] w-full">
        <div className="container grid grid-cols-3 gap-8">
      {projects.map((project) => (
          <Link
            href="/projects/details"
            key={project.id}
          >
            <Card 
              name={project.name}
              stack={project.stack}
            />
          </Link>
        ))}
        
      </div>
      
        </ScrollArea>
      
    </div>
  );
}
