import { Slot } from "@radix-ui/react-slot";
import { ReactNode } from "react";
import { styled } from "../../styled-system/jsx";

// TODO: size prop 추가할 수 있는지 디자이너와 협의 필요
// TODO: height 규격화할 수 있는지 디자이너와 협의 필요

const StyledContainer = (asChild: boolean) =>
	styled(asChild ? Slot : "div", {
		base: {
			position: "relative",
			overflow: "hidden",
		},
		variants: {
			backgroundColor: {
				transparent: { backgroundColor: "var(--transparent)" },
				primary: { backgroundColor: "var(--primary)" },
				secondary: { backgroundColor: "var(--secondary)" },
				success: { backgroundColor: "var(--success)" },
				warning: { backgroundColor: "var(--warning)" },
				danger: { backgroundColor: "var(--danger)" },
				hint: { backgroundColor: "var(--hint)" },
				contrast: { backgroundColor: "var(--contrast)" },
			},
			borderRadius: {
				0: { borderRadius: "var(--border-radius-000)" },
				50: { borderRadius: "var(--border-radius-050)" },
				100: { borderRadius: "var(--border-radius-100)" },
				200: { borderRadius: "var(--border-radius-200)" },
				300: { borderRadius: "var(--border-radius-300)" },
				400: { borderRadius: "var(--border-radius-400)" },
				500: { borderRadius: "var(--border-radius-500)" },
				600: { borderRadius: "var(--border-radius-600)" },
				700: { borderRadius: "var(--border-radius-700)" },
				800: { borderRadius: "var(--border-radius-800)" },
				900: { borderRadius: "var(--border-radius-900)" },
				950: { borderRadius: "var(--border-radius-950)" },
			},
			height: {
				auto: { height: "auto" },
				25: { height: "var(--dimension-25)" },
				50: { height: "var(--dimension-50)" },
				75: { height: "var(--dimension-75)" },
				100: { height: "var(--dimension-100)" },
				150: { height: "var(--dimension-150)" },
				175: { height: "var(--dimension-175)" },
				200: { height: "var(--dimension-200)" },
				225: { height: "var(--dimension-225)" },
				250: { height: "var(--dimension-250)" },
				300: { height: "var(--dimension-300)" },
				400: { height: "var(--dimension-400)" },
				500: { height: "var(--dimension-500)" },
				600: { height: "var(--dimension-600)" },
				700: { height: "var(--dimension-700)" },
				800: { height: "var(--dimension-800)" },
			},
			width: {
				stretch: { width: "100%" },
				fit: { width: "auto", display: "inline-block" },
			},
		},
		defaultVariants: {
			backgroundColor: "transparent",
			borderRadius: 300,
			height: "auto",
			width: "stretch",
		},
	});

type StyledContainerProps = Omit<
	React.ComponentProps<ReturnType<typeof StyledContainer>>,
	"ref"
>;

type ContainerProps = {
	asChild?: boolean;
	children: ReactNode;
	className?: string;
} & StyledContainerProps;

export const Container = ({
	asChild = false,
	children,
	...props
}: ContainerProps) => {
	const Component = StyledContainer(asChild);

	return <Component {...props}>{children}</Component>;
};
