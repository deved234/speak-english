import React from 'react';
import { useNavigate } from 'react-router-dom';
import { LogOut, BookOpen, Users, Award, Star } from 'lucide-react';

const UserLevelSelect = ({ user, onLogout }) => {
  const navigate = useNavigate();

  const levelIcons = {
    1: <BookOpen size={40} />,
    2: <Users size={40} />,
    3: <Award size={40} />,
    4: <Star size={40} />,
    5: <BookOpen size={40} />,
    6: <Users size={40} />,
    7: <Award size={40} />
  };

  const levelColors = {
    1: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    2: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
    3: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
    4: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)',
    5: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
    6: 'linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)',
    7: 'linear-gradient(135deg, #ff9a9e 0%, #fecfef 100%)'
  };

  return (
    <div className="dashboard-container">
      <header className="dashboard-header">
        <nav className="dashboard-nav">
          <div>
            <h1 className="dashboard-title">Choose Your Level</h1>
            <p style={{ 
              color: '#64748b', 
              marginTop: '0.5rem',
              fontSize: '1.1rem',
              fontWeight: '500'
            }}>
              Welcome back, <span style={{ 
                color: '#667eea', 
                fontWeight: '600' 
              }}>{user.name}</span>! Select a level to start your learning journey.
            </p>
          </div>
          <button onClick={onLogout} className="btn btn-secondary">
            <LogOut size={18} style={{ marginRight: '0.5rem' }} />
            Logout
          </button>
        </nav>
      </header>
      <main className="dashboard-content">
        <div className="grid">
          {[1,2,3,4,5,6,7].map((level, index) => {
            const arabicLevels = {
              1: 'المستوى الاول',
              2: 'المستوى الثانى',
              3: 'المستوى الثالث',
              4: 'المستوى الرابع',
              5: 'المستوى الخامس',
              6: 'المستوى السادس',
              7: 'المستوى السابع'
            };
            return (
              <div 
                key={level} 
                className="card level-card" 
                style={{ 
                  textAlign: 'center', 
                  cursor: 'pointer',
                  animationDelay: `${index * 0.1}s`
                }}
                onClick={() => navigate(`/user/levels/${level}`)}
              >
                <div 
                  className="level-icon-container"
                  style={{
                    background: levelColors[level],
                    width: '80px',
                    height: '80px',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 auto 1.5rem',
                    color: 'white',
                    boxShadow: '0 8px 25px rgba(0, 0, 0, 0.15)',
                    transition: 'all 0.3s ease'
                  }}
                >
                  {levelIcons[level]}
                </div>
                <h2 style={{ 
                  fontSize: '2rem', 
                  fontWeight: '800', 
                  background: levelColors[level],
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  marginBottom: '1rem',
                  transition: 'all 0.3s ease'
                }}>
                  {arabicLevels[level]}
                </h2>
                <p style={{ 
                  color: '#64748b',
                  fontSize: '1.1rem',
                  fontWeight: '500',
                  marginBottom: '1rem'
                }}>
                  4 Units, 16 Lessons
                </p>
                <div style={{
                  display: 'flex',
                  justifyContent: 'center',
                  gap: '0.5rem',
                  marginTop: '1rem'
                }}>
                  {[...Array(4)].map((_, i) => (
                    <div
                      key={i}
                      style={{
                        width: '8px',
                        height: '8px',
                        borderRadius: '50%',
                        background: levelColors[level],
                        opacity: 0.6
                      }}
                    />
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </main>
    </div>
  );
};

export default UserLevelSelect; 