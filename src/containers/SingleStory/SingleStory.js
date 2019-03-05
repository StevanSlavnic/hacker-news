import React, { Component } from "react";
import { Link } from "react-router-dom";

import SimpleCard from "../../components/Card/SimpleCard";
import CircularProgress from "@material-ui/core/CircularProgress";
import * as storiesService from "../../services/stories/storiesService";
import classes from "./SingleStory.module.scss";

class SingleStory extends Component {
  state = {
    singleStory: {}
  };

  componentDidMount() {
    this.fetchItem();
  }

  fetchItem = () => {
    const id = this.props.children;
    storiesService
      .getItem(id)
      .then(response => {
        this.setState({ singleStory: response.data });
      })
      .catch(error => {
        console.log(error);
      });
  };

  render() {
    const singleStory = this.state.singleStory;

    return (
      <div className={classes.SingleStory}>
        {!singleStory ? (
          <CircularProgress />
        ) : (
          <SimpleCard>
            <div className={classes.singleStoryWrap}>
              <a
                href={singleStory.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                <h2>{singleStory.title}</h2>
              </a>

              <div className={classes.InfoWrap}>
                <div className={classes.InfoItem}>Author: {singleStory.by}</div>

                <div className={classes.InfoItem}>
                  Number of comments: {singleStory.descendants}
                </div>

                <div className={classes.InfoItem}>
                  Score: {singleStory.score}
                </div>
              </div>

              <div className={classes.CommentsLink}>
                {singleStory.descendants > 0 ? (
                  <Link to={singleStory.id + "/comments"}>See comments</Link>
                ) : (
                  <div>No comments</div>
                )}
              </div>
            </div>
          </SimpleCard>
        )}
      </div>
    );
  }
}

export default SingleStory;
