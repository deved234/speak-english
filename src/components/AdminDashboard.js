import React, { useState } from 'react';
import { attendanceData } from '../data/users';
import { LogOut, Users, Calendar, Plus } from 'lucide-react';

const AdminDashboard = ({ user, onLogout }) => {
  const [activeTab, setActiveTab] = useState('attendance');
  const [attendance, setAttendance] = useState(attendanceData);
  const [newStudent, setNewStudent] = useState({ name: '', status: 'present', timeIn: '', timeOut: '' });

  const handleAddStudent = () => {
    if (newStudent.name.trim()) {
      const student = {
        id: attendance.length + 1,
        studentName: newStudent.name,
        date: new Date().toISOString().split('T')[0],
        status: newStudent.status,
        timeIn: newStudent.timeIn || null,
        timeOut: newStudent.timeOut || null
      };
      setAttendance([...attendance, student]);
      setNewStudent({ name: '', status: 'present', timeIn: '', timeOut: '' });
    }
  };

  const getStatusClass = (status) => {
    switch (status) {
      case 'present': return 'status-present';
      case 'absent': return 'status-absent';
      case 'late': return 'status-late';
      default: return '';
    }
  };

  return (
    <div className="dashboard-container">
      <header className="dashboard-header">
        <nav className="dashboard-nav">
          <div>
            <h1 className="dashboard-title">Admin Dashboard</h1>
            <p style={{ color: '#64748b', marginTop: '0.25rem' }}>
              Welcome back, {user.name}!
            </p>
          </div>
          <button onClick={onLogout} className="btn btn-secondary">
            <LogOut size={16} style={{ marginRight: '0.5rem' }} />
            Logout
          </button>
        </nav>
      </header>

      <main className="dashboard-content">
        <div style={{ marginBottom: '2rem' }}>
          <div style={{ display: 'flex', gap: '1rem', marginBottom: '2rem' }}>
            <button
              onClick={() => setActiveTab('attendance')}
              className={`btn ${activeTab === 'attendance' ? 'btn-primary' : 'btn-secondary'}`}
              style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}
            >
              <Calendar size={16} />
              Attendance
            </button>
            <button
              onClick={() => setActiveTab('overview')}
              className={`btn ${activeTab === 'overview' ? 'btn-primary' : 'btn-secondary'}`}
              style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}
            >
              <Users size={16} />
              Overview
            </button>
          </div>

          {activeTab === 'attendance' && (
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
                <h2 style={{ fontSize: '1.5rem', fontWeight: '600', color: '#1e293b' }}>
                  Attendance Management
                </h2>
                <button className="btn btn-primary" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <Plus size={16} />
                  Add Student
                </button>
              </div>

              <div className="card" style={{ marginBottom: '2rem' }}>
                <h3 style={{ marginBottom: '1rem', fontSize: '1.125rem', fontWeight: '600' }}>
                  Add New Student
                </h3>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem' }}>
                  <div className="form-group">
                    <label className="form-label">Student Name</label>
                    <input
                      type="text"
                      className="form-input"
                      value={newStudent.name}
                      onChange={(e) => setNewStudent({ ...newStudent, name: e.target.value })}
                      placeholder="Enter student name"
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Status</label>
                    <select
                      className="form-input"
                      value={newStudent.status}
                      onChange={(e) => setNewStudent({ ...newStudent, status: e.target.value })}
                    >
                      <option value="present">Present</option>
                      <option value="absent">Absent</option>
                      <option value="late">Late</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label className="form-label">Time In</label>
                    <input
                      type="time"
                      className="form-input"
                      value={newStudent.timeIn}
                      onChange={(e) => setNewStudent({ ...newStudent, timeIn: e.target.value })}
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Time Out</label>
                    <input
                      type="time"
                      className="form-input"
                      value={newStudent.timeOut}
                      onChange={(e) => setNewStudent({ ...newStudent, timeOut: e.target.value })}
                    />
                  </div>
                </div>
                <button onClick={handleAddStudent} className="btn btn-primary" style={{ marginTop: '1rem' }}>
                  Add Student
                </button>
              </div>

              <div className="card">
                <h3 style={{ marginBottom: '1.5rem', fontSize: '1.125rem', fontWeight: '600' }}>
                  Today's Attendance
                </h3>
                <table className="attendance-table">
                  <thead>
                    <tr>
                      <th>Student Name</th>
                      <th>Date</th>
                      <th>Status</th>
                      <th>Time In</th>
                      <th>Time Out</th>
                    </tr>
                  </thead>
                  <tbody>
                    {attendance.map((record) => (
                      <tr key={record.id}>
                        <td>{record.studentName}</td>
                        <td>{record.date}</td>
                        <td>
                          <span className={getStatusClass(record.status)}>
                            {record.status.charAt(0).toUpperCase() + record.status.slice(1)}
                          </span>
                        </td>
                        <td>{record.timeIn || '-'}</td>
                        <td>{record.timeOut || '-'}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {activeTab === 'overview' && (
            <div>
              <h2 style={{ fontSize: '1.5rem', fontWeight: '600', color: '#1e293b', marginBottom: '1.5rem' }}>
                System Overview
              </h2>
              
              <div className="grid">
                <div className="card">
                  <h3 style={{ fontSize: '1.125rem', fontWeight: '600', marginBottom: '1rem' }}>
                    Total Students
                  </h3>
                  <p style={{ fontSize: '2rem', fontWeight: '700', color: '#3b82f6' }}>
                    {attendance.length}
                  </p>
                </div>
                
                <div className="card">
                  <h3 style={{ fontSize: '1.125rem', fontWeight: '600', marginBottom: '1rem' }}>
                    Present Today
                  </h3>
                  <p style={{ fontSize: '2rem', fontWeight: '700', color: '#10b981' }}>
                    {attendance.filter(r => r.status === 'present').length}
                  </p>
                </div>
                
                <div className="card">
                  <h3 style={{ fontSize: '1.125rem', fontWeight: '600', marginBottom: '1rem' }}>
                    Absent Today
                  </h3>
                  <p style={{ fontSize: '2rem', fontWeight: '700', color: '#ef4444' }}>
                    {attendance.filter(r => r.status === 'absent').length}
                  </p>
                </div>
                
                <div className="card">
                  <h3 style={{ fontSize: '1.125rem', fontWeight: '600', marginBottom: '1rem' }}>
                    Late Today
                  </h3>
                  <p style={{ fontSize: '2rem', fontWeight: '700', color: '#f59e0b' }}>
                    {attendance.filter(r => r.status === 'late').length}
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default AdminDashboard; 