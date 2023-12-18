import { Container, Stack } from "react-bootstrap";
import NavBar from "../components/navbar";
import Menu from "../components/menu";
import { Outlet } from "react-router-dom";

const Home = () => {
    return(
        <Container fluid>
            <Stack direction="vertical" gap="2">
            <NavBar />
                <Stack direction="horizontal" gap="2" className="align-items-start">
                    <Menu />
                    <Outlet />
                </Stack>
            </Stack>
        </Container>
    );
}

export default Home;