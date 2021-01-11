import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

import '../styles/icon.css';
import starting_image from '../assets/starting_img.svg';
import { COLORS } from '../ThemeConstants';

const StartImage = styled.img`
  height: 60%;
  display: block;
  @media (max-width: 776px) {
    height: 50%;
  }
`;

const Information = styled.h2`
  text-align: center;
  @media (max-width: 776px) {
    font-size: 1.3rem;
  }
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
      <StartImage src={starting_image} />
      <Information>To begin, please generate the random data</Information>
      <Arrow>
        <FontAwesomeIcon icon={faChevronDown} color={COLORS.blue} />
      </Arrow>
    </StartComponentWrapper>
  );
};

export default StartComponent;
