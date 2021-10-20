// Core
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
// Components 
import { PostContainer } from './component/PostContainer/PostContainer';
// Actions 
import { fetchPost } from './redux/posts/actions';
// Instruments
import { containerStyle } from './theme/styles';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPost())
  }, [dispatch])

  return (
    <div style={containerStyle}>
      <PostContainer />
    </div>
  );
}

export default App;