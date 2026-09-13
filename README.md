# DevStack

## 1. Name of the Project

**DevStack - Development Technology Stack Builder**

## 2. A Little Description

DevStack is a simple and interactive web application that helps developers explore different technologies and build their ideal development stack. Users can view details such as difficulty and rating, and add their preferred technologies to their stack. They can also remove individual technologies or clear the entire stack.

The application provides categories such as frontend, backend, database, and development tools, allowing users to compare available options and create a personalized technology stack.

## 3. Technology Used

- **React JS** — Used to build the user interface and manage components.
- **TypeScript** — Used for type safety and defining the technology data structure.
- **Tailwind CSS** — Used for styling and creating a responsive layout.
- **DaisyUI** — Used for UI components such as badges.
- **React Icons** — Used for technology-related icons and star ratings.
- **React Toastify** — Used to display success and information notifications when technologies are added or removed.

## 4. Core Features

### 1. Add Technology to Stack

Users can add their preferred technology to **Your Stack** by clicking the **Add to Stack** button. Once a technology is selected, its button becomes disabled and changes to **Selected**, preventing the same technology from being added multiple times.

A success notification is also displayed when a technology is added to the stack.

### 2. Remove One Technology

Users can remove an individual technology from their stack by clicking the **X** button next to that technology. The selected technology is removed from the stack without affecting the other technologies.

A notification is displayed to confirm which technology has been removed.

### 3. Remove All Technologies

Users can clear their entire technology stack at once using the **Remove All** button. This resets the stack to an empty state and displays an informational notification.

The **Remove All** button only appears when at least one technology has been selected.

## React Questions & Answers

### 1. What is JSX, and why it used in React?

JSX is a syntax that lets us write HTML-like code inside JavaScript. It makes React code easier to read and write.

### 2. What is the difference between props and state?

**Props** are used to pass data from a parent component to a child component.
**State** is used to store and manage data inside a component.

### 3. What does the `useState` hook do, and where did you use it in this project?

`useState` is a React Hook used to store and update data in a component.
In this project, I used it to store the selected technologies in the stack.

### 4. What does the `useEffect` hook do, and why did you need to load the JSON data?

`useEffect` is a React Hook used to perform side effects, such as fetching data or working with APIs. I needed to load the JSON data so that the technology information could be fetched and displayed dynamically in the application.

### 5. Why does every item in a `.map()` list need a unique `key` prop?

React uses the `key` to identify each item in a list. A unique key helps React update the list correctly and efficiently.

### 6. What is conditional rendering? Show one place you used it (example: the empty stack message).

Conditional rendering means showing or hiding something in the UI based on a condition. I used it to show **“Your stack is empty”** when no technology is selected.

### 7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?

I can pass data from a parent to a child using `props`. The parent sends the data, and the child receives it through `props`. And a child sends data back to the parent by calling a `function` passed through `props`.
