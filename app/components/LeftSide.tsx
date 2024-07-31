import Image from "next/image";
import Github from "@/app/images/icones/github-brands-solid.svg";
import Linkedin from "@/app/images/icones/linkedin-brands-solid.svg";
import Twitter from "@/app/images/icones/twitter-brands-solid.svg";

const LeftSide = () => {
  return (
    <div className="w-full h-full flex flex-col items-center justify-end gap-4 text-textLight">
      <a href="https://github.com/vanparfait" target="_blank">
        <Image
          src={Github}
          alt="Mon Github"
          className="w-10 h-10 text-xl bg-hoverColor rounded-full inline-flex justify-center items-center  hover:bg-textGreen duration-300 cursor-pointer"
        />
      </a>
      <a href="https://www.linkedin.com/in/parfaitnguemechia" target="_blank">
        <Image
          src={Linkedin}
          alt="Mon Github"
          className="w-10 h-10 text-xl bg-hoverColor rounded-full inline-flex justify-center items-center  hover:bg-textGreen duration-300 cursor-pointer"
        />
      </a>
      <a href="https://x.com/PNguemechia" target="_blank">
        <Image
          src={Twitter}
          alt="Mon Twitter"
          className="w-10 h-10 text-xl bg-hoverColor rounded-full inline-flex justify-center items-center  hover:bg-textGreen duration-300 cursor-pointer"
        />
      </a>
      <div className="w-[2px] h-32 bg-textDark"></div>
    </div>
  );
};

export default LeftSide;
