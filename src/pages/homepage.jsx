import React, { useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";

const background1 = "#202020";
const background2 = "#17486d";
const waveColors = [
  "#a0a0a0",
  "#d55563",
  "#8d8d69",
  "#c9a4a0",
  "#ae8094",
  "#dc9787",
  "#86c2bd",
];
const color = "white";

export default function Homepage() {
  const windowHeight = Math.max(window.innerHeight, window.innerWidth / 2, 450);
  window.onresize = function () {
    window.location.reload();
  };

  const [animationState, setAnimationState] = useState("running");
  const [waveColor, setWaveColor] = useState(0);
  const [colorSwap, setColorSwap] = useState(false);

  function mouseOverCompany() {
    setAnimationState("paused");
  }
  function mouseLeaveCompany() {
    setAnimationState("running");
  }
  function changeWaveColor() {
    setWaveColor((waveColor + 1) % waveColors.length);
  }

  function removeHiddenElements() {
    document.getElementById("slogan").classList.remove("hide");
    setTimeout(() => {
      document.getElementById("toDeveloper").classList.remove("hide");
    }, 2000);
  }

  useEffect(() => {
    removeHiddenElements();
  });

  return (
    <Container
      animationState={animationState}
      colorSwap={colorSwap}
      waveColor={waveColors[waveColor]}
      style={{ height: `${windowHeight}px` }}
    >
      <section className="waves-demo">
        <button>
          <h1
            onClick={() => setColorSwap(!colorSwap)}
            className="screen waves"
            onMouseOver={changeWaveColor}
            data-word="intangible engineering"
          >
            intangible engineering
          </h1>
          <h1
            onClick={changeWaveColor}
            className="mobile waves"
            data-word="intangible"
          >
            intangible
          </h1>
        </button>
      </section>
      <h3 id="slogan" className="hide">
        WEB DEVELOPMENT SERVICES
        {/* <span className="vibrate">W</span>
        <span className="vibrate">E</span>
        <span className="vibrate">B</span>
        <span> </span>
        <span className="vibrate">D</span>
        <span className="vibrate">E</span>
        <span className="vibrate">V</span>
        <span className="vibrate">E</span>
        <span className="vibrate">L</span>
        <span className="vibrate">O</span>
        <span className="vibrate">P</span>
        <span className="vibrate">M</span>
        <span className="vibrate">E</span>
        <span className="vibrate">N</span>
        <span className="vibrate">T</span>
        <span> </span>
        <span className="vibrate">S</span>
        <span className="vibrate">E</span>
        <span className="vibrate">R</span>
        <span className="vibrate">V</span>
        <span className="vibrate">I</span>
        <span className="vibrate">C</span>
        <span className="vibrate">E</span>
        <span className="vibrate">S</span> */}
      </h3>
      {/* <h3>Providers of simple, intuitive and easy to use applications</h3> */}
      <a
        id="toDeveloper"
        className="hide"
        onMouseOver={() => mouseOverCompany()}
        onMouseLeave={() => mouseLeaveCompany()}
        href="https://jamesgrantham.me"
      >
        the developer
      </a>
    </Container>
  );
}

const waves = keyframes`
0%, 100% { clip-path: polygon(0% 68%, 5% 70%, 10% 72%, 15% 74%, 20% 75%, 25% 75%, 30% 75%, 35% 74%, 40% 72%, 45% 70%, 50% 68%, 55% 65%, 60% 63%, 65% 61%, 70% 60%, 75% 60%, 80% 60%, 85% 61%, 90% 63%,100% 65%, 100% 100%, 0% 100%);  }
      95% { clip-path: polygon(0% 70%, 5% 72%, 10% 74%, 15% 75%, 20% 75%, 25% 75%, 30% 74%, 35% 72%, 40% 70%, 45% 68%, 50% 65%, 55% 63%, 60% 61%, 65% 60%, 70% 60%, 75% 60%, 80% 61%, 85% 63%, 90% 65%,100% 68%, 100% 100%, 0% 100%);  }
      90% { clip-path: polygon(0% 72%, 5% 74%, 10% 75%, 15% 75%, 20% 75%, 25% 74%, 30% 72%, 35% 70%, 40% 68%, 45% 65%, 50% 63%, 55% 61%, 60% 60%, 65% 60%, 70% 60%, 75% 61%, 80% 63%, 85% 65%, 90% 68%,100% 70%, 100% 100%, 0% 100%);  }
      85% { clip-path: polygon(0% 74%, 5% 75%, 10% 75%, 15% 75%, 20% 74%, 25% 72%, 30% 70%, 35% 68%, 40% 65%, 45% 63%, 50% 61%, 55% 60%, 60% 60%, 65% 60%, 70% 61%, 75% 63%, 80% 65%, 85% 68%, 90% 70%,100% 72%, 100% 100%, 0% 100%);  }
      80% { clip-path: polygon(0% 75%, 5% 75%, 10% 75%, 15% 74%, 20% 72%, 25% 70%, 30% 68%, 35% 65%, 40% 63%, 45% 61%, 50% 60%, 55% 60%, 60% 60%, 65% 61%, 70% 63%, 75% 65%, 80% 68%, 85% 70%, 90% 72%,100% 74%, 100% 100%, 0% 100%);  }
      75% { clip-path: polygon(0% 75%, 5% 75%, 10% 74%, 15% 72%, 20% 70%, 25% 68%, 30% 65%, 35% 63%, 40% 61%, 45% 60%, 50% 60%, 55% 60%, 60% 61%, 65% 63%, 70% 65%, 75% 68%, 80% 70%, 85% 72%, 90% 74%,100% 75%, 100% 100%, 0% 100%);  }
      70% { clip-path: polygon(0% 75%, 5% 74%, 10% 72%, 15% 70%, 20% 68%, 25% 65%, 30% 63%, 35% 61%, 40% 60%, 45% 60%, 50% 60%, 55% 61%, 60% 63%, 65% 65%, 70% 68%, 75% 70%, 80% 72%, 85% 74%, 90% 75%,100% 75%, 100% 100%, 0% 100%);  }
      65% { clip-path: polygon(0% 74%, 5% 72%, 10% 70%, 15% 68%, 20% 65%, 25% 63%, 30% 61%, 35% 60%, 40% 60%, 45% 60%, 50% 61%, 55% 63%, 60% 65%, 65% 68%, 70% 70%, 75% 72%, 80% 74%, 85% 75%, 90% 75%,100% 75%, 100% 100%, 0% 100%);  }
      60% { clip-path: polygon(0% 72%, 5% 70%, 10% 68%, 15% 65%, 20% 63%, 25% 61%, 30% 60%, 35% 60%, 40% 60%, 45% 61%, 50% 63%, 55% 65%, 60% 68%, 65% 70%, 70% 72%, 75% 74%, 80% 75%, 85% 75%, 90% 75%,100% 74%, 100% 100%, 0% 100%);  }
      55% { clip-path: polygon(0% 70%, 5% 68%, 10% 65%, 15% 63%, 20% 61%, 25% 60%, 30% 60%, 35% 60%, 40% 61%, 45% 63%, 50% 65%, 55% 68%, 60% 70%, 65% 72%, 70% 74%, 75% 75%, 80% 75%, 85% 75%, 90% 74%,100% 72%, 100% 100%, 0% 100%);  }
      50% { clip-path: polygon(0% 68%, 5% 65%, 10% 63%, 15% 61%, 20% 60%, 25% 60%, 30% 60%, 35% 61%, 40% 63%, 45% 65%, 50% 68%, 55% 70%, 60% 72%, 65% 74%, 70% 75%, 75% 75%, 80% 75%, 85% 74%, 90% 72%,100% 70%, 100% 100%, 0% 100%);  }
      45% { clip-path: polygon(0% 65%, 5% 63%, 10% 61%, 15% 60%, 20% 60%, 25% 60%, 30% 61%, 35% 63%, 40% 65%, 45% 68%, 50% 70%, 55% 72%, 60% 74%, 65% 75%, 70% 75%, 75% 75%, 80% 74%, 85% 72%, 90% 70%,100% 68%, 100% 100%, 0% 100%);  }
      40% { clip-path: polygon(0% 63%, 5% 61%, 10% 60%, 15% 60%, 20% 60%, 25% 61%, 30% 63%, 35% 65%, 40% 68%, 45% 70%, 50% 72%, 55% 74%, 60% 75%, 65% 75%, 70% 75%, 75% 74%, 80% 72%, 85% 70%, 90% 68%,100% 65%, 100% 100%, 0% 100%);  }
      35% { clip-path: polygon(0% 61%, 5% 60%, 10% 60%, 15% 60%, 20% 61%, 25% 63%, 30% 65%, 35% 68%, 40% 70%, 45% 72%, 50% 74%, 55% 75%, 60% 75%, 65% 75%, 70% 74%, 75% 72%, 80% 70%, 85% 68%, 90% 65%,100% 63%, 100% 100%, 0% 100%);  }
      30% { clip-path: polygon(0% 60%, 5% 60%, 10% 60%, 15% 61%, 20% 63%, 25% 65%, 30% 68%, 35% 70%, 40% 72%, 45% 74%, 50% 75%, 55% 75%, 60% 75%, 65% 74%, 70% 72%, 75% 70%, 80% 68%, 85% 65%, 90% 63%,100% 61%, 100% 100%, 0% 100%);  }
      25% { clip-path: polygon(0% 60%, 5% 60%, 10% 61%, 15% 63%, 20% 65%, 25% 68%, 30% 70%, 35% 72%, 40% 74%, 45% 75%, 50% 75%, 55% 75%, 60% 74%, 65% 72%, 70% 70%, 75% 68%, 80% 65%, 85% 63%, 90% 61%,100% 60%, 100% 100%, 0% 100%);  }
      20% { clip-path: polygon(0% 60%, 5% 61%, 10% 63%, 15% 65%, 20% 68%, 25% 70%, 30% 72%, 35% 74%, 40% 75%, 45% 75%, 50% 75%, 55% 74%, 60% 72%, 65% 70%, 70% 68%, 75% 65%, 80% 63%, 85% 61%, 90% 60%,100% 60%, 100% 100%, 0% 100%);  }
      15% { clip-path: polygon(0% 61%, 5% 63%, 10% 65%, 15% 68%, 20% 70%, 25% 72%, 30% 74%, 35% 75%, 40% 75%, 45% 75%, 50% 74%, 55% 72%, 60% 70%, 65% 68%, 70% 65%, 75% 63%, 80% 61%, 85% 60%, 90% 60%,100% 60%, 100% 100%, 0% 100%);  }
      10% { clip-path: polygon(0% 63%, 5% 65%, 10% 68%, 15% 70%, 20% 72%, 25% 74%, 30% 75%, 35% 75%, 40% 75%, 45% 74%, 50% 72%, 55% 70%, 60% 68%, 65% 65%, 70% 63%, 75% 61%, 80% 60%, 85% 60%, 90% 60%,100% 61%, 100% 100%, 0% 100%);  }
      5% { clip-path: polygon(0% 65%, 5% 68%, 10% 70%, 15% 72%, 20% 74%, 25% 75%, 30% 75%, 35% 75%, 40% 74%, 45% 72%, 50% 70%, 55% 68%, 60% 65%, 65% 63%, 70% 61%, 75% 60%, 80% 60%, 85% 60%, 90% 61%,100% 63%, 100% 100%, 0% 100%);  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-image: linear-gradient(
    to top right,
    ${background1},
    ${background2}
  );
  .waves {
    color: ${(props) => (props.colorSwap ? (props) => props.waveColor : color)};
    /* -webkit-text-stroke: 1px #fff; */
    position: relative;
  }
  .waves:after {
    content: attr(data-word);
    animation-name: ${waves};
    animation-play-state: ${(props) => props.animationState};
    animation-duration: 4s;
    animation-iteration-count: infinite;
    animation-direction: backwards;
    position: absolute;
    top: 0;
    left: 0;
    color: ${(props) => (props.colorSwap ? color : (props) => props.waveColor)};
  }
  .screen {
    @media (max-width: 519px) {
      display: none;
    }
  }
  .mobile {
    @media (min-width: 520px) {
      display: none;
      margin-top: 10vh;
    }
  }
  .hide {
    opacity: 0;
  }
  button {
    text-align: center;
    display: inline-block;
    border: none;
    padding: 1rem 2rem;
    background: transparent;
    cursor: pointer;
    -webkit-appearance: none;
    -moz-appearance: none;
    outline: none;
    margin: 20vh 0 10px 0;
  }
  h1 {
    margin: 0;
    font-size: max(7vw, 30px);
    cursor: pointer;
    @media (max-width: 519px) {
      font-size: max(14vw, 30px);
    }
  }
  h3 {
    text-align: center;
    font-size: max(2.5vw, 18px);
    /* opacity: ${(props) => props.statementOpacity}; */
    transition: opacity 5s;
    margin: 40px 10px;
    color: ${(props) => (props.colorSwap ? (props) => props.waveColor : color)};
    @media (max-width: 519px) {
      margin-top: 20px;
    }
  }
  a {
    opacity: ${(props) => props.buttonOpacity};
    text-align: center;
    margin-top: 25vh;
    text-decoration: none;
    color: ${(props) => (props.colorSwap ? (props) => props.waveColor : color)};
    border: 1px solid
      ${(props) => (props.colorSwap ? (props) => props.waveColor : color)};
    border-radius: 5px;
    padding: 0.6rem 1.6rem;
    transition: opacity 4s, background-color 0.5s;
    font-weight: bold;
    &:hover {
      background-color: ${(props) =>
        props.colorSwap ? color : (props) => props.waveColor};
    }
    @media (max-width: 519px) {
      margin-top: 15vh;
    }
  }
`;
