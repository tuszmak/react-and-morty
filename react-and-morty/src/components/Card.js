import { useState } from "react";

let a = [
    {
        id: 1,
        name: "Rick Sanchez",
        location: {
            name: "Citadel of Ricks",
            url: "https://rickandmortyapi.com/api/location/3",
        },
    },
    {
        location: {
            name: "Citadel of Ricks",
            url: "https://rickandmortyapi.com/api/location/3",
        },
        name: "Morty Smith",
    },
];
let objectString = "";
let objectArray = Object.entries(a);

export default function Card(character) {
    const [isExtended, setIsExtended] = useState(false);
    return (
        <div className="card">
            <ul>
                <li>{a[0].name}</li>
                <li>{a[0].location.name}</li>
            </ul>
        </div>
    );
}
