import { useState } from "react";

export default function App() {
  const previewProjects = [
    {
      title: "FocusSense Smart Workspace Optimizer",
      subtitle: "Sensors • Embedded • Web Interface",
      glow: false,
    },
    {
      title: "Multimodal Imaging for Agriculture",
      subtitle: "Raspberry Pi • Vision • Edge AI",
      glow: true,
    },
    {
      title: "FPGA Matrix Accelerator",
      subtitle: "Verilog • Parallel Compute • Digital Design",
      glow: false,
    },
  ];

  const tags = [
    "Embedded Systems",
    "Computer Vision",
    "FPGA Design",
    "Live Systems",
  ];

  const projects = [
    {
      id: 1,
      title: "FocusSense Smart Workspace Optimizer",
      category: "Featured Project • Embedded Systems",
      shortCategory: "Embedded Systems",
      featured: true,
      subtitle: "Smart environment sensing with a clean web experience",
      description:
        "A smart workspace system that combines sensors, automation, and a polished interface to improve focus, comfort, and awareness in study and work environments.",
      tech: ["Embedded", "Sensors", "Frontend", "System Design"],
      details:
        "FocusSense is designed as a real engineering product, not just a class demo. It brings together physical sensing, decision logic, and a user-facing dashboard to make the workspace feel responsive and intelligent.",
    },
    {
      id: 2,
      title: "Multimodal Imaging for Agriculture",
      category: "Senior Design / AI / Vision",
      shortCategory: "AI / Vision",
      subtitle: "Imaging and edge-based analysis for agriculture",
      description:
        "A project exploring imaging systems and data-driven analysis to better understand agricultural conditions and support smarter decisions.",
      tech: ["Computer Vision", "Raspberry Pi", "Edge AI"],
      details:
        "This project focuses on combining different sensing and imaging inputs to create a stronger picture of crop conditions and field-level insight.",
    },
    {
      id: 3,
      title: "FPGA Matrix Multiplication Accelerator",
      category: "Digital Design / Verilog",
      shortCategory: "FPGA / Verilog",
      subtitle: "Hardware acceleration through parallel design",
      description:
        "A hardware-focused project that accelerates matrix multiplication using Verilog and structured digital logic design.",
      tech: ["FPGA", "Verilog", "Digital Design"],
      details:
        "This project shows low-level engineering work in hardware design, timing-aware thinking, and performance-focused implementation.",
    },
    {
      id: 4,
      title: "Jelly Bean Counting Scale",
      category: "Analog + MATLAB",
      shortCategory: "Circuits / MATLAB",
      subtitle: "Measurement system using sensing and signal conditioning",
      description:
        "A smart scale system that estimates jelly bean count using sensor measurement, analog amplification, and software processing.",
      tech: ["Instrumentation", "Analog", "MATLAB"],
      details:
        "This project combines hardware measurement with data interpretation, making it a strong example of mixed hardware-software engineering.",
    },
    {
      id: 5,
      title: "Fashion-MNIST CNN",
      category: "Software / Deep Learning",
      shortCategory: "Deep Learning",
      subtitle: "Image classification with convolutional networks",
      description:
        "A CNN-based image classification project focused on model training, testing, and performance evaluation on fashion image data.",
      tech: ["Python", "CNN", "Machine Learning"],
      details:
        "This project highlights applied machine learning, model development, and clean evaluation of classification performance.",
    },
    {
      id: 6,
      title: "Live Audio Systems Engineering",
      category: "Systems Engineering",
      shortCategory: "Audio Systems",
      subtitle: "Real-world live sound setup and system flow",
      description:
        "Hands-on engineering in live audio systems, including setup, routing, mixing, and production support for real performance environments.",
      tech: ["Audio", "Signal Flow", "Live Systems"],
      details:
        "This is one of the most unique parts of the portfolio because it shows engineering judgment in real spaces, not only in code or simulation.",
    },
  ];

  const featuredProject = projects[0];
  const sideProjects = projects.slice(1);

  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <>
      <main className="page">
        <section className="hero-shell">
          <div className="hero-grid">
            <div className="hero-left">
              <div className="hero-badge">● Crimson Engineering Lab Theme</div>

              <div className="title-wrap">
                <div className="title-glow" />
                <h1 className="hero-title">Heaven Berhe</h1>
              </div>

              <p className="hero-text">
                Computer Engineer building powerful systems across hardware,
                software, AI, and real-world deployment.
              </p>

              <div className="hero-tags">
                {tags.map((tag) => (
                  <span key={tag} className="tag-pill">
                    {tag}
                  </span>
                ))}
              </div>

              <div className="hero-buttons">
                <button className="primary-btn">View Projects</button>
                <button className="secondary-btn">Resume</button>
              </div>
            </div>

            <div className="hero-right">
              {previewProjects.map((project) => (
                <div
                  key={project.title}
                  className={`preview-card ${
                    project.glow ? "preview-card-glow" : ""
                  }`}
                >
                  <div className="preview-image">
                    <div className="preview-image-inner" />
                  </div>
                  <h3 className="preview-title">{project.title}</h3>
                  <p className="preview-subtitle">{project.subtitle}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="projects-section">
          <div className="projects-head">
            <div>
              <p className="projects-eyebrow">Selected Engineering Work</p>
              <h2 className="projects-heading">Projects</h2>
            </div>

            <p className="projects-intro">
              A mix of embedded systems, FPGA design, AI, instrumentation, and
              real-world systems engineering.
            </p>
          </div>

          <div className="projects-layout">
            <article
              className="project-featured-card"
              onClick={() => setSelectedProject(featuredProject)}
            >
              <div className="featured-top">
                <div className="featured-label">Featured Project</div>
                <div className="featured-mini-line" />
              </div>

              <div className="project-image featured-image">
                <div className="project-image-inner featured-image-inner">
                  <div className="featured-orb orb-one" />
                  <div className="featured-orb orb-two" />
                  <div className="featured-grid-lines" />
                </div>
              </div>

              <div className="featured-content">
                <p className="project-category">{featuredProject.category}</p>

                <h3 className="project-title featured-title">
                  {featuredProject.title}
                </h3>

                <p className="featured-subtitle">{featuredProject.subtitle}</p>

                <p className="project-description">
                  {featuredProject.description}
                </p>

                <div className="project-tech-row">
                  {featuredProject.tech.map((item) => (
                    <span key={item} className="project-tech-pill">
                      {item}
                    </span>
                  ))}
                </div>

                <div className="project-actions">
                  <button className="project-btn-primary">Open Project</button>
                  <button className="project-btn-secondary">GitHub</button>
                </div>
              </div>
            </article>

            <div className="projects-side-column">
              
            {sideProjects.map((project, index) => (
              <article
                key={project.title}
                className={`project-side-card side-tilt-${(index % 3) + 1}`}
                onClick={() => setSelectedProject(project)}
                onMouseMove={(e) => {
                  const rect = e.currentTarget.getBoundingClientRect();
                  const x = e.clientX - rect.left;
                  const y = e.clientY - rect.top;

                  const centerX = rect.width / 2;
                  const centerY = rect.height / 2;

                  const rotateX = ((y - centerY) / centerY) * -4;
                  const rotateY = ((x - centerX) / centerX) * 4;

                  e.currentTarget.style.setProperty("--mx", `${x}px`);
                  e.currentTarget.style.setProperty("--my", `${y}px`);
                  e.currentTarget.style.transform =
                    `translateX(8px) scale(1.015) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
                }}

                onMouseLeave={(e) => {
                  e.currentTarget.style.setProperty("--mx", `50%`);
                  e.currentTarget.style.setProperty("--my", `50%`);
                  e.currentTarget.style.transform = "";
                }}
              >
                <div className="side-card-left">
                  <div className="side-number">0{index + 2}</div>
                </div>

                <div className="side-card-middle">
                  <p className="project-category side-category">
                    {project.shortCategory}
                  </p>
                  <h3 className="side-title">{project.title}</h3>
                  <p className="side-subtitle">{project.subtitle}</p>
                </div>

                <div className="side-card-right">
                  <div className="side-arrow">↗</div>
                </div>
              </article>
            ))}

            </div>
          </div>
        </section>
      </main>

      {selectedProject && (
        <div className="project-modal-overlay" onClick={() => setSelectedProject(null)}>
          <div
            className="project-modal"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="modal-close"
              onClick={() => setSelectedProject(null)}
            >
              ×
            </button>

            <div className="modal-top">
              <div className="modal-visual">
                <div className="modal-visual-inner">
                  <div className="modal-glow-circle glow-a" />
                  <div className="modal-glow-circle glow-b" />
                  <div className="modal-grid" />
                </div>
              </div>

              <div className="modal-info">
                <p className="project-category">{selectedProject.category}</p>
                <h2 className="modal-title">{selectedProject.title}</h2>
                <p className="modal-subtitle">{selectedProject.subtitle}</p>

                <p className="modal-description">
                  {selectedProject.description}
                </p>

                <div className="modal-tech">
                  {selectedProject.tech.map((item) => (
                    <span key={item} className="project-tech-pill">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="modal-bottom">
              <div className="modal-section">
                <h3 className="modal-section-title">Overview</h3>
                <p className="modal-section-text">{selectedProject.details}</p>
              </div>

              <div className="modal-grid-sections">
                <div className="modal-mini-card">
                  <h4 className="modal-mini-title">Problem</h4>
                  <p className="modal-mini-text">
                    Identify a real challenge and turn it into a usable
                    engineering solution.
                  </p>
                </div>

                <div className="modal-mini-card">
                  <h4 className="modal-mini-title">Approach</h4>
                  <p className="modal-mini-text">
                    Combine technical design, testing, and structured system
                    thinking.
                  </p>
                </div>

                <div className="modal-mini-card">
                  <h4 className="modal-mini-title">Result</h4>
                  <p className="modal-mini-text">
                    A strong portfolio project with both technical and visual
                    impact.
                  </p>
                </div>
              </div>

              <div className="modal-actions">
                <button className="project-btn-primary">Live Demo</button>
                <button className="project-btn-secondary">GitHub</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}