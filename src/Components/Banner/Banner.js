import React from "react";
import { BannerSection, Content, Logo, Streaming, Sunglass, Info } from "./style";
import sunglass_img from "../../assets/sunglass.png";
import Button from '../Button/Button';

const Banner = (props) => {
  return (
    <BannerSection>
      <Content>
        <Logo>
          <img
            src="https://www.kewlquiz.com/wp-content/uploads/2020/09/2e9cb7e6f666b7dc-removebg-preview.png"
            alt=""
          />
          <Streaming>
            <p>Stream<strong>Now</strong></p>
            <div><img src ="https://resources.premierleague.com/photos/2019/07/22/aafac6cf-56c2-417e-b2f5-d95bc2a9092d/amazon-prime-video-logo.png?width=1350" alt="" /></div>
          </Streaming>
        </Logo>
        <Sunglass>
          <p>Mirzapur Inspired Sunglasses</p>
          <img src={sunglass_img} alt="" />
        </Sunglass>
        <Info>
          <h2>Shop the collection today and 20 lucky Winners per day to win <br />
          <span>Amazon Fire TV Stick</span></h2>
          <Button primary label="view collection" />
        </Info>
      </Content>
    </BannerSection>
  );
};

export default Banner;
