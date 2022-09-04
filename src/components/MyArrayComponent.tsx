type Props = {
    data: string[];
}

export const MyArrayComponent = ({ data }: Props) => {
    return (
        <ul>
            {data.map(d => <li key={d}>{d}</li>)}
        </ul>
    )
}