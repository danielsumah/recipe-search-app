import './App.css';
import React, {useState, useEffect} from 'react';
import Recipe from './components/Recipe';
import Nav from './components/Nav'
import Search from './components/Search';

function App() {
  const [recipes, setRecipes] = useState([]);
  const [query, setQuery] = useState('chicken');
  const APP_ID = "5208d6f5";
  const APP_KEY = "acfefdd4d780eaf1a4fc7607031df27c";

  const search_endpoint = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`;
  // const [counter, setCounter] = useState(0);
  

  useEffect(()=>{
    getRecipes();
  }, [query])

  const getRecipes = async () => {
    const response = await fetch(search_endpoint);
    const data = await response.json()
    setRecipes(data.hits)
    console.log(data.hits)
  }
  

  return (
    <div className="App container-fluid">
      <Nav/>
      <Search query={query} setQuery={setQuery}/>

      <div className="recipes-boxes">
        {recipes.map(recipe => (
          <Recipe
            key = {recipe.recipe.label}
            title = {recipe.recipe.label}
            image = {recipe.recipe.image}
            calories = {recipe.recipe.calories}
            ingredients = {recipe.recipe.ingredients}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
