// sprinkles.css.ts
import { createSprinkles, defineProperties } from "@vanilla-extract/sprinkles";
import { globalVars } from "./theme.css";

// Container Layer: 컴포넌트의 외형(크기, 배경, 테두리 등)
export const containerSprinkles = createSprinkles(
	defineProperties({
		properties: {
			backgroundColor: {},
		},
	})
);
