/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Container, Grid, SvgIcon } from "@material-ui/core";
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import Navbar from "../components/Navbar";

export const AboutPage = () => {
  return (
    <div>
    <Navbar/>
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
            <div className="education" id="education">
              <h1>Education</h1>
              <h4>Airlangga University</h4>
              <p>Bachelor of Economics • 2015 - 2019</p>
              <h4>Glints Academy</h4>
              <p>Frontend Developer Batch 6 • 2020</p>
            </div>
              <div className="courses">
              <h1>Courses</h1>
              <h4>Udemy Online Courses</h4>
              <p>Front End Web Development For Beginners • 2020</p>
              <p>The Complete React JS Course • 2020</p>
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
      <section className="letsConnect">
         <div className="connect" id="contact">
              <h1>Let's Connect</h1>
              <h4>I always open for the opportunity, so let's connect or <br/> just to say hello!</h4>
              <h2><a  href="mailto:amalianurlita14@gmail.com">amalianurlita14@gmail.com</a></h2>
            </div>
              <div className="icons">
              <a href="https://www.linkedin.com/in/amalia-nurlita-0b0a7a153/" rel="noopener noreferrer" target="_blank"><SvgIcon component={LinkedInIcon} style={{ fontSize: 50, }} className="linkedin"/></a>
              <a href="http://github.com/amalianrlt/" rel="noopener noreferrer" target="_blank"> <SvgIcon component={GitHubIcon} style={{ fontSize: 40 }}/></a>
            </div>
      </section>
     
    </div>
  );
};
