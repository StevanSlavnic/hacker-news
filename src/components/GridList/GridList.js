import React from "react";

import classes from "./GridList.module.scss";

function List(props) {
  return (
    <div {...props} className={[classes.ListBase, props.className].join(" ")}>
      {props.children}
    </div>
  );
}

export default List;
