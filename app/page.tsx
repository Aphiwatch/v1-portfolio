export default function Home() {
  return (
    <div className="flex flex-grow justify-center items-center xl:px-12 font-[family-name:var(--font-geist-sans)]">
      {/* main */}
      <div className="container mx-auto grid h-full w-full grid-cols-8 grid-rows-8 gap-8">
        {/* hero section */}
        <div className="col-span-3 row-span-8 bg-accent rounded-3xl flex justify-center items-center">Hero</div>

        {/* Position section */}
        <div className="col-span-5 row-span-1 bg-accent rounded-3xl flex justify-center items-center">Software Developer</div>

        {/* projects section */}
        <div className="col-span-3 row-span-3 bg-accent rounded-3xl flex justify-center items-center">Projects</div>

        {/* skills section */}
        <div className="col-span-2 row-span-3 bg-accent rounded-3xl flex justify-center items-center">Skills</div>

        {/* Github section */}
        <div className="col-span-1 row-span-2 bg-accent rounded-3xl flex justify-center items-center">Github</div>

        {/* LinkedIn section */}
        <div className="col-span-1 row-span-2 bg-accent rounded-3xl flex justify-center items-center opacity-100 hover:bg-current duration-300">LinkedIn</div>
        
        {/* about section */}
        <div className="col-span-3 row-span-4 bg-accent rounded-3xl flex justify-center items-center">About(work exp.)</div>

        {/* contact section */}
        <div className="col-span-2 row-span-2 bg-accent rounded-3xl flex justify-center items-center relative overflow-hidden shadow-lg group"
        >
          Contact
          <div className="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="absolute bottom-0 left-0 right-0 p-4">
              <h1 className="text-4xl font-semibold">More</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
