import styled from "styled-components";

export const Section = styled.section`
  background-color: #1a1a1a;
  padding: 4rem 4rem 3rem;
`;
export const Heading = styled.div`
  color: #ffffff;
  text-align: center;
  position: relative;
  &::after {
    content: "";
    display: inline-flex;
    height: 3px;
    width: 80px;
    background-color: #eeeeee;
    margin-top: 2rem;
  }
  h2 {
    color: #f00;
    font-size: 36px;
    text-transform: uppercase;
    line-height: normal;
    margin: 0 0 1rem;
  }
  p {
    font-size: 22px;
    line-height: normal;
    margin: 0;
    font-weight: 600;
  }
`;

export const CharacterList = styled.div``;
export const Row = styled.div`
  display: flex;
  align-items: center;
`;
export const Col = styled.div`
  flex-grow: 0;
  flex-shrink: 0;
  flex-basis: 33.33%;
`;
export const WrapperCard = styled.figure`
  margin-top: 4rem;
  padding: 1rem;
  color: #ffffff;
  text-align: center;
  figcaption {
    font-size: 14px;
    font-weight: 600;
    margin: 1rem 0;
    line-height: 1.6;
  }
`;
export const ImgWrap = styled.div`
  position: relative;
  overflow: hidden;
  padding-top: 100%;
  border-radius: 100%;
  border: 6px solid #f00;
  > img {
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
  }
`;
export const Sunglass = styled.img`
  max-width: 100%;
`;
export const Info = styled.div`
  p {
    margin: 0 0 1.5rem
  }
  > img {
    max-width: 110px;
  }
`;
