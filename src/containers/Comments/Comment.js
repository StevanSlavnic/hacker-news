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

    function createMarkup() {
      return { __html: comment.text };
    }

    return (
      <div>
        {!comment ? (
          <CircularProgress />
        ) : (
          <div className={classes.CommentWrap}>
            <div
              className={classes.Comment}
              dangerouslySetInnerHTML={createMarkup()}
            />
            <div className={classes.Author}>{comment.by}</div>
          </div>
        )}
      </div>
    );
  }
}

export default Comment;
