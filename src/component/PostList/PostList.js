// Core
import { useSelector } from "react-redux";
// Components
import { PostItem } from "../PostItem/PostItem";
// Redux 
import { getVisiblePosts } from "../../redux/posts/selector";

export const PostList = () => {
    const posts = useSelector(globalStage => getVisiblePosts(globalStage));
    console.log('posts', posts)
    const listJSX = posts.map(item => <PostItem key={item.id} name={item.text}/>);

    return listJSX
}

