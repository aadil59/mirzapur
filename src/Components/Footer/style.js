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
  @media screen and (max-width: 768px) {
    padding: 2rem;
    margin: 0;
    text-align: center;
  }
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
      @media screen and (max-width: 768px) {
        margin: 2rem auto 0;
      }
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
  align-items: flex-end;
  @media screen and (max-width: 768px) {
    flex-wrap: wrap;
  }
`;
export const Col = styled.div`
  flex-grow: 0;
  flex-shrink: 0;
  flex-basis: 50%;
  @media screen and (max-width: 768px) {
    flex-basis: 100%;
  }
`;
export const Contact =  styled.ul`
  display: flex;
  @media screen and (max-width: 768px) {
    flex-wrap: wrap;
  }
  > li {
    cursor: pointer;
    padding: 1rem;
    border: 2px solid #eeeeee;
    border-radius: 4px;
    flex-basis: 50%;
    font-weight: 700;
    display: flex;
    @media screen and (max-width: 768px) {
      flex-basis: 100%;
      text-align: left;
    }
    &:first-child {
      margin-right: 2rem;
      @media screen and (max-width: 768px) {
        margin: 0 0 2rem;
      }
    }
    span {
      margin-right: 1rem;
      img {
        max-width: 30px;
      }
    }
  }
`;
