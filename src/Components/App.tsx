import axios from "axios";
import React, { useEffect, useState } from 'react';
import { Container, AppBar, Typography, Toolbar, makeStyles } from '@material-ui/core';

import { Recipe } from "../Recipes/Recipe";
import { AppRecipes } from '../Recipes/AppRecipes';
import { DisplayRecipes } from "./DisplayRecipes";

const useStyles = makeStyles(theme => ({
  offset: theme.mixins.toolbar,
}));

export const App: React.FC = () => {
  const classes = useStyles();

  const [recipeData, setRecipes] = useState<AppRecipes>({ recipes: [] });

  useEffect(() => { 
    async function getRecipes() { 
      const r = await axios.get("/recipes.json");
      const recipes = r.data.recipes as Recipe[];
      setRecipes({ recipes });
    };
    setTimeout(() => getRecipes(), 1000);
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
      <DisplayRecipes recipes={recipeData.recipes} offset={classes.offset} />
    </Container>
  );
}; 