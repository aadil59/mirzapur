import styled from 'styled-components';
import banner_link from "../../assets/banner.png";

export const Section = styled.section`
  background: url(${banner_link}) no-repeat;
  background-size: cover;
  padding: 4rem 0;
  color: #ffffff;
`;
export const Info = styled.div`
    max-width: 60%;
    text-align: center;
    h3 {
      line-height: 1.8;
    }
`;