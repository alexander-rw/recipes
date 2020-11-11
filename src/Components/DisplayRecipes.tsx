import { CircularProgress } from "@material-ui/core";
import React from "react";
import { v4 } from "uuid";
import { AppRecipes } from "../Recipes/AppRecipes";
import { DisplaySingleRecipe } from "./DisplaySingleRecipe";

export const DisplayRecipes: React.FC<AppRecipes & { offset: string}> = ({ recipes, offset }) => {
    console.log('l', recipes);
    return (
        <div style={{ padding: offset }}>
            { recipes.length >= 1 && recipes.map(r => <DisplaySingleRecipe recipe={r} key={v4()} />) }
            { recipes.length < 1 && <CircularProgress />}
        </div>
    );
}