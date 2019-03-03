import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import CircularProgress from '@material-ui/core/CircularProgress';
import * as storiesService from '../../services/stories/storiesService';
import StoriesList from '../../components/ItemsList/ItemsList';


class TopStories extends Component {
    state = { 
        loading: true,
        topStories: null,
        storyId: null,
        // comments: null
    }


    async componentDidMount() {
        let ids = await this.fetchTopStories();

        const stories = ids && ids.slice(0,20).map(this.fetchSingleStory);

        const promise = await Promise.all(stories).then(results => results.map(result => {
            return result
        }));

        this.setState({ topStories: promise})
            
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
            .getItem(id)
			.then((response) => {
                return response.data
            })
			.catch((error) => {
				console.log(error.response);
            });
    }

    render() { 

        const topStories = this.state.topStories;

        console.log(topStories)
        
        return ( 
            <div>
                {!topStories ? <CircularProgress/> : <StoriesList>
                    <React.Fragment>
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

                        <Link to={'/top-stories/' + story.id + '/comments'}>
                            comments
                        </Link>
                    </div>
                    })}
                    </React.Fragment>
                </StoriesList> }
            </div>
         );
    }
}

export default TopStories;
