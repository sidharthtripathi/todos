import React from 'react'
import Todo from './Todo'

function TodoList({todos,setTodos}) {
    
    return (
        <div className='space-y-1 mt-2 flex flex-col items-center w-1/2'>
       { todos.map(todo=><Todo todos = {todos} setTodos = {setTodos} title={todo.title} key={todo.id} todoId = {todo.id}/>)}
        </div>
    )
}

export default TodoList