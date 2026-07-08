import About from "@/public/src/components/About";
import Hero from "@/public/src/components/Hero";
import MyTechSection from "@/public/src/components/MyTechSection";
import ShowcaseSection from "@/public/src/components/ShowcaseSection";
import Image from "next/image";

export default function Home() {
  return (
    <div className="w-full relative">
      <Hero />
      <About />
      <MyTechSection />
      <ShowcaseSection />
    </div>
  );
}
