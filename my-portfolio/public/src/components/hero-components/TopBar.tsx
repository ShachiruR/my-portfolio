import Image from "next/image";

const TopBar = () => {
  return (
    <div className="absolute top-0 left-1/2 flex -translate-x-1/2 items-end  z-10">
      <Image
        src="/images/curvedLeftTop.svg"
        alt=""
        width={80}
        height={72}
        className="h-18 w-auto -mr-1"
      />

      <div className="h-18 w-full bg-[#13021D]" />

      <Image
        src="/images/curvedRightTop.svg"
        alt=""
        width={80}
        height={72}
        className="h-18 w-auto! -ml-1"
      />
    </div>
  );
};

export default TopBar;
