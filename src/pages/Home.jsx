import { useEffect, useRef, useState, Suspense, lazy } from "react";
import { useBreakpoint } from "../component/Breakpoint";
import { Offcanvas, Button, Container, Spinner } from "react-bootstrap";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faHouse,
    faUser,
    faFile,
    faImage,
    faServer,
    faEnvelope,
    faBars,
    faArrowUp,
    faScrewdriverWrench,
    faTimeline,
    faCubes,
} from "@fortawesome/free-solid-svg-icons";

import Hero from "../component/home/Hero";

const About = lazy(() => import("../component/home/About"));
// Testing lazy loading
// const About = lazy(
//     () =>
//         new Promise((resolve) => {
//             setTimeout(() => {
//                 resolve(import("../component/home/About"));
//             }, 3000); // ⏱ 1.5s delay
//         }),
// );

const Portfolio = lazy(() => import("../component/home/Portfolio"));
const Skills = lazy(() => import("../component/home/Skills"));
const Contact = lazy(() => import("../component/home/Contact"));
const Resume = lazy(() => import("../component/home/Resume"));
const Services = lazy(() => import("../component/home/Services"));

const sections = [
    { id: "hero", icon: faHouse, label: "Home" },
    {
        id: "about",
        icon: faUser,
        label: "About",
        component: About,
    },
    {
        id: "skills",
        icon: faScrewdriverWrench,
        label: "Skills",
        component: Skills,
    },
    {
        id: "resume",
        icon: faTimeline,
        label: "Resume",
        component: Resume,
    },
    {
        id: "portfolio",
        icon: faCubes,
        label: "Portfolio",
        component: Portfolio,
    },
    { id: "services", icon: faServer, label: "Services", component: Services },
    {
        id: "contact",
        icon: faEnvelope,
        label: "Contact",
        component: Contact,
    },
];

export default function Home() {
    const { isSmDown, isMdUp } = useBreakpoint();
    const isDesktop = isMdUp;

    const [active, setActive] = useState("hero");
    const [show, setShow] = useState(false);

    const sectionRefs = useRef({});
    const [visibleMap, setVisibleMap] = useState({});

    const handleNavigate = (id) => {
        setShow(false);
        document.getElementById(id)?.scrollIntoView({
            behavior: "smooth",
        });
    };

    // scroll spy
    useEffect(() => {
        const onScroll = () => {
            const y = window.scrollY + 150;

            for (let s of sections) {
                const el = document.getElementById(s.id);
                if (!el) continue;

                if (y >= el.offsetTop && y < el.offsetTop + el.offsetHeight) {
                    setActive(s.id);
                }
            }
        };

        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    const id = entry.target.id;

                    if (entry.isIntersecting) {
                        setVisibleMap((prev) => ({
                            ...prev,
                            [id]: true,
                        }));
                    }
                });
            },
            {
                threshold: 0.1,
                rootMargin: "300px",
            },
        );

        // 🔥 IMPORTANT: delay to ensure refs are mounted
        const timeout = setTimeout(() => {
            Object.values(sectionRefs.current).forEach((el) => {
                if (el) observer.observe(el);
            });
        }, 0);

        return () => {
            clearTimeout(timeout);
            observer.disconnect();
        };
    }, []);

    return (
        <>
            {isDesktop && (
                <div className="floating-menu">
                    {sections.map((s) => (
                        <a
                            key={s.id}
                            href={`#${s.id}`}
                            className={`round-btn sm ${active === s.id ? "active" : ""}`}
                        >
                            <FontAwesomeIcon icon={s.icon} />
                        </a>
                    ))}
                </div>
            )}

            {!isDesktop && (
                <>
                    {/* BURGER */}
                    <Button
                        className="round-btn burger-btn xs"
                        onClick={() => setShow(true)}
                    >
                        <FontAwesomeIcon icon={faBars} />
                    </Button>

                    {/* OFFCANVAS */}
                    <Offcanvas show={show} onHide={() => setShow(false)}>
                        <Offcanvas.Header closeButton>
                            <Offcanvas.Title>Menu</Offcanvas.Title>
                        </Offcanvas.Header>

                        <Offcanvas.Body>
                            {sections.map((s) => (
                                <div
                                    key={s.id}
                                    className={`side-item ${
                                        active === s.id ? "active" : ""
                                    }`}
                                    onClick={() => handleNavigate(s.id)}
                                >
                                    <FontAwesomeIcon icon={s.icon} />
                                    <span>{s.label}</span>
                                </div>
                            ))}
                        </Offcanvas.Body>
                    </Offcanvas>
                </>
            )}
            {active != "hero" && (
                <Button
                    className="round-btn scroll-top xs"
                    onClick={() =>
                        window.scrollTo({ top: 0, behavior: "smooth" })
                    }
                >
                    <FontAwesomeIcon icon={faArrowUp} />
                </Button>
            )}

            <section
                id="hero"
                className="section hero"
                style={{
                    backgroundImage: isSmDown
                        ? "linear-gradient(rgba(255,255,255,0.55), rgba(255,255,255,0.55)), url('hero-bg.png')"
                        : "url('hero-bg.png')",
                    backgroundPosition: isSmDown
                        ? "center top"
                        : "right center",
                    backgroundSize: isSmDown ? "cover" : "contain",
                    backgroundRepeat: "no-repeat",
                }}
            >
                <Container>
                    <Hero />
                </Container>
            </section>

            {sections.slice(1).map((s) => {
                const Component = s.component;

                const isVisible = visibleMap[s.id] || active === s.id;
                return (
                    <section
                        key={s.id}
                        id={s.id}
                        ref={(el) => (sectionRefs.current[s.id] = el)}
                        className={`section mb-5 ${s?.className ? s.className : ""}`}
                    >
                        <Container>
                            <Suspense
                                fallback={
                                    <div className="text-center">
                                        <Spinner animation="border" />
                                    </div>
                                }
                            >
                                {Component ? <Component /> : <h2>{s.label}</h2>}
                            </Suspense>
                        </Container>
                    </section>
                );
            })}
        </>
    );
}
