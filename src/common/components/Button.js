import styled from 'styled-components/macro';
import T from 'prop-types';

const getBg = props => {
  if (props.color === 'primary') {
    return props.theme.colors.primary;
  }
  if (props.color === 'accent') {
    return props.theme.colors.accent;
  }
  return props.theme.colors.primary;
};

const getBgHover = props => {
  if (props.color === 'primary') {
    return props.theme.colors.primaryLight;
  }
  if (props.color === 'accent') {
    return props.theme.colors.accentLight;
  }
  return props.theme.colors.primaryLight;
};

const Button = styled.button`
  min-width: 70px;
  background-color: ${props => getBg(props)};
  height: 50px;
  color: ${props => props.theme.colors.white};
  font-size: ${props => props.theme.fontSizes.button};
  line-height: 20px;
  font-weight: bold;
  transition: background-color 0.17s ease, color 0.17s ease;
  position: relative;
  border-radius: 4px;
  border: none;
  cursor: pointer;
  padding: 9px 24px;

  &:hover {
    background-color: ${props => getBgHover(props)};
    outline: none;
  }
  &:focus {
    outline: none;
  }
  &:disabled {
    background-color: ${props => getBg(props)};
    opacity: 0.6;
    cursor: not-allowed;
  }
`;

Button.propTypes = {
  color: T.oneOf(['primary', 'accent']),
};

Button.defaultProps = {
  color: 'primary',
};

export default Button;
