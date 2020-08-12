import React from "react";
import { Container, Grid, Button } from "@material-ui/core";
import protra from "../styles/images/protra.png";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";

export const MainPage = () => {
  return (
    <div>
      <Header/>
      <section className="mainHero">
        <Container maxWidth="lg">
          <Grid item xs={12} sm={8}>
            <h1>Hi, I'm Amalia Nurlita</h1>
            <h3>
              A Junior Frontend Developer, currently based in Indonesia. I'm
              passionate about improving my experiences in Coding, Design and
              constantly looking to learn new things everyday.
            </h3>
            <Button className="hero-btn" color="secondary">
              My Work
            </Button>
          </Grid>
          {/* <Grid item xs={12} sm={6}></Grid> */}
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
              <h6>About Protra</h6>
              <h4>
                Protra is another popular project management app offering the
                feature of project time tracking. This app gathers information
                on your team’s work in the form of activity reports. That’s a
                great way to analyze your team’s performance and work progress.
              </h4>
            </Grid>
          </div>
        </Container>
        <div className="protraImg">
          <img src={protra} alt="protra" className="protraImage" />
        </div>
      </section>
      <section className="otherProjects">
      <a href="#project">Jump to example</a>
      </section>
      <Footer/>
    </div>
  );
};
