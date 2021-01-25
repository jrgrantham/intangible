import React from "react";
import styled from "styled-components";

export default function Homepage() {
  const windowHeight = window.innerHeight;

  return (
    <Container style={{height: `${windowHeight}px`}}>
      <h1>intangible engineering</h1>
      <h3>WEB DEVELOPMENT</h3>
      <a href="https://jamesgrantham.me">Visit the developer</a>
    </Container>
  );
}

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  color: white;
  background-image: linear-gradient(to right, #376b92, #51ae59);

  h1 {
    margin: 20vh 0 10px 0;
    font-size: 8vw;
  }

  a {
    margin-top: 30vh;
    text-decoration: none;
    color: white;
  }
`;
