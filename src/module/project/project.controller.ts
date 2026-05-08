import type { RequestHandler } from "express";
import { ProjectService } from "./project.service";

const createProject : RequestHandler = async (req,res) => {
    try {
        const data = req.body;
        const result = await ProjectService.createProject(data);
        res.status(200).json({
            success: true,
            message: "Project created successfully",
            data: result
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Failed to create project",
            error: error
        })
    }
}
const getAllProjects : RequestHandler = async (req,res) => {
    try {
        const result = await ProjectService.getAllProjects();
        res.status(200).json({
            success: true,
            message: "Projects fetched successfully",
            data: result
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Failed to fetch projects",
            error: error
        })
    }
}
const getSingleProject : RequestHandler = async (req,res) => {
    try {
        const result = await ProjectService.getSingleProject(req.params.id as string);
        res.status(200).json({
            success: true,
            message: "Project fetched successfully",
            data: result
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Failed to fetch project",
            error: error
        })
    }
}
const updateProject : RequestHandler = async (req,res) => {
    try {
        const result = await ProjectService.updateProject(req.params.id as string, req.body);
        res.status(200).json({
            success: true,
            message: "Project updated successfully",
            data: result
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Failed to update project",
            error: error
        })
    }
}
const deleteProject : RequestHandler = async (req,res) => {
    try {
        const result = await ProjectService.deleteProject(req.params.id as string);
        res.status(200).json({
            success: true,
            message: "Project deleted successfully",
            data: result
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Failed to delete project",
            error: error
        })
    }
}
export const ProjectController = {
    createProject,
    getAllProjects,
    getSingleProject,
    updateProject,
    deleteProject
}