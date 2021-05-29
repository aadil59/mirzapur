import React from 'react';
import PropTypes from 'prop-types';
import {WrapperCard, ImgWrap, Sunglass, Info} from './style';
import Button from '../Button/Button';

const Card = ({data}) => {
  return (
    <WrapperCard>
      <ImgWrap>
        <img src={data.character_img} alt={data.name} />
      </ImgWrap>
      <figcaption>
        <p>{data.details}</p>
        <Sunglass src={data.sunglass} alt={data.name} />
        <Info>
          <img src={data.brand} alt={data.name} />
          <p>{data.type}</p>
          <Button label="buy now" />
        </Info>
      </figcaption>
      
    </WrapperCard>
  )
}

Card.propTypes = {
  data: PropTypes.object
}

export default Card;
