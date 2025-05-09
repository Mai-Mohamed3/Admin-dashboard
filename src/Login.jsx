import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import AuthContext from "./AuthContext";
import "./Login.css";
import loginImage from "./assets/Images/login.jpeg"; 

const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const { setUser } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();

        if (username === "mai" && password === "mai123") {
            const loggedInUser = { isAdmin: true };
            setUser(loggedInUser); // تحديث الكونتكست
            localStorage.setItem("user", JSON.stringify(loggedInUser)); // حفظ في localStorage
            navigate("/admin");
        } else {
            navigate("/403");
        }
    };

    return (
        <div className="login-container">
            <div className="login-box">
                <div className="login-form">
                    <h2>Login to Admin Dashboard</h2>
                    <p>Welcome back! Please sign in to access your account and manage your courses seamlessly.</p>
                    <form onSubmit={handleLogin}>
                        <label>Username</label>
                        <input
                            type="text"
                            placeholder="your-email@gmail.com"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            required
                        />
                        <label>Password</label>
                        <input
                            type="password"
                            placeholder="Your Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                        <div className="login-options">
                            <label>
                                <input type="checkbox" /> Remember me
                            </label>
                            <a href="#">Forgot Password?</a>
                        </div>
                        <button type="submit">Log In</button>
                    </form>
                </div>
                <div className="login-image">
                    <img src={loginImage} alt="Login" />
                </div>
            </div>
        </div>
    );
};

export default Login;
