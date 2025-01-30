// components/layers/content.tsx
import { styled } from "../../styled-system/jsx";

export const Content = styled("div", {
	base: {
		display: "flex",
	},
	variants: {
		gap: {
			0: { gap: "0" },
			50: { gap: "var(--space-050)" },
			100: { gap: "var(--space-100)" },
			200: { gap: "var(--space-200)" },
		},
		direction: {
			row: { flexDirection: "row" },
			column: { flexDirection: "column" },
		},
		align: {
			center: { alignItems: "center" },
			start: { alignItems: "flex-start" },
			end: { alignItems: "flex-end" },
		},
		justify: {
			center: { justifyContent: "center" },
			start: { justifyContent: "flex-start" },
			end: { justifyContent: "flex-end" },
		},
	},
	defaultVariants: {
		gap: 0,
		direction: "row",
		align: "center",
		justify: "center",
	},
});
