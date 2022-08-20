import "./Button.css";

type Props = {
    text: string;
    size: "large" | "medium" | "small";
    onClick: () => void;
}

export function Button({ onClick, text, size }: Props) {
    return (
        <button onClick={onClick} className={size}>{text}</button>
    )
}