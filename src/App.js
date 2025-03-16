import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import MeanMedianModePage from "./pages/MeanMedianModePage";
import ZScorePage from "./pages/ZScorePage";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/mean_median_mode_calculator" element={<MeanMedianModePage />}/>
        <Route path="/z_score_calculator" element={<ZScorePage />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
