import { Accordion, AccordionSummary, AccordionDetails, Typography, makeStyles } from "@material-ui/core";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import React from "react";

import { DisplayRecipe } from "../Recipes/DisplayRecipe";

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
}));

export const DisplaySingleRecipe: React.FC<DisplayRecipe> = ({ recipe, key }) => {
  const classes = useStyles();

  return (
    <Accordion key={key}>
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

