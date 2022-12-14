import useFetch from "../api/useFetch";
import Location from "./Location";

export default function LocationList({ url }) {
    const { isPending, error, data } = useFetch(url)
    return (
        <div className="location-list">
            {isPending && <div>loading...</div>}
            {error && <div>{error}</div>}
            {data && data.results.map((location) => 
            <Location key={location.id} locationID={location.id} />

            )}
        </div>
    );
}
