import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient()
export function createContext() {
    return {
        todo : prisma.todo
    }
}