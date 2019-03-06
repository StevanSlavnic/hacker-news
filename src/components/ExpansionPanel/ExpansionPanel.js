import React from "react";
import PropTypes from "prop-types";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

function SimpleExpansionPanel(props) {
  const { classes } = props;
  return (
    <div className={"classes.root"}>
      <ExpansionPanel>
        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
          <Typography className={"classes.heading"}>{props.title}</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>{props.children}</ExpansionPanelDetails>
      </ExpansionPanel>
    </div>
  );
}

export default SimpleExpansionPanel;
