/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Container, Grid, SvgIcon } from "@material-ui/core";
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import { Link } from "react-router-dom";

export const AboutPage = () => {
  return (
    <div>
      <header>
      <Link to="/"><h1>An</h1></Link>
      <nav className="right-side">
       <h3><a href="/">Projects</a></h3> 
       <h3><a href="https://www.dropbox.com/s/zscji0weg7yodhn/Amalia%20Nurlita%20-%20Resume.pdf?dl=0" rel="noopener noreferrer" target="_blank">Resume</a></h3>
        <Link to="/about"><h3>About</h3></Link>
       <h3><a href="#contact">Contact</a></h3> 
      </nav>
    </header>
      <section className="aboutMe">
      <Container maxWidth="lg">
        <h1>A little bit About Me</h1>
        <h3>
          My name is Amalia Nurlita, but just call me Amal. I was born in
          Surabaya, Indonesia and currently I live here with my family. I have
          my Bachelor's degree focused on Economics from Universitas Airlangga.
          I'm passionate about programming and design. I'm constantly learning
          about new things everyday and I love meeting peoples who unafraid
          sharing their ideas.{" "}
        </h3>
        <h3>
          I learn about Frontend Developer from March 2020, mainly learning
          about JavaScript and React JS. I'm also curious learning about UI
          design, usually I learn about it from online courses and implement it
          using Figma. I currently very motivated to explore my capabilities by
          taking a new opportunity for my journey.
        </h3>
        <h3>I'm always open to collaborate. Reach out and let's discuss it!</h3>
        </Container>
      </section>
      <section className="reachOut">
        <Grid container>
          <Grid item lg={7} xs={12} md={6}>
            <div className="connect" id="contact">
              <h1>Let's Connect</h1>
              <h4>I always open for the opportunity, so let's connect or <br/> just to say hello!</h4>
              <h2><a  href="mailto:amalianurlita97@gmail.com">amalianurlita97@gmail.com</a></h2>
            </div>
              <div className="icons">
              <a href="https://www.linkedin.com/in/amalia-nurlita-0b0a7a153/" rel="noopener noreferrer" target="_blank"><SvgIcon component={LinkedInIcon} style={{ fontSize: 50, }} className="linkedin"/></a>
              <a href="http://github.com/amalianrlt/" rel="noopener noreferrer" target="_blank"> <SvgIcon component={GitHubIcon} style={{ fontSize: 40 }}/></a>
            </div>
          </Grid>
        <Grid item lg={5} xs={12} md={6}>
          <div className="skills">
          <h1>Skills</h1>
          <div className="coding">
            <h3>Coding</h3>
              <div className="codingChild">
                <p><a className="tagsButton">HTML/CSS</a></p>
                <p><a className="tagsButton">JavaScript</a></p>
                <p><a className="tagsButton">Git</a></p>
                <p><a className="tagsButton">ReactJs</a></p>
                <p><a className="tagsButton">CSS Libraries</a></p>
                <p><a className="tagsButton">Responsive Web Design</a></p>
              </div>
          </div>
          <div className="coding">
            <h3>Design</h3>
            <div className="codingChild">
              <p><a className="tagsButton">Figma</a></p>
              <p><a className="tagsButton">Adobe XD</a></p>
              <p><a className="tagsButton">Key Note</a></p>
            </div>
            
          </div>
        </div>
        </Grid>
        </Grid>
      </section>
     
    </div>
  );
};
