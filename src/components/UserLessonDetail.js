import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { levels } from '../data/users';
import { LogOut, ArrowLeft, BookOpen, FileText, PlayCircle, HelpCircle } from 'lucide-react';

const UserLessonDetail = ({ user, onLogout }) => {
  const { levelId, unitId, lessonId } = useParams();
  const navigate = useNavigate();
  const level = levels.find(l => l.level === Number(levelId));
  const unit = level ? level.units.find(u => u.unit === Number(unitId)) : null;
  const lesson = unit ? unit.lessons.find(l => l.id === Number(lessonId)) : null;
  const [tab, setTab] = useState('words');
  const [answers, setAnswers] = useState([]);
  const [submitted, setSubmitted] = useState(false);

  if (!lesson) {
    return <div className="dashboard-content">Lesson not found.</div>;
  }

  const handleOptionChange = (qIdx, optIdx) => {
    const newAnswers = [...answers];
    newAnswers[qIdx] = optIdx;
    setAnswers(newAnswers);
  };

  const handleTestSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="dashboard-container">
      <header className="dashboard-header">
        <nav className="dashboard-nav">
          <div>
            <h1 className="dashboard-title">{lesson.title}</h1>
            <p style={{ color: '#64748b', marginTop: '0.25rem' }}>
              Welcome, {user.name}!
            </p>
          </div>
          <div style={{ display: 'flex', gap: '1rem' }}>
            <button onClick={() => navigate(-1)} className="btn btn-secondary">
              <ArrowLeft size={16} style={{ marginRight: '0.5rem' }} />
              Back
            </button>
            <button onClick={onLogout} className="btn btn-secondary">
              <LogOut size={16} style={{ marginRight: '0.5rem' }} />
              Logout
            </button>
          </div>
        </nav>
      </header>
      <main className="dashboard-content">
        <div className="card" style={{ marginBottom: '2rem' }}>
          <div style={{ display: 'flex', gap: '1rem', marginBottom: '1.5rem' }}>
            <button
              className={`btn ${tab === 'words' ? 'btn-primary' : 'btn-secondary'}`}
              onClick={() => setTab('words')}
              style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}
            >
              <BookOpen size={16} /> Words
            </button>
            <button
              className={`btn ${tab === 'grammar' ? 'btn-primary' : 'btn-secondary'}`}
              onClick={() => setTab('grammar')}
              style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}
            >
              <FileText size={16} /> Grammar
            </button>
            <button
              className={`btn ${tab === 'video' ? 'btn-primary' : 'btn-secondary'}`}
              onClick={() => setTab('video')}
              style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}
            >
              <PlayCircle size={16} /> Video
            </button>
            <button
              className={`btn ${tab === 'test' ? 'btn-primary' : 'btn-secondary'}`}
              onClick={() => setTab('test')}
              style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}
            >
              <HelpCircle size={16} /> Test
            </button>
          </div>

          {tab === 'words' && (
            <div>
              <h2 style={{ fontSize: '1.25rem', fontWeight: '600', marginBottom: '1rem' }}>Words</h2>
              <div>
                {lesson.words.map((w, idx) => (
                  <div key={idx} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '2rem' }}>
                    <img src={w.imageUrl} alt={w.word} style={{ width: 100, height: 100, objectFit: 'cover', borderRadius: '0.5rem', marginRight: '1.5rem' }} />
                    <div style={{ fontWeight: '500', color: '#1e293b', fontSize: '1.25rem' }}>{w.word}</div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {tab === 'grammar' && (
            <div>
              <h2 style={{ fontSize: '1.25rem', fontWeight: '600', marginBottom: '1rem' }}>Grammar</h2>
              <div 
                style={{ color: '#64748b', fontSize: '1rem' }} 
                dangerouslySetInnerHTML={{ __html: lesson.grammar }}
              />
            </div>
          )}

          {tab === 'video' && (
            <div>
              <h2 style={{ fontSize: '1.25rem', fontWeight: '600', marginBottom: '1rem' }}>Video</h2>
              <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0, overflow: 'hidden' }}>
                <iframe
                  src={lesson.videoUrl}
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    border: 'none',
                    borderRadius: '0.5rem'
                  }}
                  title={lesson.title}
                  allowFullScreen
                />
              </div>
            </div>
          )}

          {tab === 'test' && (
            <div>
              <h2 style={{ fontSize: '1.25rem', fontWeight: '600', marginBottom: '1rem' }}>Test</h2>
              <form onSubmit={handleTestSubmit}>
                {lesson.test.map((q, qIdx) => (
                  <div key={qIdx} style={{ marginBottom: '2rem' }}>
                    <div style={{ fontWeight: '500', marginBottom: '0.5rem' }}>{q.question}</div>
                    {q.imageUrl && (
                      <img src={q.imageUrl} alt="question" style={{ width: 100, height: 100, objectFit: 'cover', borderRadius: '0.5rem', marginBottom: '0.5rem' }} />
                    )}
                    <div>
                      {q.options.map((opt, optIdx) => (
                        <label key={optIdx} style={{ display: 'block', marginBottom: '0.5rem', cursor: 'pointer' }}>
                          <input
                            type="radio"
                            name={`q${qIdx}`}
                            value={optIdx}
                            checked={answers[qIdx] === optIdx}
                            onChange={() => handleOptionChange(qIdx, optIdx)}
                            disabled={submitted}
                            style={{ marginRight: '0.5rem' }}
                          />
                          {opt}
                          {submitted && (
                            optIdx === q.correct
                              ? <span style={{ color: '#10b981', marginLeft: '0.5rem' }}>(Correct)</span>
                              : answers[qIdx] === optIdx && optIdx !== q.correct
                                ? <span style={{ color: '#ef4444', marginLeft: '0.5rem' }}>(Incorrect)</span>
                                : null
                          )}
                        </label>
                      ))}
                    </div>
                  </div>
                ))}
                {!submitted && (
                  <button type="submit" className="btn btn-primary">Submit Answers</button>
                )}
                {submitted && (
                  <div style={{ marginTop: '1rem', fontWeight: '500', color: '#3b82f6' }}>
                    Test submitted! Review your answers above.
                  </div>
                )}
              </form>
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default UserLessonDetail; 