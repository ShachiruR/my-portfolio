"use client";

import Image from "next/image";

const About = () => {
  return (
    <div className="relative w-full  font-bilmond overflow-hidden">
      <Image
        src="/images/about-background.svg"
        alt="Background"
        fill
        className="object-cover -z-10"
        priority
      />

      <div className="container">
        <AboutSkillsSection />
      </div>
    </div>
  );
};
export default About;

import {
  GraduationCap,
  Building2,
  Phone,
  MapPin,
  Settings,
} from "lucide-react";

const skills = [
  { label: "Frontend" },
  { label: "Backend" },
  { label: "UI/UX" },
  { label: "AI/ML" },
  { label: "DevOps & Cloud" },
  { label: "Graphic Designing" },
];

export function AboutSkillsSection() {
  return (
    <section
      className="grid grid-cols-1 md:grid-cols-2 gap-10 md:px-6 py-12 text-white"
      id="about"
    >
      {/* Who am I */}
      <div className="flex flex-col gap-6">
        <h2 className="text-3xl font-bold">
          Who <span className="text-purple-400">am I?</span>
        </h2>

        <p className="text-sm md:text-base leading-relaxed text-gray-300">
          Hello! I'm Shachiru, a passionate Full-Stack Developer and UI/UX
          Designer who enjoys transforming ideas into meaningful digital
          experiences. I love combining creative design with technical expertise
          to build applications that are both visually engaging and functionally
          effective. With experience in modern web technologies, I enjoy
          exploring different areas of software engineering, from crafting
          intuitive user interfaces to developing reliable backend systems. I'm
          driven by curiosity, problem-solving, and a desire to continuously
          improve my skills. I believe great digital experiences are built
          through a balance of creativity, usability, and clean code. Every
          project is an opportunity to experiment, learn something new, and push
          beyond my limits. My goal is to create innovative solutions that make
          a difference and leave a lasting impression.
        </p>

     
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 p-4 bg-[#25134b33] bg-clip-padding backdrop-blur-sm ring-2 rounded-3xl ring-[#ffffff18]">
          <div className="flex items-start gap-3">
            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-purple-500/20 text-purple-300">
              <GraduationCap size={18} />
            </span>
            <div>
              <p className="text-xs text-gray-400">Education</p>
              <p className="text-sm font-semibold text-white">
                BSc (Hons) in Information Technology,Specializing Software
                Engineering
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-purple-500/20 text-purple-300">
              <Building2 size={18} />
            </span>
            <div>
              <p className="text-xs text-gray-400">School</p>
              <p className="text-sm font-semibold text-white">
                Nalanda College
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-purple-500/20 text-purple-300">
              <Phone size={18} />
            </span>
            <div>
              <p className="text-xs text-gray-400">Telephone</p>
              <p className="text-sm font-semibold text-white">0770453010</p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-purple-500/20 text-purple-300">
              <MapPin size={18} />
            </span>
            <div>
              <p className="text-xs text-gray-400">Address</p>
              <p className="text-sm font-semibold text-white">Piliyandala</p>
            </div>
          </div>
        </div>
      </div>

      {/* Skills List */}

      <div className="grid grid-cols-1 gap-10 relative">
        <span className="w-px h-full absolute left-0 top-0 bg-linear-to-b from-white to-transparent md:flex hidden " />
        <div className="flex flex-col gap-6 md:pl-10 relative">
          <h2 className="text-3xl font-bold">
            Skills <span className="text-purple-400">List</span>
          </h2>

          <div className="flex flex-wrap gap-4">
            {skills.map((skill) => (
              <div
                key={skill.label}
                className="group relative flex items-center gap-2 rounded-full rounded-tl-none  bg-linear-to-r from-purple-900 to-purple-600 pl-8 pr-5 py-2 shadow-md shadow-purple-900/30 transition-transform hover:scale-105"
              >
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#1f023b] ring ring-[#ffffff23] absolute -left-1 -top-1">
                  <Settings
                    size={14}
                    className="text-white transition-transform duration-500 group-hover:rotate-90"
                  />
                </span>
                <span className="text-sm font-semibold text-white whitespace-nowrap">
                  {skill.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        <AboutHighlights />
      </div>
    </section>
  );
}

import { useEffect, useRef, useState } from "react";
import { FolderGit2, Layers, Briefcase, Clock, Sparkles } from "lucide-react";
import type { LucideIcon } from "lucide-react";

type Stat = {
  icon: LucideIcon;
  value: number;
  suffix?: string;
  label: string;
};

const STATS: Stat[] = [
  { icon: FolderGit2, value: 10, suffix: "+", label: "Projects built" },
  { icon: Layers, value: 15, suffix: "+", label: "Technologies used" },
  { icon: Briefcase, value: 1, label: "Internship completed" },
  { icon: Clock, value: 3, suffix: "+", label: "Years of coding" },
];

const LEARNING = [
  "System design fundamentals",
  "AI/ML with Python",
  "Docker & CI/CD pipelines",
];

function useCountUp(target: number, duration = 1200) {
  const ref = useRef<HTMLDivElement>(null);
  const [count, setCount] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (reduceMotion) {
      setCount(target);
      return;
    }

    let raf = 0;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        observer.disconnect();
        const start = performance.now();
        const tick = (now: number) => {
          const t = Math.min((now - start) / duration, 1);
          const eased = 1 - Math.pow(1 - t, 3); // ease-out
          setCount(Math.round(eased * target));
          if (t < 1) raf = requestAnimationFrame(tick);
        };
        raf = requestAnimationFrame(tick);
      },
      { threshold: 0.4 },
    );

    observer.observe(el);
    return () => {
      observer.disconnect();
      cancelAnimationFrame(raf);
    };
  }, [target, duration]);

  return { ref, count };
}

function StatCard({ icon: Icon, value, suffix = "", label }: Stat) {
  const { ref, count } = useCountUp(value);

  return (
    <div
      ref={ref}
      className="group flex items-center gap-4 rounded-2xl border border-purple-500/20 bg-[#25134b33] p-4 backdrop-blur transition-shadow duration-300 hover:shadow-[0_0_30px_rgba(168,85,247,0.25)]"
    >
      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-purple-900/60 text-purple-300">
        <Icon className="h-5 w-5" aria-hidden="true" />
      </div>
      <div>
        <p className="text-2xl font-semibold leading-none text-white tabular-nums">
          {count}
          {suffix}
        </p>
        <p className="mt-1 text-sm text-purple-200/70">{label}</p>
      </div>
    </div>
  );
}

function LearningCard() {
  return (
    <div className="rounded-2xl border border-purple-500/20 bg-[#25134b33] p-5 backdrop-blur">
      <div className="flex items-center gap-3">
        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-purple-900/60 text-purple-300">
          <Sparkles className="h-5 w-5" aria-hidden="true" />
        </div>
        <div>
          <h3 className="text-lg font-medium text-white">Currently learning</h3>
          <p className="flex items-center gap-2 text-sm text-purple-200/70">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-purple-400 opacity-60 motion-reduce:animate-none" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-purple-400" />
            </span>
            In progress
          </p>
        </div>
      </div>

      <ul className="mt-4 flex flex-wrap gap-2">
        {LEARNING.map((item) => (
          <li
            key={item}
            className="rounded-full border border-purple-400/30 bg-purple-900/40 px-3 py-1.5 text-sm text-purple-100"
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

function AboutHighlights() {
  return (
    <div className=" space-y-6 md:pl-10 ">
      
      <h2 className="text-3xl font-bold text-white">
        By the <span className="text-purple-400">Numbers</span>
      </h2>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        {STATS.map((stat) => (
          <StatCard key={stat.label} {...stat} />
        ))}
      </div>

      <LearningCard />
    </div>
  );
}
