import { Routes, Route } from "react-router-dom";
import Contact from "../pages/contact";
import Dishes from "../pages/dishes";
import Index from "../pages/index";
import Location from "../pages/location";

const body = () => {
  return (
    <div className="div_body">
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/dishes" element={<Dishes />} />
        <Route path="/location" element={<Location />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
};
export default body;
