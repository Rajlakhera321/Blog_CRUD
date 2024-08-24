import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import AddPost from './pages/AddPost';
import PostDetails from './pages/PostDetails';
import Login from './pages/Login';
import Signup from './pages/Signup';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login/>} />
        <Route path="/signup" element={<Signup/>} />
        <Route path="/postList" element={<Home/>} />
        <Route path="/posts/:id" element={<PostDetails/>} />
        <Route path="/addPost" element={<AddPost/>} />
        <Route path="/edit/:id" element={<AddPost/>} />
      </Routes>
    </Router>
  );
}

export default App;
