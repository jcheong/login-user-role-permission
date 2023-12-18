import { ListGroup, ListGroupItem } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const Menu = () => {
    return (
        <ListGroup className="flex-column ">
            <ListGroupItem action as={NavLink} to="/" >Home</ListGroupItem>
            <ListGroupItem action as={NavLink} to="/clients">Clients</ListGroupItem>
            <ListGroupItem action as={NavLink} to="/settings">Settings</ListGroupItem>
        </ListGroup>
    );
};
export default Menu;