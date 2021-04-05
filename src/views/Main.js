/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect } from "react";
import { Container, Grid, SvgIcon } from "@material-ui/core";
import protra from "../styles/images/protra.svg";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import InstagramIcon from "@material-ui/icons/Instagram";
import LinkIcon from "@material-ui/icons/Link";
import GitHubIcon from "@material-ui/icons/GitHub";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";

import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import NavigateBefore from "@material-ui/icons/NavigateBefore";
import NavigateNext from "@material-ui/icons/NavigateNext";
import ArrowUpwardIcon from "@material-ui/icons/ArrowUpward";
import myImg from "../styles/images/amalia.jpg";
import reactjs from "../styles/images/react.png";
import sass from "../styles/images/sass.png";
import reactstrap from "../styles/images/reactstrap.png";
import redux from "../styles/images/redux.png";
import Navbar from "../components/Navbar";
import Modal from "../components/Modal";
import Lottie from "react-lottie";
import lottieMail from "../../src/lotties/mail-lottie.json";

export const Main = () => {
  const [show, setShow] = useState(false);
  const [next, setNext] = useState(false);
  const [intro, setIntro] = useState(true);
  const [aboutMe, setAboutMe] = useState(false);
  const [experience, setExperience] = useState(false);
  const [work, setWork] = useState(false);
  const [contactMe, setContactMe] = useState(false);

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: lottieMail,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  console.log(aboutMe);

  useEffect(() => {
    const body = document.querySelector("body");
    body.style.overflow = show ? "hidden" : "auto";
  }, [show]);

  return (
    <div className="mainPage" style={{ maxHeight: "100vh" }}>
      <Navbar />
      {/* <div
        onClick={() => setShow(true)}
        style={{ position: "absolute", left: "3rem", top: "3rem" }}
      >
        <p>MENU</p>
      </div> */}
      {/* <Modal onClose={() => setShow(false)} show={show} /> */}
      {intro ? (
        <div
          className="intro"
          style={{
            padding: "12rem 17rem",
            display: "flex",
            height: "100vh",
            flexDirection: "column",
            alignItems: "center",
            alignContent: "center",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              alignContent: "center",
            }}
          >
            <Grid
              item
              xs={12}
              lg={12}
              sm={8}
              md={8}
            >
              <h4
                style={{
                  fontSize: "1.2rem",
                  lineHeight: "2rem",
                  fontWeight: "lighter",
                }}
              >
                Hi, my name is
              </h4>
              <h1 style={{ fontSize: "5rem" }}>
                <span>Amal</span>ia Nurlita
              </h1>
              <h3
                style={{
                  marginTop: "2rem",
                  // maxWidth: "90%",
                  fontSize: "1.2rem",
                  lineHeight: "2rem",
                  fontWeight: "lighter",
                }}
              >
                I'm a Frontend Developer, currently based in Indonesia. I'm
                passionate about improving my experiences in Programming, Design
                and constantly looking to learn new things everyday. I build
                things for web and mobile app.
              </h3>
            </Grid>
          
          </div>
        </div>
      ) : aboutMe ? (
        <div
          className="aboutMe"
          style={{
            padding: "10rem 17rem",
            display: "flex",
            height: "100vh",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignContent: "center",
              alignItems: "center",
            }}
          >
            <div
              className="about"
              style={{
                flexDirection: "column",
                alignContent: "center",
              }}
            >
              <h2
                style={{
                  fontSize: "2rem",
                  lineHeight: "2rem",
                  // fontWeight: "lighter",
                }}
              >
                About me
              </h2>
              <h3
                style={{
                  marginTop: "2rem",
                  marginBottom: "1rem",
                  fontSize: "1.2rem",
                  lineHeight: "2rem",
                  fontWeight: "lighter",
                }}
              >
                Hello, my name is Amal, I enjoy creating things for web and
                mobile app (android and iOS). My interest in programming started
                back in 2021 when I joined a bootcamp, turns out taught me a lot
                about HTML and CSS. Fast-forward to today, my main focus is
                building web and mobile-app for clients.
                <br />A few technologies I've been working with recently:
              </h3>
              <div
                style={{
                  flexDirection: "row",
                  display: "flex",
                  justifyContent: "space-around",
                  width: "50%",
                }}
              >
                <ul>
                  <li>JavaScript (ES6+)</li>
                  <li>ReactJs</li>
                  <li>React-Native</li>
                </ul>
                <ul>
                  <li>Dart </li>
                  <li>Flutter</li>
                </ul>
              </div>
            </div>
            <img src={myImg} alt="myImg" className="myImg" />
          </div>
        </div>
      ) : experience ? (
        <div
          className="aboutMe"
          style={{
            padding: "10rem 17rem",
            display: "flex",
            height: "100vh",
            flexDirection: "row",
            alignContent: "center",
            alignItems: "center",
          }}
        >
          <div
            className="about"
            style={{
              flexDirection: "column",
              alignContent: "center",
              justifyContent: "center",
            }}
          >
            <h2
              style={{
                fontSize: "2rem",
                lineHeight: "2rem",
                // fontWeight: "lighter",
              }}
            >
              Projects
            </h2>
            <h3
              style={{
                marginTop: "2rem",
                marginBottom: "1rem",
                // maxWidth: "90%",
                fontSize: "1.2rem",
                lineHeight: "2rem",
                fontWeight: "lighter",
              }}
            >
              After 2 months joined Bootcamp, I and my friends build some
              projects for our portfolios. My very first project is Todo App, I
              build it for 2 weeks and do it by myself, and collaborating with
              the backend. The second one is the Movie App review. I finished it
              as a group consists 2 frontends and 2 backends. The last one is my
              final project named Protra.
            </h3>
          </div>
        </div>
      ) : work ? (
        <div
          className="aboutMe"
          style={{
            padding: "10rem 17rem",
            display: "flex",
            height: "100vh",
            flexDirection: "row",
            alignContent: "center",
            alignItems: "center",
          }}
        >
          <div
            className="about"
            style={{
              flexDirection: "column",
              alignContent: "center",
              justifyContent: "center",
            }}
          >
            <h2
              style={{
                fontSize: "2rem",
                lineHeight: "2rem",
                // fontWeight: "lighter",
              }}
            >
              Work Experience
            </h2>
            <h3
              style={{
                marginTop: "2rem",
                marginBottom: "1rem",
                // maxWidth: "90%",
                fontSize: "1.2rem",
                lineHeight: "2rem",
                fontWeight: "lighter",
              }}
            >
              Fow now, I've had the privilege of working at Widya Skilloka. A
              Startup company based on Yogyakarta, Indonesia.
              Here, I work as a Mobile Application Developer. In daily, I build
              both iOS and Android version for Widya Skilloka's App named
              Skillana and Widya Skilloka.
            </h3>
          </div>
        </div>
      ) : (
        <div
          className="aboutMe"
          style={{
            padding: "10rem 17rem",
            display: "flex",
            height: "100vh",
            flexDirection: "row",
            alignContent: "center",
            alignItems: "center",
          }}
        >
          <div
            className="about"
            style={{
              flexDirection: "column",
              alignContent: "center",
            }}
          >
            <h2
              style={{
                fontSize: "2rem",
                lineHeight: "2rem",
                // fontWeight: "lighter",
              }}
            >
              Contact me
            </h2>
            <div style={{ display: "flex", flexDirection: "row" }}>
              <div
                style={{
                  maxWidth: "50%",
                  justifyContent: "flex-end",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <h3>
                  I always open for the opportunity, so let's connect or just to
                  say hello!
                </h3>
                <Lottie options={defaultOptions} height={250} width={250} />
              </div>
              <div style={{ width: "50%", paddingLeft: "2rem" }}>
                <h5
                  style={{
                    fontSize: "1.2rem",
                    lineHeight: "2rem",
                    fontWeight: "lighter",
                    marginTop: "1rem",
                  }}
                >
                  Email
                </h5>
                <input style={{ width: "100%", height: "2rem" }} />
                <h5
                  style={{
                    fontSize: "1.2rem",
                    lineHeight: "2rem",
                    fontWeight: "lighter",
                    marginTop: "1rem",
                  }}
                >
                  Subject
                </h5>
                <input style={{ width: "100%", height: "2rem" }} />
                <h5
                  style={{
                    fontSize: "1.2rem",
                    lineHeight: "2rem",
                    fontWeight: "lighter",
                    marginTop: "1rem",
                  }}
                >
                  Message
                </h5>
                <textarea style={{ width: "100%", height: "5rem" }} />
                <div
                  style={{
                    backgroundColor: "#6F9B4E",
                    width: "100%",
                    borderRadius: 5,
                    padding: "3px 0",
                    marginTop: "10px",
                  }}
                >
                  <h5
                    style={{
                      fontSize: "1.2rem",
                      lineHeight: "2rem",
                      fontWeight: "normal",
                      color: "white",
                      // marginTop: "1rem",
                      textAlign: "center",
                    }}
                  >
                    Send
                  </h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          position: "absolute",
          top: "40vh",
          left: "3rem",
        }}
      >
        <a
          href="https://www.linkedin.com/in/amalia-nurlita-0b0a7a153/"
          rel="noopener noreferrer"
          target="_blank"
        >
          <SvgIcon
            component={LinkedInIcon}
            style={{ fontSize: 35, margin: "0.5rem 0" }}
          />
        </a>
        <a
          href="http://github.com/amalianrlt/"
          rel="noopener noreferrer"
          target="_blank"
        >
          <SvgIcon
            component={GitHubIcon}
            style={{ fontSize: 30, margin: "0.5rem 0" }}
          />
        </a>
        <a
          href="https://www.instagram.com/amalianrlt/"
          rel="noopener noreferrer"
          target="_blank"
        >
          <SvgIcon
            component={InstagramIcon}
            style={{ fontSize: 30, margin: "0.5rem 0" }}
          />
        </a>
      </div>
      <div style={{ position: "absolute", top: "30vh", right: "3rem" }}>
        <h4
          style={{
            marginTop: "2rem",
            fontSize: "1rem",
            lineHeight: "2rem",
            fontWeight: "lighter",
            WebkitWritingMode: "vertical-rl",
            writingMode: "vertical-rl",
          }}
        >
          <a href="mailto:amalianurlita97@gmail.com">
            amalianurlita97@gmail.com
          </a>
        </h4>
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          position: "absolute",
          bottom: "8rem",
          left: "45%",
        }}
      >
        <div
          style={{ cursor: "pointer" }}
          onClick={() => {
            setIntro(true);
            setAboutMe(false);
            setExperience(false);
            setWork(false);
            setContactMe(false);
          }}
        >
          <SvgIcon
            component={FiberManualRecordIcon}
            style={{
              fontSize: 20,
              margin: "0.5rem 0",
              color: intro ? "#e50453" : "grey",
            }}
          />
        </div>
        <div
          style={{ cursor: "pointer" }}
          onClick={() => {
            setIntro(false);
            setAboutMe(true);
            setExperience(false);
            setWork(false);
            setContactMe(false);
          }}
        >
          <SvgIcon
            component={FiberManualRecordIcon}
            style={{
              fontSize: 20,
              margin: "0.5rem 0",
              color: aboutMe ? "#e50453" : "grey",
            }}
          />
        </div>
        <div
          style={{ cursor: "pointer" }}
          onClick={() => {
            setIntro(false);
            setAboutMe(false);
            setExperience(true);
            setWork(false);
            setContactMe(false);
          }}
        >
          <SvgIcon
            component={FiberManualRecordIcon}
            style={{
              fontSize: 20,
              margin: "0.5rem 0",
              color: experience ? "#e50453" : "grey",
            }}
          />
        </div>
        <div
          style={{ cursor: "pointer" }}
          onClick={() => {
            setIntro(false);
            setAboutMe(false);
            setExperience(false);
            setWork(true);
            setContactMe(false);
          }}
        >
          <SvgIcon
            component={FiberManualRecordIcon}
            style={{
              fontSize: 20,
              margin: "0.5rem 0",
              color: work ? "#e50453" : "grey",
            }}
          />
        </div>
        <div
          style={{ cursor: "pointer" }}
          onClick={() => {
            setIntro(false);
            setAboutMe(false);
            setExperience(false);
            setWork(false);
            setContactMe(true);
          }}
        >
          <SvgIcon
            component={FiberManualRecordIcon}
            style={{
              fontSize: 20,
              margin: "0.5rem 0",
              color: contactMe ? "#e50453" : "grey",
            }}
          />
        </div>
      </div>

      {/* <section className="mainHero" id="main">
        <Container maxWidth="lg" style={{ padding: "0 4rem" }}>
          <Grid
            container
            style={{
              justifyContent: "space-between",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <Grid item xs={12} lg={8} sm={8} md={8}>
              <h1>
                Hi, I'm <span>Amal</span>ia Nurlita
              </h1>
              <h3>
                A Frontend Developer, currently based in Indonesia. I'm
                passionate about improving my experiences in Programming, Design
                and constantly looking to learn new things everyday. For now,
                I'm enjoying my role as a Mobile Application Developer.
              </h3>
              <div
                className="desc"
                style={{
                  display: "flex",
                  alignItems: "center",
                  marginTop: "2rem",
                }}
              >
                <h4>
                  <a href="#contact">Contact Me</a>
                </h4>
              </div>
            </Grid>
            <Grid
              item
              xs={12}
              lg={4}
              sm={4}
              md={4}
              style={{ display: "flex", justifyContent: "flex-end" }}
            >
              <img src={myImg} alt="myImg" className="myImg" />
            </Grid>
          </Grid>
        </Container>
      </section>
      <section className="myProjects" id="project">
        <Container>
          <h5>My Latest Project</h5>
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
          </Container>
        </div>
        <div className="ourTeam">
          <Container>
            <Grid container>
              <Grid item xs={12} lg={5} sm={12} md={5}>
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
              <Grid item xs={12} lg={7} sm={12} md={7}>
                <img src={protra} alt="protraImage" className="protraImage" />
              </Grid>
            </Grid>
          </Container>
        </div>
      </section>
      <section className="otherProjects"></section>
      <Container>
        <div className="footer">
          <h2>Contact me on : </h2>
          <div className="socialMedia" id="contact">
            <h3>
              <a
                href="https://www.linkedin.com/in/amalia-nurlita-0b0a7a153/"
                rel="noopener noreferrer"
                target="_blank"
              >
                Linkedin
              </a>
            </h3>
            <h3>
              <a
                href="http://github.com/amalianrlt/"
                rel="noopener noreferrer"
                target="_blank"
              >
                Github
              </a>
            </h3>
            <h3>
              <a href="mailto:amalianurlita14@gmail.com">Email</a>
            </h3>
          </div>
          <div className="copyright">
            <h5>
              <strong>Amalia Nurlita</strong> - Copyright © 2020
            </h5>
          </div>
          <a href="#main">
            <div className="backTop">
              <SvgIcon component={ArrowUpwardIcon} style={{ fontSize: 40 }} />
              <p>Back to the top</p>
            </div>
          </a>
        </div>
      </Container> */}
    </div>
  );
};
