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
    id: 2,
    username: 'student',
    password: '123',
    role: 'user',
    name: 'student'
  },

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
        videoUrl: `level=${levelIdx + 1}&unit=${unitIdx + 1}&lesson=${lessonIdx + 1}`,
        test: [
          {
            question: `its a .......... `,
            imageUrl: '/images/camel.jpg',
            options: ['camel', 'Book', 'Cat', 'Dog'],
            correct: 0
          },
          {
            question: `we swim in the  .......... `,
            imageUrl: '/images/sea.jpg',
            options: ['camel', 'Book', 'Cat', 'sea'],
            correct: 3
          },
          {
            question: `that is........`,
            imageUrl: '/images/Elephant.jpg',
            options: ['Apple', 'Book', 'elephant', 'Car'],
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