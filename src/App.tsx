import React, { useEffect, Suspense, useState } from 'react';
import { Container, AppBar, Typography, Toolbar, makeStyles } from '@material-ui/core';
import axios from 'axios';

import { Recipe } from "./@types/Recipe";
import { DisplayRecipe } from "./Components/DisplayRecipe";

const useStyles = makeStyles(theme => ({
  offset: theme.mixins.toolbar,
}));

const App: React.FC = () => {
  const classes = useStyles();

  const [data, setRecipes] = useState<{ recipes: Recipe[] }>({ recipes: [] });

  useEffect(() => {
    async function getRecipes() {
      return (await axios.get("/recipes.json")).data.recipes as Recipe[];
    }
    getRecipes().then(r => { 
      console.log(`Recipes loaded: ${r.length}`);
      setRecipes({ recipes: r });
    });
  });

  return (
    <Container maxWidth="sm">
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" color="inherit">
            Recipes
          </Typography>
        </Toolbar>
      </AppBar>
        <Suspense fallback={<div>Loading...</div>}>
          { data.recipes.map((r: Recipe, i: number) => <DisplayRecipe recipe={r} key={i} />)}
        </Suspense>
    </Container>
  );
}; 

export { App };
