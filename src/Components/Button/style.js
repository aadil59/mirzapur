import styled from "styled-components";

export const ButtonElm = styled.button`
  cursor: pointer;
  text-transform: uppercase;
  font-weight: 700;
  font-size: 16px;
  border-radius: 40px;
  background-color: ${props => props.primary ? '#f00' : '#f4f4f4'};
  color: ${props => props.primary ? '#ffffff' : '#444444'};
  border: 0 none;
  padding: ${props => props.primary ? '1rem 2rem' : '.7rem 2rem'};
`;