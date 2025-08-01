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

  {
    id: 3,
    username: 'deved',
    password: '123',
    role: 'user',
    name: 'deved'
  },

];

// Lessons organized by level
export const levels = Array.from({ length: 7 }, (_, levelIdx) => ({
  level: levelIdx + 1,
  units: levelIdx === 0 
    ? [{ unit: 1, lessons: Array.from({ length: 10 }, (_, lessonIdx) => {
                 // Level 1: 10 lessons teaching letters to children
         let words = [];
         
                   // Special lesson 1 with 3 letters and 3 examples each
          if (lessonIdx === 0) {
            words = [
              // Letter A with its image
              { word: 'A', imageUrl: '/images/a.jpg' },
              { word: 'Abacus', imageUrl: '/images/abacus.jpg' },
              { word: 'Ant', imageUrl: '/images/ant.jpg' },
              { word: 'Airplane', imageUrl: '/images/airplane.jpg' },
              // Letter B with its image
              { word: 'B', imageUrl: '/images/b.jpg' },
              { word: 'Ball', imageUrl: '/images/ball.jpg' },
              { word: 'Banana', imageUrl: '/images/banana.jpg' },
              { word: 'Bike', imageUrl: '/images/bike.jpg' },
              // Letter C with its image
              { word: 'C', imageUrl: '/images/c.jpg' },
              { word: 'Car', imageUrl: '/images/car.jpg' },
              { word: 'Cat', imageUrl: '/images/cat.jpg' },
              { word: 'Cow', imageUrl: '/images/cow.jpg' }
            ];
           
           return {
             id: lessonIdx + 1,
             title: `Level 1 - Lesson 1: Letters A, B, C`,
             description: 'Learn letters A, B, and C with examples: A (Abacus, Ant, Airplane), B (Ball, Banana, Bike), C (Car, Cat, Cow)',
             words,
             grammar: 'Learn to recognize and pronounce letters A, B, and C. Practice saying the words that start with these letters.',
             videoUrl: `level=1&lesson=${lessonIdx + 1}`,
                           test: [
                {
                  question: `Which letter does "Abacus" start with?`,
                  imageUrl: '/images/abacus.jpg',
                  options: ['A', 'B', 'C'],
                  correct: 0
                },
                {
                  question: `Which letter does "Ball" start with?`,
                  imageUrl: '/images/ball.jpg',
                  options: ['A', 'B', 'C'],
                  correct: 1
                },
                {
                  question: `Which letter does "Car" start with?`,
                  imageUrl: '/images/car.jpg',
                  options: ['A', 'B', 'C'],
                  correct: 2
                },
                {
                  question: `Which letter does "Ant" start with?`,
                  imageUrl: '/images/ant.jpg',
                  options: ['A', 'B', 'C'],
                  correct: 0
                },
                {
                  question: `Which letter does "Banana" start with?`,
                  imageUrl: '/images/banana.jpg',
                  options: ['A', 'B', 'C'],
                  correct: 1
                },
                {
                  question: `Which letter does "Cat" start with?`,
                  imageUrl: '/images/cat.jpg',
                  options: ['A', 'B', 'C'],
                  correct: 2
                }
              ]
           };
         }
         
         // Generate unique words for other lessons based on lesson index
         const wordSets = [
           ['Jump', 'King', 'Lion', 'Moon', 'Nest', 'Open', 'Play', 'Queen', 'Rain'],
           ['Sun', 'Tree', 'Umbrella', 'Van', 'Water', 'Box', 'Yellow', 'Zoo', 'Air'],
           ['Bird', 'Car', 'Door', 'Eye', 'Food', 'Green', 'House', 'Ice', 'Jump'],
           ['Kite', 'Lake', 'Milk', 'Name', 'Orange', 'Pen', 'Quick', 'Red', 'Star'],
           ['Table', 'Up', 'Voice', 'Walk', 'X-ray', 'Yes', 'Zebra', 'Ant', 'Blue'],
           ['Chair', 'Duck', 'Ear', 'Fire', 'Goat', 'Hand', 'Ice', 'Jump', 'Key'],
           ['Light', 'Man', 'Night', 'Ocean', 'Pig', 'Queen', 'Run', 'Sit', 'Talk'],
           ['Use', 'Very', 'Wash', 'Xylophone', 'Year', 'Zoo', 'Air', 'Big', 'Cold'],
           ['Day', 'Eat', 'Fun', 'Good', 'Hot', 'In', 'Jump', 'Keep', 'Look', 'Make']
         ];
         
         const selectedWordSet = wordSets[lessonIdx - 1]; // Adjust index for other lessons
         words = selectedWordSet.slice(0, 3).map(word => ({
           word,
           imageUrl: `https://via.placeholder.com/100?text=${word}`
         }));
         
         return {
           id: lessonIdx + 1,
           title: `Level 1 - Lesson ${lessonIdx + 1}`,
           description: `This is lesson ${lessonIdx + 1} in level 1.`,
           words,
           grammar: `This is the grammar explanation for lesson ${lessonIdx + 1} in level 1.`,
           videoUrl: `level=1&lesson=${lessonIdx + 1}`,
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
      })}]
    : Array.from({ length: 4 }, (_, unitIdx) => ({
        unit: unitIdx + 1,
        lessons: Array.from({ length: 4 }, (_, lessonIdx) => {
             let words = [];
       
       // Level 5 Unit 1 Lesson 1 keeps the animal words
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
       else if (levelIdx === 4 && unitIdx === 0 && lessonIdx === 1) {
        words = [
          { word: 'ant', imageUrl: '/images/ant.jpg' },
          { word: 'egg', imageUrl: '/images/egg.jpg' },
          { word: 'apple', imageUrl: '/images/apple.jpg' },
        ];
      }
              else if (levelIdx === 4 && unitIdx === 0 && lessonIdx === 2) {
         words = [
           { word: 'dolphin', imageUrl: '/images/dolphin.jpg' },
           { word: 'parrot', imageUrl: '/images/parrot.jpg' },
           { word: 'fox', imageUrl: '/images/fox.jpg' },
         ];
       }
      else if (levelIdx === 4 && unitIdx === 0 && lessonIdx === 3) {
        words = [
          { word: 'panda', imageUrl: '/images/panda.jpg' },
          { word: 'tiger', imageUrl: '/images/tiger.jpg' },
          { word: 'giraffe', imageUrl: '/images/giraffe.jpg' },
          { word: 'crocodile', imageUrl: '/images/crocodile.jpg' },
        ];
      }

       else {
                   // Generate unique words for each lesson based on level, unit, and lesson indices
          const wordSets = [
            // Level 1 words (10 lessons)
            ['Apple', 'Book', 'Cat', 'Dog', 'Egg', 'Fish', 'Girl', 'Hat', 'Ice'],
            ['Jump', 'King', 'Lion', 'Moon', 'Nest', 'Open', 'Play', 'Queen', 'Rain'],
            ['Sun', 'Tree', 'Umbrella', 'Van', 'Water', 'Box', 'Yellow', 'Zoo', 'Air'],
            ['Bird', 'Car', 'Door', 'Eye', 'Food', 'Green', 'House', 'Ice', 'Jump'],
            ['Kite', 'Lake', 'Milk', 'Name', 'Orange', 'Pen', 'Quick', 'Red', 'Star'],
            ['Table', 'Up', 'Voice', 'Walk', 'X-ray', 'Yes', 'Zebra', 'Ant', 'Blue'],
            ['Chair', 'Duck', 'Ear', 'Fire', 'Goat', 'Hand', 'Ice', 'Jump', 'Key'],
            ['Light', 'Man', 'Night', 'Ocean', 'Pig', 'Queen', 'Run', 'Sit', 'Talk'],
            ['Use', 'Very', 'Wash', 'Xylophone', 'Year', 'Zoo', 'Air', 'Big', 'Cold'],
            ['Day', 'Eat', 'Fun', 'Good', 'Hot', 'In', 'Jump', 'Keep', 'Look', 'Make'],
           
           // Level 2 words
           ['Computer', 'Dinosaur', 'Elephant', 'Football', 'Garden', 'Hospital', 'Internet', 'Jacket', 'Kitchen'],
           ['Library', 'Mountain', 'Newspaper', 'Ocean', 'Pencil', 'Question', 'Restaurant', 'School', 'Teacher'],
           ['Umbrella', 'Vacation', 'Window', 'Xylophone', 'Yellow', 'Zebra', 'Airplane', 'Bicycle', 'Camera'],
           ['Dolphin', 'Elephant', 'Firefighter', 'Guitar', 'Helicopter', 'Ice cream', 'Jellyfish', 'Kangaroo', 'Lighthouse'],
           
           // Level 3 words
           ['Adventure', 'Beautiful', 'Celebration', 'Dangerous', 'Excellent', 'Fantastic', 'Glorious', 'Happiness', 'Important'],
           ['Journey', 'Knowledge', 'Laughter', 'Magnificent', 'Natural', 'Opportunity', 'Peaceful', 'Quality', 'Remarkable'],
           ['Spectacular', 'Terrific', 'Unbelievable', 'Victorious', 'Wonderful', 'Extraordinary', 'Amazing', 'Brilliant', 'Creative'],
           ['Delicious', 'Energetic', 'Friendly', 'Generous', 'Handsome', 'Intelligent', 'Joyful', 'Kind', 'Loving'],
           
           // Level 4 words
           ['Technology', 'Environment', 'Communication', 'Development', 'Experience', 'Foundation', 'Generation', 'Information', 'Knowledge'],
           ['Leadership', 'Management', 'Navigation', 'Opportunity', 'Participation', 'Qualification', 'Relationship', 'Specialization', 'Transportation'],
           ['Understanding', 'Visualization', 'Weather', 'Examination', 'Application', 'Beautiful', 'Confidence', 'Determination', 'Education'],
           ['Friendship', 'Government', 'Happiness', 'Important', 'Justice', 'Kindness', 'Leadership', 'Motivation', 'Necessary'],
           
           // Level 5 words (except Unit 1 Lesson 1)
           ['Advanced', 'Beautiful', 'Creative', 'Different', 'Excellent', 'Fantastic', 'Glorious', 'Handsome', 'Important'],
           ['Journey', 'Knowledge', 'Laughter', 'Magnificent', 'Natural', 'Opportunity', 'Peaceful', 'Quality', 'Remarkable'],
           ['Spectacular', 'Terrific', 'Unbelievable', 'Victorious', 'Wonderful', 'Extraordinary', 'Amazing', 'Brilliant', 'Creative'],
           ['Delicious', 'Energetic', 'Friendly', 'Generous', 'Handsome', 'Intelligent', 'Joyful', 'Kind', 'Loving'],
           
           // Level 6 words
           ['Accomplishment', 'Beneficial', 'Comprehensive', 'Determination', 'Extraordinary', 'Fundamental', 'Gratitude', 'Harmonious', 'Inspiration'],
           ['Justification', 'Knowledgeable', 'Legitimate', 'Magnificent', 'Necessary', 'Opportunity', 'Perspective', 'Qualification', 'Responsibility'],
           ['Significant', 'Tremendous', 'Understanding', 'Valuable', 'Wonderful', 'Extraordinary', 'Amazing', 'Brilliant', 'Creative'],
           ['Delicious', 'Energetic', 'Friendly', 'Generous', 'Handsome', 'Intelligent', 'Joyful', 'Kind', 'Loving'],
           
           // Level 7 words
           ['Accomplishment', 'Beneficial', 'Comprehensive', 'Determination', 'Extraordinary', 'Fundamental', 'Gratitude', 'Harmonious', 'Inspiration'],
           ['Justification', 'Knowledgeable', 'Legitimate', 'Magnificent', 'Necessary', 'Opportunity', 'Perspective', 'Qualification', 'Responsibility'],
           ['Significant', 'Tremendous', 'Understanding', 'Valuable', 'Wonderful', 'Extraordinary', 'Amazing', 'Brilliant', 'Creative'],
           ['Delicious', 'Energetic', 'Friendly', 'Generous', 'Handsome', 'Intelligent', 'Joyful', 'Kind', 'Loving']
         ];
         
                   // Calculate unique index for each lesson
          const wordSetIndex = levelIdx === 0 
            ? lessonIdx  // For Level 1, use lesson index directly (0-9)
            : (levelIdx * 16) + (unitIdx * 4) + lessonIdx;  // For other levels
          const selectedWordSet = wordSets[wordSetIndex % wordSets.length];
         
         words = selectedWordSet.slice(0, 3).map(word => ({
           word,
           imageUrl: `https://via.placeholder.com/100?text=${word}`
         }));
       }
      return {
        id: lessonIdx + 1,
        title: `Level ${levelIdx + 1} - Unit ${unitIdx + 1} - Lesson ${lessonIdx + 1}`,
        description: `This is lesson ${lessonIdx + 1} of unit ${unitIdx + 1} in level ${levelIdx + 1}.`,
        words,
                 grammar: (levelIdx === 0 && unitIdx === 0 && lessonIdx === 0) || (levelIdx === 4 && unitIdx === 0 && lessonIdx === 0)
           ? 'There is no grammar in this lesson.'
           : (levelIdx === 4 && unitIdx === 0 && lessonIdx === 1)
           ? 'Vowels : A, E, I, O, U - Learn the vowel sounds with pictures!<br><br><img src="/images/vowels.jpg" alt="Vowel characters A, E, I, O, U" style="max-width: 100%; height: auto; margin-top: 10px;"><br><br><strong>A/An Grammar:</strong><br> Use "a" before consonant sounds and "an" before vowel sounds.<br><br><br><img src="/images/a an.jpg" alt="A or An grammar question with thinking emoji" style="max-width: 100%; height: auto; margin-top: 10px;">'
           : (levelIdx === 4 && unitIdx === 0 && lessonIdx === 2)
           ? 'where do animals live?<br><b> example : </b><br><br>the camel live in desert <br><img src="/images/camel.jpg" alt="Vowel characters A, E, I, O, U" style="max-width: 25%; height: auto; margin-top: 10px;"> <img src="/images/desert.jpg" alt="Vowel characters A, E, I, O, U" style="max-width: 25%; height: auto; margin-top: 10px;"><br> <br><strong>where do animals live?</strong><br> example : <br><br> the monkey live in jungle <br><img src="/images/monkey.jpg" alt="A or An grammar question with thinking emoji" style="max-width: 25%; height: auto; margin-top: 10px;"><img src="/images/jungle.jpg" alt="A or An grammar question with thinking emoji" style="max-width: 25%; height: auto; margin-top: 10px;">'
           : (levelIdx === 4 && unitIdx === 0 && lessonIdx === 3)
           ? 'what do animals eat?<br><b> example : </b><br><br>the lion eats meat<br><img src="/images/lion.jpg" alt="Vowel characters A, E, I, O, U" style="max-width: 25%; height: auto; margin-top: 10px;"> <img src="/images/meat.jpg" alt="Vowel characters A, E, I, O, U" style="max-width: 25%; height: auto; margin-top: 10px;"><br> <br><strong>what do animals eat?</strong><br> example : <br><br> the giraffe eat plants<br><img src="/images/giraffe.jpg" alt="A or An grammar question with thinking emoji" style="max-width: 25%; height: auto; margin-top: 10px;"><img src="/images/plant.jpg" alt="A or An grammar question with thinking emoji" style="max-width: 25%; height: auto; margin-top: 10px;">'
           : `This is the grammar explanation for lesson ${lessonIdx + 1} of unit ${unitIdx + 1} in level ${levelIdx + 1}.`,
        videoUrl: `level=${levelIdx + 1}&unit=${unitIdx + 1}&lesson=${lessonIdx + 1}`,
                 test: levelIdx === 4 && unitIdx === 0 && lessonIdx === 1 ? [
           {
             question: `( a/an ) apple`,
             imageUrl: '/images/apple.jpg',
             options: ['a', 'an'],
             correct: 1
           },
           {
            question: `( a/an ) net`,
            imageUrl: '/images/net.jpg',
            options: ['a', 'an'],
            correct: 0
          },
          {
            question: `( a/an ) olive`,
            imageUrl: '/images/olive.jpg',
            options: ['a', 'an'],
            correct: 1
          },
          {
            question: `( a/an ) snake`,
            imageUrl: '/images/snake.jpg',
            options: ['a', 'an'],
            correct: 0
          },
          {
            question: `( a/an ) insect`,
            imageUrl: '/images/insect.jpg',
            options: ['a', 'an'],
            correct: 1
          },
           {
             question: `( a/an ) camel`,
             imageUrl: '/images/camel.jpg',
             options: ['a', 'an'],
             correct: 0
           },
           {
             question: `( a/an ) umbrella`,
             imageUrl: '/images/umbrella.jpg',
             options: ['a', 'an'],
             correct: 1
           }
         ] : levelIdx === 4 && unitIdx === 0 && lessonIdx === 2 ? [
           {
             question: `sea`,
             imageUrl: '/images/sea.jpg',
             options: ['desert', 'sea', 'jungle'],
             correct: 0
           },
           {
             question: `desert`,
             imageUrl: '/images/desert.jpg',
             options: ['sea', 'desert', 'jungle'],
             correct: 1
           },
           {
             question: `jungle`,
             imageUrl: '/images/jungle.jpg',
             options: ['sea', 'desert', 'jungle'],
             correct: 2
           }
         ] : levelIdx === 4 && unitIdx === 0 && lessonIdx === 3 ? [
           {
             question: `a ......... eats plants`,
             imageUrl: '/images/panda.jpg',
             options: ['lion', 'panda', 'ant'],
             correct: 1
           },
           {
             question: `a tiger eats .............`,
             imageUrl: '/images/tiger.jpg',
             options: ['meat', 'plants'],
             correct: 0
           },
           {
             question: `a ............. eats meat`,
             imageUrl: '/images/crocodile.jpg',
             options: ['giraffe', 'crocodile', 'monkey'],
             correct: 1
           },
           {
             question: `a camel eats ............`,
             imageUrl: '/images/camel.jpg',
             options: ['meats', 'plants'],
             correct: 1
           }
         ] : [
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