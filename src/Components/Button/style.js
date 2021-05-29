import styled from "styled-components";

export const ButtonElm = styled.button`
  text-transform: uppercase;
  font-weight: 600;
  font-size: 16px;
  border-radius: 40px;
  background-color: ${props => props.primary ? '#f00' : '#f4f4f4'};
  color: ${props => props.primary ? '#ffffff' : '#444444'};
  border: 0 none;
  padding: 1rem 2rem;
`;