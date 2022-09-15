export default function Price ({value=0, decimal=0}) {
    return (
        <h2>{Number(value).toFixed(decimal)}€</h2>
    )
}