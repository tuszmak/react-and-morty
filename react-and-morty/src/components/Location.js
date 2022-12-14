import { useParams, Link } from "react-router-dom";
import useFetch from "../api/useFetch";
import { mainUrls } from '../api/dataRoutes'
import "./location.css"
const Location = () => {
  const { id } = useParams()
  const { isPending, error, data: loc } = useFetch(`${mainUrls.locations}${id}`)
  console.log(loc);
  return (
    <div>
      {isPending && <h1>Loading...</h1>}
      {error && <h1>{error}</h1>}
      {loc && <div className="loc-content center">
        <h1>{loc.name}</h1>
        <h3>Type: {loc.type}</h3>
        <p>Dimension: {loc.dimension}</p>
        <h2>Residents:</h2>
        <ul>
          <ResidentsList residents={loc.residents} />
        </ul>
        <p>More Later...</p>
      </div>}
    </div>
  )
}

export default Location;


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
  console.log(data);
  return (
    <>
      {isPending && <h1>Loading...</h1>}
      {error && <h1>{error}</h1>}
      {data && <p>Name: <Link to={`/character/${data.id}`}>{data.name}</Link></p>}
    </>
  )
}
