export interface Role {
    id: string;
    role: string;
}

export interface User {
    firstName: string;
    lastName: string;
    email: string;
    roles: Role[];
}