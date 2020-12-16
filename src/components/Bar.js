import React from "react";
import styled from "styled-components";

const BarContent = styled.div`
  width: 10px;
  height: ${(props) => props.height};
  background-color: ${(props) => props.theme.COLORS.light_blue};
  border-radius: 3px;
  margin: 0 0.2rem;
  transition: 0.5s;
`;

const Bar = ({ height }) => {
  return (
    <>
      <BarContent height={height} />
    </>
  );
};

export default Bar;
