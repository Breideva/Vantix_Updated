import Pages from "./Pages";
import { Footer } from "./components/Footer";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router } from "react-router-dom";

export default function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Pages />
        <Footer />
      </Router>
    </>
  );
}
