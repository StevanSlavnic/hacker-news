import React, { Component } from 'react'

import CircularProgress from '@material-ui/core/CircularProgress'
import * as storiesService from '../../services/stories/storiesService'
import classes from './../Comments/Comment.module.scss'
import Moment from 'react-moment'
import Replies from './Replies'

class Comment extends Component {
  state = {
    comment: {},
    replies: [],
    collapsed: false
  }

  componentDidMount () {
    this.fetchItem()
  }

  fetchItem = () => {
    const id = this.props.children
    storiesService
      .getItem(id)
      .then(response => {
        const comment = response.data
        this.setState({ comment: comment, replies: comment.kids })
      })
      .catch(error => {
        console.log(error)
      })
  }

  handleCollapse = () => {
    this.setState(state => ({
      collapsed: !state.collapsed
    }))
  }

  render () {
    const { comment, replies } = this.state

    const repliesList =
      replies &&
      replies.map(function (item) {
        return (
          <div key={item} className={classes.Comment}>
            <Replies>{item}</Replies>
          </div>
        )
      })

    function createMarkup () {
      return { __html: comment.text }
    }

    return (
      <div className={classes.CommentWrap}>
        {!comment.id ? (
          <CircularProgress />
        ) : (
          <div>
            <div>
              {comment.deleted ? (
                'Comment deleted'
              ) : (
                <div
                  className={classes.CommentText}
                  dangerouslySetInnerHTML={createMarkup()}
                />
              )}
              <div className={classes.Author}>
                Commented by {comment.by} at{' '}
                <Moment unix>{comment.time}</Moment>
              </div>
            </div>
            {repliesList ? (
              <div>
                <span
                  className={classes.CollapseReplies}
                  onClick={() => this.handleCollapse()}
                >
                  {this.state.collapsed
                    ? 'Close replies '
                    : `Show replies (${comment.kids.length})`}
                </span>
                {this.state.collapsed ? (
                  <div className={classes.RepliesList}>{repliesList}</div>
                ) : (
                  ''
                )}
              </div>
            ) : (
              'No replies yet.'
            )}
          </div>
        )}
      </div>
    )
  }
}

export default Comment
