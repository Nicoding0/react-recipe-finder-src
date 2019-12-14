import React from "react";
import style from "../recipe.module.css";
import uuid from "uuid";

const Recipes = ({ title, image, ing }) => {
  const listStyle = {
    listStyleType: "square"
  };

  return (
    <div className={style.recipe}>
      <div className={style.card}>
        <div className={style.cardhead}>
          <h1>{title}</h1>
          <img className={style.image} src={image} alt="" />
        </div>
        <div className={style.ingredients}>
          <ul>
            {ing.map(ingredient => (
              <li style={listStyle} key={uuid.v4()}>
                {ingredient.text}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Recipes;
