import { useState } from "react";
import useFetch from "../api/useFetch";
import Card from "./Card";

export default function CharacterList({ url }) {
    
    const [loadedPageNumber, setLoadedPageNumber] = useState(1);
    function handleExtendPage(){
        setLoadedPageNumber(loadedPageNumber++);
    }
    console.log(data);
    for (let i = 1; i <= loadedPageNumber; i++) {
        const { isPending, error, data } = useFetch(url + `?page=${loadedPageNumber}`)
        return (

            <div className="character-list" style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
                {isPending && <div>loading...</div>}
                {error && <div>{error}</div>}
                {data && data.results.map((character) =>
                    <Card key={character.id} character={character} />
                )}
                <button></button>
    
    
            </div>
        );
    }
    
}
