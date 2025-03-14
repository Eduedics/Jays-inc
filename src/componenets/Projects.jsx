import React, { useState } from "react";

const projectsData = [
    {
        id: 1,
        title: "twggs",
        tech: "python",
        description: "shshhshsjhjhs.",
        source: "sss",
        preview: "ssss"
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
