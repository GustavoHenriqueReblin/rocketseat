import { IconOrder } from "@/types/icon-order";

interface ButtonProps {
    height?: String | "",
    maxheight?: String | "",
    width?: String | "",
    maxwidth?: String | "",
    text?: String | "",
    colorText: String | "",
    fontWeigth: String | "",
    fontSize: String | "",
    borderWidth?: String | "",
    borderColor?: String | "",
    backgroundColor: String | "",
    margin?: String | "",
    padding?: String | "",
    borderRadius: String | "",
    transition?: String | "",
    iconOrder?: IconOrder | "",
    backgroundColorHover?: String | "",
    borderColorHover?: String | "",
    icon?: any | null
};

export default function Button(props: ButtonProps) {
    const { 
        height, maxheight, width, maxwidth, text, fontWeigth, colorText, fontSize, 
        borderColor, borderWidth, backgroundColor, margin, padding, borderRadius, 
        transition, iconOrder, backgroundColorHover, borderColorHover, icon 
    } = props;
    
    return (
        <button className={`
            flex flex-row items-center text-center justify-center 
            ${height} ${maxheight} ${width} ${maxwidth} 
            ${margin} ${padding} 
            ${colorText} ${fontWeigth} ${fontSize}  
            ${borderWidth} ${borderColor}  
            ${backgroundColor} ${borderRadius}
            ${backgroundColorHover} ${borderColorHover}
            ${transition}  
        `}>
            {icon && iconOrder === IconOrder.BEFORETEXT ? icon : null}
            {text ? text.toUpperCase() : ""}
            {icon && iconOrder === IconOrder.AFTERTEXT ? icon : null}
        </button>
    )
};