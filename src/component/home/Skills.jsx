import { Card, Container, Row, Col, ProgressBar } from "react-bootstrap";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import UniversalIcon from "../UniversalIcon";
import { faNetworkWired, faDatabase } from "@fortawesome/free-solid-svg-icons";
import {
    faPython,
    faPhp,
    faReact,
    faFlutter,
    faPostgresql,
    faDocker,
    faLinux,
    faOpenai,
} from "@fortawesome/free-brands-svg-icons";
import {
    SiRabbitmq,
    SiMysql,
    SiMikrotik,
    SiOpnsense,
    SiDebian,
    SiArduino,
    SiProxmox,
    SiCpanel,
} from "react-icons/si";
import { DiRedis } from "react-icons/di";
import { useBreakpoint } from "../Breakpoint";
const skills = [
    { label: "Python", icon: faPython, value: 90 },
    { label: "PHP", icon: faPhp, value: 80 },
    { label: "React", icon: faReact, value: 70 },
    { label: "Flutter", icon: faFlutter, value: 60 },
    { label: "Arduino", icon: SiArduino, value: 60 },
    { label: "MySQL / MariaDB", icon: SiMysql, value: 80 },
    { label: "PostgreSQL", icon: faPostgresql, value: 80 },
    { label: "RabbitMQ", icon: SiRabbitmq, value: 70 },
    { label: "Redis", icon: DiRedis, value: 70 },
    { label: "Docker", icon: faDocker, value: 80 },
    { label: "Proxmox", icon: SiProxmox, value: 80 },
    { label: "cPanel", icon: SiCpanel, value: 70 },
    { label: "RouterOS", icon: SiMikrotik, value: 70 },
    {
        label: "OPNsense",
        icon: SiOpnsense,
        value: 70,
    },
    {
        label: "Debian Linux",
        icon: SiDebian,
        value: 90,
    },
    { label: "ChatGPT", icon: faOpenai, value: 70 },
];

const frameworks = [
    {
        title: "AioHTTP",
        description: "Asynchronous HTTP Client/Server for asyncio and Python.",
    },
    {
        title: "Flask",
        description:
            "A lightweight WSGI web application framework. It is designed to make getting started quick and easy, with the ability to scale up to complex applications.",
    },
    {
        title: "Laminas Project",
        description:
            "The Laminas Project is an open-source continuation of Zend Framework, a PHP framework and component library targeting enterprise applications.",
    },
    {
        title: "Slim Framework",
        description:
            "Slim is a PHP micro framework that helps you quickly write simple yet powerful web applications and APIs.",
    },
    {
        title: "Next.js",
        description:
            "Create high-quality web applications with the power of React components.",
    },
    {
        title: "React Router",
        description:
            "A user‑obsessed, standards‑focused, multi‑strategy router you can deploy anywhere.",
    },
    {
        title: "React Bootstrap",
        description: "The most popular front-end framework, rebuilt for React.",
    },
];

export default function Skills() {
    const { isXs, isSm, isMd, isLg, isSmDown, isMdDown } = useBreakpoint();

    const height = isLg ? 200 : isMd ? 250 : isSm ? 250 : "auto";

    return (
        <>
            <h1>Skills</h1>
            <Container className="mb-5">
                <Row className="g-3">
                    {skills.map((s, i) => (
                        <Col key={i} xs={12} sm={4}>
                            <div className="d-flex align-items-center gap-2 mb-1">
                                <UniversalIcon
                                    icon={s.icon}
                                    className="fw-icon"
                                />
                                <span>{s.label}</span>
                            </div>
                            <ProgressBar now={s.value} style={{ height: 10 }} />
                        </Col>
                    ))}
                </Row>
            </Container>
            <h2>Framework</h2>
            <Container>
                <Row className="g-3">
                    {frameworks.map((f, i) => (
                        <Col key={i} xs={12} sm={6} md={4}>
                            <Card style={{ height }}>
                                <Card.Body>
                                    <Card.Title>{f.title}</Card.Title>
                                    <p>{f.description}</p>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </Container>
        </>
    );
}
