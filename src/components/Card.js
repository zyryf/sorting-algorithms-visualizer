import React from "react";
import styled from "styled-components";

import Bar from "./Bar";
import StartComponent from "./StartComponent";

const GridWrapper = styled.div`
  padding: 2rem;
  height: 50vh;
  border-radius: 20px;
  box-shadow: -24px 32px 85px -13px rgba(0, 0, 0, 0.24);
  position: relative;
`;
const Bars = styled.ul`
  list-style: none;
  display: flex;
  height: 100%;
  align-items: flex-end;
  width: 75%;
`;

const Card = ({ data }) => {
  return (
    <GridWrapper>
      {data.reduce((a, b) => a + b) === 0 ? <StartComponent /> : null}
      <Bars>
        {data.map((element, index) => (
          <Bar height={`${element}%`} key={index}></Bar>
        ))}
      </Bars>
      {/* <Bar height={`100%`}></Bar>
      <Bar height={`50%`}></Bar> */}
    </GridWrapper>
  );
};

export default Card;
