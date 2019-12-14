import React, { useState, useEffect } from "react";
import "./App.css";
//import Search from "./components/Search";
import { BrowserRouter as Router, Route } from "react-router-dom";
import uuid from "uuid";
import Recipes from "./components/Recipes";
//import RecipeDetails from "./components/RecipeDetails";
import Nav from "./components/Nav";
import About from "./components/About";

const App = () => {
  const [recipe, setRecipe] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("Pasta");

  //*useEffect only runs when query changes(changes when user submits the search)
  useEffect(() => {
    const APP_ID = "631bbc55";
    const APP_KEY = "7c5008031e504bfb25c26b18bbc0a6a6";
    const proxy = "https://cors-anywhere.herokuapp.com/";

    const URL = `${proxy}https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`;
    //*fetch from API
    const getRecipes = async () => {
      const response = await fetch(URL);
      const data = await response.json();
      setRecipe(data.hits);
      console.log(data.hits);
    };
    getRecipes();
  }, [query]);

  //*update search from user input in real time
  const updateSearch = e => {
    setSearch(e.target.value);
  };

  //*set query to search
  const getSearch = e => {
    e.preventDefault();
    setQuery(search);
    setSearch("");
  };

  //*Styles
  const searchStyle = {
    cursor: "pointer"
  };
  return (
    <div className="App">
      <Router>
        <Nav />

        <form onSubmit={getSearch} className="search-form">
          <input
            type="text"
            className="search-bar"
            value={search}
            onChange={updateSearch}
            placeholder="Type in an ingredient, (e.g. Chicken)"
          />
          <button style={searchStyle} className="search-btn" type="submit">
            Search
          </button>
        </form>

        <Route path="/about" component={About} />

        <Route
          exact
          path="/"
          render={props => (
            <React.Fragment>
              {recipe.map(recipe => (
                <Recipes
                  key={uuid.v4()}
                  title={recipe.recipe.label}
                  image={recipe.recipe.image}
                  ing={recipe.recipe.ingredients}
                />
              ))}
            </React.Fragment>
          )}
        />

        {/*<Route path="/ingredients/:label" exact component={RecipeDetails} />*/}
      </Router>
    </div>
  );
};

export default App;
