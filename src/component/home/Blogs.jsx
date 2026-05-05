import { Button } from "react-bootstrap";
import { useNavigate } from "react-router";
export default function Blogs() {
    const navigate = useNavigate();

    return <Button onClick={() => navigate("/blogs")}>{"More >"}</Button>;
}
