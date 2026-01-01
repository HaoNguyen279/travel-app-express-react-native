export interface User {
    user_id: number;
    username:  string;
    email: string;
    password_hash: string;
    full_name: string | null;
    avatar_url:  string | null;
    bio: string | null;
    created_at: Date;
}