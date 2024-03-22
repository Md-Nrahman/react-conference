import Image from "next/image";
import Dribble from "../assets/dribble.png";
import Facebook from "../assets/facebook.png";
import Linkedin from "../assets/linkedin.png";
import DarkLogo from "../assets/react-dark.png";
import Twitter from "../assets/twitter.png";

const Footer = () => {
  return (
    <footer className="w-full bg-[#111D5E] p-14 flex flex-col items-center gap-y-4">
      <Image alt="React Conference" src={DarkLogo} />
      <div className="flex space-x-4 mt-8">
        <Image alt="Twitter" src={Twitter} className="h-4 w-auto" />
        <Image alt="Linkedin" src={Linkedin} className="h-4 w-auto" />
        <Image alt="Facebook" src={Facebook} className="h-4 w-auto" />
        <Image alt="Dribble" src={Dribble} className="h-4 w-auto" />
      </div>
      <h1 className="text-white my-2">
        © 2023 Lemonhive. All rights reserved.
      </h1>
    </footer>
  );
};

export default Footer;
