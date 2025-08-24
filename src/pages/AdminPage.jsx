import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

export default function AdminPage() {
  const navigate = useNavigate();
  const [projects, setProjects] = useState([]);
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    // For demo purposes, using static data if API is not available
    const demoProjects = [
      {
        _id: "68ab1fbb45d103dd3df12f66",
        clientName: "ABC Corporation",
        projectName: "Website Redesign",
        budget: "$12,500",
        deadline: "2023-12-15",
        email: "contact@abccorp.com",
        phone: "+1 (555) 123-4567",
        address: "123 Business Ave, New York, NY",
        description: "Complete redesign of corporate website with modern UI/UX",
        requirements: "Responsive design, CMS integration, SEO optimization",
        status: "In Progress"
      },
      {
        _id: "68ab1fd045d103dd3df12f67",
        clientName: "XYZ Tech",
        projectName: "E-commerce Platform",
        budget: "$24,800",
        deadline: "2024-02-28",
        email: "info@xyztech.com",
        phone: "+1 (555) 987-6543",
        address: "456 Innovation Dr, San Francisco, CA",
        description: "Development of a full-featured e-commerce platform",
        requirements: "Product catalog, shopping cart, payment integration, user accounts",
        status: "Planning"
      }
    ];

    // Try to fetch from API, fall back to demo data if fails
    axios.get("https://heklo.onrender.com/projects")
      .then((res) => {
        setProjects(res.data);
      })
      .catch((error) => {
        console.log("API not available, using demo data", error);
        setProjects(demoProjects);
      });
  }, []);

  const openModal = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  const formatKey = (key) => {
    return key
      .replace(/([A-Z])/g, ' $1')
      .replace(/^./, str => str.toUpperCase());
  };

  return (
    <div className="admin-container">
      <h2 className="admin-title">All Project Details</h2>
      <div className="projects-grid">
        {projects.map((project) => (
          <div key={project._id} className="project-card">
            <h3 className="project-name">{project.projectName}</h3>
            <p className="client-name">{project.clientName}</p>
            <p className="project-budget">{project.budget}</p>
            <button 
              className="view-details-btn" 
              onClick={() => openModal(project)}
            >
              View Details
            </button>
          </div>
        ))}
      </div>

      {isModalOpen && selectedProject && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={closeModal}>
              <i className="fas fa-times"></i>
            </button>
            <h2 className="modal-title">Project Details</h2>
            <div className="modal-details">
              {Object.entries(selectedProject).map(([key, value]) => (
                <div key={key} className="detail-row">
                  <span className="detail-label">{formatKey(key)}</span>
                  <span className="detail-value">{value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      <button className="neumorphic-btn" onClick={() => navigate("/")} style={{marginTop: '30px', marginLeft: 'auto', marginRight: 'auto', display: 'block'}}>
        <i className="fas fa-arrow-left"></i> Back to Login
      </button>
    </div>
  );
}