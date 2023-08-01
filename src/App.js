import "./App.css";
import Header from "./components/Header";
import CharacterList from './components/CharacterList'
import { Routes, Switch, Route } from 'react-router-dom'
import Home from "./components/Home";
import Location from "./components/Location";
import { mainUrls } from "./api/dataRoutes";
import Character from "./components/Character";
import LocationList from "./components/LocationList";
import ErrorPage from "./components/ErrorPage";

function App() {
  return (
    <div className="app">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/characters" element={<CharacterList url={mainUrls.characters} />} />
        <Route path="/character/:id" element={<Character />} />
        <Route path="/location/:id" element={<Location />} />
        <Route path="/locations" element={<LocationList  url={mainUrls.locations} />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </div>
  );
}
export default App;
