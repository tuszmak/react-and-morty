import { useState } from "react";
import getLocationID from "../utils/getLocationID";
import { Link } from "react-router-dom"

export default function Card({ character }) {
    const [isExtended, setIsExtended] = useState(false); // boolean if a card info is extended
    function handleExtension() {
        setIsExtended(!isExtended)
    }

    return (
        <div style={{ width: "400px ", background: "#172A46", borderRadius: "25px", whiteSpace: "nowrap", margin: "5px" }}>
            <ul>
                <img src={character.image} alt="charImage" style={{ width: "200px", borderRadius: "25px" }}></img>
                <DefaultInfo character={character} />
                {isExtended && <ExpandedInfo character={character} />}
            </ul>
            <div style={{ background: "#101b2b", borderRadius: "25px" }}>
                <button onClick={handleExtension} style={{ backgroundColor: "transparent", border: "none", fontSize: "20px" }}>{isExtended ? "▲" : "▼"}</button>
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