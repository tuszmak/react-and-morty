import "./App.css";
import Header from "./components/Header";
import CharacterList from './components/CharacterList'
import { Routes, Switch, Route } from 'react-router-dom'
import Home from "./components/Home";
import Location from "./components/Location";

function App() {
  return (
    <div className="app">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/characters" element={<CharacterList url={'https://rickandmortyapi.com/api/character/?page='} />} />
        <Route path="/location/:id" element={<Location />} />
      </Routes>
    </div>
  );
}

export default App;
