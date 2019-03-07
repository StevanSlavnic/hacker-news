import React, { Component } from 'react'
import { connect } from 'react-redux'
import { itemsFetchData } from '../../store/actions/itemsAction'

import SingleStory from '../SingleStory/SingleStory'
import GridList from '../../components/GridList/GridList'
import classes from './News.module.scss'

class News extends Component {
  state = {}

  componentDidMount () {
    window.scrollTo(0, 0)
    this.props.fetchData(
      'https://hacker-news.firebaseio.com/v0/newstories.json'
    )
  }

  render () {
    const newStories = this.props.items.items ? this.props.items.items : []

    const storyRender = () =>
      newStories.slice(0, 50).map(function (item) {
        return (
          <div key={item}>
            <SingleStory>{item}</SingleStory>
          </div>
        )
      })
    return (
      <div className={classes.NewsWrapper}>
        <GridList className={classes.GridList}>{storyRender()}</GridList>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    items: state.items,
    isLoading: state.itemsIsLoading
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchData: url => dispatch(itemsFetchData(url))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(News)
