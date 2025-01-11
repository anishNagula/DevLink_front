import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Landing from './pages/Landing';
/* import Home from './pages/Home';
import Forum from './pages/Forum';
import Messaging from './pages/Messaging';
import Profile from './pages/Profile';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Landing from './pages/Landing';
import Settings from './pages/Settings';
import CreatePost from './pages/CreatePost';
import DetailedPost from './pages/DetailedPost'; */


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing/>} />
      </Routes>
    </Router>
  )
}

export default App;