import { useParams } from "react-router-dom";
import useFetch from "../api/useFetch";
import { mainUrls } from "../api/dataRoutes";
import ResidentsList from "./ResidentList";
import { useState } from "react";

const Location = ({ locationID }) => {
  let { id } = useParams();
  const fetchId = !id ? locationID : id;
  const [isExtended, setIsExtended] = useState(!id ? false : true);

  function handleExtension() {
    setIsExtended(!isExtended);
  }
  const { isPending, error, data: loc } = useFetch(`${mainUrls.locations}${fetchId}`);


  return (
    <div>
      {isPending && <h1>Loading...</h1>}
      {error && <h1>{error}</h1>}
      {loc && (
        <div className="card-container center">
          <h1>{loc.name}</h1>
          <h3>Type: {loc.type}</h3>
          <p>Dimension: {loc.dimension}</p>
          {isExtended && (
            <>
              {" "}
              <h2>Residents:</h2>
              <ul>
                <ResidentsList residents={loc.residents} />
              </ul>
            </>
          )}
          {!id && <button onClick={handleExtension}>{isExtended ? "Collapse" : "Extend"}</button>}
        </div>
      )}
    </div>
  );
};

export default Location;
