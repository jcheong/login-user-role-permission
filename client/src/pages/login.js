import { useNavigate } from 'react-router-dom'
import { Button, Container, Card, Form, Row, Col } from 'react-bootstrap';
import { useState } from 'react';
import withAuth from '../components/withAuth';
import App from '../App';

async function loginUser(credentials) {
    return fetch('http://localhost:5000/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(credentials)
    })
      .then(data => data.json())
}

const Login = () => {
    const [username, setUserName] = useState();
    const [password, setPassword] = useState();
    
    const handleLogin = async e => {
        e.preventDefault();
        const token = await loginUser({
            username,
            password
        });
    }

    return (
        <Container className="mt-3">
            <Row className="justify-content-md-center mt-3">
                <Col md="2"></Col>
                <Col md="8">
                    <Card>
                        <Card.Body>
                            <Form onSubmit={handleLogin}>
                                <Form.Group className="mb-3" controlId="formGroupUsername">
                                    <Form.Label>Username</Form.Label>
                                    <Form.Control type="text" onChange={e => setUserName(e.target.value)} placeholder="Enter username" />
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formGroupPassword">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control type="password"  onChange={e => setPassword(e.target.value)} placeholder="Password" />
                                </Form.Group>

                                <Button variant="primary" type="submit">
                                    Submit
                                </Button>
                            </Form>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md="2"></Col>
            </Row>
        </Container>
    );
}

export default Login;