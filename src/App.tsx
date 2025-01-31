import { css } from "../styled-system/css";

import { Container, Content } from "./layers";
import { Button } from "./components";

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

			<Button>버튼</Button>
		</div>
	);
}

export default App;
