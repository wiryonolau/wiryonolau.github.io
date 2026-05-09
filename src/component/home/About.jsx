import { Carousel, Container, Row, Col } from "react-bootstrap";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faUserTie,
    faServer,
    faHexagonNodes,
    faNetworkWired,
    faBriefcase,
    faAngleRight,
} from "@fortawesome/free-solid-svg-icons";

import { faDocker, faGitAlt } from "@fortawesome/free-brands-svg-icons";
import { useBreakpoint } from "../Breakpoint";
const about = [
    {
        title: "Professional Overview",
        icon: faUserTie,
        image: "/about-professional.webp",
        description:
            "I am a seasoned IT professional with over a decade of hands-on experience delivering practical, scalable, and secure technology solutions across diverse environments. My expertise spans infrastructure, networking, automation, and software development, allowing me to approach problems holistically rather than in isolated layers. I focus on building systems that are not only technically sound but also aligned with business objectives—improving operational efficiency, reducing downtime, and enabling long-term growth. I am comfortable working in both structured enterprise environments and fast-moving projects, consistently delivering reliable and maintainable solutions.",
    },
    {
        title: "Data Center Design & Implementation",
        icon: faServer,
        image: "/about-datacenter.webp",
        description:
            "Throughout my career, I have designed and implemented cost-effective Rate 1 and Rate 2 Container Data Centers aligned with TIA-942 standards (non-certified), ensuring a balance between performance, redundancy, and budget constraints. My work includes planning power systems, cooling strategies, rack layouts, structured cabling, and environmental monitoring. I emphasize reliability and maintainability by applying industry best practices, even in non-traditional or resource-limited deployments. These implementations support stable, efficient operations and provide a solid foundation for scaling infrastructure as business needs evolve.",
    },
    {
        title: "Automation & Large-Scale Deployment",
        icon: faHexagonNodes,
        image: "/about-automation.webp",
        description:
            "I have successfully led projects involving large-scale infrastructure deployments of over 100 machines, where consistency and speed are critical. By leveraging Ansible for configuration management and automation, I built repeatable deployment pipelines that drastically reduce manual intervention. This approach ensures standardized configurations, minimizes human error, and accelerates system provisioning. I also implement centralized monitoring and logging to maintain visibility across all systems, enabling faster troubleshooting and more proactive system management.",
    },
    {
        title: "Network Architecture & Security",
        icon: faNetworkWired,
        image: "/about-network.webp",
        description:
            "My expertise includes designing, implementing, and maintaining high-availability network infrastructures that prioritize both performance and security. I build resilient architectures with load balancing, failover systems, VLAN segmentation, and secure remote access solutions. Using tools such as MikroTik routers and OPNsense firewalls, I ensure traffic is efficiently managed while maintaining strict security controls. I also implement firewall policies, intrusion prevention strategies, and network isolation techniques to safeguard critical systems and sensitive data from internal and external threats.",
    },
    {
        title: "Hosting & Virtualization",
        icon: faDocker,
        image: "/about-vm.webp",
        description:
            "Beyond networking, I manage hosting environments and email systems using cPanel, ensuring high availability, security, and ease of administration for end users. I also design and maintain virtualization platforms using Proxmox and Incus LXC containers, enabling efficient resource utilization and flexible workload management. My approach includes optimizing compute, storage, and networking resources to support scalable infrastructure while keeping operational costs under control. This allows businesses to adapt quickly to changing demands without sacrificing performance or stability.",
    },
    {
        title: "Software Development, ERP & IoT Solutions",
        icon: faGitAlt,
        image: "/about-software.webp",
        description:
            "On the software side, I develop robust web applications, enterprise management systems (ERP), and interactive kiosk platforms using Python and React. My ERP solutions are designed to streamline business processes such as inventory management, reporting, workflow automation, and system integration, helping organizations improve efficiency and data accuracy. I also build real-time systems that handle dynamic data updates and user interactions seamlessly. In addition, I developed a Building Management System (BMS) that integrates IoT devices using MQTT protocols, enabling real-time sensor monitoring, automation, and intelligent decision-making across physical environments.",
    },
    {
        title: "Full-Stack Expertise & Approach",
        icon: faBriefcase,
        image: "/about-fullstack.webp",
        description:
            "I bring a comprehensive full-stack perspective that spans infrastructure design, automation, backend and frontend development, and system security. This allows me to design cohesive solutions where each layer—from hardware to application—works seamlessly together. I prioritize scalability, maintainability, and performance in every project, while also considering user experience and operational practicality. My approach is not just about building systems, but about delivering complete, reliable solutions that solve real business problems and remain adaptable to future technological changes.",
    },
];

const profiles = [
    {
        label: "Name",
        value: "Wiryono Lauw",
    },
    {
        label: "Email",
        value: "wiryonolau@gmail.com",
    },
    {
        label: "Birthday",
        value: "16 August 1985",
    },
    {
        label: "Age",
        value: Math.floor((new Date() - new Date("1985-08-16")) / 31557600000),
    },
    {
        label: "City",
        value: "Surabaya, Indonesia",
    },
    {
        label: "Degree",
        value: "Bachelor of Computer Science",
    },
    {
        label: "Language",
        value: "Indonesian, Chinese, English",
    },
    {
        label: "Freelance",
        value: "Available",
    },
    {
        label: "GitHub",
        value: "github.com/wiryonolau",
    },
    {
        label: "LinkedIn",
        value: "linkedin.com/in/wpsd2006",
    },
];

export default function About() {
    const { isSmDown } = useBreakpoint();

    const height = isSmDown ? 760 : 300;

    return (
        <>
            <h1 className="my-3">About</h1>
            <Container className="mb-5">
                <Row className="g-2">
                    <Col xs={12} sm={3}>
                        <img src="/profile-pic3.jpg" className="w-100" />
                    </Col>
                    <Col xs={12} sm={9} className="p-3">
                        <Row className="gy-3">
                            {profiles.map((p, i) => (
                                <Col
                                    xs={12}
                                    sm={6}
                                    key={i}
                                    className={`d-flex align-items-center gap-2 ${isSmDown ? "flex-column" : "flex-nowrap"}`}
                                >
                                    {!isSmDown && (
                                        <FontAwesomeIcon
                                            icon={faAngleRight}
                                            className="text-primary"
                                        />
                                    )}
                                    <span className="fw-bold">{p.label}</span>
                                    <span>{p.value}</span>
                                </Col>
                            ))}
                        </Row>
                    </Col>
                </Row>
            </Container>
            <Carousel variant="dark" controls={false}>
                {about.map((a, i) => (
                    <Carousel.Item key={i}>
                        <div
                            style={{
                                height,
                            }}
                        >
                            <div className="d-flex align-items-center justify-content-center fs-3 mb-2 fw-bold">
                                {!isSmDown && (
                                    <FontAwesomeIcon
                                        icon={a.icon}
                                        className="me-2"
                                    />
                                )}
                                <div>{a.title}</div>
                            </div>
                            <div
                                className={`d-flex align-items-center gap-2 ${isSmDown ? "flex-wrap" : ""}`}
                            >
                                <div
                                    className={
                                        isSmDown ? "w-100 text-center" : ""
                                    }
                                >
                                    <img
                                        width="192"
                                        height="192"
                                        className="p-0 m-0"
                                        src={a.image}
                                    />
                                </div>
                                <p className={isSmDown ? "text-center" : ""}>
                                    {a.description}
                                </p>
                            </div>
                        </div>
                    </Carousel.Item>
                ))}
            </Carousel>
        </>
    );
}
