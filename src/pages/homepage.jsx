import React, { useState } from "react";
import styled, { keyframes } from "styled-components";

const background1 = "#222222";
// avg #1D3548 yusei magic
const background2 = "#17486d";
// const background2 = "#376b92";
const color1 = "#fff";
const color2 = "#65a3cf";

export default function Homepage() {
  const windowHeight = Math.max(window.innerHeight, window.innerWidth / 2, 450);
  window.onresize = function () {
    window.location.reload();
  };

  const [animationState, setAnimationState] = useState("running");
  const [statementOpacity, setStatementOpacity] = useState(0);
  const [buttonOpacity, setButtonOpacity] = useState(0);

  function titleOver() {
    setAnimationState("paused");
  }
  function titleLeave() {
    setAnimationState("running");
  }

  setTimeout(() => {
    setStatementOpacity(1);
  }, 1500);

  setTimeout(() => {
    setButtonOpacity(1);
  }, 4000);

  return (
    <Container
      animationState={animationState}
      statementOpacity={statementOpacity}
      buttonOpacity={buttonOpacity}
      style={{ height: `${windowHeight}px` }}
    >
      <section className="waves-demo">
        <h1
          className="waves"
          data-word="intangible engineering"
          onMouseOver={() => titleOver()}
          onMouseLeave={() => titleLeave()}
        >
          intangible engineering
        </h1>
      </section>
      <h3>WEB DEVELOPMENT SERVICES</h3>
      {/* <h3>Providers of simple, intuitive and easy to use applications</h3> */}
      <a href="https://jamesgrantham.me">the developer</a>
    </Container>
  );
}

const waves = keyframes`
0%, 100% { clip-path: polygon(0% 70%, 5% 74%, 10% 75%, 15% 72%, 20% 67%, 25% 65%, 30% 67%, 35% 72%, 40% 75%, 45% 74%, 50% 70%, 55% 66%, 60% 65%, 65% 68%, 70% 73%, 75% 75%, 80% 73%, 85% 68%, 90% 65%,100% 66%, 100% 100%, 0% 100%);  }
      95% { clip-path: polygon(0% 74%, 5% 75%, 10% 72%, 15% 67%, 20% 65%, 25% 67%, 30% 72%, 35% 75%, 40% 74%, 45% 70%, 50% 66%, 55% 65%, 60% 68%, 65% 73%, 70% 75%, 75% 73%, 80% 68%, 85% 65%, 90% 66%,100% 70%, 100% 100%, 0% 100%);  }
      90% { clip-path: polygon(0% 75%, 5% 72%, 10% 67%, 15% 65%, 20% 67%, 25% 72%, 30% 75%, 35% 74%, 40% 70%, 45% 66%, 50% 65%, 55% 68%, 60% 73%, 65% 75%, 70% 73%, 75% 68%, 80% 65%, 85% 66%, 90% 70%,100% 74%, 100% 100%, 0% 100%);  }
      85% { clip-path: polygon(0% 72%, 5% 67%, 10% 65%, 15% 67%, 20% 72%, 25% 75%, 30% 74%, 35% 70%, 40% 66%, 45% 65%, 50% 68%, 55% 73%, 60% 75%, 65% 73%, 70% 68%, 75% 65%, 80% 66%, 85% 70%, 90% 74%,100% 75%, 100% 100%, 0% 100%);  }
      80% { clip-path: polygon(0% 67%, 5% 65%, 10% 67%, 15% 72%, 20% 75%, 25% 74%, 30% 70%, 35% 66%, 40% 65%, 45% 68%, 50% 73%, 55% 75%, 60% 73%, 65% 68%, 70% 65%, 75% 66%, 80% 70%, 85% 74%, 90% 75%,100% 72%, 100% 100%, 0% 100%);  }
      75% { clip-path: polygon(0% 65%, 5% 67%, 10% 72%, 15% 75%, 20% 74%, 25% 70%, 30% 66%, 35% 65%, 40% 68%, 45% 73%, 50% 75%, 55% 73%, 60% 68%, 65% 65%, 70% 66%, 75% 70%, 80% 74%, 85% 75%, 90% 72%,100% 67%, 100% 100%, 0% 100%);  }
      70% { clip-path: polygon(0% 67%, 5% 72%, 10% 75%, 15% 74%, 20% 70%, 25% 66%, 30% 65%, 35% 68%, 40% 73%, 45% 75%, 50% 73%, 55% 68%, 60% 65%, 65% 66%, 70% 70%, 75% 74%, 80% 75%, 85% 72%, 90% 67%,100% 65%, 100% 100%, 0% 100%);  }
      65% { clip-path: polygon(0% 72%, 5% 75%, 10% 74%, 15% 70%, 20% 66%, 25% 65%, 30% 68%, 35% 73%, 40% 75%, 45% 73%, 50% 68%, 55% 65%, 60% 66%, 65% 70%, 70% 74%, 75% 75%, 80% 72%, 85% 67%, 90% 65%,100% 67%, 100% 100%, 0% 100%);  }
      60% { clip-path: polygon(0% 75%, 5% 74%, 10% 70%, 15% 66%, 20% 65%, 25% 68%, 30% 73%, 35% 75%, 40% 73%, 45% 68%, 50% 65%, 55% 66%, 60% 70%, 65% 74%, 70% 75%, 75% 72%, 80% 67%, 85% 65%, 90% 67%,100% 72%, 100% 100%, 0% 100%);  }
      55% { clip-path: polygon(0% 74%, 5% 70%, 10% 66%, 15% 65%, 20% 68%, 25% 73%, 30% 75%, 35% 73%, 40% 68%, 45% 65%, 50% 66%, 55% 70%, 60% 74%, 65% 75%, 70% 72%, 75% 67%, 80% 65%, 85% 67%, 90% 72%,100% 75%, 100% 100%, 0% 100%);  }
      50% { clip-path: polygon(0% 70%, 5% 66%, 10% 65%, 15% 68%, 20% 73%, 25% 75%, 30% 73%, 35% 68%, 40% 65%, 45% 66%, 50% 70%, 55% 74%, 60% 75%, 65% 72%, 70% 67%, 75% 65%, 80% 67%, 85% 72%, 90% 75%,100% 74%, 100% 100%, 0% 100%);  }
      45% { clip-path: polygon(0% 66%, 5% 65%, 10% 68%, 15% 73%, 20% 75%, 25% 73%, 30% 68%, 35% 65%, 40% 66%, 45% 70%, 50% 74%, 55% 75%, 60% 72%, 65% 67%, 70% 65%, 75% 67%, 80% 72%, 85% 75%, 90% 74%,100% 70%, 100% 100%, 0% 100%);  }
      40% { clip-path: polygon(0% 65%, 5% 68%, 10% 73%, 15% 75%, 20% 73%, 25% 68%, 30% 65%, 35% 66%, 40% 70%, 45% 74%, 50% 75%, 55% 72%, 60% 67%, 65% 65%, 70% 67%, 75% 72%, 80% 75%, 85% 74%, 90% 70%,100% 66%, 100% 100%, 0% 100%);  }
      35% { clip-path: polygon(0% 68%, 5% 73%, 10% 75%, 15% 73%, 20% 68%, 25% 65%, 30% 66%, 35% 70%, 40% 74%, 45% 75%, 50% 72%, 55% 67%, 60% 65%, 65% 67%, 70% 72%, 75% 75%, 80% 74%, 85% 70%, 90% 66%,100% 65%, 100% 100%, 0% 100%);  }
      30% { clip-path: polygon(0% 73%, 5% 75%, 10% 73%, 15% 68%, 20% 65%, 25% 66%, 30% 70%, 35% 74%, 40% 75%, 45% 72%, 50% 67%, 55% 65%, 60% 67%, 65% 72%, 70% 75%, 75% 74%, 80% 70%, 85% 66%, 90% 65%,100% 68%, 100% 100%, 0% 100%);  }
      25% { clip-path: polygon(0% 75%, 5% 73%, 10% 68%, 15% 65%, 20% 66%, 25% 70%, 30% 74%, 35% 75%, 40% 72%, 45% 67%, 50% 65%, 55% 67%, 60% 72%, 65% 75%, 70% 74%, 75% 70%, 80% 66%, 85% 65%, 90% 68%,100% 73%, 100% 100%, 0% 100%);  }
      20% { clip-path: polygon(0% 73%, 5% 68%, 10% 65%, 15% 66%, 20% 70%, 25% 74%, 30% 75%, 35% 72%, 40% 67%, 45% 65%, 50% 67%, 55% 72%, 60% 75%, 65% 74%, 70% 70%, 75% 66%, 80% 65%, 85% 68%, 90% 73%,100% 75%, 100% 100%, 0% 100%);  }
      15% { clip-path: polygon(0% 68%, 5% 65%, 10% 66%, 15% 70%, 20% 74%, 25% 75%, 30% 72%, 35% 67%, 40% 65%, 45% 67%, 50% 72%, 55% 75%, 60% 74%, 65% 70%, 70% 66%, 75% 65%, 80% 68%, 85% 73%, 90% 75%,100% 73%, 100% 100%, 0% 100%);  }
      10% { clip-path: polygon(0% 65%, 5% 66%, 10% 70%, 15% 74%, 20% 75%, 25% 72%, 30% 67%, 35% 65%, 40% 67%, 45% 72%, 50% 75%, 55% 74%, 60% 70%, 65% 66%, 70% 65%, 75% 68%, 80% 73%, 85% 75%, 90% 73%,100% 68%, 100% 100%, 0% 100%);  }
      5% { clip-path: polygon(0% 66%, 5% 70%, 10% 74%, 15% 75%, 20% 72%, 25% 67%, 30% 65%, 35% 67%, 40% 72%, 45% 75%, 50% 74%, 55% 70%, 60% 66%, 65% 65%, 70% 68%, 75% 73%, 80% 75%, 85% 73%, 90% 68%,100% 65%, 100% 100%, 0% 100%);  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-image: linear-gradient(to top right, ${background1}, ${background2});
  .waves {
    color: ${color1};
    /* -webkit-text-stroke: 1px #fff; */
    position: relative;
  }
  .waves:after {
    content: attr(data-word);
    animation-name: ${waves};
    animation-play-state: ${(props) => props.animationState};
    animation-duration: 3.5s;
    animation-iteration-count: infinite;
    animation-direction: backwards;
    position: absolute;
    top: 0;
    left: 0;
    color: ${color2};
  }
  h1 {
    font-size: max(7vw, 30px);
    margin: 20vh 0 10px 0;
    /* transition: 0.5s;
    &:hover {
      color: black
    } */
  }

  h3 {
    font-size: max(2.5vw, 16px);
    opacity: ${(props) => props.statementOpacity};
    transition: opacity 5s;
    margin: 40px;
    color: ${color1};
  }
  a {
    opacity: ${(props) => props.buttonOpacity};
    text-align: center;
    margin-top: 25vh;
    text-decoration: none;
    color: ${color1};
    border: 1px solid ${color1};
    border-radius: 5px;
    padding: 0.6rem 1.6rem;
    transition: all 0.5s;
    font-weight: bold;
    &:hover {
      border: 1px solid ${color1};
      background-color: ${background2};
    }
  }
`;
