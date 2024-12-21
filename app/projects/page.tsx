"use client";
import { useParams } from "next/navigation";
import { BsArrowUpRight, BsGithub, BsArrowLeft, BsArrowRight } from "react-icons/bs";
import Link from "next/link";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@radix-ui/react-tooltip";
import { ScrollArea } from "@/components/ui/scroll-area";
import Image from "next/image";
import {
    SiGo,
    SiPostgresql,
    SiFlutter,
    SiNextdotjs,
    SiTailwindcss
  } from "react-icons/si";
import { useState } from "react";

const projects = [
    {
        id: "1",
        name: "Mr. Kiwi",
        description: "Is a web application for make better experience for user.",
        role: "Software Developer",
        duration: "2023 - 2024",
        stack: [
            {
                icon: <SiNextdotjs/>,
                name: "Next.js"
            },
            {
                icon: <SiTailwindcss/>,
                name: "TailwindCSS"
          },
          {
            icon: <SiGo/>,
            name: "Golang"
          },
        ],
        preview_image:[
          "/public/images/404.png",
          "/public/images/404.png",
          "/public/images/404.png"
        ],
        repository: "https://google.com",
        demo: "https://google.com"
    },
    {
        id: "2",
        name: "Smart Fire Detection app",
        description: "Is a web application for make better experience for user.",
        role: "Mobile Developer",
        duration: "2023 - 2024",
        stack: [
            {
                icon: <SiFlutter/>,
                name: "Flutter"
            },
            {
                icon: <SiPostgresql/>,
                name: "PostgreSQL"
          },
          {
            icon: <SiGo/>,
            name: "Golang"
          },
        ],
        preview_image:[
          "/public/previews/pv_01.png",
          "/public/previews/pv_02.png",
          "/public/previews/pv_03.png"
        ],
        repository: "https://google.com",
        demo: "https://google.com"
    },
    
]

export default function ProjectsPage() {
  const [project, setProject] = useState(projects[0]);
  const params = useParams();

  // ฟังก์ชันเพื่อสลับ project ไปยังก่อนหน้า
  const handlePrevProject = () => {
    const currentIndex = projects.findIndex(p => p.id === project.id);
    const prevIndex = (currentIndex - 1 + projects.length) % projects.length;
    setProject(projects[prevIndex]);
  };

  // ฟังก์ชันเพื่อสลับ project ไปยังถัดไป
  const handleNextProject = () => {
    const currentIndex = projects.findIndex(p => p.id === project.id);
    const nextIndex = (currentIndex + 1) % projects.length;
    setProject(projects[nextIndex]);
  };

  return (
    <div className="flex flex-auto justify-center items-center xl:px-12 font-[family-name:var(--font-geist-sans)]">
      <div className="container mx-auto grid h-full w-full">
        {/* main */}
        <div className="flex flex-row justify-center items-center gap-4">
          {/* left section */}
          <div className="w-full h-full flex flex-col justify-between">
            {/* project name */}
            <div className="text-6xl font-semibold">{project?.name}</div>

            {/* project description */}
            <div className="text-4xl font-regular mt-4 mb-4 text-muted-foreground">
              Description
            </div>
            <div className="text-2xl font-regular">{project?.description}</div>

            {/* project role */}
            <div className="text-4xl font-regular mt-4 mb-4 text-muted-foreground">
              Role
            </div>
            <div className="text-2xl font-regular">{project?.role}</div>

            {/* project duration */}
            <div className="text-4xl font-regular mt-4 mb-4 text-muted-foreground">
              Duration
            </div>
            <div className="text-2xl font-regular">{project?.duration}</div>

            {/* project stack */}
            <div className="text-4xl font-regular mt-4 mb-4 text-muted-foreground">
              Stack
            </div>
            <div className="flex flex-row flex-wrap gap-6">
              {project?.stack.map((item, index) => (
                <TooltipProvider key={index}>
                  <Tooltip>
                    <TooltipTrigger>
                      <div className="bg-accent p-3 rounded-full flex justify-center items-center group">
                        <div className="text-4xl group-hover:text-primary transition-all duration-200">
                          {item.icon}
                        </div>
                      </div>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>{item.name}</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              ))}
            </div>

            {/* project repository and demo */}
            <div className="text-4xl font-regular mt-4 mb-4 text-muted-foreground">
              Links
            </div>
            <div className="flex flex-row justify-between">
              {/* left section */}
              <div className="flex flex-row gap-6">
                {/* liveproject button */}
                <div className="bg-accent p-3 rounded-full flex justify-center items-center group">
                  <Link href={project?.demo} target="_blank" rel="noopener noreferrer">
                    <BsArrowUpRight
                      className="text-4xl group-hover:text-primary transition-all duration-200"
                    />
                  </Link>
                </div>

                {/* github project button */}
                <div className="bg-accent p-3 rounded-full flex justify-center items-center group">
                  <Link href={project?.repository} target="_blank" rel="noopener noreferrer">
                    <BsGithub
                      className="text-4xl group-hover:text-primary transition-all duration-200"
                    />
                  </Link>
                </div>
              </div>

              {/* right section : back button */}
              <div className="flex items-center justify-end gap-6">
                <button onClick={handlePrevProject}>
                  <div className="bg-accent p-3 rounded-full flex justify-center items-center gap-2 group">
                    <BsArrowLeft
                      className="text-4xl group-hover:text-primary transition-all duration-200"
                    />
                  </div>
                </button>

                <button onClick={handleNextProject}>
                  <div className="bg-accent p-3 rounded-full flex justify-center items-center gap-2 group">
                    <BsArrowRight
                      className="text-4xl group-hover:text-primary transition-all duration-200"
                    />
                  </div>
                </button>
              </div>
            </div>
          </div>

          {/* right section */}
          <div className="w-full flex flex-col">
            <ScrollArea className="h-[800px] w-full">
              <div className="flex flex-row flex-wrap gap-6">
                {project?.preview_image.map((image, index) => (
                  <Image
                    key={index}
                    src={image}
                    alt={`${project.name} preview ${index + 1}`}
                    width={600}
                    height={600}
                    priority={true}
                    className="w-full h-auto"
                  />
                ))}
              </div>
            </ScrollArea>
          </div>
        </div>
      </div>
    </div>
  );
}
