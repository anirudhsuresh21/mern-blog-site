// import logo from './logo.svg';
import { Routes, Route } from 'react-router-dom';
import './App.css';
// import Header from './components/Header';
import Posts from './Posts';
import Layout from './Layout';
import Login from './components/Login';
import Register from './components/Register';
import CreatePost from './components/CreatePost';
import IndexPage from './components/IndexPage';
import EditPost from './components/EditPost';
import PostsPage from './components/PostsPage';

function App() {

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={
          <IndexPage />
        } />
        <Route path={'/login'} element={<Login />} />
        <Route path={'/register'} element={<Register />} />
        <Route path={'/create'} element={<CreatePost />} />
        <Route path="/edit/:id" element={<EditPost />} />
        <Route path="/post/:id" element={<PostsPage />} />
      </Route>

    </Routes>

  );
}

export default App;
