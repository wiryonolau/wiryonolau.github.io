import { useEffect, useState } from "react";
import { useBreakpoint } from "../component/Breakpoint";
import { Offcanvas, Button, Container } from "react-bootstrap";

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
} from "@fortawesome/free-solid-svg-icons";

import Hero from "../component/home/Hero";
import About from "../component/home/About";
import Projects from "../component/home/Projects";
import Skills from "../component/home/Skills";
import Contact from "../component/home/Contact";
import Resume from "../component/home/Resume";
const sections = [
    { id: "hero", icon: faHouse, label: "Home" },
    {
        id: "about",
        icon: faUser,
        label: "About",
        children: <About />,
    },
    {
        id: "skills",
        icon: faScrewdriverWrench,
        label: "Skills",
        children: <Skills />,
    },
    {
        id: "resume",
        icon: faTimeline,
        label: "Resume",
        children: <Resume />,
    },
    {
        id: "projects",
        icon: faImage,
        label: "Projects",
        children: <Projects />,
    },
    { id: "services", icon: faServer, label: "Services" },
    {
        id: "contact",
        icon: faEnvelope,
        label: "Contact",
        children: <Contact />,
    },
];

export default function Home() {
    const { isMdUp } = useBreakpoint();
    const isDesktop = isMdUp;

    const [active, setActive] = useState("hero");
    const [show, setShow] = useState(false);

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

    const handleNavigate = (id) => {
        setShow(false);
        document.getElementById(id)?.scrollIntoView({
            behavior: "smooth",
        });
    };

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

            <section id="hero" className="section hero">
                <Container>
                    <Hero />
                </Container>
            </section>

            {sections.slice(1).map((s) => (
                <section
                    key={s.id}
                    id={s.id}
                    className={`section mb-5 ${s?.className ? s.className : ""}`}
                >
                    <Container>
                        {s?.children ? s.children : <h2>{s.label}</h2>}
                    </Container>
                </section>
            ))}
        </>
    );
}
