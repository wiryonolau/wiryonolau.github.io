import {
    createHashRouter,
    RouterProvider,
    Outlet,
    Link,
} from "react-router-dom";
import { lazy } from "react";
import { Container, Navbar, Nav } from "react-bootstrap";
import Layout from "./layout/Layout";

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
const router = createHashRouter([
    {
        path: "/",
        element: <Layout />,
        errorElement: <ErrorPage />,
        children: [
            { index: true, element: <Home /> },
            { path: "projects", element: <Projects /> },
            { path: "about", element: <About /> },
        ],
    },
]);

export default function App() {
    return <RouterProvider router={router} />;
}
