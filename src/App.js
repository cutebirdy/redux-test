
import './App.css';
import PostAdded from './app/postadd';
import PostList from './app/postlist';
import PostUpdated from './app/postupdates';
import {Route ,Routes,BrowserRouter as Router } from 'react-router'
import PostSingle from './app/postsingle';
function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<PostList />}/>
        <Route path='/postadd' element={<PostAdded />}/>
        <Route path='/post/:PostId' element={<PostSingle/>}/>
        <Route path='/update/:PostId' element={<PostUpdated/>}/>
      </Routes>
    </Router>
  );
}

export default App;
