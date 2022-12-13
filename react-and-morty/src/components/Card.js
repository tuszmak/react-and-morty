import { useState } from "react";
import { Link } from "react-router-dom"

export default function Card({ character }) {
    const [isExtended, setIsExtended] = useState(false); //when you extend the card to show more info about it.
    return (<ul>
        <li>{character.name}</li>
        <li><Link to={`/location/${character.location.url.split('/').at(-1)}`}>{character.location.name}</Link></li>
        {/* <li>{character.location.name}</li> */}

        {/* if(isExtended) */}

    </ul>)
}
