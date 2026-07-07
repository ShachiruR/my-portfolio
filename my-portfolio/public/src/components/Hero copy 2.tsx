"use client";

import { useState } from "react";
import Image from "next/image";
import {
  Code2,
  Rocket,
  ChevronDown,
  MapPin,
  Download,
  ArrowUpRight,
  Star,
  Sparkles,
  Users,
 
  MoreHorizontal,
  Sun,
  Moon,
} from "lucide-react";

const navLinks = ["Home", "Me", "Builds", "Accolades", "Tech Deck", "Connect"];

export default function Hero() {
  const [dark, setDark] = useState(false); // wire this up to your real theme provider

  return (
    <section className="relative w-full  px-2 pt-2 pb-2 sm:px-6 sm:pt-6 sm:pb-6">
      <div className="relative mx-auto max-w-[1700px] overflow-hidden rounded-[32px] border border-purple-100/70 bg-gradient-to-b from-[#f8f4fd] to-[#eee3fb] shadow-[0_25px_70px_-20px_rgba(107,33,168,0.3)] sm:rounded-[40px]">
        {/* corner accents */}
        <div className="pointer-events-none absolute left-0 top-0 h-16 w-16 rounded-br-[64px] bg-[#150a26] sm:h-28 sm:w-28 sm:rounded-br-[96px]" />
        <div className="pointer-events-none absolute right-0 top-0 h-16 w-16 rounded-bl-[64px] bg-[#150a26] sm:h-28 sm:w-28 sm:rounded-bl-[96px]" />
        <div className="pointer-events-none absolute bottom-0 left-0 h-16 w-16 rounded-tr-[64px] bg-[#150a26] sm:h-28 sm:w-28 sm:rounded-tr-[96px]" />
        <div className="pointer-events-none absolute bottom-0 right-0 h-16 w-16 rounded-tl-[64px] bg-[#150a26] sm:h-28 sm:w-28 sm:rounded-tl-[96px]" />

        {/* theme toggle */}
        <button
          onClick={() => setDark((d) => !d)}
          aria-label="Toggle theme"
          className="absolute right-5 top-5 z-30 flex h-9 w-[60px] items-center rounded-full bg-white/90 px-1 shadow-md ring-1 ring-purple-100 sm:right-8 sm:top-8"
        >
          <span
            className={`flex h-7 w-7 items-center justify-center rounded-full bg-purple-700 text-white shadow transition-transform duration-300 ${
              dark ? "translate-x-[26px]" : "translate-x-0"
            }`}
          >
            {dark ? <Moon size={13} /> : <Sun size={13} />}
          </span>
        </button>

        {/* NAVBAR */}
        <nav className="relative z-10 mx-auto mt-4 flex w-[94%] max-w-5xl items-center justify-between rounded-full bg-[#140823]/95 px-3 py-2.5 shadow-xl backdrop-blur sm:mt-7 sm:px-4">
          <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full">
            <svg viewBox="0 0 24 24" className="h-6 w-6 text-purple-300" fill="none">
              <path
                d="M6 6h9a3 3 0 010 6H9a3 3 0 000 6h9"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
              />
            </svg>
          </div>

          <ul className="hidden items-center gap-7 text-sm font-medium text-purple-100/90 md:flex">
            {navLinks.map((link) => (
              <li key={link} className="relative cursor-pointer transition-colors hover:text-white">
                {link === "Home" ? (
                  <span className="text-white">
                    {link}
                    <span className="absolute -bottom-2 left-1/2 h-1 w-1 -translate-x-1/2 rounded-full bg-purple-400" />
                  </span>
                ) : (
                  link
                )}
              </li>
            ))}
          </ul>

          <button className="flex items-center gap-2 rounded-full bg-gradient-to-r from-purple-700 to-fuchsia-600 px-4 py-2 text-sm font-semibold text-white shadow-md transition hover:brightness-110">
            Let&apos;s Talk
            <span className="flex h-5 w-5 items-center justify-center rounded-full bg-white/20">
              <ArrowUpRight size={12} />
            </span>
          </button>
        </nav>

        {/* HERO CONTENT */}
        <div className="relative z-10 px-4 pb-8 pt-8 sm:px-10 sm:pt-12">
          {/* Heading */}
          <div className="text-center">
            <p className="text-xs font-extrabold tracking-[0.25em] text-purple-700 sm:text-sm">HI I&apos;M</p>
            <h1
              className="mt-1 bg-gradient-to-b from-purple-400 via-purple-600 to-purple-800 bg-clip-text text-[16vw] font-black leading-[0.9] tracking-tight text-transparent drop-shadow-sm sm:text-[7rem] md:text-[9rem]"
            >
              SHACHIRU
            </h1>
            <p className="mx-auto mt-3 max-w-xl px-4 text-sm text-gray-600 sm:text-base">
              I build digital experiences that are fast,{" "}
              <span className="font-medium text-gray-900">interactive</span> &amp; impactful.
            </p>

            <div className="mx-auto mt-5 flex w-fit max-w-[90%] flex-wrap items-center justify-center gap-x-3 gap-y-2 rounded-full bg-white/70 px-5 py-2.5 text-xs font-medium text-gray-700 shadow-sm ring-1 ring-purple-100 sm:text-sm">
              <span>Full Stack Developer</span>
              <span className="h-1 w-1 rounded-full bg-purple-400" />
              <span>UI/UX Enthusiast</span>
              <span className="h-1 w-1 rounded-full bg-purple-400" />
              <span>Tech Explorer</span>
            </div>
          </div>

          {/* Illustration row */}
          <div className="relative mt-4 flex items-center justify-center">
            {/* left vertical label */}
            <span
              className="absolute -left-2 top-1/2 hidden -translate-y-1/2 whitespace-nowrap text-[11px] font-semibold tracking-[0.35em] text-purple-800/60 xl:block"
              style={{ writingMode: "vertical-rl" }}
            >
              DESIGN • BUILD • DEPLOY
            </span>

            {/* left illustration */}
            <div className="absolute left-6 top-2 hidden w-36 flex-col items-center text-center lg:flex xl:left-20">
              <div className="relative h-40 w-40 xl:h-44 xl:w-44">
                {/* Replace with your actual illustration asset */}
                <Image
                  src="/images/painter.png"
                  alt="Illustration of Shachiru painting"
                  fill
                  className="object-contain"
                />
              </div>
              <p className="mt-2 font-serif text-sm italic leading-snug text-purple-900">
                Crafting
                <br />
                Pixel Perfect
                <br />
                Designs
              </p>
            </div>

            {/* concentric circles + center character */}
            <div className="relative flex h-[300px] w-[300px] items-center justify-center sm:h-[380px] sm:w-[380px] md:h-[420px] md:w-[420px]">
              <div className="absolute h-full w-full rounded-full border border-purple-200/50" />
              <div className="absolute h-[78%] w-[78%] rounded-full border border-purple-200/50" />
              <div className="absolute h-[56%] w-[56%] rounded-full border border-purple-200/50" />

              <button
                aria-label="Code"
                className="absolute left-0 top-1/2 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-2xl bg-white shadow-md ring-1 ring-purple-100 sm:h-14 sm:w-14"
              >
                <Code2 className="h-5 w-5 text-purple-600 sm:h-6 sm:w-6" />
              </button>
              <button
                aria-label="Launch"
                className="absolute right-0 top-1/2 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-2xl bg-white shadow-md ring-1 ring-purple-100 sm:h-14 sm:w-14"
              >
                <Rocket className="h-5 w-5 text-purple-600 sm:h-6 sm:w-6" />
              </button>

              <div className="relative h-56 w-56 sm:h-64 sm:w-64 md:h-72 md:w-72">
                {/* Replace with your actual illustration asset */}
                <Image
                  src="/images/laptop-person.png"
                  alt="Illustration of Shachiru coding on a laptop"
                  fill
                  priority
                  className="object-contain"
                />
              </div>
            </div>

            {/* right illustration */}
            <div className="absolute right-6 top-2 hidden w-36 flex-col items-center text-center lg:flex xl:right-20">
              <div className="relative h-40 w-40 xl:h-44 xl:w-44">
                {/* Replace with your actual illustration asset */}
                <Image
                  src="/images/tech-arm.png"
                  alt="Illustration of Shachiru with a robotic arm interface"
                  fill
                  className="object-contain"
                />
              </div>
              <p className="mt-2 font-serif text-sm italic leading-snug text-purple-900">
                Building
                <br />
                Scalable
                <br />
                Solutions
              </p>
            </div>

            {/* right vertical label */}
            <span
              className="absolute -right-2 top-1/2 hidden -translate-y-1/2 whitespace-nowrap text-[11px] font-semibold tracking-[0.35em] text-purple-800/60 xl:block"
              style={{ writingMode: "vertical-rl" }}
            >
              INNOVATE • OPTIMIZE • INSPIRE
            </span>
          </div>

          {/* CTA buttons */}
          <div className="mt-4 flex flex-wrap items-center justify-center gap-3 sm:gap-4">
            <button className="flex items-center gap-2 rounded-full bg-gradient-to-r from-purple-700 to-fuchsia-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-purple-300/50 transition hover:brightness-110">
              View My Work <ArrowUpRight size={16} />
            </button>
            <button className="flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-gray-800 shadow ring-1 ring-purple-100 transition hover:bg-purple-50">
              Download CV <Download size={16} />
            </button>
          </div>

          {/* scroll indicator */}
          <div className="mt-6 flex flex-col items-center gap-1.5 text-[11px] font-semibold tracking-widest text-gray-500">
            SCROLL TO EXPLORE
            <span className="flex h-7 w-7 animate-bounce items-center justify-center rounded-full border border-purple-200 text-purple-500">
              <ChevronDown size={14} />
            </span>
          </div>

          {/* bottom info row */}
          <div className="mt-8 flex flex-col justify-between gap-5 lg:mt-10 lg:flex-row lg:items-end">
            {/* about card */}
            <div className="w-full max-w-sm rounded-3xl bg-white/80 p-5 shadow-sm ring-1 ring-purple-100 backdrop-blur">
              <div className="mb-2 flex items-center gap-2 text-xs font-bold tracking-wider text-purple-700">
                <span className="h-2 w-2 rounded-full bg-purple-500" /> ABOUT ME
              </div>
              <p className="text-sm leading-relaxed text-gray-600">
                Passionate developer who loves turning ideas into functional, beautiful and
                user-friendly web applications.
              </p>
              <div className="mt-3 flex flex-wrap items-center gap-3 text-sm">
                <span className="flex items-center gap-1 text-gray-600">
                  <MapPin size={14} className="text-purple-500" /> India
                </span>
                <span className="rounded-full bg-green-100 px-3 py-1 text-xs font-medium text-green-700">
                  Available for work
                </span>
              </div>
            </div>

            {/* stats grid */}
            <div className="grid w-full max-w-md grid-cols-2 gap-3">
              <StatCard icon={<Sparkles className="h-4 w-4 text-purple-600" />} value="30+" label="Projects Completed" />
              <StatCard icon={<Rocket className="h-4 w-4 text-purple-600" />} value="2+" label="Years of Experience" />
              <StatCard icon={<Users className="h-4 w-4 text-purple-600" />} value="20+" label="Happy Clients" />
              <StatCard icon={<Star className="h-4 w-4 text-purple-600" />} value="5★" label="Average Rating" />
            </div>
          </div>
        </div>

        {/* FOOTER BAR */}
        <div className="relative z-10 mx-auto mb-4 flex w-[94%] max-w-5xl flex-col items-center justify-between gap-4 rounded-3xl bg-[#140823]/95 px-6 py-4 text-white shadow-xl sm:mb-7 sm:flex-row sm:rounded-full">
          <div className="flex flex-wrap items-center gap-4">
            <span className="flex items-center gap-1 text-[11px] font-semibold tracking-wide text-purple-200">
              LET&apos;S CONNECT <ArrowUpRight size={12} />
            </span>
            <div className="flex items-center gap-2">
              
            </div>
          </div>
          <div className="flex flex-wrap items-center gap-4">
            <span className="flex items-center gap-1 text-[11px] font-semibold tracking-wide text-purple-200">
              TECH I WORK WITH <ArrowUpRight size={12} />
            </span>
            <div className="flex items-center gap-2">
              <TechBadge label="H5" color="bg-orange-500" />
              <TechBadge label="C3" color="bg-blue-500" />
              <TechBadge label="JS" color="bg-yellow-400" textColor="text-black" />
              <TechBadge label="⚛" color="bg-cyan-500" />
              <TechBadge label="▲" color="bg-black" />
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10">
                <MoreHorizontal size={14} />
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
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
    <div className="flex items-center gap-3 rounded-2xl bg-white/80 p-3 shadow-sm ring-1 ring-purple-100 backdrop-blur">
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

function TechBadge({
  label,
  color,
  textColor = "text-white",
}: {
  label: string;
  color: string;
  textColor?: string;
}) {
  return (
    <span
      className={`flex h-8 w-8 items-center justify-center rounded-full ${color} ${textColor} text-[10px] font-bold`}
    >
      {label}
    </span>
  );
}