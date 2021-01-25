// #448D76

import React from "react";
import styled from "styled-components";

import Service from './service';
import { services } from "../data/services";

export default function ServiceList() {
  return (
    <Container>
      {/* <div className="clients"> */}
        {services.map((service, index) => (
          <Service service={service} />
        ))}
      {/* </div> */}
    </Container>
  );
}

export const Container = styled.div`
/* border: 1px solid red; */
/* width: 100vw; */
margin-top: 15px;
display: flex;
flex-direction: row;
flex-wrap: wrap;
justify-content: center;
  p {
    color: black;
  }
`;
