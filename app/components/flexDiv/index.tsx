import React, {CSSProperties, HTMLAttributes, ReactNode} from "react";

interface FlexDivProps extends HTMLAttributes<HTMLDivElement> {
    children: ReactNode;
    direction?: CSSProperties["flexDirection"];
    align?: CSSProperties["alignItems"];
    justify?: CSSProperties["justifyContent"];
    gap?: CSSProperties["gap"];
    className?: string;
    flex?: number;
    fullWidth?: boolean;
}

const FlexDiv: React.FC<FlexDivProps> = ({
                                             children,
                                             direction = "row",
                                             align = "flex-start",
                                             justify = "flex-start",
                                             gap = "0",
                                             className,
                                             flex,
                                             fullWidth,
                                             ...restProps
                                         }: FlexDivProps) => {
    const divStyles: CSSProperties = {
        display: "flex",
        flexDirection: direction,
        alignItems: align,
        justifyContent: justify,
        gap,
        flex,
        width: fullWidth ? '100%' : ''
    };

    return (
        <div className={className} style={divStyles} {...restProps}>
            {children}
        </div>
    );
};

export default FlexDiv;
