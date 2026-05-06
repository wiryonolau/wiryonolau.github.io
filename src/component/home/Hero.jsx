import { Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedinIn, faGithub } from "@fortawesome/free-brands-svg-icons";
import { useNavigate } from "react-router";
import { faBook, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { ReactTyped } from "react-typed";

export default function Hero() {
    const navigate = useNavigate();

    return (
        <>
            <div>
                <h1>Wiryono Lauw</h1>
                <div className="d-flex align-items-center flex-nowrap">
                    <span>{"I\u2018m\u00A0a\u00A0"}</span>
                    <ReactTyped
                        className="text-primary"
                        strings={[
                            "Software Engineer",
                            "DevOps Engineer",
                            "Infrastructure Engineer",
                            "Network Engineer",
                        ]}
                        typeSpeed={60}
                        backSpeed={30}
                        loop
                    />
                </div>
            </div>
            <div className="d-flex gap-2 align-items-center flex-nowrap">
                <Button
                    className="round-btn xs"
                    href="www.linkedin.com/in/wpsd2006"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <FontAwesomeIcon icon={faLinkedinIn} />
                </Button>
                <Button
                    className="round-btn xs"
                    href="https://github.com/wiryonolau"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <FontAwesomeIcon icon={faGithub} />
                </Button>
                <Button
                    className="round-btn xs"
                    href="mailto:wiryonolau@gmail.com"
                >
                    <FontAwesomeIcon icon={faEnvelope} />
                </Button>
                <Button
                    size="sm"
                    variant="secondary-subtle"
                    className="text-nowrap"
                    onClick={() => navigate("/blogs")}
                >
                    <FontAwesomeIcon icon={faBook} className="me-1" />
                    Blog
                </Button>
            </div>
        </>
    );
}
