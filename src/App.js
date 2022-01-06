// import { Navbar, Nav, Container } from "react-bootstrap";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Weather from "./Pages/Weather";
import Home from "./Pages/Home";
import Favorite from "./Pages/Favorite";
import Navbar from "./components/Navbar/Navbar";
import "./App.css";
import Stop from "./Pages/Stop";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
      </div>

      <Routes>
        <Route path="/weather" element={<Weather />} />
        <Route path="/favorite" element={<Favorite />} />
        <Route path="/" element={<Home />} />
        <Route path="/stop/:key" element={<Stop />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;