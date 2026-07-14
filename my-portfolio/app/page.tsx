import About from "@/public/src/components/About";
import ContactMeSection from "@/public/src/components/ContactMeSection";
import Hero from "@/public/src/components/Hero";
import TopBar from "@/public/src/components/hero-components/TopBar";
import MyTechSection from "@/public/src/components/MyTechSection";
import ShowcaseSection from "@/public/src/components/ShowcaseSection";
import Image from "next/image";

export default function Home() {
  return (
    <div className="w-full relative overflow-hidden">
      <TopBar />
      <Hero />
      <About />
      <MyTechSection />
      <ShowcaseSection />
      <ContactMeSection />
    </div>
  );
}
