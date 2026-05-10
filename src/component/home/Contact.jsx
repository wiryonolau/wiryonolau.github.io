import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { useBreakpoint } from "../Breakpoint";
import { useState } from "react";

export default function Contact() {
    const { isSmDown } = useBreakpoint();

    const handleSubmit = (e) => {
        e.preventDefault();

        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const message = form.message.value;
        const subject = encodeURIComponent(form.subject.value);
        const body = encodeURIComponent(
            `Name: ${name}\nEmail: ${email}\n\n${message}`,
        );

        const mailto = `mailto:wiryonolau@gmail.com?subject=${subject}&body=${body}`;
        window.location.hfref = mailto;
    };

    return (
        <Container>
            <Row className="gy-3">
                <Col xs={12} sm={4}>
                    <h1>Contact</h1>
                    <div className="d-flex align-items-center gap-2">
                        <FontAwesomeIcon icon={faEnvelope} />
                        <a
                            href="mailto:wiryonolau@gmail.com"
                            className="text-decoration-none"
                        >
                            wiryonolau@gmail.com
                        </a>
                    </div>
                </Col>
                <Col xs={12} sm={8}>
                    <Form onSubmit={handleSubmit}>
                        <div className="d-flex flex-column justify-content-center gap-3">
                            <div
                                className={`d-flex align-items-center gap-2 ${isSmDown ? "flex-column row-gap-3" : ""}`}
                            >
                                <Form.Control
                                    size="sm"
                                    name="name"
                                    placeholder="Your Name"
                                />
                                <Form.Control
                                    size="sm"
                                    type="email"
                                    name="email"
                                    placeholder="Your Email"
                                />
                            </div>
                            <Form.Control
                                size="sm"
                                name="subject"
                                placeholder="Subject"
                            />
                            <Form.Control
                                size="sm"
                                as="textarea"
                                rows={3}
                                name="message"
                                placeholder="Message"
                            />
                            <div className="text-center">
                                <Button type="submit">Send Message</Button>
                            </div>
                        </div>
                    </Form>
                </Col>
            </Row>
        </Container>
    );
}
