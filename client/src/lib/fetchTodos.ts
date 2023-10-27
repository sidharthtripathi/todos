import { client } from "../trpc";
export async function getTodos(){
    const todos = await client.todos.getTodos.query();
    return todos;
}

export async function createTodo(title : string) {
    const newTodo = await client.todos.createTodo.mutate(title)
    return newTodo;
}

export async function deleteTodo(id : number) {
    await client.todos.deleteTodo.mutate(id);
    return {msg : "success"}
}