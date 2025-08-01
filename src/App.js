import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import Login from './components/Login';
import AdminDashboard from './components/AdminDashboard';
import UserLevelSelect from './components/UserLevelSelect';
import UserLessonList from './components/UserLessonList';
import UserLessonDetail from './components/UserLessonDetail';
import UserDashboard from './components/UserDashboard'; // (legacy, not used)
import './App.css';

// Page Transition Wrapper Component
const PageTransition = ({ children }) => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    setIsVisible(true);
    return () => setIsVisible(false);
  }, []);

  return (
    <div className={`page-transition ${isVisible ? 'page-enter' : 'page-exit'}`}>
      {children}
    </div>
  );
};

// Location-aware wrapper for transitions
const AnimatedRoutes = ({ currentUser, handleLogout, handleLogin }) => {
  const location = useLocation();
  
  return (
    <PageTransition>
      <Routes location={location} key={location.pathname}>
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
    </PageTransition>
  );
};

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
        <AnimatedRoutes currentUser={currentUser} handleLogout={handleLogout} handleLogin={handleLogin} />
      </div>
    </Router>
  );
}

export default App; 