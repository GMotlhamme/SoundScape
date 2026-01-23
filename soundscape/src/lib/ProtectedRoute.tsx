import { Navigate } from "react-router";
import { useEffect, useState, type JSX } from "react";

export default function ProtectedRoute({ children }: { children: JSX.Element }) {
    const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);
    
    useEffect(() => {
        const token = localStorage.getItem("token");
        setIsAuthenticated((token === "undefined" || token === null) ? false : true);// Convert to boolean
    }, []);

    if (isAuthenticated === null) return <div>Loading...</div>; // Still checking
    if (!isAuthenticated) return <Navigate to="/Login" replace />; // Not logged in
    return children; // Logged in, show page
}