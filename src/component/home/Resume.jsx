import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useBreakpoint } from "../Breakpoint";

const educations = [
    {
        title: "Certified Data Center Facilities Operation Manager",
        company: "EXIN",
        date: "2022 - 2025",
        description: [
            "In-depth knowledge of managing data center operations from planning to monitoring and reporting",
        ],
    },
    {
        title: "Certified TIA-942 Internal Auditor",
        company: "EXIN",
        date: "2019 - Now",
        description: [
            "Skills and knowledge to conduct an internal audit program by applying widely recognised audit principles, procedures and techniques which are aligned with the ISO-19011 auditing guideline",
        ],
    },
    {
        title: "Certified TIA-942 Design Consultant",
        company: "EXIN",
        date: "2019 - Now",
        description: [
            "Understanding the intent of the ANSI/TIA-942 Standard is of fundamental importance",
        ],
    },
    {
        title: "Certified Data Center Specialist",
        company: "EXIN",
        date: "2021 - 2024",
        description: [
            "Knowledge and skills to act as informed, capable counterparts when dealing with data centre design and operations especially in high-demand environments.",
        ],
    },
    {
        title: "MikroTik Certified Network Associate",
        company: "MikroTik",
        date: "2020 - 2023",
        description: [
            "Fundamental networking concepts, including routing, bridging, wireless, and network management",
        ],
    },
    {
        title: "Certified Data Center Professional",
        company: "EXIN",
        date: "2019 - 2022",
        description: [
            "Essential knowledge of the data centre infrastructure’s vital components.",
        ],
    },
    {
        title: "Bachelor of Computer Science",
        company: "Beijing Institute of Technology",
        date: "2004 - 2008",
        description: [
            "Theoretical foundations and practical applications of computing, including algorithms, programming, software development, and artificial intelligence",
        ],
    },
];
const experiences = [
    {
        title: "Freelance",
        company: "Freelance",
        date: "2025 - now",
        description: [
            "Develop private AI classifier using embedding for messaging and utlize NLP to translate command to database",
            "Develop AI image recognizer base on learned object image",
            "Publish HFSales - Order & Expenses Android offline first application for Sales team",
            "Develop HFNexus, an application framework for ERP style application",
        ],
    },
    {
        title: "IT Director & Tech Lead",
        company: "Harvestindo Global Persada",
        date: "2020 - 2025",
        description: [
            "Build contaninerized datacenter using TIA-942 approach, focus on protability",
            "Design and implement secure multi-site network infrastructure",
            "Design and implement deploy, update and monitoring system using in-house application and ansible",
            "Design and implement multi sensor monitoring for datacenter",
            "Develop HFAuto for Arduino IoT controller",
        ],
    },
    {
        title: "Tech Lead",
        company: "Harvestindo Global Persada",
        date: "2014 - 2019",
        description: [
            "Design and building infrastructure for crypto mining operation, including network and monitoring system for all machine",
        ],
    },
    {
        title: "Software Engineer",
        company: "TLScontact",
        date: "2012 - 2013",
        description: [
            "Developing software for face to face operation across country",
        ],
    },
    {
        title: "IT Manager",
        company: "Tianjin Sunshine Plastics Co. Ltd.",
        date: "2010 - 2012",
        description: ["Managing daily IT operation and deploy ERP software"],
    },
    {
        title: "Software Engineer",
        company: "Lihong Property",
        date: "2008 - 2009",
        description: [
            "Building Property management application and website for customer",
        ],
    },
];

export default function Resume() {
    const { isSmDown } = useBreakpoint();

    return (
        <>
            <h1 className="mb-3">Resume</h1>
            <Container>
                <Row className="g-2">
                    <Col sm={12} md={6}>
                        <h2 className="text-center mb-2">
                            Professional Experience
                        </h2>
                        <Container className="timeline-container">
                            {experiences.map((item, index) => (
                                <Row key={index} className="timeline-item">
                                    <Col xs={2} className="timeline-left">
                                        <div className="timeline-dot"></div>
                                        {index !== experiences.length - 1 && (
                                            <div className="timeline-line"></div>
                                        )}
                                    </Col>

                                    <Col xs={10} className="timeline-content">
                                        <h5>{item.title}</h5>
                                        <div
                                            className={`d-flex ${isSmDown ? "flex-column column-gap-2" : "gap-2"}`}
                                        >
                                            <small>{item.company}</small>
                                            <small>{item.date}</small>
                                        </div>
                                        {item.description.map((d, i) => (
                                            <div key={i} className="mb-2">
                                                {d}
                                            </div>
                                        ))}
                                    </Col>
                                </Row>
                            ))}
                        </Container>
                    </Col>
                    <Col sm={12} md={6}>
                        <h2 className="text-center mb-2">Education</h2>
                        <Container className="timeline-container">
                            {educations.map((item, index) => (
                                <Row key={index} className="timeline-item">
                                    <Col xs={2} className="timeline-left">
                                        <div className="timeline-dot"></div>
                                        {index !== educations.length - 1 && (
                                            <div className="timeline-line"></div>
                                        )}
                                    </Col>

                                    <Col xs={10} className="timeline-content">
                                        <h5>{item.title}</h5>
                                        <div
                                            className={`d-flex ${isSmDown ? "flex-column column-gap-2" : "gap-2"}`}
                                        >
                                            <small>{item.company}</small>
                                            <small>{item.date}</small>
                                        </div>
                                        {item.description.map((d, i) => (
                                            <div key={i} className="mb-2">
                                                {d}
                                            </div>
                                        ))}
                                    </Col>
                                </Row>
                            ))}
                        </Container>
                    </Col>
                </Row>
            </Container>
        </>
    );
}
