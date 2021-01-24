import React from "react";
import styled from "styled-components";


export default function Homepage() {
  return (
    <Container>
      <h1>intangible engineering</h1>
      <p>site coming soon</p>
      <a href="https://jamesgrantham.me">visit developer</a>
    </Container>
  );
}

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  background-color: #DED721;
  height: 100vh;
  background-image: linear-gradient(red, yellow);

h1 {
  padding-top: 15vh;
  font-size: 8vw;
  color: #2128DE;
  color: white;
}

p, a {
  color: white;
}
`;
