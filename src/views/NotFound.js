import React from 'react'
import { Container } from '@material-ui/core'
import { Link } from 'react-router-dom'

export const NotFound = () => {
  return (
    <div>
      <Container style={{marginTop:"2rem"}}>
        <h1>Oops, you have access to the wrong path, please go back to <span ><Link to="/" style={{color: "#f60157"}}>Home</Link></span></h1>
      </Container>
    </div>
  )
}