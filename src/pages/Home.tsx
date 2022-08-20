import { useNavigate } from "react-router-dom";
import { Button } from "antd";

export function Home() {
    const navigate = useNavigate();

    return (
        <Button type="primary" size="large" onClick={() => navigate("/about")}>Get started</Button>
    )
}