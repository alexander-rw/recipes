import React from "react";

import { Recipe } from "../@types/Recipe";
import { Accordion } from '@material-ui/core';
export const DisplayRecipe: React.FC<Recipe> = ({ name, originalSource }) => (
  <Accordion>
    {name}
    {" "}
    {originalSource}
  </Accordion>
);

