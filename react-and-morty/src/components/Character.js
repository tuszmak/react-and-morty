import { useParams, Link } from "react-router-dom";
import useFetch from "../api/useFetch";
import { mainUrls } from "../api/dataRoutes";
import getLocationID from "../utils/getLocationID";

const Character = () => {
  const { id } = useParams()
  const { isPending, error, data: character } = useFetch(`${mainUrls.characters}${id}`);
  return (
    <div className={'card-container center'}>
      {isPending && <h1>Loading...</h1>}
      {error && <h1>{error}</h1>}
      {character &&
        <>
          <img src={character.image} alt="charImage" ></img>
          <ul>
            <li>Name: <Link to={`/character/${character.id}`}> {character.name}</Link></li>
            <li>Location: <Link to={`/location/${getLocationID(character.location.url)}`}>{character.location.name}</Link></li>
            <li>Status: {character.status}</li>
            <li>Species: {character.species}</li>
            <li>Episode Count:{character.episode.length}</li>
            <li>Origin: {character.origin.name}</li>
            <li>Gender: {character.gender}</li>
          </ul>
        </>}
    </div >
  )
}

export default Character;
