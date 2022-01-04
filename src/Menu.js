import React from "react";

const Menu = ({ items }) => {
  return (
    <div>
      <h1 className="title">Nossos Pudins</h1>
      <div className="section-center">
        {items.map((menuItem) => {
          const { id, title, img, description, price, stock } = menuItem;

          return (
            <article
              key={id}
              className="menu-item"
              style={stock == 0 ? { filter: "grayscale(100%)" } : {}}
            >
              <img src={img} alt={title} className="photo" />
              <div className="item-info">
                <header>
                  <h4>
                    {title} {stock == 0 ? "(Indisponível)" : " "}
                  </h4>
                  <h4 className="price">R$ {price}</h4>
                </header>
                <p className="item-text">{description}</p>
              </div>
            </article>
          );
        })}
      </div>
    </div>
  );
};

export default Menu;
