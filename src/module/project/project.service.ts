import { prisma } from "../../lib/prisma";
import type { PROJECT } from "../../types/types";

const createProject = async (payload : PROJECT) => {
    const result = await prisma.project.create({
        data: payload
    })
    return result
}

const getAllProjects = async () => {
    const result = await prisma.project.findMany();
    return result
}

const getSingleProject = async (id:string) => {
    const result = await prisma.project.findUnique({
        where: {
            id
        }
    });
    return result
}
const updateProject = async (id : string , payload: PROJECT) => {
    const result = await prisma.project.update({
        where: {
            id
        },
        data: payload
    });
    return result
}
const deleteProject = async (id : string) => {
    const result = await prisma.project.delete({
        where: {
            id
        }
    });
    return result
}
export const ProjectService = {
    createProject,
    getAllProjects,
    getSingleProject,
    deleteProject,
    updateProject
}