interface TextProps {
    text?: String | "",
    fontSize?: String | "",
    fontWeigth?: String | "",
    colorText?: String | "",
    textAlign?: String | "",
    margin?: String | "",
    icon?: any | null,
};

export default function Text(props: TextProps) {
    const { text, fontSize, fontWeigth, colorText, textAlign, margin, icon } = props;

    return (
        <div className={`h-[5rem] w-full max-w-8x1 ${margin}`}>
            <span className={`
                flex flex-row ${textAlign} ${fontSize} ${colorText} ${fontWeigth}
            `}>
                {icon}
                <div className="w-4"></div>
                {text}
            </span>
        </div>
    )
};