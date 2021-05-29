import styled from 'styled-components';

export const Section = styled.section`
  background-color: #4b4b4b;
  color: #ffffff;
  padding: 4rem;
  h2 {
    margin-bottom: 2rem;
    &::after {
      content: '';
      display: block;
      width: 80px;
      height: 3px;
      background-color: #eeeeee;
      margin-top: 2rem;
    }
  }
  ul {
    > li {
      margin-bottom: .5rem;
      font-weight: 600;
      line-height: 1.4;
      a {
        display: inline-flex;
        margin-left: .5rem;
      }
    }
  }
`;