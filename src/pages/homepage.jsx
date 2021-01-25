import React from "react";
import styled from "styled-components";

export default function Homepage() {
  const windowHeight = window.innerHeight;

  window.onresize = function () {
    window.location.reload();
  }

  return (
    <Container style={{ height: `${windowHeight}px` }}>
      <h1>intangible engineering</h1>
      <h3>WEB DEVELOPMENT SERVICE</h3>
      <a href="https://jamesgrantham.me">Visit the developer</a>
    </Container>
  );
}

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  /* text-align: center; */
  color: white;
  background-image: linear-gradient(to right, #376b92, #51ae59);

  h1 {
    margin: 20vh 0 10px 0;
    font-size: max(7vw, 30px);
  }

  h3 {
    font-size: max(2vw, 16px);
  }
  a {
    text-align: center;
    margin-top: 30vh;
    text-decoration: none;
    color: white;
    border: 1px solid white;
    border-radius: 5px;
    padding: 0.6rem 1.6rem;
    /* width: 100px; */
  }
`;
