import { useState } from "react";
import getLocationID from "../utils/getLocationID";
import { Link } from "react-router-dom"

export default function Card({ character }) {
    function handleExtension() {
        setIsExtended(!isExtended)
    }
    const [isExtended, setIsExtended] = useState(false); // boolean if a card info is extended

    return (
        <ul onClick={handleExtension}>
            <><li>Name: {character.name}</li>
                <li>Location: {character.location.name}</li>
                <li><Link to={`/location/${getLocationID(character.location.url)}`}>{character.location.name}</Link></li></>
            {isExtended &&
                <><li>Status: {character.status}</li>
                <li>Species: {character.species}</li>
                <li>Episode Count:  {character.episode.length}</li>
                <li>Origin: {character.origin.name}</li>
                <li>Gender: {character.gender}</li></>
            }

        </ul>)
}
function DetailedInformation({ character }) {
    return (<><li>Status: {character.status}</li>
    <li>Species: {character.species}</li>
    <li>Episode Count:  {character.episode.length}</li>
    <li>Origin: {character.origin.name}</li>
    <li>Gender: {character.gender}</li></>)
}