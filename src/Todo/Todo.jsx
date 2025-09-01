import React, { useState } from 'react'

const Todo = () => {


    const[todos, setTodos] = useState([])
    const[inputValue, setInputValue] = useState("")
    const[editId, setEditID] = useState(null)
    const[editValue, setEditValue] = useState('')

    const addTodo = () => {
        if (inputValue.trim() !== '') {
            const newTodo = {
                id : Date.now(),
                text: inputValue,
                completed: false,
                createdAt: new Date().toLocaleTimeString(),
            };
            setTodos([...todos, newTodo]);
            setInputValue('');
        }

    const deleteTodo = (id) => {
        setTodos(todos.filter(todo => todo.id !== id));
    };

    

    }

  return (
    <div>Todo</div>
  )
}

export default Todo