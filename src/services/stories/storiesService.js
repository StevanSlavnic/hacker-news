import axiosInstance from '../axiosDefaultInstance';

export const getNewStories = () => {
	
	const url = '/newstories.json';

	return axiosInstance.get(url);
};

export const getTopStories = () => {
	
	const url = '/topstories.json';

	return axiosInstance.get(url);
};

export const getSingleStory = (id) => {
	
	const url = '/item/' + id + '.json';

	return axiosInstance.get(url, id);
};

export const getComments = (id) => {
	
	const url = '/item/' + id + '.json';

	return axiosInstance.get(url, id);
};