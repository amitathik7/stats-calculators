import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import MeanPage from "./pages/MeanPage";
import MedianPage from "./pages/MedianPage";
import ModePage from "./pages/ModePage";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/mean_calculator" element={<MeanPage />}/>
        <Route path="/median_calculator" element={<MedianPage />}/>
        <Route path="/mode_calculator" element={<ModePage />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
