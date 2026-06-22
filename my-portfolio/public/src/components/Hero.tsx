import Image from "next/image";
import {
  ArrowUpRight,
  Code2,
  Download,
  Palette,
  Rocket,
  Sparkles,
  User,
} from "lucide-react";

export default function Hero() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-linear-to-b from-[#faf8ff] via-white to-[#f6edff]">
      {/* Background Glow */}
      <div className="absolute -left-40 bottom-0 h-full w-[500px] rounded-full bg-purple-300/30 blur-3xl" />
      <div className="absolute -right-40 bottom-0 h-full w-[500px] rounded-full bg-violet-300/30 blur-3xl" />

      {/* Navbar */}
      <div className="mx-auto max-w-7xl px-6 pt-6">
        <nav className="flex h-20 items-center justify-between rounded-full border border-white/50 bg-white/70 px-10 shadow-lg backdrop-blur-xl">
          <div className="text-5xl font-bold text-violet-600">S.</div>

          <ul className="hidden gap-12 text-lg font-medium text-slate-700 lg:flex">
            <li className="text-violet-600">Home</li>
            <li>About</li>
            <li>Services</li>
            <li>Projects</li>
            <li>Blog</li>
            <li>Contact</li>
          </ul>

          <button className="flex items-center gap-2 rounded-full bg-linear-to-r from-violet-600 to-purple-500 px-8 py-3 text-white shadow-lg">
            Contact Me
            <ArrowUpRight size={18} />
          </button>
        </nav>
      </div>

      {/* Hero Content */}
      <div className="relative mx-auto flex max-w-7xl flex-col items-center justify-center px-6 text-center z-20">
        {/* Left Image */}
        <div className="absolute  z-10 left-0 top-36 hidden xl:block">
          <Image
            src="/images/painter.png"
            alt=""
            width={350}
            height={350}
            className="drop-shadow-2xl "
          />
        </div>

        {/* Right Image */}
        <div className="absolute  z-10 right-0 top-30 hidden xl:block">
          <Image
            src="/images/tech-arm.png"
            alt=""
            width={390}
            height={390}
            className="drop-shadow-2xl"
          />
        </div>

        {/* Heading */}
        <div className="z-20 mt-10">
          <h3
            className="
    mb-2 text-5xl font-bold uppercase tracking-wider
    text-[#ab2cf5] md:text-5xl font-bilmond
    fade-up
  "
          >
            HI I'M
          </h3>

          <h1
            className="
     text-white
    text-5xl md:text-[120px]
    font-bilmond font-black uppercase
    shachiru-text
   
   
  "
          >
            SHACHIRU
          </h1>

          <p
            className="
    mt-6
    flex flex-wrap items-center justify-center gap-4
    text-lg md:text-2xl
    font-semibold
    tracking-wide
    text-purple-200
 S
  "
          >
            <span className="flex items-center gap-2 rounded-full border border-purple-500/30 cursor-pointer bg-purple-500/10 px-4 py-2 backdrop-blur-md transition-all duration-300 hover:scale-105 hover:bg-purple-500/20">
              <Palette className="h-5 w-5 text-purple-500 " />
              <span className="bg-linear-to-r from-purple-500 to-fuchsia-500 bg-clip-text text-transparent">
                Designer
              </span>
            </span>

            <span className="flex items-center gap-2 rounded-full border border-violet-500/30 cursor-pointer bg-violet-500/10 px-4 py-2 backdrop-blur-md transition-all duration-300 hover:scale-105 hover:bg-violet-500/20">
              <Code2 className="h-5 w-5 text-violet-500  " />
              <span className="bg-linear-to-r from-violet-500 to-purple-500 bg-clip-text text-transparent">
                Developer
              </span>
            </span>

            <span className="flex items-center gap-2 rounded-full border border-fuchsia-500/30  cursor-pointer bg-fuchsia-500/10 px-4 py-2 backdrop-blur-md transition-all duration-300 hover:scale-105 hover:bg-fuchsia-500/20">
              <Sparkles className="h-5 w-5 text-fuchsia-500 " />
              <span className="bg-linear-to-r from-fuchsia-500 to-pink-500 bg-clip-text text-transparent">
                Creator
              </span>
            </span>
          </p>
        </div>

        {/* Bottom Laptop Character */}
        <div className="relative mt-8">
          {/* Circle Decoration */}
          <div className="absolute left-1/2 top-1/2 h-[750px] w-[750px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-violet-200" />
          <div className="absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-violet-200" />
          <div className="absolute left-1/2 top-1/2 h-[450px] w-[450px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-violet-100" />
          <div className="absolute left-1/2 top-1/2 h-[300px] w-[300px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-violet-50" />

          <Image
            src="/images/laptop-person.png"
            alt=""
            width={350}
            height={350}
            className="relative z-10"
          />
        </div>

        {/* Experience Card */}
        <div className="absolute bottom-8 left-10 hidden rounded-3xl bg-white/70 p-6 shadow-xl backdrop-blur-xl lg:block">
          <div className="flex items-center gap-4">
            <div className="rounded-full bg-violet-100 p-4">
              <User className="text-violet-600" />
            </div>

            <div>
              <h4 className="text-3xl font-bold  text-purple-700">5+</h4>
              <p className="text-slate-500">Years Experience</p>
            </div>
          </div>
        </div>

        {/* Projects Card */}
        <div className="absolute bottom-8 right-10 hidden rounded-3xl bg-white/70 p-6 shadow-xl backdrop-blur-xl lg:block">
          <div className="flex items-center gap-4">
            <div className="rounded-full bg-violet-100 p-4">
              <Rocket className="text-violet-600" />
            </div>

            <div>
              <h4 className="text-3xl font-bold text-purple-700">50+</h4>
              <p className="text-slate-500">Projects Completed</p>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 z-2 flex w-full items-end justify-center  overflow-hidden">
        <div
          className="
      inline-block
      text-[300px]
      leading-[0.8]
      font-extrabold
      tracking-widest
      text-[#ffffff19]
      bg-clip-text
      bg-linear-to-b
      from-transparent
      via-[#ffffff34]
      to-white
    "
        >
          EXPLORE
        </div>
      </div>
    </div>
  );
}
