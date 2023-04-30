interface Categories {
  [key: string]: string;
}

export const categories: Categories = {
  '18': 'Computers',
  '19': 'Mathematics',
  '24': 'Politics',
  '23': 'History',
  '25': 'Art',
  '10': 'Books',
};

export interface Answers {
  question: string;
  options: string[];
  correctAnswer: string;
  selectedAnswer: string
}