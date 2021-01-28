import React, { useState } from "react";
import styled, { keyframes } from "styled-components";

const background1 = "#222222";
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
  }, 500);

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
  0%, 100% { clip-path: polygon(0% 55%, 5% 59%, 10% 60%, 15% 57%, 20% 52%, 25% 50%, 30% 52%, 35% 57%, 40% 60%, 45% 59%, 50% 55%, 55% 51%, 60% 50%, 65% 53%, 70% 58%, 75% 60%, 80% 58%, 85% 53%, 90% 50%,100% 51%, 100% 100%, 0% 100%);  }
      95% { clip-path: polygon(0% 59%, 5% 60%, 10% 57%, 15% 52%, 20% 50%, 25% 52%, 30% 57%, 35% 60%, 40% 59%, 45% 55%, 50% 51%, 55% 50%, 60% 53%, 65% 58%, 70% 60%, 75% 58%, 80% 53%, 85% 50%, 90% 51%,100% 55%, 100% 100%, 0% 100%);  }
      90% { clip-path: polygon(0% 60%, 5% 57%, 10% 52%, 15% 50%, 20% 52%, 25% 57%, 30% 60%, 35% 59%, 40% 55%, 45% 51%, 50% 50%, 55% 53%, 60% 58%, 65% 60%, 70% 58%, 75% 53%, 80% 50%, 85% 51%, 90% 55%,100% 59%, 100% 100%, 0% 100%);  }
      85% { clip-path: polygon(0% 57%, 5% 52%, 10% 50%, 15% 52%, 20% 57%, 25% 60%, 30% 59%, 35% 55%, 40% 51%, 45% 50%, 50% 53%, 55% 58%, 60% 60%, 65% 58%, 70% 53%, 75% 50%, 80% 51%, 85% 55%, 90% 59%,100% 60%, 100% 100%, 0% 100%);  }
      80% { clip-path: polygon(0% 52%, 5% 50%, 10% 52%, 15% 57%, 20% 60%, 25% 59%, 30% 55%, 35% 51%, 40% 50%, 45% 53%, 50% 58%, 55% 60%, 60% 58%, 65% 53%, 70% 50%, 75% 51%, 80% 55%, 85% 59%, 90% 60%,100% 57%, 100% 100%, 0% 100%);  }
      75% { clip-path: polygon(0% 50%, 5% 52%, 10% 57%, 15% 60%, 20% 59%, 25% 55%, 30% 51%, 35% 50%, 40% 53%, 45% 58%, 50% 60%, 55% 58%, 60% 53%, 65% 50%, 70% 51%, 75% 55%, 80% 59%, 85% 60%, 90% 57%,100% 52%, 100% 100%, 0% 100%);  }
      70% { clip-path: polygon(0% 52%, 5% 57%, 10% 60%, 15% 59%, 20% 55%, 25% 51%, 30% 50%, 35% 53%, 40% 58%, 45% 60%, 50% 58%, 55% 53%, 60% 50%, 65% 51%, 70% 55%, 75% 59%, 80% 60%, 85% 57%, 90% 52%,100% 50%, 100% 100%, 0% 100%);  }
      65% { clip-path: polygon(0% 57%, 5% 60%, 10% 59%, 15% 55%, 20% 51%, 25% 50%, 30% 53%, 35% 58%, 40% 60%, 45% 58%, 50% 53%, 55% 50%, 60% 51%, 65% 55%, 70% 59%, 75% 60%, 80% 57%, 85% 52%, 90% 50%,100% 52%, 100% 100%, 0% 100%);  }
      60% { clip-path: polygon(0% 60%, 5% 59%, 10% 55%, 15% 51%, 20% 50%, 25% 53%, 30% 58%, 35% 60%, 40% 58%, 45% 53%, 50% 50%, 55% 51%, 60% 55%, 65% 59%, 70% 60%, 75% 57%, 80% 52%, 85% 50%, 90% 52%,100% 57%, 100% 100%, 0% 100%);  }
      55% { clip-path: polygon(0% 59%, 5% 55%, 10% 51%, 15% 50%, 20% 53%, 25% 58%, 30% 60%, 35% 58%, 40% 53%, 45% 50%, 50% 51%, 55% 55%, 60% 59%, 65% 60%, 70% 57%, 75% 52%, 80% 50%, 85% 52%, 90% 57%,100% 60%, 100% 100%, 0% 100%);  }
      50% { clip-path: polygon(0% 55%, 5% 51%, 10% 50%, 15% 53%, 20% 58%, 25% 60%, 30% 58%, 35% 53%, 40% 50%, 45% 51%, 50% 55%, 55% 59%, 60% 60%, 65% 57%, 70% 52%, 75% 50%, 80% 52%, 85% 57%, 90% 60%,100% 59%, 100% 100%, 0% 100%);  }
      45% { clip-path: polygon(0% 51%, 5% 50%, 10% 53%, 15% 58%, 20% 60%, 25% 58%, 30% 53%, 35% 50%, 40% 51%, 45% 55%, 50% 59%, 55% 60%, 60% 57%, 65% 52%, 70% 50%, 75% 52%, 80% 57%, 85% 60%, 90% 59%,100% 55%, 100% 100%, 0% 100%);  }
      40% { clip-path: polygon(0% 50%, 5% 53%, 10% 58%, 15% 60%, 20% 58%, 25% 53%, 30% 50%, 35% 51%, 40% 55%, 45% 59%, 50% 60%, 55% 57%, 60% 52%, 65% 50%, 70% 52%, 75% 57%, 80% 60%, 85% 59%, 90% 55%,100% 51%, 100% 100%, 0% 100%);  }
      35% { clip-path: polygon(0% 53%, 5% 58%, 10% 60%, 15% 58%, 20% 53%, 25% 50%, 30% 51%, 35% 55%, 40% 59%, 45% 60%, 50% 57%, 55% 52%, 60% 50%, 65% 52%, 70% 57%, 75% 60%, 80% 59%, 85% 55%, 90% 51%,100% 50%, 100% 100%, 0% 100%);  }
      30% { clip-path: polygon(0% 58%, 5% 60%, 10% 58%, 15% 53%, 20% 50%, 25% 51%, 30% 55%, 35% 59%, 40% 60%, 45% 57%, 50% 52%, 55% 50%, 60% 52%, 65% 57%, 70% 60%, 75% 59%, 80% 55%, 85% 51%, 90% 50%,100% 53%, 100% 100%, 0% 100%);  }
      25% { clip-path: polygon(0% 60%, 5% 58%, 10% 53%, 15% 50%, 20% 51%, 25% 55%, 30% 59%, 35% 60%, 40% 57%, 45% 52%, 50% 50%, 55% 52%, 60% 57%, 65% 60%, 70% 59%, 75% 55%, 80% 51%, 85% 50%, 90% 53%,100% 58%, 100% 100%, 0% 100%);  }
      20% { clip-path: polygon(0% 58%, 5% 53%, 10% 50%, 15% 51%, 20% 55%, 25% 59%, 30% 60%, 35% 57%, 40% 52%, 45% 50%, 50% 52%, 55% 57%, 60% 60%, 65% 59%, 70% 55%, 75% 51%, 80% 50%, 85% 53%, 90% 58%,100% 60%, 100% 100%, 0% 100%);  }
      15% { clip-path: polygon(0% 53%, 5% 50%, 10% 51%, 15% 55%, 20% 59%, 25% 60%, 30% 57%, 35% 52%, 40% 50%, 45% 52%, 50% 57%, 55% 60%, 60% 59%, 65% 55%, 70% 51%, 75% 50%, 80% 53%, 85% 58%, 90% 60%,100% 58%, 100% 100%, 0% 100%);  }
      10% { clip-path: polygon(0% 50%, 5% 51%, 10% 55%, 15% 59%, 20% 60%, 25% 57%, 30% 52%, 35% 50%, 40% 52%, 45% 57%, 50% 60%, 55% 59%, 60% 55%, 65% 51%, 70% 50%, 75% 53%, 80% 58%, 85% 60%, 90% 58%,100% 53%, 100% 100%, 0% 100%);  }
      5% { clip-path: polygon(0% 51%, 5% 55%, 10% 59%, 15% 60%, 20% 57%, 25% 52%, 30% 50%, 35% 52%, 40% 57%, 45% 60%, 50% 59%, 55% 55%, 60% 51%, 65% 50%, 70% 53%, 75% 58%, 80% 60%, 85% 58%, 90% 53%,100% 50%, 100% 100%, 0% 100%);  }
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
  }

  h3 {
    font-size: max(2vw, 16px);
    opacity: ${(props) => props.statementOpacity};
    transition: opacity 6s;
    margin: 40px;
    color: ${color1};
  }
  a {
    opacity: ${(props) => props.buttonOpacity};
    text-align: center;
    margin-top: 30vh;
    text-decoration: none;
    color: ${color1};
    border: 1px solid ${color1};
    border-radius: 5px;
    padding: 0.6rem 1.6rem;
    /* width: 100px; */
    transition: all 0.3s;
    font-weight: bold;
    &:hover {
      /* transform: scale(1.1); */
      border: 1px solid ${color1};
      background-color: ${background2};
      /* opacity: 0.5; */
      /* color: black; */
    }
  }
`;
