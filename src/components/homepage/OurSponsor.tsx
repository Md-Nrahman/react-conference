import Image from "next/image";
import Catalog from "../../assets/catalog.png";
import Circooles from "../../assets/circooles.png";
import Circooles2 from "../../assets/circooles2.png";
import GoFore from "../../assets/gofore.png";
import Layers from "../../assets/layers.png";
import Quotient from "../../assets/quotient.png";
import SisyPhus from "../../assets/sisyphus.png";
import Sisyphus2 from "../../assets/sisyphus2.png";

const OurSponsor = () => {
  return (
    <section className="bg-[#F9FAFB] w-full p-14 flex flex-col items-center gap-y-4">
      <h1 className="text-4xl font-bold my-5">Our Sponsor</h1>
      <h1 className="text-gray-700 my-5">🥇 Gold Sponsor</h1>
      <div className="md:flex grid grid-cols-2 gap-x-10 gap-y-8">
        <Image alt="Layers" src={Layers} className="w-auto max-h-8 " />
        <Image alt="Sisyphus" src={SisyPhus} className="w-auto max-h-8 " />
      </div>
      <h1 className="text-gray-700 my-5">🥈Silver Sponsors</h1>
      <div className="md:flex grid grid-cols-2 gap-x-10 gap-y-8">
        <Image alt="Circooles" src={Circooles} className="w-auto max-h-8 " />
        <Image alt="Catalog" src={Catalog} className="w-auto max-h-8 " />
        <Image alt="Gofore" src={GoFore} className="w-auto max-h-8 " />
      </div>
      <h1 className="text-gray-700 my-5">🥉Bronze Sponsors</h1>
      <div className="md:flex grid grid-cols-2 gap-x-10 gap-y-8">
        <Image alt="Sisyphus2" src={Sisyphus2} className="w-auto max-h-8 " />
        <Image alt="Quotient" src={Quotient} className="w-auto max-h-8 " />
        <Image alt="Layers" src={Layers} className="w-auto max-h-8 " />
        <Image alt="Circooles2" src={Circooles2} className="w-auto max-h-8 " />
      </div>
    </section>
  );
};

export default OurSponsor;
