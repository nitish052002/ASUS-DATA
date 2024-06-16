import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import About from "./pages/About";
import Follower from "./pages/Follower";
import Repos from "./pages/Repos";
import Header from "./components/Header";
import Home from "./pages/Home";

const App: React.FC = () => {
  return (
    <div className="app">
      
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about/:username/:repoid" element={<About />} />
          <Route path="/followers/:username" element={<Follower />} />
          <Route path="/repos/:username" element={<Repos />} />
          <Route path="/" element={<App />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
