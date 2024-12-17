import Link from "next/link";

export default function ProjectNotFound() {
    return (
        <div className="flex flex-auto justify-center items-center xl:px-12 font-[family-name:var(--font-geist-sans)]">
        <div className="container mx-auto flex flex-col justify-center items-center h-full w-full gap-8">
            <h1
            className="text-4xl font-semibold"
            >Project Not Found</h1>
            <Link
                href="/projects"
            
            >
                <button
                className="px-6 py-4 bg-red-600 text-white rounded-lg hover:bg-red-700 transition"
                >Go Back
                </button></Link>
        </div>
    </div>
    );
  }