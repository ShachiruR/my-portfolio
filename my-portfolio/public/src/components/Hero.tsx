"use client";

import Image from "next/image";
import { Code2, Palette, Rocket, Sparkles } from "lucide-react";
import Bottombar from "./hero-components/BottomBar";
import TopBar from "./hero-components/TopBar";
import { useEffect } from "react";

export default function Hero2() {
  useEffect(() => {
    console.log(window.innerWidth);
  }, []);
  return (
    <section className="relative overflow-hidden rounded-[32px] bg-linear-to-b from-[#faf8ff] via-white to-[#f6edff] m-3 md:m-6 h-[calc(100vh-2rem)] py-18">
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -left-40 bottom-0 h-[500px] w-[500px] rounded-full bg-purple-300/20 blur-[120px]" />
        <div className="absolute -right-40 bottom-0 h-[500px] w-[500px] rounded-full bg-violet-300/20 blur-[120px]" />
      </div>

      <TopBar />

      <div className="relative flex flex-col items-center  justify-center  h-full ">
        {/* Heading */}

        <div className=" flex flex-col items-center justify-center w-full  ">
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


            <div className="font-bilmond text-[#390977] font-semibold">I Build digital experiences that are fast, interactive & impactful </div>
            <div className="flex flex-row gap-4 mt-4 rounded-[20px]   bg-linear-to-br
        from-white
        via-purple-100
        to-white
        shadow-lg
        ring-2
        ring-white"> sds</div>
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
