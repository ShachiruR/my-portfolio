import About from "@/public/src/components/About";
import ContactMeSection from "@/public/src/components/ContactMeSection";
import Hero from "@/public/src/components/Hero";
import TopBar from "@/public/src/components/hero-components/TopBar";
import MyTechSection from "@/public/src/components/MyTechSection";
import ShowcaseSection from "@/public/src/components/ShowcaseSection";
import Image from "next/image";

export default function Home() {
  return (
    <div className="w-full relative overflow-hidden grid grid-cols-1 items-center justify-center">
      <div className="sticky top-0 z-50">
        <TopBar />
      </div>
      <Hero />
      <About />
      <MyTechSection />
      <ShowcaseSection />
      <ContactMeSection />
    </div>
  );
}
