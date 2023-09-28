import Header from "@/components/header";
import Discount from "@/components/discount";
import HeaderMobile from "@/components/headerMobile";
import { LinkTypes } from "@/types/link-types";
import Image from '@/node_modules/next/image';
import background from '@/assets/hero-background.webp';
import Particle from "@/components/particle";

const Home = () => {
  const links = [
    { text: "Home" },
    { text: "Programas", type: LinkTypes.MOREOPTIONS },
    { text: "Eventos", type: LinkTypes.MOREOPTIONS },
    { text: "Blog" },
    { text: "A Rocketseat" },
    { text: "Para empresas" }
  ];

  return (
    <>
      <Header links={links}></Header>
      <HeaderMobile></HeaderMobile>

      <Discount></Discount>

      <Image className="absolute md:mt-36 mobile:mt-[calc(200px)] -z-50"
          src={background}
          alt=""
          width={5460}
      />
      <Particle></Particle>

      {/* Remover */}
      <div className="h-[calc(8500px)] w-full"></div>
    </>
  )
};

export default Home
