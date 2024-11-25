import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./components/Homepage";
import Movies from "./components/pages/backend/movies/Movies";
import { Settings } from "lucide-react";
import { StoreProvider } from "./components/store/storeContext";

const App = () => {
  return (
    <StoreProvider>
      <Router>
      <Routes>
        <Route index element={<Homepage />} />
        <Route path="/admin/movies" element={<Movies/>}/>
        <Route path="/admin/settings" element={<Settings/>}/>
      </Routes>
    </Router>
    </StoreProvider>
    
  );
};

export default App;