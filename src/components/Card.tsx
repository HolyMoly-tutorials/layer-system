import { Container, Content, ContainerProps } from "../layers";

type CardProps = {
	children: React.ReactNode;
	minWidth?: ContainerProps["minWidth"];
	minHeight?: ContainerProps["minHeight"];
};

export const CardHeader = ({ children }: CardProps) => {
	return (
		<Container borderBottom="gray300" borderRadius={0}>
			<Content paddingX={300} paddingY={200}>
				{children}
			</Content>
		</Container>
	);
};

export const CardBody = ({ children }: CardProps) => {
	return (
		<Container borderBottom="gray300" borderRadius={0}>
			<Content padding={300}>{children}</Content>
		</Container>
	);
};

export const CardFooter = ({ children }: CardProps) => {
	return (
		<Container borderTop="gray300" borderRadius={0}>
			<Content padding={300}>{children}</Content>
		</Container>
	);
};

export const Card = ({ children, minWidth, minHeight }: CardProps) => {
	return (
		<Container borderRadius={300} backgroundColor="gray000" border="gray300">
			<Content direction="column" minWidth={minWidth} minHeight={minHeight}>
				{children}
			</Content>
		</Container>
	);
};

Card.Header = CardHeader;
Card.Body = CardBody;
Card.Footer = CardFooter;
