import Button from "@/components/button";
import { IconOrder } from "@/types/icon-order";
import { MdOutlineDiscount } from '@/node_modules/react-icons/md';

const Discount = () => {
    return (
        <div className=" 
            mobile:h-28 mobile:flex-col md:h-14 md:flex-row mt-[83px]
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
                md:ml-4 md:mt-0 lg:text-sm md:flex-row mobile:mt-3 mobile: mx-2 mobile:text-xs mobile:flex-col
                text-white font-[500] text-center flex">
                Você tem um desconto pendente para estudar na Rocketseat. <span className="font-[700] underline ml-2">Resgatar agora</span> 
            </span>
        </div>
    )
};

export default Discount;