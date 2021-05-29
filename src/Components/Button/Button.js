import React from 'react';
import {ButtonElm} from './style';
import PropTypes from 'prop-types';

const Button = props => {
  return (
    <ButtonElm primary={props.primary} type="button">{props.label}</ButtonElm>
  )
}

Button.propTypes = {
  label: PropTypes.string
}

export default Button
