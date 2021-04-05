/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Container, Grid } from "@material-ui/core";
import Navbar from "../components/Navbar";

export const AboutPage = () => {
  return (
    <div>
      <Navbar />
      <section className="aboutMe">
        <Container maxWidth="lg">
          <h1>A little bit About Me</h1>
          <h3>
            I'm a Frontend Developer, I build website and mobile app. Back
            before I'm an Economics student and started my first job as a
            finance consultant. Then, I started coding from March 2020, I took
            frontend developer bootcamp at Glints Academy. I'm passionate about
            programming and design. I'm also curious learning about UI design,
            usually I learn about it from online courses and implement it using
            Figma.
          </h3>
          <h3>
            As a Frontend Developer, I'm very motivated to explore my
            capabilities by taking a new opportunity for my journey. I'm not
            gonna stop here, I want to expand my skills more and learn something
            new. I also always open to collaborating.
          </h3>
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
                  <p>
                    <a className="tagsButton">HTML/CSS</a>
                  </p>
                  <p>
                    <a className="tagsButton">JavaScript</a>
                  </p>
                  <p>
                    <a className="tagsButton">Git</a>
                  </p>
                  <p>
                    <a className="tagsButton">ReactJs</a>
                  </p>
                  <p>
                    <a className="tagsButton">React Native</a>
                  </p>
                  <p>
                    <a className="tagsButton">Dart</a>
                  </p>
                  <p>
                    <a className="tagsButton">Flutter</a>
                  </p>
                  <p>
                    <a className="tagsButton">Responsive Web Design</a>
                  </p>
                  <p>
                    <a className="tagsButton">CSS Libraries</a>
                  </p>
                </div>
              </div>
              <div className="coding">
                <h3>Software</h3>
                <div className="codingChild">
                  <p>
                    <a className="tagsButton">Figma</a>
                  </p>
                  <p>
                    <a className="tagsButton">Adobe XD</a>
                  </p>
                  <p>
                    <a className="tagsButton">Key Note</a>
                  </p>
                  <p>
                    <a className="tagsButton">Xcode</a>
                  </p>
                  <p>
                    <a className="tagsButton">Visual Studio Code</a>
                  </p>
                  <p>
                    <a className="tagsButton">Table Plus</a>
                  </p>
                  <p>
                    <a className="tagsButton">Trello</a>
                  </p>
                  <p>
                    <a className="tagsButton">Postman</a>
                  </p>
                </div>
              </div>
            </div>
          </Grid>
        </Grid>
      </section>
    </div>
  );
};
