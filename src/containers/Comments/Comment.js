import React, { Component } from "react";

import CircularProgress from "@material-ui/core/CircularProgress";
import * as storiesService from "../../services/stories/storiesService";
import classes from "./../Comments/Comments.module.scss";

class Comment extends Component {
  state = {
    comment: {}
  };

  componentDidMount() {
    this.fetchItem();
  }

  fetchItem = () => {
    const id = this.props.children;
    storiesService
      .getItem(id)
      .then(response => {
        this.setState({ comment: response.data });
      })
      .catch(error => {
        console.log(error);
      });
  };

  render() {
    const comment = this.state.comment;

    return (
      <div>
        {!comment ? (
          <CircularProgress />
        ) : (
          <div className={classes.singleStoryWrap}>
            <div>Comment: {comment.text}</div>

            <div>Author: {comment.by}</div>

            <div>type: {comment.type}</div>
          </div>
        )}
      </div>
    );
  }
}

export default Comment;
