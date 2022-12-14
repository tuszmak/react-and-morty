import { useState } from "react";
import getLocationID from "../utils/getLocationID";
import { Link } from "react-router-dom"

export default function Card({ character }) {
    const [isExtended, setIsExtended] = useState(false); // boolean if a card info is extended
    function handleExtension() {
        setIsExtended(!isExtended)
    }

    return (
        <div style={{ width: "250px " }}>
            <ul style={{ background: "blue" }}>
                <img src={character.image} alt="charImage" style={{ width: "200px" }}></img>
                <DefaultInfo character={character} />
                {isExtended && <ExpandedInfo character={character} />}
            </ul>
            <div style={{ background: "green" }}>
                <button onClick={handleExtension}>{isExtended ? "Collapse" : "Extend"}</button>
            </div>
        </div>
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