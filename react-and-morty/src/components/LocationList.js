import { useCallback, useEffect, useRef, useState } from "react";
import useFetch from "../api/useFetch";
import Location from "./Location";


export default function LocationList({ url }) {
    
    const [loadedPageNumber, setLoadedPageNumber] = useState(1);
    const [locations, setLocations] = useState(null)
    const { isPending, error, data } = useFetch(url + `?page=${loadedPageNumber}`)
    const hasNextPage = true
    useEffect(()=>{
        if(!isPending && loadedPageNumber !== 1 && !error){
            setLocations([...locations, ...data.results])
        }
        else if(!isPending && !error){
            setLocations([...data.results])
        }
    }, [data])
    const intObserver = useRef();
    const lastPostRef = useCallback(post =>{
      if(isPending) return
      if(intObserver.current) intObserver.current.disconnect();
      intObserver.current = new IntersectionObserver(posts =>{
        if(posts[0].isIntersecting && hasNextPage){
          console.log("Coming to the last page");
          setLoadedPageNumber(pageNumber => pageNumber + 1)
        }
      })
      if(post) intObserver.current.observe(post);
    }, [isPending,hasNextPage])
    return (
        <div className="location-list">
            {isPending && <div>loading...</div>}
            {error && <div>{error}</div>}
            {locations && locations.map((location) => 
            <Location key={location.id} locationID={location.id} ref={lastPostRef}/>

            )}
        </div>
    );
}
