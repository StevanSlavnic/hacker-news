import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import CircularProgress from '@material-ui/core/CircularProgress';
import * as storiesService from '../../services/stories/storiesService';


class TopStories extends Component {
    state = { 
        loading: true,
        topStories: null,
        storyId: null,
        // comments: null
    }


    async componentDidMount() {
        let ids = await this.fetchTopStories();

       

        // console.log(comments)

        const stories = ids && ids.slice(0,20).map(this.fetchSingleStory);
        

        const promise = await Promise.all(stories).then(results => results.map(result => {
            return result
        }));

        this.setState({ topStories: promise})
                
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

    handleClick = (id) => {
       return storiesService
                .getSingleStory(id)
                .then((response) => {
                    return response.data
                    // console.log(response.data)
                })
                .catch((error) => {
                    console.log(error.response);
                });
    }
    

	fetchTopStories = () => {
		return storiesService
			.getTopStories()
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

    // fetchComments = (id) => {
    //     return storiesService
    //     .getComments(id)
    //     .then((response) => {
    //         return response.data
    //     })
    //     .catch((error) => {
    //         console.log(error.response);
    //     });
    // }
    // onClick={(e) => this.handleClick(story.id ,e)}

    render() { 

        const topStories = this.state.topStories;

        console.log(topStories)
        
        return ( 
            <div>
                {!topStories ? <CircularProgress/> : <React.Fragment>
                    {topStories && topStories.map(story => {
                    return <div key={story.id}>
                    <div>
                        <a href={'/single-story/' + story.id} target="_blank" rel="noopener">
                            Titile: {story.title}
                        </a>
                    </div>
                    <div>
                        Author: {story.by}
                    </div>
                    
                    <div>
                       Score: {story.score}
                    </div>

                    <Link to={''}>
                        comments
                    </Link>
                </div>
                })}
                </React.Fragment> }
            </div>
         );
    }
}

export default TopStories;
