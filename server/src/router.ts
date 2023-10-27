import { todosRouter } from './routers/todos'
import {router} from './trpc'
export const appRouter = router({
    todos : todosRouter,
})
export type AppRouter = typeof appRouter