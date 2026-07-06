import Image from "next/image";

const Bottombar = () => {
  return (
    <div className="absolute bottom-0 left-1/2 flex -translate-x-1/2 items-end w-[calc(100%-6rem)] z-10">
      <Image
        src="/images/curvedLeft.svg"
        alt=""
        width={80}
        height={62}
        className="h-[60px] w-auto -mr-1"
      />

      <div className="h-[60px] w-full bg-[#150420]" />

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
