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
} from "@fortawesome/free-solid-svg-icons";

const sections = [
    { id: "hero", icon: faHouse, label: "Home" },
    { id: "about", icon: faUser, label: "About" },
    { id: "resume", icon: faFile, label: "Resume" },
    { id: "portfolio", icon: faImage, label: "Portfolio" },
    { id: "services", icon: faServer, label: "Services" },
    { id: "contact", icon: faEnvelope, label: "Contact" },
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
            {/* =========================
          DESKTOP FLOATING MENU
      ========================= */}
            {isDesktop && (
                <div className="floating-menu">
                    {sections.map((s) => (
                        <a
                            key={s.id}
                            href={`#${s.id}`}
                            className={`menu-btn ${active === s.id ? "active" : ""}`}
                        >
                            <FontAwesomeIcon icon={s.icon} />
                        </a>
                    ))}
                </div>
            )}

            {/* =========================
          MOBILE NAV (OFFCANVAS)
      ========================= */}
            {!isDesktop && (
                <>
                    {/* BURGER */}
                    <Button
                        className="burger-btn"
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

                    {/* SCROLL TOP */}
                    <Button
                        className="scroll-top"
                        onClick={() =>
                            window.scrollTo({ top: 0, behavior: "smooth" })
                        }
                    >
                        <FontAwesomeIcon icon={faArrowUp} />
                    </Button>
                </>
            )}

            {/* =========================
          HERO (Bootstrap style)
      ========================= */}
            <section id="hero" className="section hero">
                <Container>
                    <h1>Your Name</h1>
                    <p>I’m Developer</p>
                </Container>
            </section>

            {/* =========================
          SECTIONS
      ========================= */}
            {sections.slice(1).map((s) => (
                <section key={s.id} id={s.id} className="section">
                    <Container>
                        <h2>{s.label}</h2>
                    </Container>
                </section>
            ))}
        </>
    );
}
