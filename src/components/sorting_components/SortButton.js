import styled from 'styled-components';

export const SortButton = styled.button`
  border: none;
  width: 100%;
  border-radius: 16px;
  background-color: white;
  padding: 1rem;
  font-family: 'Montserrat', sans-serif;
  font-size: ${(props) => props.theme.FONT_SIZES.sm};
  font-weight: bold;
  color: ${(props) => props.theme.COLORS.dark_blue};
  cursor: pointer;
  transition: all 0.1s ease-in-out;
  box-shadow: -6px -6px 10px rgba(255, 255, 255, 0.8),
    6px 6px 10px rgba(0, 84, 222, 0.4);
  &:hover {
    opacity: 0.3;
    box-shadow: -6px -6px 10px rgba(255, 255, 255, 0.8),
      6px 6px 10px rgba(0, 0, 0, 0.2);
  }
`;
