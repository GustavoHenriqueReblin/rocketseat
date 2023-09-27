import { LinkTypes } from '@/types/link-types';
import { IconOrder } from "@/types/icon-order";
import logo from '@/assets/rocketseat.svg';
import Image from '@/node_modules/next/image';
import { RiArrowDropDownLine } from '@/node_modules/react-icons/ri';
import { GoPerson } from '@/node_modules/react-icons/go';
import Button from "@/components/button";

type NavLink = {
    text: string;
    type?: LinkTypes | null;
};

interface HeaderProps {
    links: NavLink []
};

export default function Header(props: HeaderProps) {
    const { links } = props;
    return (
        <main className="
            lg:flex mobile:hidden
            h-[calc(83px)] w-full border-b justify-center border-zinc-800 px-6
        ">
            <div className="h-full w-full flex flex-row items-center pb-1 max-w-8x1">

                {/* Logo */}
                <Image className=""
                    src={logo}
                    alt=""
                    width={210}
                />
                
                {/* Links */}
                <div className="h-full w-full flex flex-row items-center justify-center">
                    {!links ? null :
                    
                    links.map((link, i) => (
                        <a href="#" key={i} className="
                            md:text-sm lg+:text-base
                            h-full w-fit flex items-center text-color-text hover:text-color-text-hover hover:border-b hover:border-main-purple font-medium mx-3
                        ">
                            {link.text}
                            {link.type === LinkTypes.MOREOPTIONS ? <RiArrowDropDownLine className="text-2xl"/> : null}
                        </a>
                    ))}
                </div>

                {/* Infos cadastrais */}
                <Button
                    text = {"Entrar"}
                    colorText = {"text-[#fff]"}
                    fontWeigth = {"font-[800]"}
                    fontSize = {"text-[11px]"}
                    backgroundColor = {"bg-[#121214]"}
                    padding = {"px-[20px] py-[10px]"}
                    margin = {"mt-1 mr-[5px]"}
                    borderRadius = {"rounded-md"}
                    transition = {
                        "transition ease-in-out delay-600 " +
                        "hover:transition hover:ease-in-out hover:delay-600"
                    }
                    iconOrder = {IconOrder.BEFORETEXT}
                    icon = {<GoPerson className="mr-[calc(6px)] text-lg text-main-purple"></GoPerson>}
                ></Button>

                <Button
                    width = {"w-[170px]"}
                    text = {"Criar conta"}
                    colorText = {"text-[#fff]"}
                    fontWeigth = {"font-[800]"}
                    fontSize = {"text-[11px]"}
                    borderWidth = {"border"}
                    borderColor = {"border-[#8257e5]"}
                    backgroundColor = {"bg-[#121214]"}
                    margin = {"mt-1 ml-[5px]"}
                    padding = {"px-[10px] py-[10px]"}
                    borderRadius = {"rounded-md"}
                    transition = {
                        "transition ease-in-out delay-600 " +
                        "hover:transition hover:ease-in-out hover:delay-600"
                    }
                    backgroundColorHover = {"hover:bg-[#9466ff]"}
                ></Button>
            </div>
        </main>
    )
};