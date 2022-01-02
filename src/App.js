import React, { useState } from "react";
import items from "./Data";
import Menu from "./Menu";
import Categories from "./Categories";
import Navbar from "./Navbar";
import Footer from "./Footer";

function App() {
  const [menuItems, setMenuItems] = useState(items);
  const [categoryItems, setCategoryItems] = useState([]);

  return (
    <main>
      <Navbar />
      <h1 className="title">Nossos Pudins</h1>
      <Categories />
      <Menu items={menuItems} />
      <Footer />
    </main>
  );
}
export default App;
