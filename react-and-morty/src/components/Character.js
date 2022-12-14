import { useParams } from "react-router-dom";
import useFetch from "../api/useFetch";
import { mainUrls } from "../api/dataRoutes";
import Card from "./Card";

const Character = () => {
  const { id } = useParams()
  const { isPending, error, data: character } = useFetch(`${mainUrls.characters}${id}`);
  return (
    <div>
      {isPending && <h1>Loading...</h1>}
      {error && <h1>{error}</h1>}
      {character && (
        <div>
          <Card character={character} isOnlyOne={true} />
        </div>
      )}
    </div>
  )
}

export default Character;
