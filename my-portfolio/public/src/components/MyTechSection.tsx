"use client";

import Image from "next/image";
import "swiper/css";

import "swiper/css/autoplay";
import "swiper/css/free-mode";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
const tech = [
  { name: "React", image: "/images/tech-icons/react-js-icon.svg" },
  { name: "C++", image: "/images/tech-icons/c-plus.svg" },
  { name: "C", image: "/images/tech-icons/c.svg" },
  { name: "C#", image: "/images/tech-icons/c-sharp.svg" },

  { name: "java", image: "/images/tech-icons/java.svg" },
  { name: "mongo-db", image: "/images/tech-icons/mongo-db.svg" },
  { name: "mysql", image: "/images/tech-icons/my-sql.svg" },
  { name: "postman", image: "/images/tech-icons/postman.svg" },
  { name: "next-js", image: "/images/tech-icons/next-js.svg" },
  { name: "ex-js", image: "/images/tech-icons/express-js.svg" },
  { name: "ps", image: "/images/tech-icons/photoshop.svg" },
  { name: "illustrator", image: "/images/tech-icons/illustrator.svg" },
  { name: "figma", image: "/images/tech-icons/figma.svg" },

  { name: "Angular", image: "/images/tech-icons/angular-icon.svg" },
  { name: "Node.js", image: "/images/tech-icons/node-js-icon.svg" },
  { name: "Python", image: "/images/tech-icons/python-icon.svg" },
  { name: "PHP", image: "/images/tech-icons/php-icon.svg" },
  { name: "JavaScript", image: "/images/tech-icons/javascript-icon.svg" },
  { name: "HTML5", image: "/images/tech-icons/html-icon.svg" },
  { name: "CSS3", image: "/images/tech-icons/css-icon.svg" },
  { name: "Tailwind CSS", image: "/images/tech-icons/tailwind-css-icon.svg" },
];
const MyTechSection: React.FC = () => {
  return (
    <div className="relative flex w-full items-center justify-center bg-radial from-[#340e4686] font-bilmond to-[#240a3073] py-8 my-4 backdrop-blur-sm  ">
      <div className="flex w-full overflow-hidden px-4 py-2 lg:px-24">
        {" "}
        <Swiper
          modules={[Autoplay]}
          slidesPerView="auto"
          spaceBetween={60}
          loop={true}
          freeMode={true}
          speed={4000}
          autoplay={{
            delay: 0,
          }}
          className=" flex h-full w-full flex-row gap-8 overflow-visible!"
        >
          {tech.map((item, index) => (
            <SwiperSlide
              className="w-auto! justify-center overflow-visible"
              key={index}
            >
              <div className="w-auto">
                <Image
                  src={item.image}
                  alt={item.name}
                  height={25}
                  width={25}
                  className="h-10 w-auto object-contain lg:h-16 lg:w-auto"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className="absolute bottom-0 z-10 flex w-full items-center justify-center">
        <div className="absolute h-[3px] w-full bg-linear-to-r from-transparent via-[#ffdbf8] to-transparent">
          <Image
            src="/images/borderLine.svg"
            alt=""
            fill
            className="object-cover"
          />
        </div>
      </div>

      <div className="absolute top-0 z-10 flex w-full items-center justify-center flex-row gap-4 ">
        <div className="w-full flex flex-row items-center justify-center gap-2">
          <div className=" h-[3px] w-full bg-linear-to-r from-transparent to-[#ffdbf8] ">
            <Image
              src="/images/borderLine.svg"
              alt=""
              fill
              className="object-cover"
            />
          </div>
        </div>

        <div className="overflow-y-visible h-[3px] w-fit  relative z-10 flex flex-row items-center justify-center gap-2">
          <h2 className="text-3xl font-bold text-nowrap leading-none ">
            Tech <span className="text-purple-400 "> &nbsp;Stack</span>
          </h2>
          <p className="text-sm md:text-base leading-relaxed text-gray-300 text-nowrap hidden md:flex">
            Different Technologies Which I have worked with
          </p>
        </div>
        <div className="w-full">
          <div className=" h-[3px] w-full bg-linear-to-r from-[#ffdbf8] to-transparent">
            <Image
              src="/images/borderLine.svg"
              alt=""
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyTechSection;
