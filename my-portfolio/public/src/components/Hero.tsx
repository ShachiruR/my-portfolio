import Image from 'next/image';
import {
  ArrowUpRight,
  Download,
  Rocket,
  User,
} from 'lucide-react';

export default function Hero() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-linear-to-b from-[#faf8ff] via-white to-[#f6edff]">
      {/* Background Glow */}
      <div className="absolute -left-40 bottom-0 h-[500px] w-[500px] rounded-full bg-purple-300/20 blur-3xl" />
      <div className="absolute -right-40 bottom-0 h-[500px] w-[500px] rounded-full bg-violet-300/20 blur-3xl" />

      {/* Navbar */}
      <div className="mx-auto max-w-7xl px-6 pt-6">
        <nav className="flex h-20 items-center justify-between rounded-full border border-white/50 bg-white/70 px-10 shadow-lg backdrop-blur-xl">
          <div className="text-5xl font-bold text-violet-600">
            S.
          </div>

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
      <div className="relative mx-auto flex max-w-7xl flex-col items-center justify-center px-6 text-center">

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
          <h3 className="mb-2 text-5xl font-bold uppercase tracking-wider text-slate-300 md:text-5xl">
            HI I'M
          </h3>

          <h1 className="bg-linear-to-r from-violet-600 via-purple-500 to-violet-400 bg-clip-text text-5xl font-black uppercase text-transparent drop-shadow-lg md:text-[100px]">
            SHACHIRU
          </h1>

          <p className="mt-4 text-2xl font-semibold text-slate-800">
            Designer • Developer • Creator
          </p>

         

         
        </div>

        {/* Bottom Laptop Character */}
        <div className="relative mt-8">
          {/* Circle Decoration */}
            <div className="absolute left-1/2 top-1/2 h-[750px] w-[750px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-violet-200" />
          <div className="absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-violet-200" />
          <div className="absolute left-1/2 top-1/2 h-[450px] w-[450px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-violet-100" />

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
              <h4 className="text-3xl font-bold">5+</h4>
              <p className="text-slate-500">
                Years Experience
              </p>
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
              <h4 className="text-3xl font-bold">50+</h4>
              <p className="text-slate-500">
                Projects Completed
              </p>
            </div>
          </div>
        </div>

       
      </div>
    </div>
  );
}