import { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import axios from 'axios';

const Roles = () => {
    const [roles, setRoles] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5000/api/roles')
            .then(response => setRoles(response.data))
            .catch(error => console.error('Error fectching roles:', error));
    }, []);

    return(
        <Container fluid>
            <h2>Roles</h2>
            <Row>
                <Col><strong>Role</strong></Col>
            </Row>
            {roles.map(role => (
                <Row key={role.id}>                
                    <Col>{role.name}</Col>
                </Row>
            ))}
        </Container>
    );
}

export default Roles;