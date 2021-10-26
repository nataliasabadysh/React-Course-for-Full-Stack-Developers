import { useSelector } from "react-redux";
import { getPosts, getLoadingPost } from "../../redux/posts/selector";
import ClipLoader from "react-spinners/ClipLoader";
import { PostItem } from "../PostItem/PostItem";
import Grid from "@mui/material/Grid";

export const PostList = () => {
  const posts = useSelector((globalStage) => getPosts(globalStage));
  const isLoadingState = useSelector((globalStage) =>
    getLoadingPost(globalStage)
  );

  const listJSX =
    !isLoadingState &&
    posts.length > 1 &&
    posts.map((item) => (
      <Grid item xs={2} sm={4} md={4} key={item.id}>
        <PostItem key={item.id} name={item.body} />
      </Grid>
    ));

  const loaderJSX = isLoadingState && posts.length < 1 && (
    <ClipLoader color={"red"} size={150} />
  );

  return (
    <Grid
      container
      spacing={{ xs: 2, md: 3 }}
      columns={{ xs: 4, sm: 8, md: 12 }}
    >
      {loaderJSX}
      {listJSX}
    </Grid>
  );
};
