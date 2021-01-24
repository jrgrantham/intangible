import React from "react";
import styled from "styled-components";

export default function Homepage() {
  return (
    <Container>
      <div className="title">
        <h1>intangible engineering</h1>
        <p>site coming soon</p>
        <a href="https://jamesgrantham.me">visit developer</a>
      </div>
    </Container>
  );
}

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  /* background-color: #DED721; */
  height: 100vh;

  .title {
    color: #2128de;
    color: white;
    background-image: linear-gradient(to right, #376b92, #51ae59);
    padding: 10vh 0;

  }
  h1 {
    margin-bottom: 50px;
    font-size: 8vw;
  }

  p,
  a {
    color: white;
  }
`;
