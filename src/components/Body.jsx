import About from "../pages/about";
import Contact from "../pages/contact";
import Projects from "../pages/projects";
import PokeballApi from "../pages/projects/pokeballApi";
import Gallery from "../pages/projects/gallery";
import Introduction from "../pages/introduction";
import Retos from "../pages/retos";
import { Routes, Route } from "react-router-dom";

const body = () => {
  return (
    <Routes>
      <Route path="/" element={<About />} />
      <Route path="/introduction" element={<Introduction />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/projects/pokeapi" element={<PokeballApi />} />
      <Route path="/projects/gallery" element={<Gallery />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/retos" element={<Retos />} />
    </Routes>
  );
};
export default body;
