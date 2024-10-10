import "./App.css";
import { Routes, Route } from "react-router-dom";

import ScrollToTop from "./ScrollToTop.jsx";

import Navbar from "./Components/Navbar/Navbar";
import Home from "./Routes/Home";
import Trending from "./Routes/Trending";
import Explore from "./Routes/Explore";
import About from "./Routes/About";
import Awards from "./Routes/Awards";

function App() {
  return (
    // <>
      <div className="app">
      <ScrollToTop />
      <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/trending" element={<Trending />} />
          <Route path="/awards" element={<Awards />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    // </>
  );
}

export default App;
