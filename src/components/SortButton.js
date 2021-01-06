import styled from 'styled-components';

export const SortButton = styled.button`
  border: 2px solid green;
  display: block;
  margin: 0 auto;
  color: green;
  padding: 1.5rem 2.5rem;
  border-radius: 40px;
  font-size: ${(props) => props.theme.FONT_SIZES.sm};
  cursor: pointer;
  font-weight: bold;
  transition: 0.2s;
  &:hover {
    cursor: pointer;
    background-color: rgba(0, 0, 0, 0.3);
  }
  &:disabled {
    cursor: auto;
    opacity: 0.3;
  }
`;
