"use client";

import Link from "next/link";
import Image from "next/image";
import { User, Briefcase, Mail, Sparkles, X, Menu } from "lucide-react";
import { useState } from "react";

const navItems = [
  {
    title: "About",
    href: "#about",
    icon: User,
  },
  {
    title: "Showcase",
    href: "#showcase",
    icon: Briefcase,
  },
  {
    title: "Playground",
    href: "#playground",
    icon: Sparkles,
  },
  {
    title: "Contact",
    href: "#contact",
    icon: Mail,
  },
];

export default function TopBar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* ================= Desktop ================= */}
      <div className="absolute top-0 left-1/2 z-50 hidden -translate-x-1/2 items-end md:flex overflow-visible mt-3 md:mt-4">
        <Image
          src="/images/curvedLeftTop.svg"
          alt=""
          width={80}
          height={60}
          className="h-[60px] w-auto -mr-[2px]"
        />

        <div className="relative flex h-[60px] items-center justify-center bg-[#150420] overflow-visible">
          <div className="absolute bottom-px h-[2px] w-full bg-gradient-to-r from-transparent via-violet-400 to-transparent" />

          <div className="relative mb-3 flex gap-2 px-4 py-6">
            {navItems.map((item) => {
              const Icon = item.icon;

              return (
                <Link
                  key={item.title}
                  href={item.href}
                  className="group relative flex items-center gap-2 rounded-full px-4 py-2 transition-all duration-300 hover:-translate-y-0.5"
                >
                  <div className="absolute inset-0 rounded-full bg-violet-500/0 transition-all duration-300 group-hover:bg-violet-500/15 group-hover:shadow-[0_0_25px_rgba(168,85,247,0.5)]" />

                  <Icon
                    size={16}
                    className="relative text-zinc-300 transition-all duration-300 group-hover:scale-110 group-hover:text-violet-300"
                  />

                  <span className="relative text-sm font-medium tracking-wide text-zinc-300 transition-all duration-300 group-hover:text-white">
                    {item.title}
                  </span>

                  <span className="absolute bottom-0 left-1/2 h-[2px] w-0 -translate-x-1/2 rounded-full bg-gradient-to-r from-violet-400 via-fuchsia-400 to-cyan-400 transition-all duration-300 group-hover:w-3/4" />
                </Link>
              );
            })}
          </div>
        </div>

        <Image
          src="/images/curvedRightTop.svg"
          alt=""
          width={80}
          height={60}
          className="h-[60px] w-auto -ml-[2px]"
        />
      </div>

      {/* ================= Mobile ================= */}
      <div className="absolute right-5 top-5 z-50 md:hidden">
        {/* Menu Button */}
        <button
          onClick={() => setOpen(!open)}
          className="flex h-14 w-14 items-center justify-center rounded-full border border-violet-500/30 bg-[#150420]/80 backdrop-blur-xl shadow-[0_0_30px_rgba(139,92,246,.4)]"
        >
          {open ? (
            <X className="text-white" size={24} />
          ) : (
            <Menu className="text-white" size={24} />
          )}
        </button>

        {/* Floating Menu */}
        <div
          className={`absolute right-0 mt-4 flex flex-col gap-3 transition-all duration-300 ${
            open
              ? "translate-y-0 opacity-100"
              : "pointer-events-none -translate-y-5 opacity-0"
          }`}
        >
          {navItems.map((item) => {
            const Icon = item.icon;

            return (
              <Link
                key={item.title}
                href={item.href}
                onClick={() => setOpen(false)}
                className="group flex items-center gap-3 rounded-full border border-violet-500/20 bg-[#150420]/90 px-4 py-3 backdrop-blur-xl shadow-[0_0_25px_rgba(139,92,246,.25)] transition-all hover:translate-x-1 hover:border-violet-400 hover:shadow-[0_0_35px_rgba(139,92,246,.5)]"
              >
                <Icon
                  size={18}
                  className="text-violet-300 transition group-hover:scale-110"
                />

                <span className="whitespace-nowrap text-sm font-medium text-white">
                  {item.title}
                </span>
              </Link>
            );
          })}
        </div>
      </div>
    </>
  );
}
