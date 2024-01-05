import { Routes, Route } from "react-router-dom";
import Gallery from "../Gallery/Gallery";
import Birddetails from "../Birddetails/Birddetails";

function CustomRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Gallery />} />
      <Route path="/gallery/:id" element={<Birddetails />} />
    </Routes>
  );
}

export default CustomRoutes;
