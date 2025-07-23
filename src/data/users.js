// Stored user data
export const users = [
  {
    id: 1,
    username: 'teacher',
    password: '123',
    role: 'admin',
    name: 'Administrator'
  },
  {
    id: 1,
    username: 'deved atef',
    password: '123',
    role: 'admin',
    name: 'Administrator'
  },
  {
    id: 2,
    username: 'user',
    password: 'user123',
    role: 'user',
    name: 'John Doe'
  },
  {
    id: 3,
    username: 'student',
    password: 'student123',
    role: 'user',
    name: 'Jane Smith'
  },
  {
    id: 3,
    username: 'deved',
    password: '123',
    role: 'user',
    name: 'Jane deved atef'
  }
];

// Lessons organized by level
export const levels = Array.from({ length: 7 }, (_, levelIdx) => ({
  level: levelIdx + 1,
  units: Array.from({ length: 4 }, (_, unitIdx) => ({
    unit: unitIdx + 1,
    lessons: Array.from({ length: 4 }, (_, lessonIdx) => {
      let words = [
        { word: 'Apple', imageUrl: 'https://via.placeholder.com/100?text=Apple' },
        { word: 'Book', imageUrl: 'https://via.placeholder.com/100?text=Book' },
        { word: 'Cat', imageUrl: 'https://via.placeholder.com/100?text=Cat' }
      ];
      if (levelIdx === 4 && unitIdx === 0 && lessonIdx === 0) {
        words = [
          { word: 'Camel', imageUrl: '/images/camel.jpg' },
          { word: 'Elephant', imageUrl: '/images/Elephant.jpg' },
          { word: 'Snake', imageUrl: '/images/Snake.jpg' },
          { word: 'Lion', imageUrl: '/images/Lion.jpg' },
          { word: 'Monkey', imageUrl: '/images/Monkey.jpg' },
          { word: 'Jellyfish', imageUrl: '/images/Jellyfish.jpg' },
          { word: 'Sea', imageUrl: '/images/Sea.jpg' },
          { word: 'Jungle', imageUrl: '/images/Jungle.jpg' },
          { word: 'Animals', imageUrl: '/images/Animals.jpg' }
        ];
      }
      return {
        id: lessonIdx + 1,
        title: `Level ${levelIdx + 1} - Unit ${unitIdx + 1} - Lesson ${lessonIdx + 1}`,
        description: `This is lesson ${lessonIdx + 1} of unit ${unitIdx + 1} in level ${levelIdx + 1}.`,
        words,
        grammar: `This is the grammar explanation for lesson ${lessonIdx + 1} of unit ${unitIdx + 1} in level ${levelIdx + 1}.`,
        videoUrl: `https://www.youtube.com/embed/dQw4w9WgXcQ?level=${levelIdx + 1}&unit=${unitIdx + 1}&lesson=${lessonIdx + 1}`,
        test: [
          {
            question: `What is the word for this picture?`,
            imageUrl: '/images/camel.jpg',
            options: ['camel', 'Book', 'Cat', 'Dog'],
            correct: 0
          },
          {
            question: `Which word matches the picture?`,
            imageUrl: '/images/Sea.jpg',
            options: ['Apple', 'Book', 'sea', 'Car'],
            correct: 2
          }
        ]
      };
    })
  }))
}));

// Sample attendance data
export const attendanceData = [
  {
    id: 1,
    studentName: 'John Doe',
    date: '2024-01-15',
    status: 'present',
    timeIn: '09:00',
    timeOut: '17:00'
  },
  {
    id: 2,
    studentName: 'Jane Smith',
    date: '2024-01-15',
    status: 'present',
    timeIn: '08:45',
    timeOut: '16:30'
  },
  {
    id: 3,
    studentName: 'Mike Johnson',
    date: '2024-01-15',
    status: 'absent',
    timeIn: null,
    timeOut: null
  },
  {
    id: 4,
    studentName: 'Sarah Wilson',
    date: '2024-01-15',
    status: 'late',
    timeIn: '09:30',
    timeOut: '17:00'
  }
]; 