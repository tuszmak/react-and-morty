import { useParams } from "react-router-dom";
import useFetch from "../api/useFetch";
import { mainUrls } from "../api/dataRoutes";
import ResidentsList from "./ResidentList";
import { useState } from "react";
import React from "react";

const Location = React.forwardRef(({ locationID }, ref) => {
  let { id } = useParams();
  const fetchId = !id ? locationID : id;
  const [isExtended, setIsExtended] = useState(!id ? false : true);

  function handleExtension() {
    setIsExtended(!isExtended);
  }
  const { isPending, error, data: loc } = useFetch(`${mainUrls.locations}${fetchId}`);


  return (
    <div ref={ref}>
      {isPending && <h1>Loading...</h1>}
      {error && <h1>{error}</h1>}
      {loc && (
        <div className={`loc-card ${!id ? '' : 'center'}`} ref={ref}>
          <h1>{loc.name}</h1>
          <h3>Type: {loc.type}</h3>
          <p>Dimension: {loc.dimension}</p>
          {isExtended && (
            <>
              {" "}
              <h2>Residents: </h2>
              <ul>
                {loc.residents.length === 0 && <li>None</li>}
                <ResidentsList residents={loc.residents} />
              </ul>
            </>
          )}
          {!id &&
            <div className="cardBtn-container" onClick={handleExtension}>
              <button className="cardBtn" >{isExtended ? "▲" : "▼"}</button>
            </div>}
        </div>
      )}
    </div>
  );
});

export default Location;
