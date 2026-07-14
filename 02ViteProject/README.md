# React Counter App ⚛️

A simple counter application built while learning **React** and my first React Hook, **useState**. This project was created using **Vite** to understand the basics of state management and component re-rendering.

## 📚 What I Learned

- Setting up a React project using **Vite**
- Understanding the purpose of the **useState** hook
- Managing component state
- Updating the UI based on state changes
- Handling button click events in React
- Applying simple constraints to state values (counter limited between 0 and 20)

## ✨ Features

- Increment counter
- Decrement counter
- Counter cannot go below **0**
- Counter cannot exceed **20**

## 🛠️ Tech Stack

- React
- Vite
- JavaScript (ES6+)
- CSS

## 🚀 Getting Started

Clone the repository and install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

## 📂 Project Structure

```
02ViteProject/
├── public/
├── src/
│   ├── App.jsx
│   ├── App.css
│   └── main.jsx
├── package.json
└── vite.config.js
```

## 🌱 About This Project

This is one of my first React projects. The goal was not to build a complex application, but to understand how React updates the UI using the `useState` hook. Building this counter helped me understand the relationship between state, user interactions, and component re-rendering.

More React projects will be added as I continue learning.




# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some Oxlint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the Oxlint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and Oxlint's TypeScript related rules in your project.
