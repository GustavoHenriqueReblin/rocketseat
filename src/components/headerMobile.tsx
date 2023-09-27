import { IconOrder } from "@/types/icon-order";
import logo from '@/assets/rocketseat-logo-mobile.svg';
import Image from '@/node_modules/next/image';
import { GoPerson } from '@/node_modules/react-icons/go';
import { IoMdReorder } from '@/node_modules/react-icons/io';
import Button from "@/components/button";

export default function Header() {
    return (
        <main className="
            lg:hidden mobile:flex
            h-[calc(83px)] w-full border-b justify-center border-zinc-800 px-6
        ">
            <div className="h-full w-full flex flex-row items-center pb-1 max-w-8x1">

                {/* Logo */}
                <Image className="mr-4"
                    src={logo}
                    alt=""
                    width={30}
                />

                <div className="h-7 w-[0.5px] bg-gray-500 mr-4"></div>

                <IoMdReorder className="text-4xl text-color-text-hover cursor-pointer"></IoMdReorder>

                <div className="w-full flex items-center justify-end">
                    <Button
                        margin={"mr-4"} iconOrder={IconOrder.BEFORETEXT}
                        icon={<GoPerson className="mr-[calc(1px)] text-2xl text-color-text-hover"></GoPerson>}
                    ></Button>

                    <Button
                        width = {"w-[100px]"}
                        text = {"Criar conta"}
                        colorText = {"text-[#fff]"}
                        fontWeigth = {"font-[800]"}
                        fontSize = {"text-[11px]"}
                        borderWidth = {"border"}
                        borderColor = {"border-[#8257e5]"}
                        backgroundColor = {"bg-[#121214]"}
                        margin = {"mt-1 ml-[5px]"}
                        padding = {"px-[8px] py-[8px]"}
                        borderRadius = {"rounded-md"}
                        transition = {
                            "transition ease-in-out delay-600 " +
                            "hover:transition hover:ease-in-out hover:delay-600"
                        }
                        backgroundColorHover = {"hover:bg-[#9466ff]"}
                    ></Button>
                </div>
            </div>
        </main>
    )
};