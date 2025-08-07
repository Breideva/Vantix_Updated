import { Home } from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import { Products } from "./pages/Products";
import { Slide } from "./pages/slide";
import { About } from "./pages/About";
import { Contact } from "./pages/Contact";

export default function Pages () {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/" element={<Slide />} /> */}
        <Route path="/products" element={<Products />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes></>
  );
}