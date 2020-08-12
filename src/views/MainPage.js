/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Container, Grid, SvgIcon } from "@material-ui/core";
import protra from "../styles/images/protra.svg";
import { Link } from "react-router-dom";
import LinkIcon from '@material-ui/icons/Link';
import GitHubIcon from '@material-ui/icons/GitHub';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import myImg from '../styles/images/pictt.jpg'

export const MainPage = () => {
  return (
    <div className="mainPage">
      <header>
      <Link to="/"><h1>An</h1></Link>
      <nav className="right-side">
       <h3><a href="#project">Projects</a></h3> 
       <h3><a href="https://www.dropbox.com/s/zscji0weg7yodhn/Amalia%20Nurlita%20-%20Resume.pdf?dl=0" rel="noopener noreferrer" target="_blank">Resume</a></h3>
        <Link to="/about"><h3>About</h3></Link>
       <h3><a href="#contact">Contact</a></h3> 
      </nav>
    </header>
      <section className="mainHero" id="main">
        <Container maxWidth="lg">
          <Grid container>

          <Grid item xs={12} sm={8}>
            <h1>Hi, I'm <span>Amal</span>ia Nurlita</h1>
            <h3>
              A Junior Frontend Developer, currently based in Indonesia. I'm
              passionate about improving my experiences in Programming, Design and
              constantly looking to learn new things everyday.
            </h3>
            <h2><a href="#project">My Work</a></h2>
          </Grid>
          <Grid item xs={12} sm={4}>
            <img src={myImg} alt="myImg" className="myImg"/>
          </Grid>
          </Grid>
        </Container>
      </section>
      <section className="myProjects" id="project">
        <Container>
          <h5>
            <span>______</span>My Latest Project
          </h5>
          <div className="latestProject">
            <h1>Protra</h1>
            <h3>Solution for your Project Management</h3>
          </div>
          <div className="aboutProject">
            <Grid item xs={7}>
              <h2>About Protra</h2>
              <h4>
                Protra is another popular project management app offering the
                feature of project time tracking. This app gathers information
                on your team’s work in the form of activity reports. That’s a
                great way to analyze your team’s performance and work progress.
              </h4>
              <div className="linkProject">
              <a rel="noopener noreferrer" target="_blank"> <SvgIcon component={GitHubIcon} style={{ fontSize: 35 }}/></a>
              <a href="https://protra.herokuapp.com/" rel="noopener noreferrer" target="_blank"> 
               <h5> <span><SvgIcon component={LinkIcon} style={{ fontSize: 40 }}/></span>Live Website</h5></a>
              </div>
            </Grid>
          </div>
        </Container>
        <div className="protraImg">
          <img src={protra} alt="protra" className="protraImage" />
        </div>
      </section>
      <section className="otherProjects">
      </section>
      <Container>
      <div className="footer">
        <h2>Contact me on : </h2>
        <div className="socialMedia" id="contact">
          <h3><a href="https://www.linkedin.com/in/amalia-nurlita-0b0a7a153/" rel="noopener noreferrer" target="_blank">Linkedin</a></h3>
          <h3><a href="http://github.com/amalianrlt/" rel="noopener noreferrer" target="_blank">Github</a></h3>
          <h3><a href="mailto:amalianurlita97@gmail.com">Email</a></h3>
        </div>
        <div className="copyright">
          <h5><strong>Amalia Nurlita</strong> -  Copyright © 2020</h5>
        </div>
        <a href="#main">
          
        <div className="backTop">
        <SvgIcon component={ArrowUpwardIcon} style={{ fontSize: 40 }}/>
        <p>Back to the top</p>
        </div>
        </a>
      </div>
    </Container>
    </div>
  );
};
