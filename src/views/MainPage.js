/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Container, Grid, SvgIcon } from "@material-ui/core";
import protra from "../styles/images/protra.svg";
import LinkIcon from "@material-ui/icons/Link";
import GitHubIcon from "@material-ui/icons/GitHub";
import ArrowUpwardIcon from "@material-ui/icons/ArrowUpward";
import myImg from "../styles/images/amalia.jpg";
import reactjs from "../styles/images/react.png";
import sass from "../styles/images/sass.png";
import reactstrap from "../styles/images/reactstrap.png";
import redux from "../styles/images/redux.png";
import Navbar from "../components/Navbar";

export const ProjectPage = () => {
  return (
    <div className="mainPage">
      <Navbar />
      <section className="myProjects" id="project">
        <Container>
          <div className="latestProject">
            <h1>Protra</h1>
            <h3>Solution for your Project Management</h3>
          </div>
          <div className="aboutProject">
            <Grid item lg={7} md={8} xs={12}>
              <h3>About Protra</h3>
              <h4>
                Protra is another popular project management app offering the
                feature of project time tracking. This app gathers information
                on your team’s work in the form of activity reports. That’s a
                great way to analyze your team’s performance and work progress.
              </h4>
              <div className="linkProject">
                <a rel="noopener noreferrer" target="_blank">
                  {" "}
                  <SvgIcon component={GitHubIcon} style={{ fontSize: 35 }} />
                </a>
                <a
                  href="https://protra.herokuapp.com/"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <h5>
                    {" "}
                    <span>
                      <SvgIcon component={LinkIcon} style={{ fontSize: 40 }} />
                    </span>
                    Live Website
                  </h5>
                </a>
              </div>
            </Grid>
          </div>
        </Container>
        <div className="protraImg">
          <Container
            style={{ width: "100%", height: "80vh" }}
            className="videoProtra"
          >
            <iframe
              className="youtubeProtra"
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/SJyj9QFvbnA"
              title="Protra"
            ></iframe>
            {/* <img src={protra} alt="protra" className="protraImage" /> */}
          </Container>
        </div>
        <div className="ourTeam">
          <Container>
            <Grid container>
              <Grid item xs={12} lg={12} sm={12} md={5}>
                <h3>Our Team</h3>
                <h5>
                  Protra's Team consist of 6 peoples, three of them are Backend
                  Developer, two of are from Frontend Developer and the rest is
                  React Native. Our main feature is we have drag and drop
                  function on the task, so user can simply dragging their task
                  into another card, we have google login function and we also
                  can invite members to our projects. From Frontend, I implement
                  CRUD function for Task, Drag and Drop Function, and Google
                  Authorization.
                  <br />
                </h5>
                <h4>Technology</h4>
                <div className="techs">
                  <img className="tech" src={reactjs} alt="react" />
                  <img className="tech" src={redux} alt="react" />
                  <img className="tech" src={sass} alt="react" />
                  <img className="tech" src={reactstrap} alt="react" />
                </div>
              </Grid>
              <Grid item xs={12} lg={12} sm={12} md={7}>
                <img src={protra} alt="protraImage" className="protraImage" />
              </Grid>
            </Grid>
          </Container>
        </div>
      </section>
    </div>
  );
};
