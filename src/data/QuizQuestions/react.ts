// Question Types
// 1. MCQs | Multiple Choice | single
// 2. boolean | true/false | single
// 3. MAQs | Multiple Answers | multiple

import { Topic } from '.'
import CodeSnippet1 from '../../assets/images/code-snippet-1.png'

export const react: Topic = {
  topic: 'React',
  level: 'Intermediate',
  totalQuestions: 20,
  totalScore: 285,
  totalTime: 1200,
  questions: [
    {
      question: 'What is JSX in React?',
      choices: [
        'A syntax extension for JavaScript that allows writing HTML-like code in JavaScript',
        'A state management library for React applications',
        'A build tool for bundling React applications',
        'A testing framework for React components',
      ],
      type: 'MCQs',
      correctAnswers: [
        'A syntax extension for JavaScript that allows writing HTML-like code in JavaScript',
      ],
      score: 10,
    },
    {
      question: 'React components must always return a single JSX element.',
      choices: ['True', 'False'],
      type: 'boolean',
      correctAnswers: ['True'],
      score: 5,
    },
    {
      question: 'What is the purpose of React components?',
      choices: [
        'To handle HTTP requests and fetch data from APIs',
        'To manage the state of a React application',
        'To define the structure and appearance of the user interface',
        'To handle user interactions and events',
      ],
      type: 'MCQs',
      correctAnswers: ['To define the structure and appearance of the user interface'],
      score: 10,
    },
    {
      question:
        'Which of the following are valid React lifecycle methods? (Select all that apply)',
      choices: [
        'componentWillMount',
        'componentDidMount',
        'componentWillUpdate',
        'componentDidUpdate',
      ],
      type: 'MAQs',
      correctAnswers: ['componentDidMount', 'componentWillUpdate', 'componentDidUpdate'],
      score: 10,
    },
    {
      question: 'What will be the output of the following React code?',
      code: `import React, { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
    </div>
  );
};

const App = () => {
  return <Counter />;
};

export default App;`,
      choices: ['Count: 0', 'Count: 1', 'Count: undefined', 'An error will occur'],
      type: 'MCQs',
      correctAnswers: ['Count: 0'],
      score: 10,
    },
    {
      question:
        'In React, props are used to pass data from parent components to child components.',
      choices: ['True', 'False'],
      type: 'boolean',
      correctAnswers: ['True'],
      score: 5,
    },
    {
      question: 'What is the output of the following code snippet?',
      image: CodeSnippet1,
      choices: ['0', '1', '2', 'undefined'],
      type: 'MCQs',
      correctAnswers: ['0'],
      score: 10,
    },
    {
      question:
        'Which of the following are valid ways to conditionally render content in React? (Select all that apply)',
      choices: [
        'Using the if-else statement',
        'Using the ternary operator',
        'Using the switch statement',
        'Using the && operator',
      ],
      type: 'MAQs',
      correctAnswers: [
        'Using the if-else statement',
        'Using the ternary operator',
        'Using the && operator',
      ],
      score: 10,
    },
    {
      question: 'In React, what is the purpose of keys in lists?',
      choices: [
        'To provide a unique identifier for each item in the list',
        'To control the order of items in the list',
        'To enable sorting and filtering of the list',
        'To handle user interactions within the list',
      ],
      type: 'MCQs',
      correctAnswers: ['To provide a unique identifier for each item in the list'],
      score: 10,
    },
    {
      question: 'What will be the result of the following React code?',
      code: `import React from 'react';

class Button extends React.Component {
  handleClick() {
    console.log('Button clicked');
  }

  render() {
    return <button onClick={this.handleClick}>Click me</button>;
  }
}

const App = () => {
  return <Button />;
};

export default App;`,
      choices: [
        'The "Button clicked" message will be logged to the console when the button is clicked',
        'The button will not respond to the click event',
        'An error will occur due to the incorrect usage of onClick',
        'The button will display but nothing will happen when clicked',
      ],
      type: 'MCQs',
      correctAnswers: [
        'The "Button clicked" message will be logged to the console when the button is clicked',
      ],
      score: 10,
    },
    {
      question: 'React uses a virtual DOM to optimize rendering performance.',
      choices: ['True', 'False'],
      type: 'boolean',
      correctAnswers: ['True'],
      score: 5,
    },
    {
      question: 'What are Hooks in React and how do they differ from class components?',
      choices: [
        'Hooks are functions that let you use React state and lifecycle features in function components, while class components use ES6 classes to manage state and lifecycle.',
        'Hooks are a new type of class components introduced in React 16, while class components are the traditional way of writing React components.',
        'Hooks are used for styling components, while class components are used for managing state.',
        'Hooks and class components are two different syntaxes for defining React components, with no significant difference in functionality.'
      ],
      type: 'MCQs',
      correctAnswers: ['Hooks are functions that let you use React state and lifecycle features in function components, while class components use ES6 classes to manage state and lifecycle.'],
      score: 10,
    },
    {
      question: 'Explain the concept of context in React and when it is useful to use it.',
      choices: [
        'Context provides a way to pass data through the component tree without having to pass props down manually at every level. It is useful when many components need access to the same data.',
        'Context allows components to communicate with each other directly without using props. It is useful for parent-child communication within the component tree.',
        'Context is a built-in React feature for styling components. It is useful for applying global styles to the entire application.',
        'Context is used for managing component state. It is useful when a component needs to manage complex state logic.'
      ],
      type: 'MCQs',
      correctAnswers: ['Context provides a way to pass data through the component tree without having to pass props down manually at every level. It is useful when many components need access to the same data.'],
      score: 10,
    },
    {
      question: 'What is React Router and how does it handle routing in React applications?',
      choices: [
        'React Router is a built-in React feature for managing state in functional components. It handles routing by using a declarative approach to define the routes and their corresponding components.',
        'React Router is a library that provides navigation and routing functionalities for React applications. It uses a component-based approach to define the routes and their corresponding components.',
        'React Router is used for integrating Redux with React applications. It handles routing by managing the state of the application.',
        'React Router is a tool for optimizing performance in React applications. It handles routing by using lazy loading techniques.'
      ],
      type: 'MCQs',
      correctAnswers: ['React Router is a library that provides navigation and routing functionalities for React applications. It uses a component-based approach to define the routes and their corresponding components.'],
      score: 10,
    },
    {
      question: 'Explain the concept of virtual DOM in React and how it improves performance.',
      choices: [
        'Virtual DOM is a lightweight representation of the real DOM in memory. It improves performance by reducing the number of direct manipulations to the actual DOM, allowing React to efficiently update only the necessary parts of the DOM.',
        'Virtual DOM is a tool for generating static HTML files from React components. It improves performance by pre-rendering the components before serving them to the client.',
        'Virtual DOM is a feature for managing state in React applications. It improves performance by storing the component state in memory.',
        'Virtual DOM is used for server-side rendering in React applications. It improves performance by caching the rendered output.'
      ],
      type: 'MCQs',
      correctAnswers: ['Virtual DOM is a lightweight representation of the real DOM in memory. It improves performance by reducing the number of direct manipulations to the actual DOM, allowing React to efficiently update only the necessary parts of the DOM.'],
      score: 10,
    },
    {
      question: 'What are Higher-Order Components (HOCs) in React and how are they used?',
      choices: [
        'Higher-Order Components are functions that take a component and return a new component with enhanced functionality. They are used for code reuse, logic abstraction, and cross-cutting concerns like authentication and logging.',
        'Higher-Order Components are built-in React components for handling state and lifecycle methods. They are used for managing complex component logic.',
        'Higher-Order Components are used for styling components in React applications. They provide a way to apply global styles to all components.',
        'Higher-Order Components are React components used for routing and navigation. They provide a way to define routes and navigate between different components.'
      ],
      type: 'MCQs',
      correctAnswers: ['Higher-Order Components are functions that take a component and return a new component with enhanced functionality. They are used for code reuse, logic abstraction, and cross-cutting concerns like authentication and logging.'],
      score: 10,
    },
    {
      question: 'What are React Fragments and when should they be used?',
      choices: [
        'React Fragments are a built-in feature for creating collections of elements without adding extra nodes to the DOM. They should be used when you need to group elements without adding an additional wrapping element to the DOM.',
        'React Fragments are components used for rendering lists of data in React applications. They should be used when you need to map over an array and render each item as a separate element.',
        'React Fragments are used for integrating external libraries with React applications. They should be used when you need to import and use components from third-party libraries.',
        'React Fragments are used for managing global state in React applications. They should be used when you need to share state across multiple components.'
      ],
      type: 'MCQs',
      correctAnswers: ['React Fragments are a built-in feature for creating collections of elements without adding extra nodes to the DOM. They should be used when you need to group elements without adding an additional wrapping element to the DOM.'],
      score: 10,
    },
    {
      question: 'What is the purpose of the useMemo hook in React?',
      choices: [
        'The useMemo hook is used for memoizing expensive calculations so that they are only recomputed when the inputs change. It helps optimize performance by avoiding unnecessary re-renders.',
        'The useMemo hook is used for managing component state in functional components. It helps optimize performance by storing the component state in memory.',
        'The useMemo hook is used for managing side effects in React applications. It helps optimize performance by executing asynchronous code in a synchronous way.',
        'The useMemo hook is used for handling navigation and routing in React applications. It helps optimize performance by lazy loading components.'
      ],
      type: 'MCQs',
      correctAnswers: ['The useMemo hook is used for memoizing expensive calculations so that they are only recomputed when the inputs change. It helps optimize performance by avoiding unnecessary re-renders.'],
      score: 10,
    },
    {
      question: 'Explain the concept of code splitting in React and how it improves performance.',
      choices: [
        'Code splitting is a technique for breaking down large bundles of JavaScript code into smaller, more manageable chunks. It improves performance by reducing the initial load time of the application and only loading the code that is necessary for the current page.',
        'Code splitting is a feature for managing state in React applications. It improves performance by splitting the component logic into smaller, reusable functions.',
        'Code splitting is used for integrating third-party libraries with React applications. It improves performance by dynamically loading the libraries when they are needed.',
        'Code splitting is a tool for optimizing rendering performance in React applications. It improves performance by pre-rendering components before they are needed.'
      ],
      type: 'MCQs',
      correctAnswers: ['Code splitting is a technique for breaking down large bundles of JavaScript code into smaller, more manageable chunks. It improves performance by reducing the initial load time of the application and only loading the code that is necessary for the current page.'],
      score: 10,
    },
    {
      question: 'What are Error Boundaries in React and how do they help in handling errors?',
      choices: [
        'Error Boundaries are React components that catch JavaScript errors anywhere in their child component tree, log those errors, and display a fallback UI instead of crashing the entire application.',
        'Error Boundaries are higher-order components used for handling state in React applications. They help in managing complex component logic and error handling.',
        'Error Boundaries are used for managing authentication in React applications. They help in redirecting users to the login page when they are not authenticated.',
        'Error Boundaries are components used for testing React applications. They help in simulating error scenarios and verifying error handling logic.'
      ],
      type: 'MCQs',
      correctAnswers: ['Error Boundaries are React components that catch JavaScript errors anywhere in their child component tree, log those errors, and display a fallback UI instead of crashing the entire application.'],
      score: 10,
    }
  ],
}
