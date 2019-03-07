import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";

const styles = {
  card: {
    maxWidth: 390,
    minHeight: 275,
    display: "flex",
    alignItems: "center",
    padding: "10px 25px",
    margin: "0 auto",
    position: "relative"
  }
};

function SimpleCard(props) {
  const { classes } = props;
  return <Card className={classes.card}>{props.children}</Card>;
}

SimpleCard.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(SimpleCard);
