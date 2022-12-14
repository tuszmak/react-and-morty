import { useParams, Link } from "react-router-dom";
import useFetch from "../api/useFetch";
import { mainUrls } from '../api/dataRoutes'
import "./location.css"
import ResidentsList from "./ResidentList";
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
  );
};

export default Location;
