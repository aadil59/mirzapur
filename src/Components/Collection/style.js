import styled from 'styled-components';
import banner_link from "../../assets/banner.png";

export const Section = styled.section`
  background: url(${banner_link}) no-repeat;
  background-size: cover;
  padding: 4rem 0;
  color: #ffffff;
  @media screen and (max-width: 768px) {
    padding: 2rem 0;
  }
`;
export const Info = styled.div`
    max-width: 60%;
    text-align: center;
    @media screen and (max-width: 768px) {
      max-width: 100%;
    }
    h3 {
      line-height: 1.8;
    }
`;