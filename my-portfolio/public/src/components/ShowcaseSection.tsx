"use client";

import { ArrowUpRight, ShoppingCart } from "lucide-react";
import Image from "next/image";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
const tech = [
  { name: "Qatar Airways", code: "QR" },
  { name: "Cathay Pacific Airways", code: "CX" },
  { name: "Emirates", code: "EK" },
  { name: "Kuwait Airways", code: "KU" },
  { name: "Etihad Airways", code: "EY" },
  { name: "Air China Limited", code: "CA" },
  { name: "Singapore Airlines", code: "SQ" },
  { name: "Malaysia Airlines Berhad", code: "MH" },
  { name: "Gulf Air Company B.S.C", code: "GF" },
  { name: "Cebu Air Inc", code: "5J" },
  { name: "Oman Air", code: "WY" },
  { name: "Turkish Airlines Inc", code: "TK" },
  { name: "Philippine Airlines Inc", code: "PR" },
  { name: "Saudi Arabian Airlines", code: "SV" },
  { name: "British Airways", code: "BA" },
];
const ShowcaseSection: React.FC = () => {
  return (
    <div className="w-full h-screen relative py-12 font-bilmond">
      <div className="container">
        <div
          className="flex    h-100  rounded-t-4xl border bodrer-white w-full p-0 relative "
          style={{
            maskImage:
              "linear-gradient(180deg, #000000 0%, rgba(0, 0, 0, 0%) 100%)",
          }}
        >
          <div
            className="w-full h-full bg-amber-100 relative"
            style={{
              maskImage:
                "linear-gradient(130.706deg, rgba(0, 0, 0, 0%) 18%, rgba(0, 0, 0, 54%) 44%, rgba(0, 0, 0, 66%) 54%, rgba(0, 0, 0, 70%) 75%);",
            }}
          >
            <Image
              src={`/images/showcaseback.png`}
              alt="tech"
              fill
              className=" object-cover "
            />
          </div>
          <div className="absolute   z-10 flex items-start  left-6 top-6 flex-col">
            <h2 className="text-3xl font-bold">
              Projects <br />
              <span className="text-purple-400 text-[32px]">SHOWCASE</span>
              <br />
            </h2>
            <p className="text-sm md:text-base leading-relaxed text-gray-300 text-nowrap">
              Different Technologies Which I have worked with
            </p>
          </div>
        </div>
      </div>

      <div className="flex w-full absolute top-50 z-10 flex-row items-center justify-center gap-2  " >
        {" "}
        <Swiper
          modules={[]}
          slidesPerView="auto"
          spaceBetween={40}
          className=" flex h-full w-full flex-row gap-2"
        >
          {tech.map((item, index) => (
            <SwiperSlide
              className="w-auto! justify-center pb-4 "
              key={index}
            >
              <ProjectCard />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default ShowcaseSection;

export function ProjectCard() {
  return (
    <div className="flex items-center justify-center relative flex-col">
      <div className="-mb-10 z-10  ">
        {" "}
        <Image
          src="/images/laptop-screen.png"
          alt=""
          width={260}
          height={260}
          className="h-auto w-[400px] drop-shadow-lg/25 max-w-none "
        />
      </div>
      <div className="w-full max-w-sm ">
        <div className="rounded-t-[60px] rounded-b-[30px] bg-linear-to-br from-[#f7f2f8] to-[#ece3f7] px-4 pt-16 pb-16 shadow-xl mx-2">
          <div className="mb-3 flex items-start justify-between gap-3">
            <h2 className="text-2xl font-bold text-[#3a1f6b]">
              Title of the Card
            </h2>
            <span className="mt-1 shrink-0 rounded-full border border-emerald-300 bg-emerald-50 px-3 py-1 text-xs font-medium text-emerald-700">
              On Live
            </span>
          </div>

          <p className="mb-5 text-sm leading-relaxed text-slate-500">
            A vibrant January festival honoring the Santo Niño, the Ati-Atihan
            Festival fills the streets with rhythmic drumbeats, tribal costumes
          </p>

          <div className="mb-5 border-t border-[#e3d9ee]" />

          <div className="mb-6 flex flex-wrap gap-2">
            {["E-commerce", "E-commerce", "E-commerce"].map((tag, i) => (
              <span
                key={i}
                className="flex items-center gap-1.5 rounded-full bg-[#efe6fb] px-3 py-1.5 text-xs font-medium text-[#6d3fb0]"
              >
                <ShoppingCart className="h-3.5 w-3.5" strokeWidth={2} />
                {tag}
              </span>
            ))}
          </div>

          <p className="mb-2 text-xs font-medium text-[#b199d4]">
            Tools &amp; Technologies
          </p>
          <div className="flex gap-2">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-white shadow-sm">
              {/* <FigmaIcon /> */}
            </div>
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-white shadow-sm">
              {/* <PinterestIcon /> */}
            </div>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex gap-3 rounded-3xl bg-[#150420] p-2 absolute -bottom-6 text-nowrap left-1/2 -translate-x-1/2">
          <button className="flex flex-1 items-center justify-center gap-2 px-4 rounded-full border border-white/15 bg-linear-to-br from-[#1f1f1f] to-[#0f0f0f] py-3 text-sm font-medium text-white transition hover:bg-[#201c24] shadow-lg/25 shadow-[#2b2b2b]">
            {/* <Github className="h-4 w-4" /> */}
            Open in Git Hub
            <ArrowUpRight className="h-4 w-4" />
          </button>
          <button className="flex flex-1 items-center justify-center gap-2 rounded-full bg-linear-to-r from-[#3d2a63] to-[#8b3fb8] px-4 py-3 text-sm font-medium text-white shadow-lg transition hover:brightness-110">
            View Project
            <ArrowUpRight className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
