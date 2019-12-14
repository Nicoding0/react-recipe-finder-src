import React, { useState, useEffect } from "react";
import "../App.css";

function RecipeDetails({ match }) {
  const proxy = "https://cors-anywhere.herokuapp.com/";
  const APP_ID = "ece41ec0";
  const APP_KEY = "b7289237f45f6234f6c78e9d102842fd";

  useEffect(() => {
    const match = match;
    const fetchRecipe = async () => {
      const fetchRecipe = await fetch(
        `${proxy}https://api.edamam.com/api/nutrition-data?app_id=${APP_ID}&app_key=${APP_KEY}&ingr=${match.params.label}`
      );

      const data = await fetchRecipe.json();
      console.log(data);
    };
    fetchRecipe();
    console.log(match);
  }, []);

  const [recipe, setRecipe] = useState({});

  return (
    <div className="recipeDetails">
      <p>{match.params.label}</p>
    </div>
  );
}

export default RecipeDetails;
