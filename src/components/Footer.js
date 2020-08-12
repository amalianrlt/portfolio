import React from 'react'
import Container from "@material-ui/core/Container";

export const Footer = () => {
  return (
    <Container>
      <div className="footer">
        <h2>Let's Connect</h2>
        <div className="socialMedia">
          <h3>Linkedin</h3>
          <h3>Github</h3>
          <h3>Email</h3>
        </div>
        <div className="copyright">
          <h5><strong>Amalia Nurlita</strong> -  Copyright © 2020</h5>
        </div>
      </div>
    </Container>
  )
}