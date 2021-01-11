import React from 'react';
import styled, { keyframes } from 'styled-components';

const enter = keyframes`
  from {
    transform: scale(0);
  }

  to {
    transform: scale(1);
  }
`;

const BarContent = styled.div`
  width: 10px;
  height: ${(props) => props.height};
  background-color: ${(props) => props.color};
  border-radius: 3px;
  margin: 0 0.2rem;
  @media (max-width: 992px) {
    width: 8px;
  }
  @media (max-width: 772px) {
    width: 6px;
    margin: 0 1px;
  }
  @media (max-width: 576px) {
    width: 4px;
    margin: 0 1px;
  }
`;
const BarWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  height: 100%;
  transform: scale(1);
  animation: ${enter} 1s;
`;

const Bar = ({ height, color }) => {
  return (
    <BarWrapper>
      <BarContent height={height} color={color} />
    </BarWrapper>
  );
};

export default Bar;
