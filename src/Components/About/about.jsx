import React, { useEffect, useRef } from 'react';
import CountUp from 'react-countup'; // Correct import statement
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
      <div className="about-title">
        <h1>About me</h1>
        <div className="underline underline-1"></div>
        <div className="underline underline-2"></div>
      </div>
      <div className="about-sections">
        <div className="about-left" ref={aboutLeftRef}>
          <img src={nam} alt="Namit Goyal" />
        </div>
        <div className="about-right" ref={aboutRightRef}>
          <div className="about-para">
            <p>Passionate about continuous learning and development, I thrive in dynamic environments. My commitment to excellence and my ability to adapt make me a valuable team player. With experience in various technologies, I enjoy tackling complex problems and delivering innovative solutions.</p>
            <p>In every project, I aim to contribute meaningfully and achieve remarkable outcomes. My dedication and enthusiasm drive me to excel and make a positive impact.</p>
          </div>
          <div className="about-skills">
            <div className="about-skill"><p>HTML & CSS</p><hr style={{ width: "70%" }} /></div>
            <div className="about-skill"><p>JAVASCRIPT</p><hr style={{ width: "60%" }} /></div>
            <div className="about-skill"><p>REACT JS</p><hr style={{ width: "65%" }} /></div>
            <div className="about-skill"><p>C & JAVA</p><hr style={{ width: "50%" }} /></div>
            <div className="about-skill"><p>SQL</p><hr style={{ width: "45%" }} /></div>
          </div>
        </div>
      </div>
      <div className="about-achievements">
        <div className="about-achievement">
          <h1> <CountUp end={1}/>+</h1>
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
