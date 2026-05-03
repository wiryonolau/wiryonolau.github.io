import {
    createBrowserRouter,
    RouterProvider,
    Outlet,
    Link,
} from "react-router-dom";
import { lazy } from "react";
import { Container, Navbar, Nav } from "react-bootstrap";
import Layout from "./layout/Layout";
import { BreakpointProvider } from "./component/Breakpoint";
// lazy pages
const Home = lazy(() => import("./pages/Home"));
const Projects = lazy(() => import("./pages/Projects"));
const About = lazy(() => import("./pages/About"));

function ErrorPage() {
    return (
        <div className="text-center mt-5">
            <h2>Something broke</h2>
        </div>
    );
}

// router
const router = createBrowserRouter([
    {
        path: "/",
        element: <Outlet />,
        children: [{ index: true, element: <Home /> }],
    },
    {
        path: "/",
        element: <Layout />,
        errorElement: <ErrorPage />,
        children: [
            { path: "projects", element: <Projects /> },
            { path: "about", element: <About /> },
        ],
    },
]);

export default function App() {
    return (
        <BreakpointProvider>
            <RouterProvider router={router} />
        </BreakpointProvider>
    );
}
