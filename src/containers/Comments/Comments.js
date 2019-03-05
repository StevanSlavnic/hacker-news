import React, { Component } from "react";

import CircularProgress from "@material-ui/core/CircularProgress";
import * as storiesService from "../../services/stories/storiesService";
import classes from "./../Comments/Comments.module.scss";

import Comment from "./Comment";

class Comments extends Component {
  state = {
    comments: []
  };

  componentDidMount() {
    this.fetchItem();
  }

  fetchItem = () => {
    const id = this.props.location.pathname.split("/").slice(-2)[0];

    console.log(id);
    storiesService
      .getItem(id)
      .then(response => {
        const data = response.data;
        this.setState({ comments: data.kids });
      })
      .catch(error => {
        console.log(error);
      });
  };

  render() {
    const comments = this.state.comments;

    const commentsList =
      comments &&
      comments.map(function(item) {
        return (
          <div key={item}>
            <Comment>{item}</Comment>
          </div>
        );
      });

    return <div>{commentsList}</div>;
  }
}

export default Comments;
