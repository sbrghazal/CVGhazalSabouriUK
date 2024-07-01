import React from 'react';

function Projects() {
  return (
    <section className="projects">
      <h2>Projects</h2>
      <div className="project-item">
        <h3>Personal CV website</h3>
        <ul>
          <li>Created a clean, user-friendly interface with HTML and CSS</li>
          <li>
            Built a responsive and dynamic single-page application using React
          </li>
          <li>
            Hosted the site on a platform like GitHub Pages for easy access and
            maintenance
          </li>
        </ul>
      </div>
      <div className="project-item">
        <h3>Task organiser</h3>
        <ul>
          <li>Designed the UI using Figma and Adobe Illustrator</li>
          <li>
            Developed a To-Do application using Javascript (Node.js, Express.js)
            and PostgreSQL
          </li>
          <li>Enabled user registration and task management</li>
        </ul>
      </div>

      <div className="project-item">
        <h3>Stop Watch</h3>
        <ul>
          <li>
            Developed a C# Winform stopwatch using MS Visual Studio to track
            running times for athletes
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Projects;
