import useFetch from "./api/useFetch";
import "./App.css";
import Card from "./components/Card";



function App() {
  const { isPending, error, data } = useFetch('https://rickandmortyapi.com/api/character/?page=')
  console.log(data, isPending, error);
  return (<div className="App">
    {isPending && <div>loading...</div>}
    {error && <div>{error}</div>}
    {data && <div>data</div>}
    {data && <Card data={data} />}

  </div>);
}

export default App;