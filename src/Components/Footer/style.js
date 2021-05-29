import styled from 'styled-components';
import footer_bg from "../../assets/footer-bg.png";

export const FooterSection = styled.footer`
  margin-top: 4rem;
  background: url(${footer_bg}) no-repeat;
  background-size: cover;
  min-height: 75vh;
  background-position: 0 10rem;
  position: relative;
  color: #ffffff;
`;
export const Heading = styled.div`
  h2 {
    position: relative;
    &::after {
      content: '';
      display: block;
      width: 80px;
      height: 3px;
      background-color: #eeeeee;
      margin-top: 2rem;
    }
  }
  p {
    font-weight: 600;
    font-size: 18px;
    margin-top: 2rem;
  }
`;
export const Row = styled.div`
  display: flex;
  align-items: center;
`;
export const Col = styled.div`
  flex-grow: 0;
  flex-shrink: 0;
  flex-basis: 50%;
`;
export const Contact =  styled.ul`
  display: flex;
  > li {
    padding: 1rem;
    border: 2px solid #eeeeee;
    border-radius: 4px;
    flex-basis: 50%;
    font-weight: 700;
    display: flex;
    &:first-child {
      margin-right: 2rem;
    }
    span {
      margin-right: 1rem;
      img {
        max-width: 30px;
      }
    }
  }
`;
