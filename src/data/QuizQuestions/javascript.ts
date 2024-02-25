// Question Types
// 1. MCQs | Multiple Choice | single
// 2. boolean | true/false | single
// 3. MAQs | Multiple Answers | multiple

import { Topic } from '.'

export const javascript: Topic = {
  topic: 'Javascript',
  level: 'Beginner',
  totalQuestions: 20,
  totalScore: 185,
  totalTime: 1200,
  questions: [
    {
      question:
        'Which of the following are JavaScript data types? (Select all that apply)',
      choices: ['String', 'Number', 'Function', 'Array'],
      type: 'MAQs',
      correctAnswers: ['String', 'Number', 'Array'],
      score: 10,
    },
    {
      question: 'The "this" keyword in JavaScript refers to the current function.',
      choices: ['True', 'False'],
      type: 'boolean',
      correctAnswers: ['False'],
      score: 5,
    },
    {
      question: 'Which operator is used for strict equality comparison in JavaScript?',
      choices: ['==', '===', '=', '!='],
      type: 'MCQs',
      correctAnswers: ['==='],
      score: 10,
    },
    {
      question:
        'Which of the following methods is used to add an element to the end of an array in JavaScript?',
      choices: ['push()', 'pop()', 'shift()', 'unshift()'],
      type: 'MCQs',
      correctAnswers: ['push()'],
      score: 10,
    },
    {
      question: 'What is the value of x after executing the following code snippet?',
      code: `let x = 5;
x += 2;
x *= 3;`,
      choices: ['21', '25', '33', '35'],
      type: 'MCQs',
      correctAnswers: ['25'],
      score: 10,
    },
    {
      question: 'What is the output of the following code snippet?',
      code: `console.log(typeof null);`,
      choices: ['Object', 'Null', 'Undefined', 'NullObject'],
      type: 'MCQs',
      correctAnswers: ['Object'],
      score: 10,
    },
    {
      question: 'Which of the following is NOT a valid JavaScript variable name?',
      choices: ['myVariable', '_variable', '123variable', '$variable'],
      type: 'MCQs',
      correctAnswers: ['123variable'],
      score: 10,
    },
    {
      question:
        'Which of the following methods is used to remove the last element from an array in JavaScript?',
      choices: ['push()', 'pop()', 'shift()', 'unshift()'],
      type: 'MCQs',
      correctAnswers: ['pop()'],
      score: 10,
    },
    {
      question: 'JavaScript is a case-sensitive language.',
      choices: ['True', 'False'],
      type: 'boolean',
      correctAnswers: ['True'],
      score: 5,
    },
    {
      question: 'What is the output of the following code snippet?',
      code: `console.log(2 + '2');`,
      choices: ['4', '22', '24', "'22'"],
      type: 'MCQs',
      correctAnswers: ['22'],
      score: 10,
    },
    {
      question: 'Which of the following is NOT a JavaScript data type?',
      choices: ['String', 'Boolean', 'Integer', 'Object'],
      type: 'MCQs',
      correctAnswers: ['Integer'],
      score: 10,
    },
    {
      question:
        'Which of the following are valid JavaScript loop statements? (Select all that apply)',
      choices: ['for', 'while', 'loop', 'do...while'],
      type: 'MAQs',
      correctAnswers: ['for', 'while', 'do...while'],
      score: 10,
    },
    {
      question: 'JavaScript is a statically typed language.',
      choices: ['True', 'False'],
      type: 'boolean',
      correctAnswers: ['False'],
      score: 5,
    },
    {
      question:
        'Which of the following is a valid way to comment a single line in JavaScript?',
      choices: [
        '// This is a comment',
        '/* This is a comment */',
        '<!-- This is a comment -->',
        '# This is a comment',
      ],
      type: 'MCQs',
      correctAnswers: ['// This is a comment'],
      score: 10,
    },
    {
      question: 'What is the output of the following code snippet?',
      code: `let x = 5;
x += 2;
x *= 3;
console.log(x);`,
      choices: ['21', '25', '33', '35'],
      type: 'MCQs',
      correctAnswers: ['25'],
      score: 10,
    },
    {
      question: 'What does the `Array.map()` method return?',
      choices: ['A new array with the same length as the original array', 'The original array', 'A string', 'An object'],
      type: 'MCQs',
      correctAnswers: ['A new array with the same length as the original array'],
      score: 10,
    },
    {
      question: 'What is the purpose of the `typeof` operator in JavaScript?',
      choices: ['To check the data type of a variable', 'To declare a variable', 'To concatenate strings', 'To create a loop'],
      type: 'MCQs',
      correctAnswers: ['To check the data type of a variable'],
      score: 10,
    },
    {
      question: 'What is the result of `5 == "5"` in JavaScript?',
      choices: ['True', 'False', 'NaN', 'SyntaxError'],
      type: 'MCQs',
      correctAnswers: ['True'],
      score: 10,
    },
    {
      question: 'What does the `Array.reduce()` method do?',
      choices: ['Applies a function against an accumulator and each element in the array to reduce it to a single value', 'Removes the first element from an array', 'Adds a new element to the end of an array', 'Sorts the elements of an array'],
      type: 'MCQs',
      correctAnswers: ['Applies a function against an accumulator and each element in the array to reduce it to a single value'],
      score: 10,
    },
    {
      question: 'What is the result of the following code snippet?',
      code: `console.log(typeof null);`,
      choices: ['Object', 'Null', 'Undefined', 'NullObject'],
      type: 'MCQs',
      correctAnswers: ['Object'],
      score: 10,
    },
  ],
}
