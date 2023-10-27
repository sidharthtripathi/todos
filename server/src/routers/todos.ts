import { publicProcedure, router } from "../trpc";
import {z} from 'zod'

export const todosRouter = router({
    getTodos : publicProcedure.query(async ({ctx : {todo}})=>{
        const todos = await todo.findMany({
            where : {
                id : {not: -1}
            },
            orderBy : {
                createdAt : 'desc'
            }
        })
        return todos;
    }),
    createTodo : publicProcedure.input(z.string()).mutation(async({input,ctx : {todo}})=>{
        const newTodo = await todo.create({
            data : {
                title : input
            }
        })
        return newTodo;
    }),
    updateTodo : publicProcedure.input(z.object({
            id : z.number(),
            title : z.string()
        })).mutation(async({ctx,input})=>{
        const updatedTodo = await ctx.todo.update({
            where : {
                id : input.id
            },
            data : {
                title : input.title
            }
        })
        return updatedTodo;
    }),
    deleteTodo : publicProcedure.input(z.number()).mutation(async({ctx,input})=>{
        await ctx.todo.delete({
            where : {
                id : input
            }
        })
        return {msg : "successfully deleted"}
    })
})