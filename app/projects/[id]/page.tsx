import { projects } from "@/app/projects/data";
import ProjectNotFound from "@/components/ProjectNotFound";
import { BsArrowUpRight, BsGithub, BsArrowLeft } from "react-icons/bs";
import Link from "next/link";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@radix-ui/react-tooltip";
import { ScrollArea } from "@/components/ui/scroll-area";
import Image from "next/image";

interface PageProps {
  params: {
    id: string;
  };
}

export async function generateStaticParams() {
  return projects.map((project) => ({
    id: project.id,
  }));
}

export default async function Details({ params }: PageProps) {
  // รอให้ params resolve ก่อน
  const resolvedParams = await params;
  const { id } = resolvedParams;

  const projectdata = projects.find((project) => project.id === id);

  if (!projectdata) {
    return <ProjectNotFound />;
  }

  const {
    name,
    description,
    role,
    duration,
    stack,
    preview_image,
    repository,
    demo,
  } = projectdata;

  return (
    <div className="flex flex-auto justify-center items-center xl:px-12 font-[family-name:var(--font-geist-sans)]">
      <div className="container mx-auto grid h-full w-full">
        <div className="flex flex-row justify-center items-center gap-4">
          <div className="w-full h-full flex flex-col justify-between">
            <div className="text-6xl font-semibold">{name}</div>
            <div className="text-4xl font-regular mt-4 mb-4 text-muted-foreground">
              Description
            </div>
            <div className="text-2xl font-regular">{description}</div>

            <div className="text-4xl font-regular mt-4 mb-4 text-muted-foreground">
              Role
            </div>
            <div className="text-2xl font-regular">{role}</div>

            <div className="text-4xl font-regular mt-4 mb-4 text-muted-foreground">
              Duration
            </div>
            <div className="text-2xl font-regular">{duration}</div>

            <div className="text-4xl font-regular mt-4 mb-4 text-muted-foreground">
              Stack
            </div>
            <div className="flex flex-row flex-wrap gap-6">
              {stack.map((item, index) => (
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

            <div className="text-4xl font-regular mt-4 mb-4 text-muted-foreground">
              Links
            </div>
            <div className="flex flex-row justify-between">
              <div className="flex flex-row gap-6">
                <div className="bg-accent p-3 rounded-full flex justify-center items-center group">
                  <Link href={demo} target="_blank" rel="noopener noreferrer">
                    <BsArrowUpRight className="text-4xl group-hover:text-primary transition-all duration-200" />
                  </Link>
                </div>

                <div className="bg-accent p-3 rounded-full flex justify-center items-center group">
                  <Link href={repository} target="_blank" rel="noopener noreferrer">
                    <BsGithub className="text-4xl group-hover:text-primary transition-all duration-200" />
                  </Link>
                </div>
              </div>

              <div className="flex items-center justify-end">
                <Link href="/projects">
                  <div className="bg-accent p-3 rounded-full flex justify-center items-center gap-2 group">
                    <BsArrowLeft className="text-4xl group-hover:text-primary transition-all duration-200" />
                  </div>
                </Link>
              </div>
            </div>
          </div>

          <div className="w-full flex flex-col">
            <ScrollArea className="h-[800px] w-full">
              <div className="flex flex-row flex-wrap gap-6">
                {preview_image.map((image, index) => (
                  <Image
                    key={index}
                    src={image}
                    alt={`${name} preview ${index + 1}`}
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
