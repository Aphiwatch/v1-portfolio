import Link from "next/link";
import { FaLinkedinIn } from "react-icons/fa";
import { TbBrandGithubFilled, TbDownload } from "react-icons/tb";
import { FcContacts } from "react-icons/fc";
import Image from "next/image";
import profilePic from "@/assets/image/01.png";
import { FaLocationDot } from "react-icons/fa6";

const workexp = [
  {
    role: "Software Developer",
    company: "Extend It Resource Co., Ltd.",
    date: "Jul - Oct 2024",
  },
  {
    role: "Mobile Developer",
    company: "KTW",
    date: "May 2024",
  }
];
 
export default function Home() {
  return (
    <div className="flex flex-auto justify-center items-center xl:px-12 font-[family-name:var(--font-geist-sans)]">
      {/* main */}
      <div className="container mx-auto grid h-full w-full grid-cols-8 grid-rows-8 gap-8">
        {/* hero section */}
        <div className="col-span-3 row-span-8 bg-accent rounded-3xl flex flex-col justify-center items-center shadow-lg">
          {/* Image Section */}
          <div className="flex-grow flex justify-center items-center">
            <Image
              src={profilePic}
              width={400}
              height={400}
              alt="Picture of the author"
            />
          </div>

          {/* Name and Location */}
          <div className="flex justify-center items-center">
            <div className="flex flex-col justify-center items-start">
              <p className="text-5xl font-bold pb-2">Hello I'm Bank</p>
              <h1 className="text-4xl font-regular pb-2">
                Aphiwat Chalongtham
              </h1>
              <div className="flex justify-center items-center gap-2 pb-2">
                <FaLocationDot />
                <p className="">Surin, Thailand</p>
              </div>
            </div>
          </div>

          {/* Button */}
          <div className="flex justify-center p-8 items-center">
            <button
              className="
              bg-primary text-primary-foreground hover:bg-primary/90 
              rounded-xl font-medium text-2xl"
            >
              <div className="p-6 flex justify-center items-center gap-2">
                <p>Download CV</p>
                <TbDownload />
              </div>
            </button>
          </div>
        </div>

        {/* Position section */}
        <div className="col-span-5 row-span-1 flex items-center text-6xl font-extrabold">
          Software Developer
        </div>

        {/* projects section */}
        <div className="col-span-3 row-span-3 bg-accent rounded-3xl flex justify-center items-center shadow-lg">
          Projects
        </div>

        {/* skills section */}
        <div className="col-span-2 row-span-3 bg-accent rounded-3xl flex justify-center items-center shadow-lg">
          Skills
        </div>

        {/* Github section */}
        <div className="col-span-1 row-span-2 bg-accent rounded-3xl flex justify-center items-center relative overflow-hidden shadow-lg group">
          <Link
            href="https://github.com/Aphiwatch"
            rel="noopener noreferrer"
            target="_blank"
          >
            <TbBrandGithubFilled className="text-6xl" />
            <div className="absolute inset-0 bg-black text-white bg-opacity-100 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <TbBrandGithubFilled className="text-6xl absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
            </div>
          </Link>
        </div>

        {/* LinkedIn section */}
        <div className="col-span-1 row-span-2 bg-accent rounded-3xl flex justify-center items-center relative overflow-hidden shadow-lg group">
          <Link
            href="https://www.linkedin.com/in/aphiwat-chalongtham-00767b2b3/"
            rel="noopener noreferrer"
            target="_blank"
          >
            <FaLinkedinIn className="text-6xl" />
            <div className="absolute inset-0 bg-blue-600 text-white bg-opacity-100 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <FaLinkedinIn className="text-6xl absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
            </div>
          </Link>
        </div>

        {/* about section */}
        <div className="col-span-3 row-span-4 bg-accent rounded-3xl flex justify-center items-center shadow-lg">
            <div className="flex flex-col justify-center gap-16">
              {workexp.map((exp) => (
                <div className="text-2xl">
                  <p className="text-primary">{exp.role}</p>
                  <p className="font-bold">{exp.company}</p>
                  <div className="flex items-center gap-3">
                    <span className="w-[8px] h-[8px] rounded-full bg-primary"></span>
                    <p>{exp.date}</p>
                  </div>
                </div>
              ))}
            </div>
        </div>

        {/* contact section */}
        <div className="col-span-2 row-span-2 bg-accent rounded-3xl flex justify-center items-center relative overflow-hidden shadow-lg group">
          <Link href="/contact">
            <FcContacts className="text-7xl" />
            <div className="absolute inset-0 bg-primary text-white bg-opacity-100 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="absolute inset-0 bg-green-600">
                <FcContacts className="text-7xl absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
