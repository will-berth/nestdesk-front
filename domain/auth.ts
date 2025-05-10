export interface LoginInput {
    email: string;
    password: string;
}

export interface Loginresponse {
    public_id: string;
    name: string;
    email: string;
    created_at: string;
    updated_at: string;
    token: string;
}
