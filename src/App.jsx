import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Landing from './pages/Landing';
import Signup from './pages/Signup';
import Login from './pages/Login';
import Home from './pages/Home';
import Forum from './pages/Forum';
import CreatePost from './pages/CreatePost';
/* import Messaging from './pages/Messaging';
import Profile from './pages/Profile';
import Landing from './pages/Landing';
import Settings from './pages/Settings';
import DetailedPost from './pages/DetailedPost'; */


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing/>} />
        <Route path="/signup" element={<Signup/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/home" element={<Home/>} />
        <Route path="/forum" element={<Forum/>} />
        <Route path="/createPost" element={<CreatePost/>} />
      </Routes>
    </Router>
  )
}

export default App;