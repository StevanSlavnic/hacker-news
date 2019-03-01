import React, { Component } from 'react';

class News extends Component {
    state = { 
        newStories: null
    }


    componentDidMount() {
        console.log(this.state.newStories)
    }

    render() { 
        return ( 
            <div>News</div>
         );
    }
}
 
export default News;