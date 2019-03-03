import React, { Component } from 'react';

import * as storiesService from '../../services/stories/storiesService';
import { classes } from 'coa';

class SingleStory extends Component {
    state = { 
        singleStory: null
     }

    componentDidMount() {
        let id = this.props.location.pathname.split("/").slice(-1)[0];

        storiesService
            .getItem(id)
            .then((response) => {
                this.setState({
                    singleStory: response.data
                })
            })
            .catch((error) => {
                console.log(error.response);
            });
    }
   
    render() {
        
        const singleStory = this.state.singleStory;
        
        return ( 
            <div className={classes.singleStoryWrap}>
                <div>
                    Title: {singleStory && singleStory.title}
                </div>

                <div>
                    Time: {singleStory && singleStory.time}
                </div>

                <div>
                    Url: {singleStory && singleStory.url}
                </div>

                <div>
                    Author: {singleStory && singleStory.by}
                </div>
            </div>
        );
    }
}
 
export default SingleStory;