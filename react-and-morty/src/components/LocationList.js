import { useCallback, useEffect, useRef, useState } from "react";
import useFetch from "../api/useFetch";
import Location from "./Location";


export default function LocationList({ url }) {

    const [loadedPageNumber, setLoadedPageNumber] = useState(1);
    const [locations, setLocations] = useState(null)
    const [hasNextPage, setHasNextPage] = useState(true);
    const { isPending, error, data } = useFetch(url + `?page=${loadedPageNumber}`)
    //An observer for infinite scrolling. It uses the same mechanics as in CharacterList
    useEffect(() => {
        if (!isPending && loadedPageNumber !== 1) {
            setLocations([...locations, ...data.results])
            setHasNextPage(data.info.next ? true : false);
        }
        else if (!isPending) {
            setLocations([...data.results])
        }
    }, [data])
    const intObserver = useRef();
    const lastPostRef = useCallback(post => {
        if (isPending) return
        if (intObserver.current) intObserver.current.disconnect();
        intObserver.current = new IntersectionObserver(posts => {
            if (posts[0].isIntersecting && hasNextPage) {
                console.log("Coming to the last page");
                setLoadedPageNumber(pageNumber => pageNumber + 1)
            }
        })
        if (post) intObserver.current.observe(post);
    }, [isPending, hasNextPage])
    
    return (
        <div className="loc-container">
            {isPending && <div>loading...</div>}
            {error && <div>{error}</div>}
            {locations && locations.map((location) =>
                <Location key={location.id} locationID={location.id} ref={lastPostRef} />

            )}
        </div>
    );
}
