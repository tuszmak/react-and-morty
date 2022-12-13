import "./App.css";
import Header from "./components/Header";
import CharacterList from './components/CharacterList'
import { Routes, Switch, Route } from 'react-router-dom'
import Home from "./components/Home";

function App() {
  return (
    <div className="app">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/characters" element={<CharacterList />} />
      </Routes>
    </div>
  );
}

export default App;
