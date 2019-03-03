import React, { Component } from 'react';

import * as storiesService from '../../services/stories/storiesService';
import CircularProgress from '@material-ui/core/CircularProgress';
import StoriesList from '../../components/ItemsList/ItemsList';

class News extends Component {
    state = { 
        loading: true,
        newStories: null,
    }

    async componentDidMount() {
        let ids = await this.fetchNewStories();

        const stories = ids && ids.slice(0,20).map(this.fetchSingleStory);

        const promise = await Promise.all(stories).then(results => results.map(result => {
            return result
        }));

        this.setState({newStories: promise})
    }
    

	fetchNewStories = () => {
		return storiesService
			.getNewStories()
			.then((response) => {
                return response.data
            })
			.catch((error) => {
				console.log(error.response);
            });
            
    };
    
    fetchSingleStory = (id) => {
        return storiesService
			.getItem(id)
			.then((response) => {
                return response.data
            })
			.catch((error) => {
				console.log(error.response);
            });
    }

    render() { 

        const newStories = this.state.newStories;
        
        return ( 
            <div>
                {!newStories ? <CircularProgress/> : <StoriesList>
                    <React.Fragment>
                    {newStories && newStories.map(story => {
                    return <div key={story.id}>
                        <div>
                            <a href={story.url} target="_blank" rel="noopener">
                                Titile: {story.title}
                            </a>
                        </div>
                        <div>
                            Author: {story.by}
                        </div>
                        <div>
                            Number of comments: {story.descendants ? story.descendants : '0' }
                        </div>
                        <div>
                           Score: {story.score}
                        </div>
                    </div>
                })}
                </React.Fragment>
                </StoriesList> }
            </div>
         );
    }
}
 
export default News;