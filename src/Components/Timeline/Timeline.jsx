import React from 'react';
import './Timeline.css';

const Timeline = () => {
  return (
    <div className="container" id="timeline">
      <main className="row">
        <section className="col">
          <header className="title">
            <h2>EDUCATION</h2>
          </header>
          <div className="contents">
            <div className="box">
              <h4>2021 - 2025</h4>
              <h3>CSE, B.Tech</h3>
              <h3>Birla Institute of Technology, Mesra</h3>
              <p>
                I am pursuing a Bachelor's in Computer Science and Engineering at BIT, Mesra. I have completed 6 semesters and have a CGPA of 8.47. I have taken courses in Data Structures, Algorithms, Object-Oriented Programming, Database Management Systems, Operating Systems, and Computer Networks, among others.
              </p>
            </div>
            <div className="box">
              <h4>2020 - 2021</h4>
              <h3>12th, RBSE</h3>
              <h3>Sarvodaya Sikshan Sansthan</h3>
              <p>
                I completed my 12th high school education class at Sarvodaya Sikshan Sansthan. <br /> Score: 96.8%
              </p>
            </div>
            <div className="box">
              <h4>2018 - 2019</h4>
              <h3>10th, RBSE</h3>
              <h3>Maruti Inter School</h3>
              <p>
                I completed my 10th Secondary school education class at Maruti Inter School. <br /> Score: 86.67%
              </p>
            </div>
          </div>
        </section>
        <section className="col">
          <header className="title">
            <h2>EXPERIENCE</h2>
          </header>
          <div className="contents">
          <div className="box">
              <h4>06/2024 - 09/2024</h4>
              <h3>Software Developer Intern</h3>
              <h3>MetaFox Technologies</h3>
              <p>
              ◦ Led the development of 6 innovative web and software projects, handling both frontend and backend tasks.<br/>
              ◦ Collaborated actively with the project manager and a team of 5 dedicated developers, reducing project delivery time by 25%.<br/>
              ◦ Optimized and thoroughly refactored codebases, significantly improving overall performance and scalability by 15%.<br/>
              ◦ Tackled 12 complex web application challenges, significantly strengthening and enhancing technical expertise.<br/>
              </p>
            </div>
            <div className="box">
              <h4>11/2023 - 01/2024</h4>
              <h3>Frontend Intern</h3>
              <h3>Haripratap Trust Memorial</h3>
              <p>
                ◦ Crafted a website offering concise information about the NGO and facilitating volunteer connections. <br />
                ◦ Contributed to developing frontend components for the Haripratap Trust Memorial’s web applications. <br />
                ◦ Collaborated with the design and development teams to implement user interface enhancements tailored to the organization’s needs. <br />
                ◦ Assisted in optimizing the frontend performance and user experience of the Trust’s digital platforms. <br />
                Link: <a href="https://hariprataptrust.org.in" target="_blank" rel="noopener noreferrer">hariprataptrust.org.in</a>
              </p>
            </div>
            <div className="box">
              <h4>09/2023 - 10/2023</h4>
              <h3>Frontend Intern</h3>
              <h3>CodeClause</h3>
              <p>
                ◦ Contributed to the development of frontend components for web applications. <br />
                ◦ Collaborated with the design and development teams to implement user interface enhancements.
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Timeline;
