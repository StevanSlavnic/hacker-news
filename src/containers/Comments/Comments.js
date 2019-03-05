import React, { Component } from 'react';

import CircularProgress from '@material-ui/core/CircularProgress';
import * as storiesService from '../../services/stories/storiesService';
import classes from './../Comments/Comments.module.scss';

import Comment from './Comment'

class Comments extends Component {
    state = { 
        comments: null
    }

    componentDidMount() {
    }

    
     
    render() { 

        const comments = this.props;

        console.log("comments", comments);
    
        const commentRender = comments.slice(0, 20).map(function(item){
          return <Comment key={item} className="items-list-item">
            {item}
          </Comment>
    
          
      })

        // const comments = this.state.comments;

        // console.log(this.props)

        return ( <div>
            {commentRender}
        </div> );
    }
}
 
export default Comments;