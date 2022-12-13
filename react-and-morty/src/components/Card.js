import { useState } from "react";
import getLocationID from "../utils/getLocationID";
import { Link } from "react-router-dom"

export default function Card({ character }) {
    function handleExtension() {
        setIsExtended(!isExtended)
    }
    function DefaultInfo() {
        return <>
            <li>Name: {character.name}</li>
            <li>Location: <Link to={`/location/${getLocationID(character.location.url)}`}>{character.location.name}</Link>
            </li>
        </>
    }
    function ExpandedInfo() {
        return <>
            <li>Status: {character.status}</li>
            <li>Species: {character.species}</li>
            <li>Episode Count:{character.episode.length}</li>
            <li>Origin: {character.origin.name}</li>
            <li>Gender: {character.gender}</li>
        </>
    }
    const [isExtended, setIsExtended] = useState(false); // boolean if a card info is extended

    return (
        isExtended ?
            <ul>
                <div>
                    <DefaultInfo />
                    <ExpandedInfo />
                </div>
                <button onClick={handleExtension}>Collapse</button>
                {/* <button class="collapsible">Rick Sanchez</button>
                <div class="content">
                    <div>
                       
                    </div>
                </div> */}
            </ul>
            :
            <ul>
                <div>
                    <DefaultInfo />
                </div>
                <button onClick={handleExtension}>Expand</button>
            </ul>
    )
}
