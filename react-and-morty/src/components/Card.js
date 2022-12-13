import { useState } from "react";
import {Link, link} from "react-router-dom"

export default function Card({character}) {
    const [isExtended, setIsExtended] = useState(false); //when you extend the card to show more info about it.

    return (<ul>
        <li>{character.name}</li>
       {/* <Link to={character.location.url}> <li>{character.location.name}</li></Link> */}
       <li>{character.location.name}</li>
       
        {/* if(isExtended) */}

    </ul>)
}