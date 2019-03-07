import React, { Component } from "react";
import { connect } from "react-redux";
import { itemsFetchData } from "../../store/actions/itemsAction";

import classes from "./TopStories.module.scss";
import GridList from "../../components/GridList/GridList";
import SingleStory from "../SingleStory/SingleStory";

class TopStories extends Component {
  state = {};

  componentDidMount() {
    window.scrollTo(0, 0);
    this.props.fetchData(
      "https://hacker-news.firebaseio.com/v0/topstories.json"
    );
  }

  render() {
    const topStories = this.props.items.items ? this.props.items.items : [];

    const storyRender = topStories.slice(0, 50).map(function(item) {
      return (
        <div key={item}>
          <SingleStory>{item}</SingleStory>
        </div>
      );
    });

    return (
      <div className={classes.NewsWrapper}>
        <GridList className={classes.GridList}>{storyRender}</GridList>
      </div>
    );
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
