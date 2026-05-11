import { Container, Row, Col, Card } from "react-bootstrap";
import { loadPosts } from "../util";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import { useBreakpoint } from "../component/Breakpoint";
import MonetagAd from "../component/MonetagAd";

const modules = import.meta.glob("../blogs/*.jsx");

const PostCard = function PostCard({ title, slug, short, image, ...props }) {
    const navigate = useNavigate();

    const { isSmDown } = useBreakpoint();

    const height = isSmDown ? "auto" : 150;

    return (
        <Card
            onClick={() => navigate(`/blogs/${slug}`)}
            style={{ height: height, maxHeight: height }}
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

export default function Blogs() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        loadPosts(modules).then(setPosts);
    }, []);

    return (
        <>
            <MonetagAd />
            <h3 className="mb-3 text-center">Blogs</h3>
            <Row className="g-1">
                {posts.map((p, i) => (
                    <Col key={i} sm={12} md={6}>
                        <PostCard {...p} />
                    </Col>
                ))}
            </Row>
        </>
    );
}
