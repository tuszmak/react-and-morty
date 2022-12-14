import { useState } from "react";
import useFetch from "../api/useFetch";
import Card from "./Card";

export default function CharacterList({ url }) {

    const [loadedPageNumber, setLoadedPageNumber] = useState(1);
    function handlePrevPage() {
        if (loadedPageNumber > 0) { setLoadedPageNumber(loadedPageNumber - 1); }
    }
    function handleNextPage() {
        setLoadedPageNumber(loadedPageNumber + 1);
    }
    const { isPending, error, data } = useFetch(url + `?page=${loadedPageNumber}`)
    //console.log(data);
    return (
        <>
            <div className="character-list" >
                {isPending && <div>loading...</div>}
                {error && <div>{error}</div>}
                {data && data.results.map((character) =>
                    <Card key={character.id} character={character} />
                )}

            </div>
            <div className="buttons">
                <button onClick={handlePrevPage} className="button-27" >Previous</button>
                <button onClick={handleNextPage} className="button-27">Next</button>
            </div>
        </>
    );
}
