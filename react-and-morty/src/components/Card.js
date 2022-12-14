import { useState } from "react";
import getLocationID from "../utils/getLocationID";
import { Link } from "react-router-dom"

export default function Card({ character }) {
    const [isExtended, setIsExtended] = useState(false); // boolean if a card info is extended
    function handleExtension() {
        setIsExtended(!isExtended)
    }

    return (
        <div class="card-container" style={{}}>
            <ul>
                <img src={character.image} alt="charImage" ></img>
                <DefaultInfo character={character} />
                {isExtended && <ExpandedInfo character={character} />}
            </ul>
            <div class="cardBtn-container" >
                <button class="cardBtn" onClick={handleExtension}>{isExtended ? "▲" : "▼"}</button>
            </div>
        </div >
    )
}

function DefaultInfo({ character }) {
    console.log(character);
    return <>
        <li>Name: {character.name}</li>
        <li>Location: <Link to={`/location/${getLocationID(character.location.url)}`}>{character.location.name}</Link>
        </li>
    </>
}
function ExpandedInfo({ character }) {
    return <>
        <li>Status: {character.status}</li>
        <li>Species: {character.species}</li>
        <li>Episode Count:{character.episode.length}</li>
        <li>Origin: {character.origin.name}</li>
        <li>Gender: {character.gender}</li>
    </>
}