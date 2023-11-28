import { Route, Routes, Outlet } from "react-router-dom";
import { NavBar } from "./components/NavBar";
import { GardenBuilder } from "./components/GardenBuilder";
import { Sliders } from "./components/Sliders";
import { BinPacking } from "./components/BinPacking";
import "./App.css";

function App() {
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <NavBar />
              <Outlet />
            </>
          }
        >
          <Route path="sliders" element={<Sliders />} />
          <Route path="gardenbuilder" element={<GardenBuilder />} />
          <Route path="binpacking" element={<BinPacking />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
