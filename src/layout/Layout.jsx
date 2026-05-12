import { Outlet, NavLink } from "react-router-dom";
import { Spinner, Container, Navbar, Nav } from "react-bootstrap";
import { Suspense } from "react";
import { AdsterraBanner } from "../component/AdsterraAd";

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
            <Navbar bg="primary" variant="dark">
                <Container fluid className="px-3">
                    <Navbar.Brand as={NavLink} to="/">
                        Wiryono Lauw
                    </Navbar.Brand>
                    <Nav>
                        <Nav.Link as={NavLink} to="/">
                            Home
                        </Nav.Link>
                        <Nav.Link as={NavLink} to="/blogs">
                            Blogs
                        </Nav.Link>
                        <Nav.Link as={NavLink} to="/projects">
                            Projects
                        </Nav.Link>
                    </Nav>
                </Container>
            </Navbar>

            <Container className="p-3" style={{ marginBottom: 65 }}>
                <Suspense fallback={<Loading />}>
                    <Outlet />
                </Suspense>
            </Container>
            <AdsterraBanner
                height={60}
                width={468}
                adsId="2976ec362c4f609ac16c497d1ccd6c37"
                allowedHosts={["wiryonolau.github.io"]}
            />
        </>
    );
}
