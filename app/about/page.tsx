import { workexp, education } from "@/app/about/data";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export default function About() {
  return (
    <div className="flex flex-auto justify-center items-center xl:px-12 font-[family-name:var(--font-geist-sans)]">
      {/* Main Grid size 8*8 */}
      <div className="container mx-auto grid h-full w-full grid-cols-8 grid-rows-8 gap-8">
        {/* About section */}
        <div className="col-span-3 row-span-4 bg-accent rounded-3xl shadow-lg">
          <div className="container">
            <p className="text-xl p-4">What im about ?</p>

            <div className="text-md pl-4 pr-4 pb-4">
              <div className="shrink-0 bg-accent-foreground h-[1px] w-full"></div>
              <div className="text-gray-400 pt-4 pb-4">My Story</div>
              <div className="pb-4">
                I was born at 09 june 2001 at Surin Thailand when i grow up i
                really love a Gundam and interest how to develop it or system to
                control a Gundam that is reason im Graduate in Computer
                Engineering at Kasetsart University and working on software
                engineer.
              </div>
              <div className="text-gray-400 pb-4">Im Now</div>
              <div className="pb-4">
                Im a Software developer and interest a Backend Now.
              </div>
            </div>
          </div>
        </div>

        {/* Education Section */}
        <div className="col-span-5 row-span-3 bg-accent rounded-3xl shadow-lg">
          <div className="container h-full">
            <div className="text-xl p-4">Education</div>
            <div className="text-md pl-4 pr-4 pb-4">
              <div className="shrink-0 bg-accent-foreground h-[1px] w-full"></div>
              <div className="pt-8 pb-8">
                <div className="grid grid-cols-2 gap-8">
                  {education.map((edu) => (
                    <li
                      key={edu.id}
                      className="h-full rounded-xl flex flex-col justify-center items-center 
                            lg:items-start gap-4 bg-card p-4"
                    >
                      {/* Duration */}
                      <span className="text-gray-400">{edu.duration}</span>

                      {/* Institute */}
                      <h3 className="text-xl">{edu.institute}</h3>

                      {/* Degree */}
                      <div className="flex items-center gap-3">
                        <span className="w-[6px] h-[6px] rounded-full bg-primary"></span>
                        <p className="text-gray-400">{edu.degree}</p>
                      </div>
                    </li>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Skill section */}
        <div className="col-span-3 row-span-5 bg-blue-700 rounded-3xl shadow-lg"></div>

        {/* Skill Section */}
        <div className="col-span-2 row-span-2 bg-red-600  rounded-3xl shadow-lg"></div>

        {/* Experience Section */}
        <div className="col-span-3 row-span-4 bg-accent rounded-3xl shadow-lg">
          <div className="container h-full">
            <div className="text-xl p-4">Experience</div>
            <div className="text-md pl-4 pr-4">
              <div className="shrink-0 bg-accent-foreground h-[1px] w-full"></div>
              <div className="pt-6 pb-8">
                <div className="grid grid-cols-1 gap-6">
                  <Carousel >
                    <CarouselContent>
                      {Array.from({ length: workexp.length }).map(
                        (_, index) => (
                          <CarouselItem key={index}>
                            <div
                              className="h-full rounded-xl flex flex-col justify-center items-center
                              lg:items-start gap-4 bg-card p-4"
                            >
                              {/* Duration */}
                              <span className="text-gray-400">
                                {workexp[index].date}
                              </span>

                              {/* Institute */}
                              <h3 className="text-xl">
                                {workexp[index].company}
                              </h3>

                              {/* Degree */}
                              <div className="flex items-center gap-3">
                                <span className="w-[6px] h-[6px] rounded-full bg-primary"></span>
                                <p className="text-gray-400">
                                  {workexp[index].role}
                                </p>
                              </div>

                              {/* Description */}
                              <div className="text-gray-400 pt-2">
                                - {workexp[index].description}
                              </div>

                              {/* SubDescription */}
                              <div className="text-gray-400 pt-2">
                                - {workexp[index].subdescription}
                              </div>
                            </div>
                          </CarouselItem>
                        )
                      )}
                    </CarouselContent>
                    <CarouselPrevious />
                    <CarouselNext />
                  </Carousel>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* english level */}
        <div className="col-span-2 row-span-3 bg-yellow-400 rounded-3xl shadow-lg"></div>
      </div>
    </div>
  );
}
