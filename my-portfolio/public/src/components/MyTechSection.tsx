"use client";

import Image from "next/image";
import "swiper/css";

import "swiper/css/autoplay";
import "swiper/css/free-mode";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
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
const MyTechSection: React.FC = () => {
  return (
    <div className="relative flex w-full items-center justify-center bg-radial from-[#340e4686] font-bilmond to-[#240a3073] py-4 my-4 backdrop-blur-sm ">
      <div className="flex w-full overflow-hidden px-4 py-2 lg:px-24">
        {" "}
        <Swiper
          modules={[Autoplay]}
          freeMode={true}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
          }}
          slidesPerView="auto"
          spaceBetween={40}
          speed={2500}
          loop={true}
          className="newSwiper flex h-full w-full flex-row gap-2 overflow-visible!"
        >
          {tech.map((item, index) => (
            <SwiperSlide
              className="w-auto! justify-center overflow-visible"
              key={index}
            >
              <div className="w-auto">
                <Image
                  src={``}
                  alt="tech"
                  height={25}
                  width={25}
                  className="h-15 w-35 object-contain lg:h-20 lg:w-45"
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
          <p className="text-sm md:text-base leading-relaxed text-gray-300 text-nowrap">
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
