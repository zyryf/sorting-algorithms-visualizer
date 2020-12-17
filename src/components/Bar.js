import React from 'react';
import styled from 'styled-components';

const BarContent = styled.div`
  width: 10px;
  height: ${(props) => props.height};
  background-color: ${(props) => props.color};
  border-radius: 3px;
  margin: 0 0.2rem;
  transition: 0.5s;
`;

const Bar = ({ height, color }) => {
  return (
    <>
      <BarContent height={height} color={color} />
    </>
  );
};

export default Bar;
