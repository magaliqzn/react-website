import React from "react";
import "./about.css";
import ME from "../../assets/me-about.jpg";
const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About Image" />
          </div>
        </div>
        <div className="about__content">
          <p>
            Hello! My name is Magali, I am an Argentine living in Italy and I
            like to make things that live on the Internet.<br></br>
            My interest in coding started back in 2009 when I decided to try
            editing custom clothes and furniture for the Sims (my favourite
            game). I decided to pursue civil engineering (at least I was going
            to build something), but the more I studied the more I realized that
            it was not my thing, until two years ago someone turned on my cmd
            and showed me something that made me change my paradigm, it was
            there in 2020 (in the middle of covid) that I decided to put aside
            the bricks and study web development.
          </p>
          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
