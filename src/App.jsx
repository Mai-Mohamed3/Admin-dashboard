import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Admin from "./Admin";
import Login from "./Login";
import AuthContext from "./AuthContext";

const App = () => {
    const [user, setUser] = useState(() => {
        const savedUser = localStorage.getItem("user");
        return savedUser ? JSON.parse(savedUser) : { isAdmin: false };
    });

    useEffect(() => {
        localStorage.setItem("user", JSON.stringify(user));
    }, [user]);

    return (
        <AuthContext.Provider value={{ user, setUser }}>
            <Router>
                <Routes>
                    <Route path="/" element={<Login />} />
                    <Route path="/admin" element={user.isAdmin ? <Admin /> : <h1>🚫 403 - Forbidden</h1>} />
                    <Route path="/403" element={<h1>🚫 403 - Forbidden</h1>} />
                </Routes>
            </Router>
        </AuthContext.Provider>
    );
};

export default App;
