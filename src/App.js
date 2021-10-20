// Core
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
// Component
import { TagFilter } from './component/TagFilter';
import { PostContainer } from './component/PostContainer/PostContainer';
// Redux 
import { fillPost } from './redux/posts/actions';
// Instruments
import posts from './posts.json';
import { containerStyle } from './theme/styles';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fillPost(posts)) // from json DATA as Array
  }, [dispatch])

  return (
    <div style={containerStyle}>
      <TagFilter />
      <PostContainer/>
    </div>
  );
}

export default App;
