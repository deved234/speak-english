import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './components/Login';
import AdminDashboard from './components/AdminDashboard';
import UserLevelSelect from './components/UserLevelSelect';
import UserLessonList from './components/UserLessonList';
import UserLessonDetail from './components/UserLessonDetail';
import UserDashboard from './components/UserDashboard'; // (legacy, not used)
import './App.css';

function App() {
  const [currentUser, setCurrentUser] = useState(null);

  const handleLogin = (user) => {
    setCurrentUser(user);
  };

  const handleLogout = () => {
    setCurrentUser(null);
  };

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route 
            path="/" 
            element={
              currentUser ? (
                currentUser.role === 'admin' ? (
                  <Navigate to="/admin" />
                ) : (
                  <Navigate to="/user/levels" />
                )
              ) : (
                <Login onLogin={handleLogin} />
              )
            } 
          />
          <Route 
            path="/admin" 
            element={
              currentUser && currentUser.role === 'admin' ? (
                <AdminDashboard user={currentUser} onLogout={handleLogout} />
              ) : (
                <Navigate to="/" />
              )
            } 
          />
          <Route 
            path="/user/levels" 
            element={
              currentUser && currentUser.role === 'user' ? (
                <UserLevelSelect user={currentUser} onLogout={handleLogout} />
              ) : (
                <Navigate to="/" />
              )
            } 
          />
          <Route 
            path="/user/levels/:levelId" 
            element={
              currentUser && currentUser.role === 'user' ? (
                <UserLessonList user={currentUser} onLogout={handleLogout} />
              ) : (
                <Navigate to="/" />
              )
            } 
          />
          <Route 
            path="/user/levels/:levelId/units/:unitId/lessons/:lessonId" 
            element={
              currentUser && currentUser.role === 'user' ? (
                <UserLessonDetail user={currentUser} onLogout={handleLogout} />
              ) : (
                <Navigate to="/" />
              )
            } 
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App; 