import { useState } from "react";
import { Link, link } from "react-router-dom"

export default function Card({ character }) {
    function handleExtension() {
        setIsExtended(!isExtended)
    }
    const [isExtended, setIsExtended] = useState(true); //when you extend the card to show more info about it.

    return (
        isExtended ?
            <ul>
                <li><a onClick={handleExtension}>{character.name}</a></li>

                <li>{character.location.name}</li>
                {/* <Link to={character.location.url}> <li>{character.location.name}</li></Link> */}
                <li>Status: {character.status}</li>
                <li>Species: {character.species}</li>
                <li>Episode Count:  {character.episode.length}</li>
                <li>Origin: {character.origin.name}</li>
                <li>Gender: {character.gender}</li>

            </ul>
            : <ul>
            <li><a onClick={handleExtension}>{character.name}</a></li>

            <li>{character.location.name}</li>
            {/* <Link to={character.location.url}> <li>{character.location.name}</li></Link> */}
            

        </ul>)
}
       
       

