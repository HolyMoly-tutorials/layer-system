import { css } from "../../styled-system/css";

export const useInteractionState = () => {
	const defaultStyle = {
		position: "relative",

		"&::after": {
			content: '""',
			position: "absolute",
			width: "100%",
			height: "100%",
			top: 0,
			left: 0,
		},
		"&:hover::after": {
			display: "block",
			opacity: 0.08,
			backgroundColor: "var(--gray-900)",
		},
		"&:active::after": {
			display: "block",
			opacity: 0.16,
			backgroundColor: "gray.900",
		},
		"&:focus-visible": {
			outline: `2px solid black`,
		},
	};

	return css({
		...defaultStyle,
	});
};
