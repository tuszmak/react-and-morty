import { useState } from "react";
import { Link, link } from "react-router-dom"

export default function Card({ character }) {
    function handleExtension() {
        setIsExtended(!isExtended)
    }
    const [isExtended, setIsExtended] = useState(false); // boolean if a card info is extended

    return (
        isExtended ?
            <ul>
                <a onClick={handleExtension}><li>Name: {character.name}</li>
                <li>Location: {character.location.name}</li>
                {/* <Link to={character.location.url}> <li>{character.location.name}</li></Link> */}
                <li>Status: {character.status}</li>
                <li>Species: {character.species}</li>
                <li>Episode Count:  {character.episode.length}</li>
                <li>Origin: {character.origin.name}</li>
                <li>Gender: {character.gender}</li></a>

            </ul>
            : <ul>
            <a onClick={handleExtension}><li>Name: {character.name}</li>

            <li>Location: {character.location.name}</li>
            {/* <Link to={character.location.url}> <li>{character.location.name}</li></Link> */}</a>
            

        </ul>)
}
       
       

