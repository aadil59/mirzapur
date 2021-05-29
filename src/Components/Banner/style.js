import styled from "styled-components";
import banner_link from "../../assets/banner.png";

export const BannerSection = styled.section`
  margin-top: 0;
  background: url(${banner_link}) no-repeat;
  background-size: cover;
  min-height: 65vh;
  padding: 4rem;
  position: relative;
  &::after {
    content: '';
    background: rgb(0,0,0);
    background: linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 100%);
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
  }
`;
export const Content = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  text-transform: uppercase;
  color: #ffffff;
  flex-wrap: wrap;
  z-index: 1;
  img {
    max-width: 300px;
  }
`;
export const Logo = styled.div`
  padding-right: 1rem;
`;
export const Streaming = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  p {
    margin: 0;
    font-weight: 300;
    padding-right: 1rem;
    &+div {
        max-width: 140px;
        padding-left: 1rem;
        border-left: 3px solid #eee;
      > img {
        mix-blend-mode: multiply;
        width: 100%;
      }
    }
  }
  strong {
    margin-left: .5rem;
  }
  
`;
export const Sunglass = styled.div`
  text-align: center;
  border-left: 1px solid #eee;
  padding-left: 1rem;
  p {
    margin-top: 0;
    font-weight: 700;
  }
`;
export const Info = styled.div`
  flex: 0 1 60%;
  text-align: center;
  text-transform: none;
  h2 {
    margin-top: 3rem;
    line-height: 1.5;
    font-weight: 600;
  }
  span {
    font-size: 26px;
  }
`;
