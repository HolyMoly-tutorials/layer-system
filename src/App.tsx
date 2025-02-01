import { Button, Card } from "./components";
import { Container, Content } from "./layers";

function App() {
	return (
		<Container backgroundColor="gray100">
			<Content direction="column" paddingY={300} paddingX={300} gap={200}>
				<Button>버튼</Button>
				<Card>
					<Card.Header>카드 헤더</Card.Header>
					<Card.Body>카드 바디</Card.Body>
					<Card.Footer>카드 푸터</Card.Footer>
				</Card>
			</Content>
		</Container>
	);
}

export default App;
