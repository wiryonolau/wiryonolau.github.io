import { Outlet, Link } from "react-router-dom";
import { Spinner, Container, Navbar, Nav } from "react-bootstrap";
import { Suspense } from "react";

function Loading() {
    return (
        <div className="text-center mt-5">
            <Spinner />
        </div>
    );
}

export default function Layout() {
    return (
        <>
            <Navbar bg="dark" variant="dark">
                <Container fluid className="px-3">
                    <Navbar.Brand as={Link} to="/">
                        Portfolio
                    </Navbar.Brand>
                    <Nav>
                        <Nav.Link as={Link} to="/">
                            Home
                        </Nav.Link>
                        <Nav.Link as={Link} to="/projects">
                            Projects
                        </Nav.Link>
                        <Nav.Link as={Link} to="/about">
                            About
                        </Nav.Link>
                    </Nav>
                </Container>
            </Navbar>

            <Container fluid className="p-0">
                <Suspense fallback={<Loading />}>
                    <Outlet />
                </Suspense>
            </Container>
        </>
    );
}
