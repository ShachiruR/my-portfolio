import Image from "next/image";

const TopBar = () => {
  return (
    <div className="absolute top-0 left-1/2 hidden md:flex -translate-x-1/2 items-end  z-10">
      <Image
        src="/images/curvedLeftTop.svg"
        alt=""
        width={80}
        height={60}
        className="h-[60px] w-auto -mr-1"
      />

      <div className="h-[60px] w-[400px] bg-[#150420]" />

      <Image
        src="/images/curvedRightTop.svg"
        alt=""
        width={80}
        height={60}
        className="h-[60px] w-auto! -ml-1"
      />
    </div>
  );
};

export default TopBar;
