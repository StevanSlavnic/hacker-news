import React, { Component } from "react";

import CircularProgress from "@material-ui/core/CircularProgress";
import * as storiesService from "../../services/stories/storiesService";
import classes from "./../Comments/Comment.module.scss";
import Moment from "react-moment";

class Reply extends Component {
  state = {
    reply: {}
  };

  componentDidMount() {
    this.fetchItem();
  }

  fetchItem = () => {
    const id = this.props.children;

    console.log(id);

    storiesService
      .getItem(id)
      .then(response => {
        this.setState({ reply: response.data });
      })
      .catch(error => {
        console.log(error);
      });
  };

  render() {
    const reply = this.state.reply;

    console.log(reply);

    function createMarkup() {
      return { __html: reply.text };
    }

    return (
      <div className={classes.ReplyWrap}>
        {!reply.id ? (
          <CircularProgress />
        ) : (
          <div>
            <div>
              {reply.deleted ? (
                "reply deleted"
              ) : (
                <div dangerouslySetInnerHTML={createMarkup()} />
              )}
              <div className={classes.Author}>
                replied by {reply.by} at
                <Moment unix>{reply.time}</Moment>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default Reply;
