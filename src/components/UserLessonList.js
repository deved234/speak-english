import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { levels } from '../data/users';
import { LogOut, BookOpen, Play } from 'lucide-react';

const UserLessonList = ({ user, onLogout }) => {
  const { levelId } = useParams();
  const navigate = useNavigate();
  const level = levels.find(l => l.level === Number(levelId));

  if (!level) {
    return <div style={{ padding: '2rem', color: 'red' }}>Level not found.</div>;
  }

  return (
    <div className="dashboard-container">
      <header className="dashboard-header">
        <nav className="dashboard-nav">
          <div>
            <h1 className="dashboard-title">Level {level.level} Units</h1>
            <p style={{ color: '#64748b', marginTop: '0.25rem' }}>
              Welcome, {user.name}! Choose a unit and lesson to watch.
            </p>
          </div>
          <div style={{ display: 'flex', gap: '1rem' }}>
            <button onClick={() => navigate('/user/levels')} className="btn btn-secondary">
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
        {level.units.map(unit => (
          <div key={unit.unit} className="card" style={{ marginBottom: '2rem' }}>
            <h2 style={{ fontSize: '1.5rem', fontWeight: '600', color: '#1e293b', marginBottom: '1rem' }}>
              Unit {unit.unit}
            </h2>
            <div className="grid">
              {unit.lessons.map(lesson => (
                <div key={lesson.id} className="lesson-card" style={{ cursor: 'pointer' }}
                  onClick={() => navigate(`/user/levels/${level.level}/units/${unit.unit}/lessons/${lesson.id}`)}>
                  <div className="lesson-image">
                    <Play size={48} />
                  </div>
                  <div className="lesson-content">
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
                      <BookOpen size={16} />
                      <h3 className="lesson-title" style={{ margin: 0 }}>{lesson.title}</h3>
                    </div>
                    <p className="lesson-description">{lesson.description}</p>
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