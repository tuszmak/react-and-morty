import useFetch from "./api/useFetch";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import CharacterList from "./components/CharacterList";
import { mainUrls } from "./api/dataRoutes"


import Header from "./components/Header";

function App() {
  return (
    <Router>
      <Header />
      <Route path="/characters" component={CharacterList} />
    </Router>
  );
}

export default App;
