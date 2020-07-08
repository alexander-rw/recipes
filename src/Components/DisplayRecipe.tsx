import React from "react";

import { Recipe } from "../@types/Recipe";
import { Accordion, AccordionSummary, AccordionDetails, Typography, makeStyles } from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
}));

export const DisplayRecipe: React.FC<{ recipe: Recipe; key: number }> = ({ recipe, key }) => {
  const classes = useStyles();

  return (
    <Accordion>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        <Typography className={classes.heading}>{recipe.name}</Typography>
      </AccordionSummary>
      <AccordionDetails>
          <Typography>{recipe.originalSource}</Typography>
      </AccordionDetails>  
    </Accordion>
  );
};

