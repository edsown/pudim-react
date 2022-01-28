import React, { useState } from "react";
import items from "./Data";
import Menu from "./Menu";

import Navbar from "./Navbar";
import Footer from "./Footer";
import Contact from "./Contact";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [menuItems] = useState(items);

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/contato" element={<Contact />} />
        <Route path="/" element={<Menu items={menuItems} />} />
      </Routes>
      <Footer />
    </Router>
  );
}
export default App;
