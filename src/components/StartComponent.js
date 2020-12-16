import React from "react";
import styled from "styled-components";

import "../styles/icon.css";
import start_image from "../assets/start_image.svg";

const StartImage = styled.img`
  height: 60%;
  display: block;
`;

const Information = styled.h2`
  text-align: center;
`;

const Arrow = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  position: relative;
  border: 2px solid ${(props) => props.theme.COLORS.blue};
  background-color: rgba(0, 77, 202, 0.3);
  display: flex;
  justify-content: center;
  align-items: center;
  transform: translateY(0px);
  animation: arrow_animation 2s ease infinite;
  margin: 0 auto;
`;

const StartComponentWrapper = styled.div`
  width: 100%;
  height: 110%;
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;
const StartComponent = () => {
  return (
    <StartComponentWrapper>
      <StartImage src={start_image} />
      <Information>To begin, please generate the random data</Information>
      <Arrow>
        <i class="fas fa-angle-down"></i>
      </Arrow>
    </StartComponentWrapper>
  );
};

export default StartComponent;
