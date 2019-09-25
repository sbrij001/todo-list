import React from 'react';
import TodoList from './components/todo-list.component';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Todo List!</h1>
      <h3>A simple React todo List App</h3>
      <TodoList/>
    </div>
  );
}

export default App;
