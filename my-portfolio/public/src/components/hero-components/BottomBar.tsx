"use client";
import Image from "next/image";
import { SocialIcons } from "@/public/assets/socialIcons";
import { TechIcons } from "@/public/assets/techIcons";
import Link from "next/link";
const Bottombar = () => {
  return (
    <div className="absolute bottom-0 left-1/2 hidden md:flex -translate-x-1/2 items-end w-[calc(100%-12rem)] z-10">
      <Image
        src="/images/curvedLeft.svg"
        alt=""
        width={80}
        height={62}
        className="h-[60px] w-auto -mr-1"
      />

      <div className="h-[60px] w-full bg-[#150420] flex flex-row items-center justify-center gap-16 px-4">
        <div className="flex flex-row items-center justify-start flex-nowrap gap-8 ">
          <span className="text-white font-semibold text-[14px] uppercase ">
            Lets Connect
          </span>
          <div className="flex  flex-row flex-nowrap items-center justify-between text-[16px] gap-2">
            {SocialIcons.map((item, index) => (
              <Link
                key={index}
                href={item.link}
                className="flex h-8 w-8 items-center justify-center rounded-full bg-radial from-[#160236] to-[#3a1a6e] p-2 ring ring-[#8c4eddd3] hover:scale-105 transition-all  ease-in-out cursor-pointer"
              >
                <Image
                  src={item.icon}
                  alt={item.name}
                  width={20}
                  height={20}
                  className="size-5"
                />
              </Link>
            ))}
          </div>
        </div>

        <div className="w-px h-3/5 bg-white/30"></div>
        <div className="flex flex-row items-center justify-start flex-nowrap gap-8 ">
          <span className="text-white font-semibold text-[14px] uppercase ">
            Tech I worked with
          </span>
          <div className="flex  flex-row flex-nowrap items-center justify-between text-[16px] gap-4">
            {TechIcons.map((item, index) => (
              <Link
                key={index}
                href={item.link}
                className="flex h-8 w-8 relative items-center justify-center rounded-full overflow-visible bg-radial from-[#160236] to-[#3a1a6e] p-2 ring ring-[#8c4eddd3] hover:scale-105 transition-all  ease-in-out cursor-pointer"
              >
                <Image
                  src={item.icon}
                  alt={item.name}
                  width={22}
                  height={22}
                  className="size-7 absolute inset"
                />
              </Link>
            ))}
          </div>
        </div>
      </div>

      <Image
        src="/images/curvedRight.svg"
        alt=""
        width={80}
        height={60}
        className="h-[60px] w-auto! -ml-1 "
      />
    </div>
  );
};

export default Bottombar;
