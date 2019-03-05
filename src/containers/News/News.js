import React, { Component } from "react";
import { connect } from "react-redux";
import { itemsFetchData } from "../../store/actions/itemsAction";

import * as storiesService from "../../services/stories/storiesService";
import CircularProgress from "@material-ui/core/CircularProgress";
import StoriesList from "../../components/ItemsList/ItemsList";
import SingleStory from "../SingleStory/SingleStory";
import ItemsList from "../../components/ItemsList/ItemsList";

class News extends Component {
  state = {};

  componentDidMount() {
    this.props.fetchData(
      "https://hacker-news.firebaseio.com/v0/newstories.json"
    );
  }

  render() {
    console.log();

    const newStories = this.props.items.items ? this.props.items.items : [];

    const storyRender = () =>
      newStories.slice(0, 3).map(function(item) {
        return (
          <div key={item}>
            <SingleStory>{item}</SingleStory>
          </div>
        );
      });
    return <div>{storyRender()}</div>;
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
)(News);
