import { useNavigate } from "react-router-dom";

export default function LoginPage() {
  const navigate = useNavigate();

  return (
    <div className="login-container">
      <h1 className="login-title">Project Management Portal</h1>
      <p className="login-subtitle">Select your role to access the project management system</p>
      <div className="login-buttons">
        <button className="neumorphic-btn" onClick={() => navigate("/user")}>
          <i className="fas fa-user"></i> User Login
        </button>
        <button className="neumorphic-btn" onClick={() => navigate("/admin")}>
          <i className="fas fa-lock"></i> Admin Login
        </button>
      </div>
    </div>
  );
}