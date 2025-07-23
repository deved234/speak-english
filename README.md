# Speak English - Learning Platform

A modern web application for English learning with role-based access control. Features include user authentication, admin dashboard with attendance tracking, and user dashboard with interactive lessons.

## Features

### 🔐 Authentication System
- Secure login with stored user credentials
- Role-based access control (Admin/User)
- Session management

### 👨‍💼 Admin Dashboard
- **Attendance Management**: Track student attendance with status (Present/Absent/Late)
- **Add Students**: Add new students to the attendance system
- **Overview Statistics**: View attendance statistics and summaries
- **Time Tracking**: Record time in/out for students

### 👤 User Dashboard
- **Lesson Library**: Browse available English lessons
- **Interactive Videos**: Watch embedded video lessons
- **Progress Tracking**: Mark lessons as complete and track progress
- **Level-based Learning**: Lessons categorized by difficulty (Beginner/Intermediate/Advanced)

## Demo Credentials

### Admin Access
- **Username**: `admin`
- **Password**: `admin123`

### User Access
- **Username**: `user`
- **Password**: `user123`

### Student Access
- **Username**: `student`
- **Password**: `student123`

## Technology Stack

- **Frontend**: React 18
- **Routing**: React Router DOM
- **Styling**: Custom CSS with modern design
- **Icons**: Lucide React
- **Build Tool**: Create React App

## Getting Started

### Prerequisites
- Node.js (version 14 or higher)
- npm or yarn package manager

### Installation

1. **Clone or download the project files**

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm start
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000`

## Project Structure

```
speak-english/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── Login.js
│   │   ├── AdminDashboard.js
│   │   └── UserDashboard.js
│   ├── data/
│   │   └── users.js
│   ├── App.js
│   ├── App.css
│   ├── index.js
│   └── index.css
├── package.json
└── README.md
```

## Key Components

### Login Component (`src/components/Login.js`)
- Handles user authentication
- Validates credentials against stored data
- Redirects users based on their role

### Admin Dashboard (`src/components/AdminDashboard.js`)
- Attendance management interface
- Add new students functionality
- Statistics overview
- Tabbed navigation between features

### User Dashboard (`src/components/UserDashboard.js`)
- Lesson browsing interface
- Video player integration
- Progress tracking
- Completion status management

### Data Management (`src/data/users.js`)
- Stored user credentials
- Sample lesson data
- Attendance records

## Features in Detail

### Admin Features
- **Attendance Tracking**: View and manage student attendance
- **Add Students**: Add new students to the system
- **Status Management**: Mark students as Present/Absent/Late
- **Time Recording**: Track time in/out for each student
- **Statistics**: View attendance overview and summaries

### User Features
- **Lesson Browsing**: View all available lessons
- **Video Lessons**: Watch embedded video content
- **Progress Tracking**: Mark lessons as complete
- **Level Indicators**: See lesson difficulty levels
- **Completion Status**: Track which lessons are finished

## Customization

### Adding New Users
Edit `src/data/users.js` to add new user accounts:
```javascript
{
  id: 4,
  username: 'newuser',
  password: 'password123',
  role: 'user', // or 'admin'
  name: 'New User'
}
```

### Adding New Lessons
Add lessons to the `lessons` array in `src/data/users.js`:
```javascript
{
  id: 5,
  title: 'New Lesson',
  description: 'Lesson description',
  duration: '25 minutes',
  level: 'Intermediate',
  videoUrl: 'https://www.youtube.com/embed/VIDEO_ID',
  completed: false
}
```

## Browser Compatibility

- Chrome (recommended)
- Firefox
- Safari
- Edge

## Development

### Available Scripts

- `npm start` - Runs the app in development mode
- `npm build` - Builds the app for production
- `npm test` - Launches the test runner
- `npm eject` - Ejects from Create React App (one-way operation)

### Code Structure

The application follows React best practices with:
- Functional components with hooks
- Component-based architecture
- Responsive design
- Modern CSS styling
- Clean and maintainable code structure

## Security Notes

- This is a demo application with hardcoded credentials
- In a production environment, implement proper authentication
- Use environment variables for sensitive data
- Implement proper session management
- Add input validation and sanitization

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is for educational purposes. Feel free to use and modify as needed.

---

**Note**: This is a demonstration application. For production use, implement proper security measures, database integration, and user management systems. 