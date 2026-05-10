import { Container, Row, Col, Card } from "react-bootstrap";
import { loadPosts } from "../util";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import { useBreakpoint } from "../component/Breakpoint";

const modules = import.meta.glob("../projects/*.jsx");

const PostCard = function PostCard({ title, slug, short, image, ...props }) {
    const navigate = useNavigate();
    const { isSmDown } = useBreakpoint();

    const height = isSmDown ? "auto" : 300;

    return (
        <Card
            onClick={() => navigate(`/projects/${slug}`)}
            style={{ height: height, maxHeight: height }}
        >
            {image && <Card.Img variant="top" src={image} />}
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <div className="text-truncate">{short}</div>
            </Card.Body>
        </Card>
    );
};

export default function Projects() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        loadPosts(modules).then(setPosts);
    }, []);

    return (
        <>
            <h3 className="mb-3 text-center">Projects</h3>
            <Row className="g-1">
                {posts.map((p, i) => (
                    <Col key={i} xs={12} sm={3}>
                        <PostCard {...p} />
                    </Col>
                ))}
            </Row>
        </>
    );
}
