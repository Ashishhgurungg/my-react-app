import React, { useState } from 'react'
import './TodoApp.css';

const Todo = () => {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState(''); 
  const [editId, setEditId] = useState(null); 
  const [editValue, setEditValue] = useState(''); 

  const addTodo = () => {
    if (inputValue.trim() !== '') {
      const newTodo = {
        id: Date.now(),
        text: inputValue,
        completed: false,
        createdAt: new Date().toLocaleTimeString(),
      };
      setTodos([...todos, newTodo]);
      setInputValue('');
    }
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };   

  const toggleComplete = (id) => {
    setTodos(todos.map(todo => 
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  const startEdit = (id, text) => {
    setEditId(id);
    setEditValue(text);
  };

 /**
  * The `saveEdit` function updates the text of a specific todo item in a list of todos and clears the
  * edit mode.
  */
  const saveEdit = (id) => {
    setTodos(todos.map(todo => 
      todo.id === id ? { ...todo, text: editValue } : todo
    ));
    setEditId(null);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      addTodo();
    }
  };

  return (
    <div className="todo-app">
      <h1>My To-Do List</h1>
      <div className="todo-input">
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyPress={handleKeyPress}
          placeholder="Add a new task..."
        />
        <button onClick={addTodo}>Add</button>
      </div>
      <ul className="todo-list">
        {todos.map(todo => (
          <li key={todo.id} className={`todo-item ${todo.completed ? 'completed' : ''}`}>
            <div className="todo-content">
              <input
                type="checkbox"
                checked={todo.completed}
                onChange={() => toggleComplete(todo.id)}
              />
              {editId === todo.id ? (
                <input
                  type="text"
                  value={editValue}
                  onChange={(e) => setEditValue(e.target.value)}
                  onBlur={() => saveEdit(todo.id)}
                  onKeyPress={(e) => e.key === 'Enter' && saveEdit(todo.id)}
                  /* The `autoFocus` attribute in the input field sets the focus on that input field
                  automatically when the component renders. This means that when the component is
                  displayed, the input field with the `autoFocus` attribute will be selected and
                  ready for user input without the need for the user to manually click on it. */
                  autoFocus
                />
              ) : (
                <span onDoubleClick={() => startEdit(todo.id, todo.text)}>
                  {todo.text}
                </span>
              )}
              <span className="todo-time">{todo.createdAt}</span>
            </div>
            <div className="todo-actions">
              <button onClick={() => deleteTodo(todo.id)} className="delete-btn">
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
      {todos.length > 0 && (
        <div className="todo-stats">
          <p>Total tasks: {todos.length}</p>
          <p>Completed: {todos.filter(todo => todo.completed).length}</p>
        </div>
      )}
    </div>
  );
};
export default Todo