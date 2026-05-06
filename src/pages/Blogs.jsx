import { Container, Row, Col, Card } from "react-bootstrap";
import { loadPosts } from "../util";
import { useState, useEffect } from "react";

const modules = import.meta.glob("../blogs/*.jsx");

const PostCard = function PostCard({ title, Content, ...props }) {
    return (
        <Card>
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Content />
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
            <h3 className="mb-3 text-center">Blogs</h3>
            <Row className="g-2">
                {posts.map((p, i) => (
                    <Col key={i} xs={12} sm={3}>
                        <PostCard {...p} />
                    </Col>
                ))}
            </Row>
        </>
    );
}
