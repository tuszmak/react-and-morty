import { useState } from "react";

export default function Card({character}) {
    const [isExtended, setIsExtended] = useState(false); //when you extend the card to show more info about it.
    return (
        <div className="card">
            <ul>
                <li>{character.name}</li>
                <li>{character.location.name}</li>
                
            </ul>
        </div>
    );
}
