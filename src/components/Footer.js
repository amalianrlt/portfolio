import React from 'react'
import Container from "@material-ui/core/Container";

export const Footer = () => {
  return (
    <Container>
      <div className="footer">
        <h2>Let's Connect</h2>
        <div className="socialMedia">
          <h3><a href="https://www.linkedin.com/in/amalia-nurlita-0b0a7a153/" rel="noopener noreferrer" target="_blank">Linkedin</a></h3>
          <h3><a href="http://github.com/amalianrlt/" rel="noopener noreferrer" target="_blank">Github</a></h3>
          <h3><a href="mailto:amalianurlita14@gmail.com">Email</a></h3>
        </div>
        <div className="copyright">
          <h5><strong>Amalia Nurlita</strong> -  Copyright © 2020</h5>
        </div>
      </div>
    </Container>
  )
}