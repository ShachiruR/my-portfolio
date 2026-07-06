"use client";

import Image from "next/image";
import {
  ArrowUpRight,
  ChevronDown,
  Code2,
  Download,
  Palette,
  Rocket,
  Sparkles,
} from "lucide-react";
import Bottombar from "./hero-components/BottomBar";
import TopBar from "./hero-components/TopBar";
import { useEffect } from "react";

export default function Hero2() {
  useEffect(() => {
    console.log(window.innerWidth);
  }, []);
  return (
    <section className="relative overflow-hidden rounded-[32px] bg-linear-to-b from-[#faf8ff] via-white to-[#f6edff] m-3 md:m-4 h-fit py-18">
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -left-40 bottom-0 h-[500px] w-[500px] rounded-full bg-purple-300/20 blur-[120px]" />
        <div className="absolute -right-40 bottom-0 h-[500px] w-[500px] rounded-full bg-violet-300/20 blur-[120px]" />
      </div>

      <TopBar />

      <div className="relative flex flex-col items-center  justify-center mt-3 ">
        {/* Heading */}

        {/*  circles */}

        <div className="absolute h-[150px] w-[150px] rounded-full     bg-[radial-gradient(circle,#E5CEF6_40%,transparent_65%)] mt-36 " />
        <div className="absolute h-[220px] w-[220px] rounded-full border border-[#eddff8ab] mt-36 " />

        <div className="absolute h-[300px] w-[300px] rounded-full border-2 border-dashed border-[#eddff8ab] mt-36" />

        <div className="absolute h-[400px] w-[400px] rounded-full border border-[#eddff8ab] mt-36  " />

        <div className="absolute h-[520px] w-[520px] rounded-full border-2 border-dashed border-[#eddff8ab] mt-36 " />

        <div className="z-20 flex items-center flex-col ">
          <h3
            className="
    text-[28px] font-extrabold uppercase tracking-wider
    text-[#400b5f]  font-bilmond leading-none mb-2
    fade-up
  "
          >
            HI I'M
          </h3>

          <h1
            className="
     text-white
     leading-none
    text-5xl md:text-[100px]
    font-bilmond font-black uppercase
    shachiru-text
   
   
  "
          >
            SHACHIRU
          </h1>

          <div className="font-bilmond text-[#2d004b] font-semibold">
            I Build digital experiences that are fast, interactive & impactful
          </div>
          <div
            className="flex flex-row gap-4 mt-4 rounded-[20px] items-center justify-center px-6 py-1 text-[14px] text-[#21033d]  bg-linear-to-br
        from-white
        via-purple-100
        to-white font-medium
      shadow-lg/10 shadow-purple-700
        ring-2
        ring-white"
          >
            {" "}
            <span>Full Stack Developer</span>
            <span className="h-1 w-1 rounded-full bg-purple-400" />
            <span>UI/UX Enthusiast</span>
            <span className="h-1 w-1 rounded-full bg-purple-400" />
            <span>Tech Explorer</span>
          </div>
        </div>

        <div className="relative z-10 flex items-center  ">
          <IconCard>
            <Code2 className="h-7 w-7 md:h-8 md:w-8 text-purple-800" />
          </IconCard>

          <Image
            src="/images/laptop-person.png"
            alt="Developer"
            width={420}
            height={420}
            priority
            className="
                h-auto
                w-[220px]
             
                lg:w-[260px]
              "
          />

          <IconCard>
            <Rocket className="h-5 w-5 md:h-6 md:w-6 text-purple-800" />
          </IconCard>
        </div>

        <div className="mt-4 flex flex-wrap items-center justify-center gap-3 sm:gap-4 relative z-10 font-bilmond">
          <button className=" cursor-pointer flex items-center justify-center gap-2 rounded-xl bg-linear-to-r to-[#6f29ca] from-[#b941f0] px-6 py-2 text-sm ring ring-[#b941f0] font-semibold text-white shadow-lg shadow-purple-300/50 transition hover:brightness-110">
            View My Work{" "}
            <div className="rounded-full h-6 w-6 bg-pink-200/20 flex items-center justify-center">
              <ArrowUpRight size={12} />
            </div>
          </button>
          <button className="flex items-center gap-2 rounded-xl bg-white px-6 py-2 text-sm font-semibold text-gray-800 shadow ring-1 ring-purple-100 transition hover:bg-purple-50">
            Download CV{" "}
            <div className="rounded-full h-6 w-6 bg-pink-400/20 flex items-center justify-center">
              <Download size={16} />
            </div>
          </button>
        </div>

        <div className="mt-6 flex flex-col items-center gap-1.5 text-[11px] font-semibold tracking-widest text-[#a76abe]  relative z-10">
          SCROLL TO EXPLORE
          <span className="flex h-7 w-7 animate-bounce items-center justify-center rounded-full border border-purple-800 text-purple-800 mt-2 shadow-md/25 shadow-purple-700">
            <ChevronDown size={14} />
          </span>
        </div>
      </div>

      <Bottombar />
    </section>
  );
}

function IconCard({ children }: { children: React.ReactNode }) {
  return (
    <button
      className="
        flex
        h-12
        w-12
        md:h-14
        md:w-14
        items-center
        justify-center
        rounded-2xl
        bg-linear-to-br
        from-white
        via-purple-100
        to-white
        shadow-lg
        ring-2
        ring-white
        transition
        duration-300
        hover:-translate-y-1
        hover:rotate-6
      "
    >
      {children}
    </button>
  );
}
