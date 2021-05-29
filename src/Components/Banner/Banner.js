import React from "react";
import { BannerSection, Content, Logo, Streaming, Sunglass, Info } from "./style";
import {bannerData} from '../../lib/app_constant';
import Button from '../Button/Button';

const Banner = (props) => {
  return (
    <BannerSection>
      <Content>
        <Logo>
          <img
            src={bannerData.mirzapur_logo}
            alt=""
          />
          <Streaming>
            <p>Stream<strong>Now</strong></p>
            <div><img src ={bannerData.amazon_logo} alt="" /></div>
          </Streaming>
        </Logo>
        <Sunglass>
          <p>{bannerData.message}</p>
          <img src={bannerData.sunglass_img} alt="" />
        </Sunglass>
        <Info>
          <h2>{bannerData.info.p1} <br />
          <span>{bannerData.info.p2}</span></h2>
          <Button primary label="view collection" />
        </Info>
      </Content>
    </BannerSection>
  );
};

export default Banner;
