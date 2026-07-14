"use client";

import Image from "next/image";
import {
  ArrowUpRight,
  ChevronDown,
  Code2,
  Download,
  MapPin,
  Palette,
  Rocket,
  Sparkles,
  Star,
  Users,
} from "lucide-react";
import Bottombar from "./hero-components/BottomBar";
import TopBar from "./hero-components/TopBar";
import { useEffect } from "react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden rounded-[32px] bg-linear-to-r from-[#EAD6FD] via-[#f8f3fc] to-[#EAD6FD] m-3 md:m-4 h-fit py-18 font-bilmond">
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden"></div>

      <TopBar />

      <div className="relative flex flex-col items-center  justify-center mt-3 ">
        {/* Heading */}

        {/*  circles */}

        <div className="absolute h-[150px] w-[150px] rounded-full     bg-[radial-gradient(circle,#E5CEF6_40%,transparent_65%)] mt-36 " />
        <div className="absolute h-[220px] w-[220px] rounded-full border border-[#ecd9faab] mt-36 " />

        <div className="absolute h-[300px] w-[300px] rounded-full border-2 border-dashed border-[#ecd9faab] mt-36" />

        <div className="absolute h-[400px] w-[400px] rounded-full border border-[#ecd9faab] mt-36  " />

        <div className="absolute h-[520px] w-[520px] rounded-full border-2 border-dashed border-[#ecd9faab] mt-36 " />

        <div className="z-20 flex items-center flex-col ">
          <h3
            className="
    text-[28px] font-bold uppercase tracking-wider
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

      <div className="absolute  z-10 left-32 top-42 hidden xl:block">
        <Image
          src="/images/painter.png"
          alt=""
          width={350}
          height={350}
          className="drop-shadow-2xl h-auto w-[260px]  animation-spin"
        />

        <div className="absolute -bottom-2 text-[#29033f] font-dancingScript">
          <Image
            src="/images/arrow-left.svg"
            alt=""
            width={390}
            height={390}
            className=" h-auto w-[40px]"
          />
          <span className="text-left text-[18px] leading-none">
            <strong className="text-[#710b91] font-bold text-[20px]">
              Crafting
            </strong>{" "}
            <br /> Pixel Perfect <br /> Designs
          </span>
        </div>
      </div>
      <div className="absolute  z-10 right-32 top-36 hidden xl:block">
        <Image
          src="/images/tech-arm.png"
          alt=""
          width={390}
          height={390}
          className="drop-shadow-2xl h-auto w-[300px]"
        />
        <div className="absolute -bottom-4  right-2 text-[#29033f] font-dancingScript">
          <Image
            src="/images/arrow-right.svg"
            alt=""
            width={390}
            height={390}
            className=" h-auto w-[40px]"
          />
          <span className="text-left text-[18px] leading-none">
            <strong className="text-[#710b91] font-bold text-[20px]">
              Building
            </strong>{" "}
            <br /> Scalable <br /> Solutions
          </span>
        </div>
      </div>
      <span
        className="absolute left-2 top-1/2 hidden -translate-y-1/2 whitespace-nowrap text-[11px] font-semibold tracking-[0.35em] text-purple-800/60 xl:block"
        style={{ writingMode: "vertical-rl" }}
      >
        DESIGN • BUILD • DEPLOY
      </span>
      <span
        className="absolute right-2 top-1/2 hidden -translate-y-1/2 whitespace-nowrap text-[11px] font-semibold tracking-[0.35em] text-purple-800/60 xl:block"
        style={{ writingMode: "vertical-rl" }}
      >
        INNOVATE • OPTIMIZE • INSPIRE
      </span>

      <div className="hidden md:flex flex-col justify-between gap-5 lg:mt-10 lg:flex-row lg:items-end absolute bottom-24 left-32 z-10">
        {/* about card */}
        <div className="w-full max-w-[250px] rounded-3xl bg-white/60 p-5 shadow-sm ring-2 ring-white backdrop-blur  shadow-purple-300/50">
          <div className="mb-2 flex items-center gap-2 text-xs font-bold tracking-wider text-[#7d4eaa]">
            <span className="h-2 w-2 rounded-full bg-purple-700" /> ABOUT ME
          </div>
          <p className="text-[13px] leading-relaxed text-[#1a073d]">
            Passionate developer who loves turning ideas into functional,
            beautiful and user-friendly web applications.
          </p>
          <div className="mt-3 flex flex-wrap items-center gap-3 text-sm">
            <span className="flex items-center gap-1 text-gray-600 text-[12px]">
              <MapPin size={14} className="text-purple-500" /> Colombo
            </span>
            <span className="rounded-full bg-green-100 px-3 py-1 text-[12px] font-semibold text-green-700">
              Available for work
            </span>
          </div>
        </div>
      </div>

      <div className=" hidden md:grid z-10 w-full max-w-[300px] rounded-3xl bg-white/60  shadow-sm ring-2 ring-white backdrop-blur grid-cols-2  absolute bottom-24 right-32 overflow-hidden">
        <StatCard
          icon={<Sparkles className="h-4 w-4 text-purple-600" />}
          value="30+"
          label="Projects Completed"
        />
        <StatCard
          icon={<Rocket className="h-4 w-4 text-purple-600" />}
          value="2+"
          label="Years of Experience"
        />
        <StatCard
          icon={<Users className="h-4 w-4 text-purple-600" />}
          value="20+"
          label="Happy Clients"
        />
        <StatCard
          icon={<Star className="h-4 w-4 text-purple-600" />}
          value="5★"
          label="Average Rating"
        />
      </div>

      <div className="absolute top-0 left-0 opacity-30">
        {" "}
        <Image
          src="/images/chekered.svg"
          alt=""
          width={260}
          height={260}
          className="h-[460px] w-auto!  "
        />
      </div>
      <div className="absolute top-0 right-0 opacity-30 ">
        {" "}
        <Image
          src="/images/chekered-left.svg"
          alt=""
          width={260}
          height={260}
          className="h-[460px] w-auto!  "
        />
      </div>
      <div className="absolute bottom-0 left-0  ">
        {" "}
        <Image
          src="/images/halftone-left.svg"
          alt=""
          width={260}
          height={260}
          className="h-[200px] w-auto!  "
        />
      </div>
      <div className="absolute bottom-0 right-0  ">
        {" "}
        <Image
          src="/images/halftone-right.svg"
          alt=""
          width={260}
          height={260}
          className="h-[200px] w-auto!  "
        />
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

function StatCard({
  icon,
  value,
  label,
}: {
  icon: React.ReactNode;
  value: string;
  label: string;
}) {
  return (
    <div className="flex items-center p-3 gap-2">
      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-purple-100">
        {icon}
      </span>
      <div>
        <p className="text-lg font-bold leading-none text-gray-900">{value}</p>
        <p className="text-[11px] leading-tight text-gray-500">{label}</p>
      </div>
    </div>
  );
}
