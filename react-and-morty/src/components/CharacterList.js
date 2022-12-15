import { useCallback, useEffect, useRef, useState } from "react";
import useFetch from "../api/useFetch";
import Card from "./Card";

export default function CharacterList({ url }) {

    const [loadedPageNumber, setLoadedPageNumber] = useState(1); //1 is the default parameter, because /page=1 and / does the same thing. 
    const [characters, setCharacters] = useState(null)
    const { isPending, error, data } = useFetch(url + `?page=${loadedPageNumber}`)
    const [hasNextPage, setHasNextPage] = useState(true)

        //This stops the fetching, based on if we have other data. Becomes useful in the observer below.
        useEffect(()=>{
        if(!isPending && loadedPageNumber !== 1){
            setCharacters([...characters, ...data.results])
            setHasNextPage(data.info.next ? true : false);
        }
        else if(!isPending){
            setCharacters([...data.results])
        }
    }, [data])

    //An observer for infinite scrolling. It uses the same mechanics as in LocationList
    const intObserver = useRef();
    const lastPostRef = useCallback(post =>{
      if(isPending) return
      if(intObserver.current) intObserver.current.disconnect();
      intObserver.current = new IntersectionObserver(posts =>{
        if(posts[0].isIntersecting && hasNextPage){
          setLoadedPageNumber(pageNumber => pageNumber + 1)
        }
      })
      if(post) intObserver.current.observe(post);
    }, [isPending,hasNextPage])

    return (
        <>
            <div className="character-list" >
                {isPending && <div>loading...</div>}
                {error && <div>{error}</div>}
                {characters && characters.map((character) =>
                    <Card key={character.id} character={character} ref={lastPostRef} />
                )}

            </div>
        </>
    );
}
