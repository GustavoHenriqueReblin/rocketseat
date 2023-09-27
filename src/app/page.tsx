import Header from "@/components/header";
import Discount from "@/components/discount";
import HeaderMobile from "@/components/headerMobile";
import Text from "@/components/text";
import { LinkTypes } from "@/types/link-types";
import Image from '@/node_modules/next/image';
import background from '@/assets/hero-background.webp';
import hand from '@/assets/hand.svg';

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
      <Header links={links}></Header>
      <HeaderMobile></HeaderMobile>

      <Discount></Discount>

      <Image className="-z-50 absolute mt-36"
          src={background}
          alt=""
          width={5460}
      />

      <Text
        text={"Hello World!"}
        fontSize={"md:text-[17px] mobile:text-[14px]"}
        fontWeigth = {"font-[600]"}
        colorText={"text-[#06d354]"}
        textAlign={"items-center justify-center"}
        margin={"md:mt-[90px] mobile:mt-[45px]"}
        icon={
          <Image className=""
            src={hand}
            alt=""
            width={25}
          />
        }
      ></Text>

      {/* Remover */}
      <div className="h-[calc(8500px)] w-full"></div>
    </>
  )
};
