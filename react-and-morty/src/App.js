import useFetch from "./api/useFetch";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'


function App() {
  return (
    <Router>
      <Header />
      <Route path="/characters" component={CharacterList} />
    </Router>
  );
}

export default App;
