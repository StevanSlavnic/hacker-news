import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { itemsFetchData } from "../../store/actions/itemsAction";

import CircularProgress from "@material-ui/core/CircularProgress";
import * as storiesService from "../../services/stories/storiesService";
import SingleStory from "../SingleStory/SingleStory";

class TopStories extends Component {
  state = {};

  componentDidMount() {
    this.props.fetchData(
      "https://hacker-news.firebaseio.com/v0/topstories.json"
    );
  }

  render() {
    const topStories = this.props.items.items ? this.props.items.items : [];

    const storyRender = topStories.slice(0, 3).map(function(item) {
      return (
        <div key={item}>
          <SingleStory>{item}</SingleStory>
        </div>
      );
    });

    return <div>{storyRender}</div>;
  }
}

const mapStateToProps = state => {
  return {
    items: state.items,
    isLoading: state.itemsIsLoading
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchData: url => dispatch(itemsFetchData(url))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TopStories);
