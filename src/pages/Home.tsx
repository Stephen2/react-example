import { useNavigate } from "react-router-dom";
import { Button } from "antd";
import { MyArrayComponent } from "../components/MyArrayComponent";

export function Home() {
    const navigate = useNavigate();

    return (
        <>
            <Button type="primary" size="large" onClick={() => navigate("/about")}>Get started</Button>

            <MyArrayComponent data={["hello", "world"]} />
        </>
    )
}