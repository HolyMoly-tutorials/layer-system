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
		height: {
			none: {
				height: "auto",
			},
			25: {
				height: "var(--dimension-025)",
			},
			50: {
				height: "var(--dimension-050)",
			},
			75: {
				height: "var(--dimension-075)",
			},
			100: {
				height: "var(--dimension-100)",
			},
			150: {
				height: "var(--dimension-150)",
			},
			175: {
				height: "var(--dimension-175)",
			},
			200: {
				height: "var(--dimension-200)",
			},
			225: {
				height: "var(--dimension-225)",
			},
			250: {
				height: "var(--dimension-250)",
			},
			300: {
				height: "var(--dimension-300)",
			},
			400: {
				height: "var(--dimension-400)",
			},
			500: {
				height: "var(--dimension-500)",
			},
			600: {
				height: "var(--dimension-600)",
			},
			700: {
				height: "var(--dimension-700)",
			},
			800: {
				height: "var(--dimension-800)",
			},
		},
		width: {
			full: {
				width: "100%",
			},
			fit: {
				width: "auto",
				display: "inline-block",
			},
		},
	},
	defaultVariants: {
		borderRadius: "md",
		backgroundColor: "transparent",
		height: "none",
		width: "full",
	},
});
