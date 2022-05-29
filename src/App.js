import { Route, Routes } from "react-router-dom";
import "./App.css";
import Blog from "./Components/Blog/Blog";
import Contact from "./Components/Contact/Contact";
import Home from "./Components/Home/Home";
import Pages from "./Components/Pages/Pages";
import Services from "./Components/Service/Services";
import Navbar from "./Components/Share/Navbar/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pages" element={<Pages />} />
        <Route path="/services" element={<Services />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
