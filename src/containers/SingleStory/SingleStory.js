import React, { Component } from "react";
import { Link } from "react-router-dom";

import CircularProgress from "@material-ui/core/CircularProgress";
import * as storiesService from "../../services/stories/storiesService";
import { classes } from "coa";


class SingleStory extends Component {
  state = {
    singleStory: {}
  };

  componentDidMount() {
    this.renderItem();
  }

  renderItem = () => {
      const id = this.props.children;
      storiesService.getItem(id)
        .then((response) => {
            this.setState({singleStory: response.data});
        })
        .catch((error) => {
          console.log(error);
        });
  }

  render() {
    const singleStory = this.state.singleStory;

    return (

      <div>
        {!singleStory ? (
          <CircularProgress />
        ) : (
          <div className={classes.singleStoryWrap}>
            <div>Title: {singleStory.title}</div>

            <div>Time: {singleStory.time}</div>

            <div>Url: {singleStory.url}</div>

            <div>Author: {singleStory.by}</div>

            <div>
              <Link to={'/top-story/' + singleStory.id}>
                Comments
              </Link>
            </div>

            <div>type: {singleStory.type}</div>
          </div>
        )}
      </div>
    );
  }
}

export default SingleStory;
