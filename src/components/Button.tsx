import { Container, Content, useInteractionState } from "../layers";

type ButtonProps = {
	children: React.ReactNode;
	backgroundColor?:
		| "primary"
		| "secondary"
		| "success"
		| "warning"
		| "danger"
		| "hint"
		| "contrast";
	width?: "fit" | "stretch";
};

export const Button = ({
	children,
	backgroundColor = "primary",
	width = "fit",
}: ButtonProps) => {
	const stateClassName = useInteractionState();

	return (
		<Container
			backgroundColor={backgroundColor}
			width={width}
			height={600}
			asChild
			className={stateClassName}
		>
			<button>
				<Content paddingX={300} gap={50}>
					{children}
				</Content>
			</button>
		</Container>
	);
};
