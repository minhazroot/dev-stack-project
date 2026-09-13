# project name:- 
 Dev Stack
 # description

Dev Stack is a responsive React application that helps developers explore popular technologies and build a personal development stack. Users can compare technologies, add them to a selected stack, remove individual items, or clear the stack completely.


## Technologies Used


- React.js
- JavaScript (ES6+)
- Tailwind CSS
- Vite
- React-Toastify
- JSON
- Lucide React


## Features


1. Browse a responsive collection of frontend, backend, database, language, styling, and DevOps technologies loaded from a local JSON file.
2. Add technologies to a personal stack with duplicate protection, disabled selected-card state, and toast notifications.
3. Remove one technology or clear the entire stack, with responsive desktop/tablet/mobile layouts and a shared brand gradient.


## React Questions


### 1. What is JSX, and why is it used in React?
JSX is a syntax that lets us write HTML-like markup inside JavaScript. React uses it because it makes component UI easier to read and build.


### 2. What is the difference between props and state?
Props are values passed from a parent component to a child component. State is data managed inside a component and can change over time.


### 3. What does the `useState` hook do, and where did you use it in this project?
`useState` stores changing values in a React component. I used it for the technology list, loading state, and selected technologies in the user's stack.


### 4. What does the `useEffect` hook do, and why did you need it to load the JSON data?
`useEffect` runs side effects after React renders. I used it once when the app loads to fetch the local `technologies.json` data.


### 5. Why does every item in a `.map()` list need a unique `key` prop?
A unique key helps React identify each list item so it can update the correct item efficiently when the list changes.


### 6. What is conditional rendering? Show one place you used it.
Conditional rendering means showing different UI based on a condition. In this project, the Your Stack panel shows an empty message when no technology is selected and shows stack items when technologies are added.


### 7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?
A parent passes data to a child using props. A child can communicate back by calling a function that the parent passed to it as a prop. For example, `App` passes `onAdd` to technology cards, and a card calls that function when its button is clicked.



