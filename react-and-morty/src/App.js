import useFetch from "./api/useFetch";
import "./App.css";
import Card from "./components/Card";



function App() {
  const { isPending, error, data } = useFetch('https://rickandmortyapi.com/api/character/?page=')
  console.log(data);
  return (<div className="App">
    {isPending && <div>loading...</div>}
    {error && <div>{error}</div>}
    {data && data.results.map((character)=>{
      return <Card key={character.id} character={character} />
    })}

  </div>);
}

export default App;