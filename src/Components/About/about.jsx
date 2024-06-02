import React, { useEffect, useRef } from 'react';
import CountUp from 'react-countup';
import { FaCss3Alt, FaDatabase, FaHtml5, FaJava, FaJs, FaReact } from 'react-icons/fa';
import nam from '../../assets/nam.jpg';
import './About.css';

const About = () => {
  const aboutLeftRef = useRef(null);
  const aboutRightRef = useRef(null);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    };

    const observerCallback = (entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate');
          observer.unobserve(entry.target);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    if (aboutLeftRef.current) {
      observer.observe(aboutLeftRef.current);
    }

    if (aboutRightRef.current) {
      observer.observe(aboutRightRef.current);
    }

    return () => {
      if (aboutLeftRef.current) {
        observer.unobserve(aboutLeftRef.current);
      }
      if (aboutRightRef.current) {
        observer.unobserve(aboutRightRef.current);
      }
    };
  }, []);

  return (
    <div id="about" className="about">
      <div className="about-sections">
        <div className="about-left" ref={aboutLeftRef}>
          <h1>About <span>Me</span></h1>
          <img src={nam} alt="Namit Goyal" />
        </div>
        <div className="about-right" ref={aboutRightRef}>
          <div className="about-para">
            <p>Passionate about continuous learning and development, I thrive in dynamic environments. My commitment to excellence and my ability to adapt make me a valuable team player. With experience in various technologies, I enjoy tackling complex problems and delivering innovative solutions.</p>
            <p>In every project, I aim to contribute meaningfully and achieve remarkable outcomes. My dedication and enthusiasm drive me to excel and make a positive impact.</p>
          </div>
          <div className="about-skills">
            <h2>Skills</h2>
            <div className="skills-grid">
              <div className="skill-icon">
                <div className="icon-box">
                  <FaHtml5 color="#E44D26" size={50} />
                </div>
                <p>HTML5</p>
              </div>
              <div className="skill-icon">
                <div className="icon-box">
                  <FaCss3Alt color="#1572B6" size={50} />
                </div>
                <p>CSS3</p>
              </div>
              <div className="skill-icon">
                <div className="icon-box">
                  <FaJs color="#F0DB4F" size={50} />
                </div>
                <p>JavaScript</p>
              </div>
              <div className="skill-icon">
                <div className="icon-box">
                  <FaReact color="#61DBFB" size={50} />
                </div>
                <p>React</p>
              </div>
              <div className="skill-icon">
                <div className="icon-box">
                  <FaJava color="#007396" size={50} />
                </div>
                <p>Java</p>
              </div>
              <div className="skill-icon">
                <div className="icon-box">
                  <FaDatabase color="#4DB33D" size={50} />
                </div>
                <p>SQL</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="about-achievements">
        <div className="about-achievement">
          <h1> <CountUp end={2}/>+</h1>
          <p>Years of Experience</p>
        </div>
        <hr />
        <div className="about-achievement">
          <h1> <CountUp start={0} end={10} duration={4} />+</h1>
          <p>Projects Completed</p>
        </div>
        <hr />
        <div className="about-achievement">
          <h1> <CountUp start={0} end={5} duration={4} />+</h1>
          <p>Happy Clients</p>
        </div>
      </div>
    </div>
  );
};

export default About;
