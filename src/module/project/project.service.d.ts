import type { PROJECT } from "../../types/types";
export declare const ProjectService: {
    createProject: (payload: PROJECT) => Promise<{
        id: string;
        name: string;
        project: string;
        github: string | null;
        description: string | null;
        project_link: string | null;
        plan: string | null;
        photo: string | null;
        tech: string[];
        createdAt: Date;
        updatedAt: Date;
    }>;
    getAllProjects: () => Promise<{
        id: string;
        name: string;
        project: string;
        github: string | null;
        description: string | null;
        project_link: string | null;
        plan: string | null;
        photo: string | null;
        tech: string[];
        createdAt: Date;
        updatedAt: Date;
    }[]>;
    getSingleProject: (id: string) => Promise<{
        id: string;
        name: string;
        project: string;
        github: string | null;
        description: string | null;
        project_link: string | null;
        plan: string | null;
        photo: string | null;
        tech: string[];
        createdAt: Date;
        updatedAt: Date;
    } | null>;
    deleteProject: (id: string) => Promise<{
        id: string;
        name: string;
        project: string;
        github: string | null;
        description: string | null;
        project_link: string | null;
        plan: string | null;
        photo: string | null;
        tech: string[];
        createdAt: Date;
        updatedAt: Date;
    }>;
    updateProject: (id: string, payload: PROJECT) => Promise<{
        id: string;
        name: string;
        project: string;
        github: string | null;
        description: string | null;
        project_link: string | null;
        plan: string | null;
        photo: string | null;
        tech: string[];
        createdAt: Date;
        updatedAt: Date;
    }>;
};
//# sourceMappingURL=project.service.d.ts.map