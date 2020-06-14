import jsonPlaceholder from '../apis/jsonPlaceholder';
/**
export const fetchPosts = async () => {
    const response = await jsonPlaceholder.get('/posts');
    
    return ({
        type: 'FETCH_POSTS',
        payload: response
    });
};
*/

export const fetchPosts = () => {
    return async (dispatch) => {
        const response = await jsonPlaceholder.get('/posts');

        dispatch({ 
            type: 'FETCH_POSTS', 
            payload: response.data 
        })
    };
};

export const fetchUser = (id) => {
    return async (dispatch) => {
        const response = await jsonPlaceholder.get(`/users/${id}`);

        dispatch({
            type: 'FETCH_USER',
            payload: response.data
        })
    };
};