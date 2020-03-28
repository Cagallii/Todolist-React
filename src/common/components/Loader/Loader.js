import React from 'react';
import T from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleNotch } from '@fortawesome/free-solid-svg-icons';
import { withTheme } from 'styled-components';
import LoaderContainer from './Loader.s';

const Loader = ({ fullPage, color, theme, size }) => (
  <LoaderContainer fullPage={fullPage}>
    <FontAwesomeIcon
      spin
      size={size}
      color={color || theme.colors.primary}
      icon={faCircleNotch}
    />
  </LoaderContainer>
);

Loader.propTypes = {
  fullPage: T.bool,
  theme: T.any.isRequired,
  color: T.string,
  size: T.string,
};

Loader.defaultProps = {
  fullPage: false,
  color: null,
  size: '3x',
};

export default withTheme(Loader);
