import './App.css';
import { Routes, Route } from 'react-router-dom';
import Posts from './Posts';
import SinglePost from './SinglePost';

function App(props) {

  return (
    <Routes>
      <Route path='/blog-app/' element={<Posts />} />
      <Route path='/blog-app/1' element={<SinglePost postData={props.postData[0]} />} />
      <Route path='/blog-app/2' element={<SinglePost postData={props.postData[1]} />} />
      <Route path='/blog-app/3' element={<SinglePost postData={props.postData[2]} />} />
      <Route path='/blog-app/4' element={<SinglePost postData={props.postData[3]} />} />
      <Route path='/blog-app/5' element={<SinglePost postData={props.postData[4]} />} />
    </Routes>
  );
}

export default App;
