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
import { LanguageContextProvider } from "./component/Language";

// lazy pages
const Home = lazy(() => import("./pages/Home"));
const Blogs = lazy(() => import("./pages/Blogs"));
const Projects = lazy(() => import("./pages/Projects"));
const ProjectDetail = lazy(() => import("./pages/ProjectDetail"));
const BlogDetail = lazy(() => import("./pages/BlogDetail"));

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
            { path: "blogs", element: <Blogs /> },
            {
                path: "blogs/:slug",
                element: <BlogDetail />,
            },
            {
                path: "projects",
                element: <Projects />,
            },
            {
                path: "projects/:slug",
                element: <ProjectDetail />,
            },
        ],
    },
]);

export default function App() {
    return (
        <LanguageContextProvider>
            <BreakpointProvider>
                <RouterProvider router={router} />
            </BreakpointProvider>
        </LanguageContextProvider>
    );
}
