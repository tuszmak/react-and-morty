import { useState } from "react";
import getLocationID from "../utils/getLocationID";
import { Link } from "react-router-dom";

export default function Card({ character, isOnlyOne }) {
    const [isExtended, setIsExtended] = useState(isOnlyOne ? true : false); // boolean if a card info is extended
    function handleExtension() {
        setIsExtended(!isExtended);
    }
    return (
        <div class={`card-container ${isExtended && "extended"}`}>
            <ul class={isExtended && "ul-extended"}>
                <img src={character.image} alt="charImage" ></img>
                <DefaultInfo character={character} />
                {isExtended && <ExpandedInfo character={character} />}
            </ul>
            <div class="cardBtn-container" onClick={handleExtension} >
                <button class="cardBtn" >{isExtended ? "▲" : "▼"}</button>
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


