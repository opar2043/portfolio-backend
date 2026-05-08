export type PROJECT = {
    id: string;
    name: string;
    project: string;
    github?: string;
    description?: string;
    project_link?: string;
    plan?: string;
    photo?: string;
    tech: string[];
    createdAt: Date;
    updatedAt: Date;
};
export type USER = {
    id: string;
    name: string;
    email: string;
    password: string;
    role: string;
    createdAt: Date;
    updatedAt: Date;
};
export type BLOG = {
    id: string;
    title: string;
    description?: string;
    image?: string;
    date: Date;
    createdAt: Date;
    updatedAt: Date;
};
export type REVIEW = {
    id: string;
    name?: string;
    review?: string;
    rating?: number;
    photo?: string;
    createdAt: Date;
    updatedAt: Date;
};
//# sourceMappingURL=types.d.ts.map