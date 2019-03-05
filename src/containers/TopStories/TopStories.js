import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { itemsFetchData } from "../../store/actions/itemsAction";

import CircularProgress from "@material-ui/core/CircularProgress";
import * as storiesService from "../../services/stories/storiesService";
import StoriesList from "../../components/ItemsList/ItemsList";
import SingleStory from "../SingleStory/SingleStory";

class TopStories extends Component {
  state = {};

  componentDidMount() {
    this.props.fetchData(
      "https://hacker-news.firebaseio.com/v0/topstories.json"
    );
  }

  render() {
    const topStories = this.props.items;

    const items = topStories.items;

    console.log("Top stories", items);

    return (
      <div>
        {items}
        {/* {topStories &&
          topStories.items.map(item => <SingleStory key={item} id={item} />)} */}
      </div>

      // <div>
      //     {!topStories ? <CircularProgress/> : <StoriesList>
      //         <React.Fragment>
      //             {topStories && topStories.map(story => {
      //             return <div key={story.id}>
      //             <div>
      //                 <a href={'/single-story/' + story.id} target="_blank" rel="noopener">
      //                     Titile: {story.title}
      //                 </a>
      //             </div>
      //             <div>
      //                 Author: {story.by}
      //             </div>

      //             <div>
      //             Score: {story.score}
      //             </div>

      //             <Link to={'/top-stories/' + story.id + '/comments'}>
      //                 comments
      //             </Link>
      //         </div>
      //         })}
      //         </React.Fragment>
      //     </StoriesList> }
      // </div>
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
