import { createSelector } from 'reselect';

const getPost = state => state.posts;  // [{}]
const getUser = state => state.user; // {id: 1}
const getUsers = state => state.users; // [{ }] 
const getFilter = state => state.filter; // kiev
const getTag = state => state.tag;  // #location


const getUserCard = createSelector(
    [getPost, getUser, getUsers,  getFilter, getTag], 
    (post, user, users,  filter, tag)=> {

        // const userData = users.find( 1 )
        // const totalLikes =  arr.reduce(cb, 0);
        // const existingPost = userData.filter(.. )
        // const normalizedData = post.map(.. )

        return { user: 'some memorized data'}
    })