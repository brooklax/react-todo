import React, {useState} from 'react'
import Todo from './Todo';
import TodoForm from './TodoForm'

function TodoList() {
    const [todos, setTodos] = useState([]);

    const addTodo = todo => {
        if (todo?.text?.trim().length > 0) {
            setTodos([todo, ...todos])
        } else return;
    }

    const completeTodo = todoId => {
        const updatedTodos = todos.map(todo => {
            if (todo.id === todoId) {
                todo.isComplete = !todo.isComplete
            }
            return todo;
        })
        setTodos(updatedTodos)
    }

    const updateTodo = (todoId, newValue) => {
        if (newValue?.text?.trim().length > 0) {
            setTodos(prev => prev.map(item => (item.id === todoId ? newValue : item)))
        } else return;
    }

    const removeTodo = todoId => {
        setTodos([...todos].filter(todo => todo.id !== todoId))
    }

    return (
        <div>
            <h1>What's the plan for Today?</h1>
            <TodoForm onSubmit={addTodo} />
            <Todo todos={todos} completeTodo={completeTodo} updateTodo={updateTodo} removeTodo={removeTodo} />
        </div>
    )
}

export default TodoList
