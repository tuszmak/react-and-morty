import { useParams, Link } from "react-router-dom";
import useFetch from "../api/useFetch";
import { mainUrls } from "../api/dataRoutes";
import ResidentsList from "./ResidentList";
import { useState } from "react";

const Location = ({ locationID }) => {
  const [isExtended, setIsExtended] = useState(false);
  function handleExtension() {
    setIsExtended(!isExtended);
  }
  let { id } = useParams();
  if (!id) {
    id = locationID;
  }
  // console.log(`A kulcs: ${locationID}`);
  const {
    isPending,
    error,
    data: loc,
  } = useFetch(`${mainUrls.locations}${id}`);
  // console.log(loc);
  return (
    <div>
      {isPending && <h1>Loading...</h1>}
      {error && <h1>{error}</h1>}
      {loc && (
        <div>
          <h1>{loc.name}</h1>
          <h3>{loc.type}</h3>
          <p>Dimension:{loc.dimension}</p>
          {isExtended && (
            <>
              {" "}
              <h2>Residents:</h2>
              <ul>
                <ResidentsList residents={loc.residents} />
              </ul>
            </>
          )}
              <button onClick={handleExtension}>{isExtended ? "Collapse" : "Extend"}</button>
        </div>
      )}
    </div>
  );
};

export default Location;
