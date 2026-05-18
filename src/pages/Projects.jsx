import { Container, Row, Col, Card } from "react-bootstrap";
import { loadPosts } from "../util";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import { useBreakpoint } from "../component/Breakpoint";

const modules = import.meta.glob("../projects/*.jsx");

const PostCard = function PostCard({ title, slug, short, image, ...props }) {
    const navigate = useNavigate();
    const { isSmDown } = useBreakpoint();

    return (
        <Card
            className="flex-fill"
            onClick={() => navigate(`/projects/${slug}`)}
        >
            {image && <Card.Img variant="top" src={image} />}
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <div
                    style={{
                        overflow: "hidden",
                        display: "-webkit-box",
                        WebkitBoxOrient: "vertical",
                        WebkitLineClamp: 4,
                    }}
                >
                    {short}
                </div>
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
            <Row className="gx-2 gy-2">
                {posts.map((p, i) => (
                    <Col key={i} sm={12} md={6} className="d-flex">
                        <PostCard {...p} />
                    </Col>
                ))}
            </Row>
        </>
    );
}
