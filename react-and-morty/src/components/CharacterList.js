import { useState } from "react";
import useFetch from "../api/useFetch";
import Card from "./Card";

export default function CharacterList({ url }) {
    const { isPending, error, data } = useFetch(url)
    console.log(data);
    return (

        <div className="character-list">
            {isPending && <div>loading...</div>}
            {error && <div>{error}</div>}
            {data && data.results.map((character) =>
                <Card key={character.id} character={character} />
            )}
        </div>
    );
}
