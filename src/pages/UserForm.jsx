import { useNavigate } from "react-router-dom";
import { useState } from "react";
import  axios  from "axios";

export default function UserForm() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    clientName: "",
    projectName: "",
    budget: "",
    deadline: "",
    email: "",
    phone: "",
    address: "",
    status: "",
    description: "",
    requirements: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
    };
    
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("https://heklo.onrender.com/project", formData);
      alert("Project details submitted successfully!");
      setFormData({
        clientName: "",
        projectName: "",
        budget: "",
        deadline: "",
        email: "",
        phone: "",
        address: "",
        description: "",
        requirements: "",
        status: "Pending"
      });
    } catch (error) {
        console.log(error)
      alert("Error submitting project details");
    }
    };
    

  return (
    <div className="form-container">
      <div className="form-card">
        <h2 className="form-title">Submit Project Details</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-grid">
            <div className="form-group">
              <label className="form-label">Client Name</label>
              <input 
                type="text" 
                className="form-input" 
                placeholder="Enter client name"
                name="clientName"
                value={formData.clientName}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label className="form-label">Project Name</label>
              <input 
                type="text" 
                className="form-input" 
                placeholder="Enter project name"
                name="projectName"
                value={formData.projectName}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label className="form-label">Budget</label>
              <input 
                type="text" 
                className="form-input" 
                placeholder="Enter budget"
                name="budget"
                value={formData.budget}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label className="form-label">Deadline</label>
              <input 
                type="date" 
                className="form-input"
                name="deadline"
                value={formData.deadline}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label className="form-label">Email</label>
              <input 
                type="email" 
                className="form-input" 
                placeholder="Enter email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label className="form-label">Phone</label>
              <input 
                type="tel" 
                className="form-input" 
                placeholder="Enter phone number"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label className="form-label">Address</label>
              <input 
                type="text" 
                className="form-input" 
                placeholder="Enter address"
                name="address"
                value={formData.address}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label className="form-label">Status</label>
              <input 
                type="text" 
                className="form-input" 
                placeholder="Enter status"
                name="status"
                value={formData.status}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          <div className="form-group">
            <label className="form-label">Description</label>
            <textarea 
              className="form-input" 
              placeholder="Enter project description"
              name="description"
              value={formData.description}
              onChange={handleChange}
              required
            ></textarea>
          </div>
          <div className="form-group">
            <label className="form-label">Requirements</label>
            <textarea 
              className="form-input" 
              placeholder="Enter project requirements"
              name="requirements"
              value={formData.requirements}
              onChange={handleChange}
              required
            ></textarea>
          </div>
          <button type="submit" className="submit-btn">Submit Project</button>
        </form>
        <button className="neumorphic-btn" onClick={() => navigate("/")} style={{marginTop: '30px'}}>
          <i className="fas fa-arrow-left"></i> Back to Login
        </button>
      </div>
    </div>
  );
}