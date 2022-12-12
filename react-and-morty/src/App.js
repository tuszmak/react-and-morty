import useFetch from "./api/useFetch";
import "./App.css";


function App() {
  const { isPending, error, data } = useFetch('https://rickandmortyapi.com/api/character/?page=')
  console.log(data, isPending, error);
  return (<div className="App">
    {isPending && <div>loading...</div>}
    {error && <div>{error}</div>}
    {data && <div>data</div>}

  </div>);
}

export default App;
