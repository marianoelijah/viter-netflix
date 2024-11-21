import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./components/Homepage";
import Movies from "./components/pages/backend/movies/Movies";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route index element={<Homepage />} />
        <Route path="/admin/movies" element={<Movies/>}/>
      </Routes>
    </Router>
  );
};

export default App;