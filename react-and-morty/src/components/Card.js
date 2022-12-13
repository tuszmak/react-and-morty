import { useState } from "react";
import { Link } from "react-router-dom"
import getLocationID from "../utils/getLocationID";

export default function Card({ character }) {
    const [isExtended, setIsExtended] = useState(false); //when you extend the card to show more info about it.
    return (<ul>
        <li>{character.name}</li>
        <li><Link to={`/location/${getLocationID(character.location.url)}`}>{character.location.name}</Link></li>

    </ul>)
}
