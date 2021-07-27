import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './App.css';
import Home from './component/Home'
import About from './component/About'
import Nav from './component/Nav'
import Posts from './component/Posts'
import PostLists from './component/PostLists'
import Post from './component/Post'

function App() {
  return (
    <Router>
      <Nav/>
      <Routes>
        <Route path="/" element={ <Home/> }/>
        <Route path="/about" element={<About />} />
        <Route path="posts" element={<Posts />}>
          <Route path="/" element={<PostLists />} />
          <Route path=":slug" element={<Post />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
