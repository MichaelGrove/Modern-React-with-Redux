import _ from 'lodash'
import jsonPlaceholder from '../apis/jsonPlaceholder'

export const fetchPostsAndUsers = () => async (dispatch, getState) => {
    await dispatch(fetchPosts())

    // get unique userIds from posts
    // const userIds = _.uniq(_.map(getState().posts, 'userId'));
    // // dispatch fetchUser event from
    // userIds.forEach(id => dispatch(fetchUser(id)))

    _.chain(getState().posts)
        .map('userId')
        .uniq()
        .forEach(id => dispatch(fetchUser(id)))
        .value();
}

export const fetchPosts = () => async dispatch => {
    const { data } = await jsonPlaceholder.get('/posts');

    dispatch({ type: 'FETCH_POSTS', payload: data });
};

export const fetchUser = id => async dispatch => {
    const { data } = await jsonPlaceholder.get(`/users/${id}`);

    dispatch({ type: 'FETCH_USER', payload: data });
};

// export const fetchUser = id => dispatch => _fetchUser(id, dispatch);

// // Memoized user fetch => is run _only_ once per user
// const _fetchUser = _.memoize(async (id, dispatch) => {
//     const { data } = await jsonPlaceholder.get(`/users/${id}`);

//     dispatch({ type: 'FETCH_USER', payload: data });
// });