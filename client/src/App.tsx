import React from 'react'
import TodoList from './components/TodoList'
import {useRef,useState,useEffect} from 'react'
import { createTodo,getTodos } from './lib/fetchTodos'
interface Todo {
  title : string,
  id : number
}
function App() {
  const todoRef = useRef<HTMLInputElement>(null)
  async function handleSubmit(e : any){
    e.preventDefault();
    const title = todoRef?.current?.value as string
    const newTodo = await createTodo(title)
    setTodos([newTodo,...todos])
    
  }
  const [todos,setTodos] = useState<Todo[]>([])
  useEffect(()=>{
      getTodos().then(data=>{setTodos(data)})    
  },[])
  return (
    <div className='flex flex-col w-screen items-center'>
      <form onSubmit={handleSubmit} className='space-y-2 w-1/2'>
        <label htmlFor="todo" className='font-bold text-3xl'>Add Todo</label>
        <br />
        <input ref = {todoRef} type="text" className='mr-3 p-1 text-black ' placeholder='title...'/>
        <button className='bg-blue-500 hover:bg-blue-300 duration-300 p-1 rounded-md'>Add</button>
      </form>
      <TodoList todos = {todos} setTodos = {setTodos}/>
    </div>
  )
}

export default App