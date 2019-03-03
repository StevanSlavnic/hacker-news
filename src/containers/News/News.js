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
                
        // const stories = 
        //     ids.slice(0,20).map((id) => {
        //         storiesService.getSingleStory(id)
        //         .then((response) => {
        //             this.setState({
        //                 newStories: response.data
        //             })
        //         //    return response.data
        //         })
        //     }
                
            
        // )

        // console.log('Stories', stories)
        // console.log('Posts', promise)
    
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
			.getSingleStory(id)
			.then((response) => {
                return response.data
            })
			.catch((error) => {
				console.log(error.response);
            });
    }

    render() { 

        const newStories = this.state.newStories;

        console.log(newStories)
        
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
                            Number of comments: {story.kids ? story.kids.length : '0' }
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