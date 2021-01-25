import React from "react";
import styled from "styled-components";

export default function Service(props) {
  console.log(props.service);
  return (
    <Container>
      <div className="contents">
        <h4>{props.service.title}</h4>
        <p>{props.service.description}</p>
      </div>
    </Container>
  );
}

export const Container = styled.div`
  margin: 15px 40px;
  width: 400px;
  border: 5px solid #448d76;
  .contents {
    padding: 20px;
    background-color: #448d76;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    margin: 5px;
  }
  h4,
  p {
    margin: 0;
    padding: 0;
    color: white;
  }
  h4 {
    margin-bottom: 10px;
  }
`;
