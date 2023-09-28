import Header from "@/components/header";
import Discount from "@/components/discount";
import HeaderMobile from "@/components/headerMobile";
import { LinkTypes } from "@/types/link-types";
import Image from '@/node_modules/next/image';
import background from '@/assets/hero-background.webp';
import Particle from "@/components/particle";
import Button from "@/components/button";
import { IconOrder } from "@/types/icon-order";
import { BiLogoWhatsapp } from '@/node_modules/react-icons/bi';
import { LuMessagesSquare } from '@/node_modules/react-icons/lu';


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
      <Button
        height={"h-[56px]"}
        width={"w-[56px]"}
        backgroundColor={"bg-[#2cd46b]"}
        borderRadius={"rounded-2xl"}
        position="fixed right-4 bottom-24"
        margin={"m-2"}
        iconOrder={IconOrder.BEFORETEXT}
        icon={
          <BiLogoWhatsapp
            className="text-5xl text-white cursor-pointer"
          ></BiLogoWhatsapp>
        }
      ></Button>

      <Button
        height={"h-[56px]"}
        width={"w-[56px]"}
        backgroundColor={"bg-[#8257e5]"}
        borderRadius={"rounded-2xl"}
        position="fixed right-4 bottom-5"
        margin={"m-2"}
        iconOrder={IconOrder.BEFORETEXT}
        icon={
          <LuMessagesSquare
            className="text-4xl text-white cursor-pointer"
          ></LuMessagesSquare>
        }
      ></Button>

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
