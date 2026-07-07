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
  { label: "Vibe Coding" },
  { label: "Game Development" },
];

export function AboutSkillsSection() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 gap-10 px-6 py-12 text-white">
      {/* Who am I */}
      <div className="flex flex-col gap-6">
        <h2 className="text-3xl font-bold">
          Who <span className="text-purple-400">am I?</span>
        </h2>

        <p className="text-sm md:text-base leading-relaxed text-gray-300">
          Hello! I'm Shachiru, a passionate and creative individual who enjoys
          turning ideas into meaningful digital experiences. I have a strong
          interest in problem-solving and continuously strive to improve my
          skills through learning and practice. I enjoy taking on new challenges
          that push me to grow both personally and professionally. Attention to
          detail, creativity, and dedication are qualities that guide my work. I
          believe that great results come from a balance of innovation, hard
          work, and continuous improvement. My goal is to create work that is
          both impactful and memorable. Every project is an opportunity to
          learn, grow, and make a positive difference. I'm always motivated to
          explore new possibilities and bring ideas to life.
        </p>

        {/* Info grid - no panel background */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 p-4 bg-[#25134b33] bg-clip-padding backdrop-blur-sm ring-2 rounded-3xl ring-[#ffffff18]">
          <div className="flex items-start gap-3">
            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-purple-500/20 text-purple-300">
              <GraduationCap size={18} />
            </span>
            <div>
              <p className="text-xs text-gray-400">Education</p>
              <p className="text-sm font-semibold text-white">
                BSc Hons SE Degree
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
              <p className="text-sm font-semibold text-white">01431242154</p>
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
      <div className="flex flex-col gap-6 md:pl-10 relative">
        <span className="w-px h-full absolute left-0 top-0 bg-linear-to-b from-white to-transparent " />
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
    </section>
  );
}
