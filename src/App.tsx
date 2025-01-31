import { css } from "../styled-system/css";
import { Container } from "./layers";
import { Content } from "./layers";

function App() {
	return (
		<div className={css({ backgroundColor: "gray.100", height: "50vh" })}>
			<Container
				borderRadius="lg"
				backgroundColor="primary"
				width="fit"
				height={800}
			>
				<Content gap={100} paddingX={500} justify="center" direction="column">
					<span>1</span>
					<span>2</span>
				</Content>
			</Container>
			<button>버튼</button>
		</div>
	);
}

export default App;
