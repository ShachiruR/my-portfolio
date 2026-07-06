import Image from "next/image";

const Bottombar = () => {
  return (
    <div className="absolute bottom-0 left-1/2 flex -translate-x-1/2 items-end w-[calc(100%-6rem)] z-10">
      <Image
        src="/images/curvedLeft.svg"
        alt=""
        width={80}
        height={72}
        className="h-18 w-auto -mr-1"
      />

      <div className="h-18 w-full bg-[#13021D]" />

      <Image
        src="/images/curvedRight.svg"
        alt=""
        width={80}
        height={72}
        className="h-18 w-auto! -ml-1"
      />
    </div>
  );
};

export default Bottombar;
