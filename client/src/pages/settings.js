import { Container, Nav} from "react-bootstrap";

const Settings = () => {
    return(
        <Container fluid>
            <h2><span>Features</span></h2>
            <Nav className="flex-column">
                <Nav.Item><Nav.Link href="/users">Users</Nav.Link></Nav.Item>
                <Nav.Item><Nav.Link href="/roles">Roles</Nav.Link></Nav.Item>
            </Nav>
        </Container>
    );
}

export default Settings;