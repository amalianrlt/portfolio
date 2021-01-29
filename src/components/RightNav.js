import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const Ul = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;
  h3 {
    font-weight: 300;
    margin: 0 1rem;
  }
  @media (max-width: 768px) {
    flex-flow: column nowrap;
    background-color: rgb(240, 240, 240);
    box-shadow: 0 4px 8px 0 rgba(155, 155, 155, 0.2),
      0 6px 20px 0 rgba(163, 163, 163, 0.19);
    position: fixed;
    transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
    top: 0;
    right: 0;
    height: 100vh;
    width: 180px;
    padding-top: 3.5rem;
    transition: transform 0.3s ease-in-out;
    h3 {
      color: #00000;
      font-size: 1.2rem;
      margin-bottom: 1.5rem;
      &:hover {
        color: #f60157;
        font-weight: 500;
      }
      a:hover {
        color: #f60157;
        font-weight: 500;
      }
    }
  }
`;

const RightNav = ({ open }) => {
  const notification = () => {
    Swal.fire({
      text: "Please contact me if you need my updated resume",
      confirmButtonColor: "black",
    });
  };

  return (
    <Ul open={open}>
      <Link to="/">
        <h3>Projects</h3>
      </Link>
      <div style={{ cursor: "pointer" }} onClick={() => notification()}>
        <h3>Resume</h3>
      </div>
      <Link to="/about">
        <h3>About</h3>
      </Link>
      <h3>
        <a href="#contact">Contact</a>
      </h3>
    </Ul>
  );
};

export default RightNav;
