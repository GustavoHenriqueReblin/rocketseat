import Header from "@/components/header";
import Discount from "@/components/discount";
import HeaderMobile from "@/components/headerMobile";
import Text from "@/components/text";
import { LinkTypes } from "@/types/link-types";
import Image from '@/node_modules/next/image';
import background from '@/assets/hero-background.webp';
import hand from '@/assets/hand.svg';
import Particle from "@/components/particle";

export default function Home() {
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
      <Particle></Particle>

      <Header links={links}></Header>
      <HeaderMobile></HeaderMobile>

      <Discount></Discount>

      <Image className="absolute mt-36 -z-20"
          src={background}
          alt=""
          width={5460}
      />

      {/* Remover */}
      {/* <div className="h-[calc(8500px)] w-full"></div> */}
    </>
  )
};
