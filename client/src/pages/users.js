import { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import axios from 'axios';

const Users = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5000/api/users')
            .then(response => setUsers(response.data))
            .catch(error => console.error('Error fectching users:', error));
    }, []);

    return(
        <Container fluid>
            <h2>Users</h2>
            <Row>
                <Col><strong>Username</strong></Col>
                <Col><strong>First Name</strong></Col>
                <Col><strong>Last Name</strong></Col>
            </Row>
            {users.map(user => (
                <Row key={user.id}>                
                    <Col>{user.username}</Col>
                    <Col>{user.firstName}</Col>                    
                    <Col>{user.lastName}</Col>
                </Row>
            ))}
        </Container>
    );
}

export default Users;