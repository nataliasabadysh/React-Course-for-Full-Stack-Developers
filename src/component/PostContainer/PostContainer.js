// Core
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchPost } from "../../redux/posts/actions";
import { PostList } from "../PostList/PostList";

export function PostContainer() {
  const dispatch = useDispatch();
  const posts = useSelector(state => state.posts.list);

  useEffect(() => {
    if(posts.length === 0){
      dispatch(fetchPost())
    }
  }, [dispatch, posts.length]);

  return (
    <div>
      <PostList />
    </div>
  );
}
