import Conferences from "@/components/homepage/Conferences";
import OurSponsor from "@/components/homepage/OurSponsor";
import Image from "next/image";
import Link from "next/link";
import Circle from "../assets/circle.png";
import Coder from "../assets/coder.png";
import Ornament from "../assets/ornament.png";
import Ornament2 from "../assets/ornament2.png";
import Speaker from "../assets/speaker.png";
import Star from "../assets/star.png";

export default function Home() {
  return (
    <>
      <section className="grid md:grid-cols-5 space-x-4 space-y-3 relative p-14">
        <Image
          alt="Ornament"
          src={Ornament}
          className="-z-10 absolute w-[40vw] top-0 left-1/2 "
        />
        <div className="flex flex-col md:items-end items-center md:col-span-3 justify-center space-y-8">
          <h1 className="lg:text-7xl md:text-5xl text-3xl font-bold text-right">
            <span className="relative">
              React
              <Image
                alt="Ornament2"
                src={Ornament2}
                height={40}
                className="absolute z-10 -top-6 -left-6"
              />
            </span>{" "}
            <br /> Conference
          </h1>
          <div className="grid grid-cols-2 space-x-5 space-y-2">
            <div className="relative md:block hidden flex justify-end">
              <div className="relative flex justify-end">
                <Image alt="Speaker" src={Speaker} className="h-[75%] w-auto" />
                <Image
                  alt="Circle"
                  src={Circle}
                  height={100}
                  className="absolute z-0 -right-10 -bottom-10 w-24"
                />
              </div>
            </div>
            <div className="col-span-2 md:col-span-1 text-center md:text-left">
              <h1 className="text-xs font-light mb-10">
                Lorem uis diam turpis quam id fermentum.In quis diam turpis quam
                id fermentum..id fermentum.In quis diam turpis quam id
                fermentum.
              </h1>

              <Link href="/about-us">
                <button className="bg-[#FFC93E] py-2 px-10 text-xs font-medium rounded-full">
                  Buy Tickets
                </button>
              </Link>
            </div>
          </div>
        </div>
        <div className="relative md:col-span-2  flex items-center">
          <div className="relative">
            <Image alt="Coder" src={Coder} className="h-2/3 w-auto " />
            <Image
              alt="Star"
              src={Star}
              className="z-0 w-16 absolute -left-6 -bottom-6"
            />
          </div>
        </div>
        <div className="relative md:hidden">
          <Image alt="Speaker" src={Speaker} className="" />
          <Image
            alt="Circle"
            src={Circle}
            height={100}
            className="absolute z-0 -right-10 -bottom-10 w-24"
          />
        </div>

        <button className="-rotate-90 absolute left-1/2 -translate-x-1/2 bottom-24 text-xs font-medium">
          Scroll Down
        </button>
      </section>
      <Conferences />

      <OurSponsor />
    </>
  );
}
