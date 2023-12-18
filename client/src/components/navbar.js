import { Navbar, Nav } from 'react-bootstrap';
import App from '../App';

const NavBar = () => {
    return (
        <Navbar className="bg-light p-2">
            <Navbar.Text className="ms-auto">User</Navbar.Text>
            <Nav>
                <Nav.Link onClick={App.handleLogout}>Sign Out</Nav.Link>
            </Nav>
        </Navbar>
    );
}

export default NavBar;