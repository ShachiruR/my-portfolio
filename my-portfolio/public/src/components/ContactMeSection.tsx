import { ArrowUpRight, Phone } from "lucide-react";
import Image from "next/image";

const ContactMeSection: React.FC = () => {
  return (
    <div className="w-full  relative flex items-center justify-center py-12 font-bilmond container my-32">
      <div className="w-full h-full absolute top-0">
        <Image
          src={`/images/contact-mesh.svg`}
          alt="tech"
          fill
          className=" object-cover "
        />
      </div>
      <div className="absolute top-10 left-1/2 -translate-x-1/2 flex flex-row items-start justify-center gap-4">
        <span
          className="text-[120px] font-extrabold  text-transparent
    [-webkit-text-stroke:1px_white] leading-none"
        >
          CONTACT
        </span>
        <span className="text-[48px] font-extrabold leading-none">ME</span>
      </div>
      <div className="relative z-10 flex flex-col  gap-4 items-center justify-center">
        {" "}
        <Image
          src={`/images/contact-hoody.png`}
          alt="tech"
          width={300}
          height={300}
          className="  h-auto w-[430px] "
          style={{
            maskImage:
              "linear-gradient(180deg, #000000 0%, rgba(0, 0, 0, 92%) 18%, rgba(0, 0, 0, 79%) 30%, rgba(0, 0, 0, 65%) 51%, rgba(0, 0, 0, 52%) 61%, rgba(0, 0, 0, 0%) 100%);",
          }}
        />
        <div className="relative pt-16 -mt-42">
          <div
            className=" bg-[#56226b83] rounded-b-[60px] h-full w-full absolute top-0"
          style={{maskImage:"linear-gradient(180deg, rgba(0, 0, 0, 0%) 0%, rgba(0, 0, 0, 21%) 14%, rgba(0, 0, 0, 35%) 22%, rgba(0, 0, 0, 59%) 45%, rgba(0, 0, 0, 69%) 58%, rgba(0, 0, 0, 86%) 74%, #000000 100%);"}}
          >
          
          </div>
           <div className="grid grid-cols-1 gap-4 relative z-10 my-4">
            {" "}
            <div className="flex flex-row items-center justify-center gap-2">
              <span className="text-[32px] font-bold ">Feel Free to</span>
              <span className="text-[36px] font-bold text-[#BEA2FF]">
                Contact ME
              </span>
            </div>
            <div className="flex flex-row items-center justify-center gap-8 flex-wrap">
              {[1, 2, 4, 5, 6].map((item, index) => (
                <CallCTA key={item} number="fds" />
              ))}
            </div>
            <div className="grid geid-cols-1 gap-4 items-center justify-center my-4">
              <span className="text-[18px] font-semibold text-center">
                Social Platforms in which you can catch me{" "}
              </span>
              <div className="flex flex-row items-center justify-center gap-8 flex-wrap">
                {[1, 2, 4, 5, 6].map((item, index) => (
                  <span
                    key={index}
                    className="  flex h-12 w-12 shrink-0  ring-1 ring-[#44155f18] shadow-md/25 items-center justify-center rounded-full bg-linear-to-b from-[#9B42C4]  to-[#7A1EDD] shadow-md "
                  >
                    <Phone
                      className="h-4 w-4 text-white"
                      strokeWidth={2}
                      fill="white"
                    />
                  </span>
                ))}
              </div>
            </div>
          </div> 
        </div>
      </div>
    </div>
  );
};

export default ContactMeSection;

const CallCTA: React.FC<{number: string}> = ({number}) => {
const link = `tel:${number}`;
  return (
    <a
      href={link}
      className="group flex min-w-sm items-center gap-3 relative rounded-full bg-[#ffffff7e] backdrop-blur-sm p-2  shadow-lg transition-transform duration-200 hover:scale-[1.02] active:scale-[0.98]"
    >
      
      <span className="absolute -left-2 flex h-15 w-15 shrink-0 items-center justify-center rounded-full bg-linear-to-br from-[#6B3584]  to-[#290E79] shadow-md shadow-purple-950/40">
        <Phone className="h-4 w-4 text-white" strokeWidth={2} fill="white" />
      </span>

      <span className="flex-1 text-center text-base font-semibold tracking-wide text-white">
        text
      </span>

    
      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white transition-colors duration-200 group-hover:bg-neutral-400/70">
        <ArrowUpRight className="h-4 w-4 text-[#22013d]" strokeWidth={2.5} />
      </span>
    </a>
  );
}
