import React, { useState } from 'react';
import { users } from '../data/users';
import { User, Lock, Eye, EyeOff } from 'lucide-react';

const Login = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');

    // Find user in stored data
    const user = users.find(
      u => u.username === username && u.password === password
    );

    if (user) {
      // Remove password from user object before passing to parent
      const { password, ...userWithoutPassword } = user;
      onLogin(userWithoutPassword);
    } else {
      setError('Invalid username or password');
    }
  };

  return (
    <div className="login-container">
      <div className="logo-top-right">
        <img src="/images/logo.jpg" alt="Logo" style={{ width: '120px', height: 'auto' }} />
      </div>
      <div className="login-card">
        <div className="login-header">
          <h2 className="login-title">Speak English</h2>
          <h1 className="login-subtitle">مرحبا بكم فى موقع خدمة الانبا ابرام</h1>
          <h1 className="login-subtitle">I speak English</h1>
          <h1 className="login-subtitle">لكنيسة القديس العظيم ابو مقار بابوتيج</h1>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="username" className="form-label">
              <User size={16} style={{ marginRight: '0.5rem', verticalAlign: 'middle' }} />
              Username
            </label>
            <div style={{ position: 'relative' }}>
              <input
                type="text"
                id="username"
                className="form-input"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Enter your username"
                required
                style={{ paddingLeft: '3rem' }}
              />
              <User 
                size={18} 
                style={{ 
                  position: 'absolute', 
                  left: '1rem', 
                  top: '50%', 
                  transform: 'translateY(-50%)',
                  color: '#9ca3af'
                }} 
              />
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="password" className="form-label">
              <Lock size={16} style={{ marginRight: '0.5rem', verticalAlign: 'middle' }} />
              Password
            </label>
            <div style={{ position: 'relative' }}>
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                className="form-input"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
                required
                style={{ paddingLeft: '3rem', paddingRight: '3rem' }}
              />
              <Lock 
                size={18} 
                style={{ 
                  position: 'absolute', 
                  left: '1rem', 
                  top: '50%', 
                  transform: 'translateY(-50%)',
                  color: '#9ca3af'
                }} 
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                style={{
                  position: 'absolute',
                  right: '1rem',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  color: '#9ca3af',
                  padding: '0.25rem'
                }}
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>
          </div>

          {error && (
            <div style={{ 
              color: '#dc2626', 
              marginBottom: '1.5rem', 
              fontSize: '0.95rem',
              padding: '0.75rem 1rem',
              background: 'rgba(220, 38, 38, 0.1)',
              borderRadius: '8px',
              border: '1px solid rgba(220, 38, 38, 0.2)',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem'
            }}>
              <div style={{
                width: '8px',
                height: '8px',
                borderRadius: '50%',
                background: '#dc2626'
              }} />
              {error}
            </div>
          )}

          <button 
            type="submit" 
            className="btn btn-primary" 
            style={{ 
              width: '100%',
              marginTop: '1rem',
              fontSize: '1.1rem',
              padding: '1.25rem'
            }}
          >
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login; 