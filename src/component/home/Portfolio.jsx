import { Container, Button, Row, Col, Card } from "react-bootstrap";
import { loadPosts } from "../../util";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router";

const modules = import.meta.glob("../../projects/*.jsx");

const PostCard = function PostCard({ title, slug, short, image, ...props }) {
    const navigate = useNavigate();
    return (
        <Card
            onClick={() => {
                if (slug) {
                    navigate(`/projects/${slug}`);
                }
            }}
        >
            {image && <Card.Img variant="top" src={image} />}
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <div>{short}</div>
            </Card.Body>
        </Card>
    );
};

export default function Portfolio() {
    const [posts, setPosts] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        loadPosts(modules, 0, 6).then(setPosts);
    }, []);

    return (
        <Row className="d-flex align-items-center">
            <Col xs={12} sm={3}>
                <div className="fw-bold fs-1">Portfolio</div>
                <Button
                    className="px-0"
                    variant="link"
                    onClick={() => navigate("/projects")}
                >
                    More
                </Button>
            </Col>
            <Col xs={12} sm={9}>
                <Row className="g-2">
                    {posts.map((p, i) => (
                        <Col key={i} xs={12} sm={3}>
                            <PostCard {...p} />
                        </Col>
                    ))}
                </Row>
            </Col>
        </Row>
    );
}
