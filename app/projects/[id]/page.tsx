"use client"
import { useParams } from 'next/navigation';
import { projects } from '@/app/projects/data';
import ProjectNotFound from '@/components/ProjectNotFound';

export default function Details() {

    const { id } = useParams();

    const prijectdata = projects.find((project) => project.id === id);
    
    if (!prijectdata) {
        return <ProjectNotFound />;
    }

    return (
        <div className="flex flex-auto justify-center items-center xl:px-12 font-[family-name:var(--font-geist-sans)]">
            <div className="container mx-auto grid h-full w-full grid-cols-8 grid-rows-8 gap-8">
                <h1>Details Page</h1>

            </div>
        </div>
    )
} 