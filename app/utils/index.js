import {PrismaClient} from '@prisma/client'

const prisma = new PrismaClient();

export function getTasks(){
    return prisma.tasks.findMany();
}

export function createTask(task){
    return prisma.tasks.create({data: task})
}

export function updateTask(id, task){
    return prisma.tasks.update({
        where: {id: parseInt(id)},
        data: task
    })
}

export function deleteTask(id){
    return prisma.tasks.delete({
        where : {id: parseInt(id)}
    })
}