import React from "react";
import styled from "styled-components";

export default function Info() {
  return (
    <Container>
      <div>
        <h4>building user friendly websites that help promote your business
</h4>
      </div>
      {/* <div className="contents">
        <p>a service building user friendly websites that help promote your business.</p>
      </div> */}
    </Container>
  );
}

export const Container = styled.div`
  margin: 5vw;
  .contents {
    min-height: 100px;
    border-radius: 2vw;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    background-color: white;
    justify-content: center;
    padding: 25px;
  }
  h4 {
    text-align: center;
  }
  p {
    color: black;
  }
`;
