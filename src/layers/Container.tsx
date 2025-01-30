import { styled } from "../../styled-system/jsx";

export const Container = styled("div", {
	base: {
		position: "relative",
		overflow: "hidden",
	},
	variants: {
		backgroundColor: {
			transparent: {
				backgroundColor: "transparent",
			},
			primary: {
				backgroundColor: "var(--primary)",
			},
			secondary: {
				backgroundColor: "var(--secondary)",
			},
			success: {
				backgroundColor: "var(--success)",
			},
			warning: {
				backgroundColor: "var(--warning)",
			},
			danger: {
				backgroundColor: "var(--danger)",
			},
			hint: {
				backgroundColor: "var(--hint)",
			},
			contrast: {
				backgroundColor: "var(--contrast)",
			},
		},
		borderRadius: {
			none: { borderRadius: "0" },
			sm: { borderRadius: "var(--border-radius-100)" },
			md: { borderRadius: "var(--border-radius-300)" },
			lg: { borderRadius: "var(--border-radius-500)" },
			full: { borderRadius: "50%" },
		},
	},
	defaultVariants: {
		borderRadius: "md",
		backgroundColor: "transparent",
	},
});
