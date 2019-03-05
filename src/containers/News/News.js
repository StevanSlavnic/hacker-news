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

    // this.setState({ items: this.props.items });
  }

  render() {
    const newStories = this.props.items;

    const items = newStories.items;

    console.log("New stories", newStories.items);

    return (
      <div>
        {items}
        <SingleStory items={this.props.items} />
        {/* {newStories.map(item => (
          <SingleStory key={item} id={item} />
        ))} */}
      </div>

      // <div>
      //   {!newStories ? (
      //     <CircularProgress />
      //   ) : (
      //     <StoriesList>
      //       <React.Fragment>
      //         {newStories &&
      //           newStories.map(story => {
      //             return (
      //               <div key={story.id}>
      //                 <div>
      //                   <a href={story.url} target="_blank" rel="noopener">
      //                     Titile: {story.title}
      //                   </a>
      //                 </div>
      //                 <div>Author: {story.by}</div>
      //                 <div>
      //                   Number of comments:{" "}
      //                   {story.descendants ? story.descendants : "0"}
      //                 </div>
      //                 <div>Score: {story.score}</div>
      //               </div>
      //             );
      //           })}
      //       </React.Fragment>
      //     </StoriesList>
      //   )}
      // </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    items: state.items,
    // hasErrored: state.itemsHasErrored,
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
