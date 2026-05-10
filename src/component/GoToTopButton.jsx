import { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";

export default function GoToTopButton({ height = 300 }) {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            // show after scrolling 300px
            setVisible(window.scrollY > height);
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    if (!visible) return null;

    return (
        <Button
            className="round-btn scroll-top xs"
            onClick={(e) => {
                e.currentTarget.blur();

                window.scrollTo({
                    top: 0,
                    behavior: "smooth",
                });
            }}
            style={{
                position: "fixed",
                bottom: 20,
                right: 20,
            }}
        >
            <FontAwesomeIcon icon={faArrowUp} />
        </Button>
    );
}
