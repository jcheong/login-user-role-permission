import { Container, Nav} from "react-bootstrap";

const Settings = () => {
    return(
        <Container fluid>
            <h2><span>Features</span></h2>
            <Nav>
                <Nav.Item>
                    <Nav.Link href="/users">Users</Nav.Link>
                </Nav.Item>
            </Nav>
        </Container>
    );
}

export default Settings;