import { useState, useEffect } from "react";

export const useAuth = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(false)
    const [user, setUser] = useState(null)

    useEffect(() => {
        const loadAuth = () => {
            const auth = localStorage.getItem("isAuthenticated")
            const userData = localStorage.getItem("user")

            setIsAuthenticated(JSON.parse(auth))
            setUser(userData ? JSON.parse(userData) : null)
        }

        loadAuth
    }, [])


    const login = (userData) => {
        localStorage.setItem("isAuthenticated", "true"),
            localStorage.setItem("user", JSON.stringify(userData))
        setIsAuthenticated(true)
        setUser(userData)
    }

    const logout = () => {
        localStorage.removeItem('user');
        localStorage.removeItem('isAuthenticated');
        setIsAuthenticated(false);
        setUser(null);
    };

    return { isAuthenticated, user, login, logout };
}