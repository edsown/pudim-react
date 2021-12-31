import React, { useState } from "react";
import items from "./Data";
import Menu from "./Menu";
import Categories from "./Categories";

function App() {
  const [menuItems, setMenuItems] = useState(items);
  const [categoryItems, setCategoryItems] = useState([]);

  return (
    <main>
      <section>
        <div></div>
      </section>
      <h1 className="title">Nossos Pudins</h1>
      <Categories />
      <Menu items={menuItems} />
    </main>
  );
}
export default App;
