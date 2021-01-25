import React from "react";
import styled from "styled-components";

export default function Homepage() {
  return (
    <Container>
      <div className="title">
        <h1>intangible engineering</h1>
        <h4>WEB DEVELOPMENT</h4>
      </div>
    </Container>
  );
}

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;

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
