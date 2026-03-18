import { useEffect, useState } from "react";

export default function App() {
  const previewProjects = [
    {
      title: "FocusSense Smart Workspace Optimizer",
      subtitle: "Sensors • Embedded • Web Interface",
      glow: false,
      link: "https://heaven-k.github.io/EEC172-Focussense-Final-Project/#arch",
    },
    {
      title: "Multimodal Imaging for Agriculture",
      subtitle: "Raspberry Pi • Vision • Edge AI",
      glow: true,
      link: "https://projectgemini.ucdavis.edu/",
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
        "An embedded smart workspace system that monitors environmental conditions and presents live feedback through a polished web dashboard to improve focus, comfort, and awareness.",
      tech: [
        "Embedded Systems",
        "Sensors",
        "Web Dashboard",
        "System Integration",
        "Frontend",
        "Real-Time Monitoring",
      ],
      details:
        "FocusSense is a smart workspace optimization project developed to make study and work environments more responsive and data-aware. The system collects live sensor data, processes environmental conditions, and presents them through an interactive dashboard so users can better understand and improve their workspace. This project combines physical sensing, embedded design, web interface development, and full system integration into one product-style engineering build.",
      liveLink:
        "https://heaven-k.github.io/EEC172-Focussense-Final-Project/#arch",
      githubLink: "#",
      images: [],
      overviewTitle: "Project Overview",
      overview:
        "FocusSense was built as a complete embedded systems project that connects sensing hardware with a user-facing web experience. The goal was to create a workspace assistant that can monitor conditions such as ambient light and temperature, then display meaningful live feedback in a way that feels modern, useful, and intuitive. Instead of being just a sensor demo, the project was designed to feel like a real product with both technical depth and polished presentation.",
      highlightCards: [
        {
          title: "Problem",
          text: "Study and work environments often affect focus, comfort, and productivity, but users usually have no simple way to monitor those conditions in real time.",
        },
        {
          title: "Solution",
          text: "FocusSense provides live environmental sensing with a clean dashboard that turns raw sensor readings into an understandable and usable workspace experience.",
        },
        {
          title: "Impact",
          text: "The project demonstrates full-stack engineering across hardware, embedded systems, sensing, interface design, and product-style system integration.",
        },
      ],
      sections: [
        {
          title: "What I Built:",   
          text: "FocusSense is a smart workspace project that uses embedded sensors and a web dashboard to monitor environmental conditions. It collects real-time data and presents it in a simple interface so users can quickly understand what is happening in their workspace.",
        },
        {
          title: "Key Features:",
          text: "The system includes live sensor readings, a responsive dashboard, and real-time data visualization. It combines hardware sensing with a clean web interface to create an interactive and easy-to-use experience.",
        },
        {
          title: "Engineering Work:",
          text: "This project involved sensor integration, embedded system development, hardware-software communication, and front-end dashboard design. We built a system that collects environmental data, processes it, and presents it through an interactive and user-friendly interface. The work included system design, connecting sensors, and creating a clean dashboard to visualize data in real time.",
        },
        {
          title: "Why It Matters:",
          text: "FocusSense shows my ability to bring hardware and software together into one clean experience. It takes real sensor data and turns it into something clear, interactive, and easy to understand.",
        },
      ],
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
        "This project develops a low-cost four-camera Raspberry Pi multispectral imaging system for agriculture, designed to support plant health analysis and field-level decision making. It combines multispectral sensing, RGB-based calibration, parallax correction, and edge-based computer vision to extract useful information such as vegetation traits and flower detection. The project is especially meaningful because it aims to make advanced agricultural imaging more affordable and practical for small-scale breeders and farmers.",
       liveLink:"https://projectgemini.ucdavis.edu/",
      githubLink: "#",
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
        "This project implements a matrix multiplication accelerator in Verilog using parallel hardware design. Instead of computing values step by step like software, the system performs multiple operations at the same time, significantly improving speed. Matrix multiplication is widely used in areas like machine learning, graphics, and signal processing, so accelerating it at the hardware level helps make these systems faster and more efficient.",
      liveLink: "",
      githubLink: "#",
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
        "This project builds a smart scale that estimates the number of jelly beans using a Wheatstone bridge load cell and signal conditioning. The small sensor signal is amplified using an INA125 instrumentation amplifier and a summing amplifier to fully utilize the ADC range, then read through the M2K interface and processed in MATLAB. The system converts voltage into weight using calibration and linear regression, achieving high accuracy and resolution, and includes a MATLAB GUI for real-time display, tare, calibration, and unit conversion. This project demonstrates how analog hardware, data acquisition, and software processing work together to turn physical measurements into meaningful digital information.",
      liveLink: "",
      githubLink: "#",
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
      liveLink: "",
      githubLink: "#",
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
        "This project showcases full-scale live audio systems engineering, from system design and equipment installation to signal flow architecture and real-time sound optimization. I build and manage complete audio systems involving microphones, instruments, mixers, and speakers to deliver clear and balanced sound in live environments. The work also involves live troubleshooting, rapid system adjustments, and training others on audio setup and operation. It highlights strong system-level thinking, leadership in technical environments, and the ability to deliver reliable performance under real-world pressure.",
      
      liveLink:"",
      githubLink: "#",
    },
  ];

  const featuredProject = projects[0];
  const sideProjects = projects.slice(1);

  const [selectedProject, setSelectedProject] = useState(null);
  const [sensorData, setSensorData] = useState({
    light: 67,
    temp: 20.8,
    mode: "Bright Boost (Auto)",
  });

  useEffect(() => {
    let tick = 0;

    const interval = setInterval(() => {
      tick += 1;

      const newLight = Math.round(
        64 + Math.sin(tick / 3) * 6 + Math.random() * 2
      );
      const newTemp = Number(
        (20.4 + Math.sin(tick / 4) * 0.7 + Math.random() * 0.15).toFixed(1)
      );

      let mode = "Bright Boost (Auto)";
      if (newLight < 64) mode = "Focus Warm";
      if (newLight > 71) mode = "Daylight Active";

      setSensorData({
        light: newLight,
        temp: newTemp,
        mode,
      });
    }, 1200);

    return () => clearInterval(interval);
  }, []);

  const lightWidth = `${Math.max(0, Math.min(sensorData.light, 100))}%`;
  const tempWidth = `${Math.max(0, Math.min((sensorData.temp / 30) * 100, 100))}%`;

  const SensorPreview = ({ compact = false }) => (
    <div
      className={`sensor-preview ${compact ? "sensor-preview-compact" : ""}`}
    >
      <div className="sensor-preview-grid">
        <div className="sensor-panel sensor-panel-wide">
          <div className="sensor-label">Ambient Light</div>
          <div className="sensor-value">
            {sensorData.light} <span>lux</span>
          </div>
          <div className="sensor-bar">
            <div
              className="sensor-fill sensor-fill-light"
              style={{ width: lightWidth }}
            />
          </div>
        </div>

        <div className="sensor-panel">
          <div className="sensor-label">Temperature</div>
          <div className="sensor-value">
            {sensorData.temp} <span>°C</span>
          </div>
          <div className="sensor-bar">
            <div
              className="sensor-fill sensor-fill-temp"
              style={{ width: tempWidth }}
            />
          </div>
        </div>

        <div className="sensor-panel sensor-panel-log">
          <div className="sensor-label">Mode</div>
          <div className="sensor-mode-row">
            <span className="sensor-dot"></span>
            <span>{sensorData.mode}</span>
          </div>
          <div className="sensor-mini-lines">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
    </div>
  );

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
              {previewProjects.map((project, index) => (
                <div
                  key={project.title}
                  className={`preview-card ${
                    project.glow ? "preview-card-glow" : ""
                  }`}
                >
                  {index === 0 ? (
                    <SensorPreview compact={true} />
                  ) : (
                    <div className="preview-image">
                      <div className="preview-image-inner" />
                    </div>
                  )}

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
                <SensorPreview />
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
                  {featuredProject.liveLink ? (
                    <a
                      className="project-btn-primary"
                      href={featuredProject.liveLink}
                      target="_blank"
                      rel="noreferrer"
                      onClick={(e) => e.stopPropagation()}
                    >
                      Live Demo
                    </a>
                  ) : (
                    <button className="project-btn-primary">Open Project</button>
                  )}

                  <a
                    className="project-btn-secondary"
                    href={featuredProject.githubLink}
                    target="_blank"
                    rel="noreferrer"
                    onClick={(e) => e.stopPropagation()}
                  >
                    GitHub
                  </a>
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
                    e.currentTarget.style.transform = `translateX(8px) scale(1.015) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.setProperty("--mx", "50%");
                    e.currentTarget.style.setProperty("--my", "50%");
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
        <div
          className="project-modal-overlay"
          onClick={() => setSelectedProject(null)}
        >
          <div className="project-modal" onClick={(e) => e.stopPropagation()}>
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
                <h3 className="modal-section-title">
                  {selectedProject.overviewTitle || "Overview"}
                </h3>
                <p className="modal-section-text">
                  {selectedProject.overview || selectedProject.details}
                </p>
              </div>

              {selectedProject.highlightCards && selectedProject.highlightCards.length > 0 && (
                <div className="modal-grid-sections">
                  {selectedProject.highlightCards.map((card) => (
                    <div key={card.title} className="modal-mini-card">
                      <h4 className="modal-mini-title">{card.title}</h4>
                      <p className="modal-mini-text">{card.text}</p>
                    </div>
                  ))}
                </div>
              )}

              {selectedProject.sections && selectedProject.sections.length > 0 && (
                <div className="modal-detail-list">
                  {selectedProject.sections.map((section) => (
                    <div key={section.title} className="modal-detail-card">
                      <h4 className="modal-detail-title">{section.title}</h4>
                      <p className="modal-detail-text">{section.text}</p>
                    </div>
                  ))}
                </div>
              )}

              <div className="modal-actions">
                {selectedProject.liveLink ? (
                  <a
                    className="project-btn-primary"
                    href={selectedProject.liveLink}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Live Demo
                  </a>
                ) : (
                  <button className="project-btn-primary" disabled>
                    Live Demo
                  </button>
                )}

                <a
                  className="project-btn-secondary"
                  href={selectedProject.githubLink}
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub
                </a>
              </div>
            </div>

          </div>
        </div>
      )}
    </>
  );
}