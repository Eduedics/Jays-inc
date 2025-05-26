import React, { useState } from "react";

const projectsData = [
    {
        id: 1,
        title: "django-react-jwt-auth",
        tech: "python/React",
        description: "A lightweight, secure authentication backend built with Django REST Framework and SimpleJWT. It provides endpoints for user registration, login with JWT (access/refresh tokens), and token refresh, making it ideal for frontend frameworks like React. This API is designed to be easily integrated with modern single-page applications(stateless auth).",
        source: "https://github.com/Eduedics/django-react-jwt-auth",
        preview: "https://github.com/Eduedics/django-react-jwt-auth"
    },
    {
        id: 2,
        title: "tabSaver",
        tech: "javascript",
        description: "A simple browser tab-saving tool that allows users to save and manage links locally. Designed for users who want to bookmark tabs quickly without relying on browser bookmarks.",
        source: "https://github.com/Eduedics/tabSaver",
        preview: "https://github.com/Eduedics/tabSaver"
    },
    {
        id: 3,
        title: "Stock Manager System",
        tech: "Java/Javascript",
        description: "Stock Manager is a full-featured inventory and stock tracking system designed for store owners and warehouse managers. Built with React for the frontend and Spring Boot for the backend, this system simplifies tracking stock input and output, managing user roles, and organizing products and suppliers across multiple store branches.",
        source: "https://github.com/RNJEGA/Stock-manager-ui",
        preview: "https://github.com/RNJEGA/Stock-manager-ui"
    },
];

const Projects = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const [filter, setFilter] = useState("All");

    const filteredProjects = projectsData.filter(project =>
        (filter === "All" || project.tech === filter) &&
        project.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="projects-container">
            <h2>Our Projects</h2>

             {/* Search Bar  */}
            <input
                type="text"
                placeholder="Search projects..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="search-bar"
            />

            {/* Filter Buttons */}
            <div className="filter-buttons">
                {["All", "JavaScript", "Java", "Python"].map((tech) => (
                    <button key={tech} onClick={() => setFilter(tech)}
                        className={filter === tech ? "active" : ""}>
                        {tech}
                    </button>
                ))}
            </div>

            {/* Project Cards */}
            <div className="projects-grid">
                {filteredProjects.length > 0 ? (
                    filteredProjects.map((project) => (
                        <div key={project.id} className="project-card">
                            <h3>{project.title}</h3>
                            <p>{project.description}</p>
                            <span className="tech-badge">{project.tech}</span>
                            <div className="btn-group">
                                <a href={project.preview} target="_blank" rel="noopener noreferrer" className="btn">Preview</a>
                                <a href={project.source} target="_blank" rel="noopener noreferrer" className="btn">Source Code</a>
                            </div>
                        </div>
                    ))
                ) : (
                    <p>No projects found</p>
                )}
            </div>
        </div>
    );
};

export default Projects;
