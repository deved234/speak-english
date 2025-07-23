import React from 'react';
import { useNavigate } from 'react-router-dom';
import { LogOut } from 'lucide-react';

const UserLevelSelect = ({ user, onLogout }) => {
  const navigate = useNavigate();

  return (
    <div className="dashboard-container">
      <header className="dashboard-header">
        <nav className="dashboard-nav">
          <div>
            <h1 className="dashboard-title">Choose Your Level</h1>
            <p style={{ color: '#64748b', marginTop: '0.25rem' }}>
              Welcome, {user.name}! Select a level to start learning.
            </p>
          </div>
          <button onClick={onLogout} className="btn btn-secondary">
            <LogOut size={16} style={{ marginRight: '0.5rem' }} />
            Logout
          </button>
        </nav>
      </header>
      <main className="dashboard-content">
        <div className="grid">
          {[1,2,3,4,5,6,7].map(level => (
            <div key={level} className="card" style={{ textAlign: 'center', cursor: 'pointer' }}
              onClick={() => navigate(`/user/levels/${level}`)}>
              <h2 style={{ fontSize: '2rem', fontWeight: '700', color: '#3b82f6', marginBottom: '1rem' }}>
                Level {level}
              </h2>
              <p style={{ color: '#64748b' }}>4 Units, 16 Lessons</p>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default UserLevelSelect; 