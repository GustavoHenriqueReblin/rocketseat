import { IconOrder } from "@/types/icon-order";
import Header from "@/components/header";
import HeaderMobile from "@/components/headerMobile";
import { LinkTypes } from "@/types/link-types";
import Button from "@/components/button";
import { MdOutlineDiscount } from '@/node_modules/react-icons/md';

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
      <div className=" 
        mobile:h-32 mobile:flex-col md:h-14 md:flex-row
        w-full bg-[#633bbc] flex items-center justify-center cursor-pointer
      ">
        <Button
          width = {"w-[175px]"}
          text = {"+65% de desconto"}
          colorText = {"text-[#111433]"}
          fontWeigth = {"font-[800]"}
          fontSize = {"text-[11px]"}
          backgroundColor = {"bg-[#fba94c]"}
          padding = {"py-[10px]"}
          borderRadius = {"rounded-md"}
          iconOrder = {IconOrder.BEFORETEXT}
          icon = {<MdOutlineDiscount className="mr-[calc(10px)] text-lg text-[#111433]"></MdOutlineDiscount>}
        ></Button>
        <span className="
          md:ml-4 md:mt-0 mobile:mt-3 mobile: mx-2
          text-white font-[500] text-center">
          Você tem um desconto pendente para estudar na Rocketseat. <span className="font-[700] underline">Resgatar agora</span> 
        </span>
      </div>
      <div className="h-[calc(8500px)] w-full"></div>
    </>
  )
};
