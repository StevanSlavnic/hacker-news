import React, { Component } from "react";
import CircularProgress from "@material-ui/core/CircularProgress";

import * as storiesService from "../../services/stories/storiesService";
import { classes } from "coa";

class SingleStory extends Component {
  state = {
    singleStory: []
  };

  componentDidMount() {
    // storiesService
    //   .getItem(this.props.id)
    //   .then(response => {
    //     console.log(response.data);
    //     this.setState({
    //       singleStory: response.data
    //     });
    //   })
    //   .catch(error => {
    //     console.log(error.response);
    //   });

    this.setState({
      singleStory: this.props.items
    });
  }

  render() {
    // const singleStory = this.state.singleStory;
    const singleStories = this.props.items.items;

    console.log(singleStories);

    return (
      // <div />
      <div>
        {/* {!singleStory ? (
          <CircularProgress />
        ) : (
          <div className={classes.singleStoryWrap}>
            <div>Title: {singleStory.title}</div>

            <div>Time: {singleStory.time}</div>

            <div>Url: {singleStory.url}</div>

            <div>Author: {singleStory.by}</div>

            <div>comments: {singleStory.kids}</div>

            <div>type: {singleStory.type}</div>
          </div>
        )} */}
      </div>
    );
  }
}

export default SingleStory;
