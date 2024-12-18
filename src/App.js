
import './App.css';
import PostAdded from './app/postadd';
import PostList from './app/postlist';
import PostUpdated from './app/postupdates';
import { Route, Routes, BrowserRouter as Router } from 'react-router'
import PostSingle from './app/postsingle';
import Maininto from './app/firstpage/main';
import Login from './app/login';
import Register from './app/regsiter';
function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Maininto />}/>
        <Route path='/login' element={<Login />} />
        <Route path='/home' element={<PostList />} />
        <Route path='/postadd/:UserId' element={<PostAdded />} />
        <Route path='/post/:PostId' element={<PostSingle />} />
        <Route path='/update/:PostId' element={<PostUpdated />} />
        <Route path='/register' element={<Register/>}/>



      </Routes>
    </Router>
  );
}

export default App;
