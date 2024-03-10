import {PrismaClient} from '@prisma/client'

const prisma = new PrismaClient();

export function getTasks(){
    return prisma.tasks.findMany();
}

export function createTask(task){
    return prisma.tasks.create({data: task})
}