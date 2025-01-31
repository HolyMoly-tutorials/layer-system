import { Slot } from "@radix-ui/react-slot";
import { ReactNode } from "react";
import { css } from "../../styled-system/css";

// TODO: size prop 추가할 수 있는지 디자이너와 협의 필요
// TODO: height 규격화할 수 있는지 디자이너와 협의 필요

type ContainerProps = {
	asChild?: boolean;
	children: ReactNode;
	backgroundColor?:
		| "transparent"
		| "primary"
		| "secondary"
		| "success"
		| "warning"
		| "danger"
		| "hint"
		| "contrast";
	borderRadius?:
		| "000"
		| "050"
		| "100"
		| "200"
		| "300"
		| "400"
		| "500"
		| "600"
		| "700"
		| "800"
		| "900"
		| "950";
	height?:
		| "auto"
		| "25"
		| "50"
		| "75"
		| "100"
		| "150"
		| "175"
		| "200"
		| "225"
		| "250"
		| "300"
		| "400"
		| "500"
		| "600"
		| "700"
		| "800";
	width?: "stretch" | "fit";
	className?: string;
};

export const Container = ({
	asChild,
	children,
	backgroundColor = "transparent",
	borderRadius = "300",
	height = "auto",
	width = "stretch",
	className,
	...props
}: ContainerProps) => {
	const Comp = asChild ? Slot : "div";

	return (
		<Comp
			{...props}
			className={`${css({
				position: "relative",
				overflow: "hidden",
				backgroundColor: `var(--${backgroundColor})`,
				borderRadius: `var(--border-radius-${borderRadius})`,
				height: height === "auto" ? "auto" : `var(--dimension-${height})`,
				width: width === "stretch" ? "100%" : "auto",
				display: width === "fit" ? "inline-block" : undefined,
			})} ${className || ""}`}
		>
			{children}
		</Comp>
	);
};
