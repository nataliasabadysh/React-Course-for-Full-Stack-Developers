import { useSelector } from "react-redux";
import { getPosts, getLoadingPost } from "../../redux/posts/selector";
import ClipLoader from "react-spinners/ClipLoader";
import { PostItem } from "../PostItem/PostItem";


export const PostList = () => {
    const posts = useSelector(globalStage => getPosts(globalStage));
    const isLoadingState = useSelector(globalStage =>getLoadingPost(globalStage));
 
    const listJSX = !isLoadingState && posts.length > 1 && posts.map(item => <PostItem key={item.id} name={item.body}/>);
    const loaderJSX = isLoadingState && posts.length < 1 &&  <ClipLoader color={'red'} size={150} />

    return (
        <>
            {loaderJSX}
            {listJSX}
        </>
    )
}