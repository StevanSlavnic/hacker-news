import React, { Component } from 'react'

import CircularProgress from '@material-ui/core/CircularProgress'
import * as storiesService from '../../services/stories/storiesService'
import classes from './../Comments/Comment.module.scss'
import Moment from 'react-moment'

class Reply extends Component {
  state = {
    reply: {}
  }

  componentDidMount () {
    this.fetchItem()
  }

  fetchItem = () => {
    const id = this.props.children

    storiesService
      .getItem(id)
      .then(response => {
        this.setState({ reply: response.data })
      })
      .catch(error => {
        console.log(error)
      })
  }

  render () {
    const reply = this.state.reply

    function createMarkup () {
      return { __html: reply.text }
    }

    return (
      <div>
        {!reply.id ? (
          <CircularProgress />
        ) : (
          <div className={classes.ReplyWrap}>
            <div className={classes.ReplyText}>
              {reply.deleted ? (
                'reply deleted'
              ) : (
                <div dangerouslySetInnerHTML={createMarkup()} />
              )}
              <div className={classes.Author}>
                Replied by {reply.by} at
                <Moment unix>{reply.time}</Moment>
              </div>
            </div>
          </div>
        )}
      </div>
    )
  }
}

export default Reply
