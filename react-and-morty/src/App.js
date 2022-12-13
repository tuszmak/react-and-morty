import useFetch from "./api/useFetch";
import "./App.css";
import { useCharacters, useLocations } from "./api/useData";
import Header from "./components/Header";

function App() {
 const { isPending, error, data } = useFetch('https://rickandmortyapi.com/api/character/?page=')
  console.log(data, isPending, error);
  const characters = useCharacters(1);
  const locations = useLocations(1);
  console.log("Characters data: ");
  console.log(characters);
  console.log("Locations data: ");
  console.log(locations);

  return <>
    
    <div className="App">
    {isPending && <div>loading...</div>}
    {error && <div>{error}</div>}
    {data && <div>data</div>}
    <Header />

  </div>
  </>




export default App;
