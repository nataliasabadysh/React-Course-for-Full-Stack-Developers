import { createSelector } from 'reselect'

export const getPosts = (state) => state.posts.list
export const getTag = (state) => state.posts.tag;

export const getVisiblePosts = createSelector(
    [getPosts, getTag], 
    (posts, tag)=> {
        return posts.filter(item => item.tag.includes(tag)) 
})
