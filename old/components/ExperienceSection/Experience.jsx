import React from 'react';
import './Experience.css';

const experiences = [
  {
    date: '2025 - 2024',
    company: 'Company Name',
    title: 'Job Role Title',
    description: 'Description',
    side: 'left',
  },
  {
    date: '2023 - 2024',
    company: 'Company Name',
    title: 'Job Role Title',
    description: 'Description',
    side: 'right',
  },
  {
    date: '2022 - 2023',
    company: 'Company Name',
    title: 'Job Role Title',
    description: 'Description',
    side: 'left',
  },
];

const Experience = () => {
  return (
    <section id="experience" className="timeline-container">
      <div className="timeline">
        {experiences.map((exp, index) => (
          <div key={index} className={`timeline-item ${exp.side}`}>
            <div className="content">
              <p className="date">Date: {exp.date}</p>
              <p className="company">{exp.company}</p>
              <p className="title">{exp.title}</p>
              <p className="desc">{exp.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
