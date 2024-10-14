import { createContext, useContext, useEffect, useState } from 'react'
import { login, logoutRequest , register, verifyToken } from '@/api/auth'
import { getErrorMessage } from '@/utils/error'
import { AuthContextProps } from '@/types/context'
import { User } from '@/types/user'

export const AuthContext = createContext({} as AuthContextProps)

export function UseAuth() {
    const context = useContext(AuthContext)
    if (!context) throw new Error('useAuth must be used within an AuthProvider')
    return context
}

export function AuthProvider({ children }: { children: React.ReactNode }) {

    const [user, setUser] = useState<User>({
        email: '',
        password: '',
        name: '',
    });

    const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
    const [errors, setErrors] = useState<string[]>([]);
    const [loading, setLoading] = useState<boolean>(true);

    const addError = (newError: string) => {
        setErrors((prevErrors) => [...prevErrors, newError]);
    };

    // clear errors after 5 seconds
    useEffect(() => {
        if (errors.length > 0) {
            const timer = setTimeout(() => {
                setErrors([]);
            }, 3000);
            return () => clearTimeout(timer);
        }
    }, [errors]);

    const signup = async (user: User) => {
        try {
            const res = await register(user);
            if (res.status === 200) {
                setUser(res.data);
                setIsAuthenticated(true);
            }
        } catch (error) {
            addError(getErrorMessage(error));
        }
    }

    const signin = async (user: User) => {
        try {
            const res = await login(user);
            if (res.status === 200) {
                setUser(res.data);
                setIsAuthenticated(true);
                setLoading(false);
            }
        } catch (error) {
            addError(getErrorMessage(error));
        }
    };

    const logout = async () => {
        const res = await logoutRequest();
        if (res.status === 200) {
            setIsAuthenticated(false);
            setUser({
                email: '',
                password: '',
                name: '',
            });
            setLoading(false);
        }
    };

    useEffect(() => {
        const checkLogin = async () => {
            try {
                const res = await verifyToken();

                if (res.status !== 200) {
                    setIsAuthenticated(false);
                    setLoading(false);
                    return;
                }

                if (!res.data) {
                    setIsAuthenticated(false);
                    setLoading(false);
                    return;
                }

                setIsAuthenticated(true);
                setUser(res.data);
                setLoading(false);
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
            } catch (error) {
                //console.error(error);
                setIsAuthenticated(false);
                setLoading(false);
            }
        };
        checkLogin();
    }, []);

    return (
        <AuthContext.Provider value={{ user, signup, signin, logout, isAuthenticated, errors, loading, }}>
            {children}
        </AuthContext.Provider>
    )
}

