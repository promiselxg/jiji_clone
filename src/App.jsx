import { Route, Routes } from "react-router-dom";
import Layout from "./components/common/Layout";
import Home from "./pages/home";
import Vehicles from "./pages/vehicles";
import CategoryLayout from "./components/common/CategoryLayout";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />} />
        </Route>
        <Route element={<CategoryLayout />}>
          <Route path="/vehicles" element={<Vehicles />} />
          <Route path="/phones" element={<h1>Phones</h1>} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
