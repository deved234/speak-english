import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { levels } from '../data/users';
import { LogOut, BookOpen, Play, ArrowLeft, ChevronRight } from 'lucide-react';

const UserLessonList = ({ user, onLogout }) => {
  const { levelId } = useParams();
  const navigate = useNavigate();
  const level = levels.find(l => l.level === Number(levelId));

  if (!level) {
    return <div style={{ padding: '2rem', color: 'red' }}>Level not found.</div>;
  }

  const unitColors = [
    'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
    'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
    'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)'
  ];

  return (
    <div className="dashboard-container">
      <header className="dashboard-header">
        <nav className="dashboard-nav">
          <div>
            <h1 className="dashboard-title">Level {level.level} Units</h1>
            <p style={{ 
              color: '#64748b', 
              marginTop: '0.5rem',
              fontSize: '1.1rem',
              fontWeight: '500'
            }}>
              Welcome back, <span style={{ 
                color: '#667eea', 
                fontWeight: '600' 
              }}>{user.name}</span>! Choose a unit and lesson to start learning.
            </p>
          </div>
          <div style={{ display: 'flex', gap: '1rem' }}>
            <button onClick={() => navigate('/user/levels')} className="btn btn-secondary">
              <ArrowLeft size={16} style={{ marginRight: '0.5rem' }} />
              Back to Levels
            </button>
            <button onClick={onLogout} className="btn btn-secondary">
              <LogOut size={16} style={{ marginRight: '0.5rem' }} />
              Logout
            </button>
          </div>
        </nav>
      </header>
      <main className="dashboard-content">
        {level.units.map((unit, unitIndex) => (
          <div key={unit.unit} className="card unit-card" style={{ 
            marginBottom: '2.5rem',
            position: 'relative',
            overflow: 'hidden'
          }}>
            <div style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              height: '4px',
              background: unitColors[unitIndex % unitColors.length]
            }} />
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '1rem',
              marginBottom: '1.5rem'
            }}>
              <div style={{
                width: '50px',
                height: '50px',
                borderRadius: '50%',
                background: unitColors[unitIndex % unitColors.length],
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'white',
                fontSize: '1.25rem',
                fontWeight: '700',
                boxShadow: '0 4px 15px rgba(0, 0, 0, 0.1)'
              }}>
                {unit.unit}
              </div>
              <div>
                <h2 style={{ 
                  fontSize: '1.75rem', 
                  fontWeight: '700', 
                  color: '#1e293b', 
                  marginBottom: '0.25rem',
                  background: unitColors[unitIndex % unitColors.length],
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text'
                }}>
                  Unit {unit.unit}
                </h2>
                <p style={{
                  color: '#64748b',
                  fontSize: '1rem',
                  fontWeight: '500'
                }}>
                  {unit.lessons.length} lessons available
                </p>
              </div>
            </div>
            <div className="grid">
              {unit.lessons.map((lesson, lessonIndex) => (
                <div 
                  key={lesson.id} 
                  className="lesson-card lesson-card-enhanced" 
                  style={{ 
                    cursor: 'pointer',
                    position: 'relative',
                    animationDelay: `${lessonIndex * 0.1}s`
                  }}
                  onClick={() => navigate(`/user/levels/${level.level}/units/${unit.unit}/lessons/${lesson.id}`)}
                >
                  <div className="lesson-image" style={{
                    background: unitColors[unitIndex % unitColors.length]
                  }}>
                    <Play size={48} />
                    <div style={{
                      position: 'absolute',
                      top: '1rem',
                      right: '1rem',
                      background: 'rgba(255, 255, 255, 0.2)',
                      borderRadius: '50%',
                      width: '32px',
                      height: '32px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}>
                      <ChevronRight size={16} />
                    </div>
                  </div>
                  <div className="lesson-content">
                    <div style={{ 
                      display: 'flex', 
                      alignItems: 'center', 
                      gap: '0.75rem', 
                      marginBottom: '0.75rem' 
                    }}>
                      <BookOpen size={18} style={{ color: '#667eea' }} />
                      <h3 className="lesson-title" style={{ margin: 0 }}>{lesson.title}</h3>
                    </div>
                    <p className="lesson-description">{lesson.description}</p>
                    <div style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.5rem',
                      marginTop: '1rem',
                      fontSize: '0.9rem',
                      color: '#64748b'
                    }}>
                      <div style={{
                        width: '6px',
                        height: '6px',
                        borderRadius: '50%',
                        background: unitColors[unitIndex % unitColors.length]
                      }} />
                      Lesson {lesson.id}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </main>
    </div>
  );
};

export default UserLessonList; 