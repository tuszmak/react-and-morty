import useFetch from "./api/useFetch";
import "./App.css";
import CharacterList from "./components/CharacterList";
import {mainUrls} from "./api/dataRoutes"



function App() {
  
  // const { isPending, error, data } = useFetch('https://rickandmortyapi.com/api/character/?page=')

  return (<div className="App">
    <CharacterList url={mainUrls.characters} />
  </div>);
}

export default App;