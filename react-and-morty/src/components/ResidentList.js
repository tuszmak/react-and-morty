import { useParams, Link } from "react-router-dom";
import useFetch from "../api/useFetch";

const ResidentsList = ({ residents }) => {
    const maxTen = Math.min(residents.length, 10);
    const list = []
    for (let i = 0; i < maxTen; i++) {
        list.push(<li key={i}>{<Resident url={residents[i]} />}</li>)
    }
    return list
}
const Resident = ({ url }) => {
    const { isPending, error, data } = useFetch(url)
    return (
        <>
            {isPending && <h1>Loading...</h1>}
            {error && <h1>{error}</h1>}
            {data && <p><Link to={`/character/${data.id}`}>{data.name}</Link></p>}
        </>
    )
}

export default ResidentsList