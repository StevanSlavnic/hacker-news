import React, { Component } from 'react';

import CircularProgress from '@material-ui/core/CircularProgress';
import * as storiesService from '../../services/stories/storiesService';
import CommentsList from '../../components/ItemsList/ItemsList';

class Comments extends Component {
    state = { 
        comments: null
    }

    async componentDidMount() {

        let id = this.props.location.pathname.split("/").slice(-2)[0];

        console.log('Story', id)

        let comments = await this.fetchComments(id);

        const storiesComments = comments.kids && comments.kids.map(this.fetchSingleComment);

        const promise = await Promise.all(storiesComments).then(results => results.map(result => {
            return result
        }));

        this.setState({
            comments: promise
        })
           
        
    }

    fetchComments = (id) => {
        return storiesService
            .getItem(id)
            .then((response) => {
                return response.data
                // console.log(response.data)
            })
            .catch((error) => {
                console.log(error.response);
            }); 
    }

    fetchSingleComment = (id) => {
        return storiesService
            .getItem(id)
            .then((response) => {
                return response.data
                // console.log(response.data)
            })
            .catch((error) => {
                console.log(error.response);
            }); 
    }
     
    render() { 

        const comments = this.state.comments;

        console.log(this.props)

        return ( <div>
            {!comments ? <CircularProgress/> : <CommentsList>
                    <React.Fragment>
                    {comments && comments.map(comment => 
                    (
                        comment.deleted ? 'Comment deleted' : <div key={comment.id}>
                        <div>
                            Titile: {comment.text}
                        </div>
                        <div>
                            Author: {comment.by}
                        </div>
                    </div>
                    )
                )}
                </React.Fragment>
                </CommentsList> }
        </div> );
    }
}
 
export default Comments;