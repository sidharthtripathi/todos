import React from 'react'
import { AiTwotoneDelete, AiFillEdit } from 'react-icons/ai'
import { deleteTodo } from '../lib/fetchTodos'
function Todo({ title , setTodos , todoId , todos}) {
  async function handleDelete(id : number){
      const result = await deleteTodo(id)
      const newTodo = todos.filter(todo=>(todo.id != id))
      setTodos(newTodo)
  }
  return (
    <div className='bg-blue-500 p-1 space-x-2 rounded-md flex w-full items-center justify-between'>
      <span> {title}</span>
      <div className='flex space-x-2'>
        <AiFillEdit className='cursor-pointer'/>
        <AiTwotoneDelete color='white' className='cursor-pointer' onClick={()=>{handleDelete(todoId)}} />
      </div>
    </div>
  )
}

export default Todo