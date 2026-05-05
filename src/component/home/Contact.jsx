import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
export default function Contact() {
    return (
        <>
            <h1 className="my-3">Contact</h1>
            <div className="d-flex align-items-center gap-2">
                <FontAwesomeIcon icon={faEnvelope} />
                <a
                    href="mailto:wiryonolau@gmail.com"
                    className="text-decoration-none"
                >
                    wiryonolau@gmail.com
                </a>
            </div>
        </>
    );
}
