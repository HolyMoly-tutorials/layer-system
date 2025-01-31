import { styled } from "../../styled-system/jsx";

// TODO: padding 규격화할 수 있는지 디자이너와 협의 필요

export const Content = styled("div", {
	base: {
		display: "flex",
		width: "100%",
		height: "100%",
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
		padding: {
			0: { padding: "var(--space-000)" },
			25: { padding: "var(--space-025)" },
			50: { padding: "var(--space-050)" },
			75: { padding: "var(--space-075)" },
			100: { padding: "var(--space-100)" },
			150: { padding: "var(--space-150)" },
			175: { padding: "var(--space-175)" },
			200: { padding: "var(--space-200)" },
			225: { padding: "var(--space-225)" },
			250: { padding: "var(--space-250)" },
			300: { padding: "var(--space-300)" },
			400: { padding: "var(--space-400)" },
			500: { padding: "var(--space-500)" },
			600: { padding: "var(--space-600)" },
			700: { padding: "var(--space-700)" },
			800: { padding: "var(--space-800)" },
			900: { padding: "var(--space-900)" },
		},
		paddingX: {
			0: { paddingLeft: "var(--space-000)", paddingRight: "var(--space-000)" },
			25: { paddingLeft: "var(--space-025)", paddingRight: "var(--space-025)" },
			50: { paddingLeft: "var(--space-050)", paddingRight: "var(--space-050)" },
			75: { paddingLeft: "var(--space-075)", paddingRight: "var(--space-075)" },
			100: {
				paddingLeft: "var(--space-100)",
				paddingRight: "var(--space-100)",
			},
			150: {
				paddingLeft: "var(--space-150)",
				paddingRight: "var(--space-150)",
			},
			175: {
				paddingLeft: "var(--space-175)",
				paddingRight: "var(--space-175)",
			},
			200: {
				paddingLeft: "var(--space-200)",
				paddingRight: "var(--space-200)",
			},
			225: {
				paddingLeft: "var(--space-225)",
				paddingRight: "var(--space-225)",
			},
			250: {
				paddingLeft: "var(--space-250)",
				paddingRight: "var(--space-250)",
			},
			300: {
				paddingLeft: "var(--space-300)",
				paddingRight: "var(--space-300)",
			},
			400: {
				paddingLeft: "var(--space-400)",
				paddingRight: "var(--space-400)",
			},
			500: {
				paddingLeft: "var(--space-500)",
				paddingRight: "var(--space-500)",
			},
			600: {
				paddingLeft: "var(--space-600)",
				paddingRight: "var(--space-600)",
			},
			700: {
				paddingLeft: "var(--space-700)",
				paddingRight: "var(--space-700)",
			},
			800: {
				paddingLeft: "var(--space-800)",
				paddingRight: "var(--space-800)",
			},
			900: {
				paddingLeft: "var(--space-900)",
				paddingRight: "var(--space-900)",
			},
		},
		paddingY: {
			0: { paddingTop: "var(--space-000)", paddingBottom: "var(--space-000)" },
			25: { paddingTop: "var(--space-025)", paddingBottom: "var(--space-025)" },
			50: { paddingTop: "var(--space-050)", paddingBottom: "var(--space-050)" },
			75: { paddingTop: "var(--space-075)", paddingBottom: "var(--space-075)" },
			100: {
				paddingTop: "var(--space-100)",
				paddingBottom: "var(--space-100)",
			},
			150: {
				paddingTop: "var(--space-150)",
				paddingBottom: "var(--space-150)",
			},
			175: {
				paddingTop: "var(--space-175)",
				paddingBottom: "var(--space-175)",
			},
			200: {
				paddingTop: "var(--space-200)",
				paddingBottom: "var(--space-200)",
			},
			225: {
				paddingTop: "var(--space-225)",
				paddingBottom: "var(--space-225)",
			},
			250: {
				paddingTop: "var(--space-250)",
				paddingBottom: "var(--space-250)",
			},
			300: {
				paddingTop: "var(--space-300)",
				paddingBottom: "var(--space-300)",
			},
			400: {
				paddingTop: "var(--space-400)",
				paddingBottom: "var(--space-400)",
			},
			500: {
				paddingTop: "var(--space-500)",
				paddingBottom: "var(--space-500)",
			},
			600: {
				paddingTop: "var(--space-600)",
				paddingBottom: "var(--space-600)",
			},
			700: {
				paddingTop: "var(--space-700)",
				paddingBottom: "var(--space-700)",
			},
			800: {
				paddingTop: "var(--space-800)",
				paddingBottom: "var(--space-800)",
			},
			900: {
				paddingTop: "var(--space-900)",
				paddingBottom: "var(--space-900)",
			},
		},
	},
	defaultVariants: {
		gap: 0,
		direction: "row",
		align: "center",
		justify: "center",
		padding: 0,
		paddingX: 0,
		paddingY: 0,
	},
});
