import { useState } from "react";
import getLocationID from "../utils/getLocationID";
import { Link } from "react-router-dom";

export default function Card({ character }) {
    const [isExtended, setIsExtended] = useState(false); // boolean if a card info is extended
    function handleExtension() {
        setIsExtended(!isExtended);
    }
    return (
        <div className={`card-container ${isExtended ? "extended" : ''}`}>
            <ul className={isExtended ? "ul-extended" : ''}>
                <img src={character.image} alt="charImage" ></img>
                <DefaultInfo character={character} />
                {isExtended && <ExpandedInfo character={character} />}
            </ul>
            <div className="cardBtn-container" onClick={handleExtension}>
                <button className="cardBtn" >{isExtended ? "▲" : "▼"}</button>
            </div>
        </div >
    )
}
function DefaultInfo({ character }) {
    return <>
        <li>Name: <Link to={`/character/${character.id}`}> {character.name}</Link></li>
        <li>Location: <Link to={`/location/${getLocationID(character.location.url)}`}>{character.location.name}</Link></li>
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


