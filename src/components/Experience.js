import React from 'react';

function Experience() {
  return (
    <section className="experience">
      <h2>Experience</h2>
      <div className="experience-item">
        <h3>Fatap | HTML, CSS, Javascript and React</h3>
        <p>Software Engineer Intern | Apr 2021 – Apr 2022</p>
        <ul>
          <li>
            HTML, CSS, Javascript and React: Developed responsive web pages,
            enhancing user experience and improving load times by 20%
          </li>
          <li>
            Database design and creation: designed a secure database for user
            authorisation, increasing data processing efficiency by 30%
          </li>
          <li>Microsoft Azure: managed SQL Server reducing downtime by 25%</li>
          <li>
            Git and Github: Implemented version control, improving code
            reliability and accelerating development cycles
          </li>
        </ul>
      </div>
      <div className="experience-item">
        <h3>Ferdows Institute of Higher Education</h3>
        <p>Teaching Assistant | June 2020 – August 2020</p>
        <ul>
          <li>Taught course material effectively to students</li>
          <li>Developed innovative and new teaching method</li>
          <li>Evaluated and corrected student projects</li>
        </ul>
      </div>
    </section>
  );
}

export default Experience;
