import "./Heading.css";

type Props = {
    text: string;
}

export function Heading({ text }: Props) {
    return (
        <h2 className="heading">{text}</h2>
    )
}