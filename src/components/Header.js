import React from "react";
import Container from "@material-ui/core/Container";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <Container maxWidth="lg">
      <div className="header">
        <Link to="/"><h1>An</h1></Link>
        <div className="right-side">
          <Link to="#project"><h3>Projects</h3></Link>
          <Link to="/about"><h3>Resume</h3></Link>
          <Link to="/about"><h3>About</h3></Link>
          <Link to="/about"><h3>Contact</h3></Link>
        </div>
      </div>
    </Container>
  );
};
