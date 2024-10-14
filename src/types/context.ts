
import { User } from '@/types/user'

export interface AuthContextProps {
    user: User;
    signup: (user: User) => Promise<void>;
    signin: (user: User) => Promise<void>;
    logout: () => void;
    isAuthenticated: boolean;
    errors: string[];
    loading: boolean;
}