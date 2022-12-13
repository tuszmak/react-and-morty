import { useState } from "react";
import {Link, link} from "react-router-dom"

export default function Card({character}) {
    function handleExtension(){
        setIsExtended(!isExtended)
    }
    const [isExtended, setIsExtended] = useState(false); //when you extend the card to show more info about it.

    return (<ul>
        <li><a onClick={handleExtension}>{character.name}</a></li>
       {/* <Link to={character.location.url}> <li>{character.location.name}</li></Link> */}
       <li>{character.location.name}</li>
       

    </ul>)
}