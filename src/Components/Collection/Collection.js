import React from 'react';
import {collectionData} from '../../lib/app_constant';
import {Section, Info} from './style';
import Button from '../Button/Button';

const Collection = props => {
  return (
    <div className="container">
      <Section>
        <Info>
            <h3>{collectionData.p1} <br />
            <span>{collectionData.p2}</span></h3>
            <Button label="view collection" />
          </Info>
      </Section>
    </div>
  )
}

export default Collection;
