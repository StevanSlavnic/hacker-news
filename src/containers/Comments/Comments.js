import React, { Component } from "react";

import * as storiesService from "../../services/stories/storiesService";
import classes from "./../Comments/Comments.module.scss";
import Comment from "./Comment";
import Moment from "react-moment";
Moment.globalFormat = "DD MMMM YYYY";

class Comments extends Component {
  state = {
    comments: [],
    kids: [],
    title: "",
    by: "",
    date: "",
    score: "",
    url: ""
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
        const comments = response.data;
        console.log(comments);
        this.setState({
          comments: comments,
          title: comments.title,
          by: comments.by,
          date: comments.time,
          score: comments.score,
          url: comments.url
        });
      })
      .catch(error => {
        console.log(error);
      });
  };

  render() {
    const comments = this.state.comments.kids;

    const { title, url, by, date, score } = this.state;

    const commentsList =
      comments &&
      comments.map(function(item) {
        console.log(item);
        return (
          <div className={classes.Comment} key={item}>
            <Comment>{item}</Comment>
          </div>
        );
      });

    return (
      <div className={classes.CommentsWrap}>
        <div className={classes.StoryTitleWrap}>
          <a href={url} target="_blank" rel="noopener noreferrer">
            <h1 className={classes.StoryTitle}>{title}</h1>
          </a>
          <div className={classes.StoryInfo}>
            Posted by {by} at <Moment unix>{date}</Moment> | Score: {score}
          </div>
        </div>
        {commentsList}
      </div>
    );
  }
}

export default Comments;
