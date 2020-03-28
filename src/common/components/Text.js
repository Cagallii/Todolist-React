import styled from 'styled-components/macro';

const getFontSize = props => {
  if (props.size === 'medium') {
    return props.theme.fontSizes.medium;
  }
  if (props.size === 'xs') {
    return props.theme.fontSizes.xSmall;
  }
  if (props.size === 'small') {
    return props.theme.fontSizes.small;
  }
  if (props.size === 'large') {
    return props.theme.fontSizes.large;
  }
  if (props.size === 'title') {
    return props.theme.fontSizes.title;
  }
  return props.theme.fontSizes.medium;
};

export default styled.span`
  text-transform: ${props => (props.case ? props.case : 'unset')};
  color: ${props => (props.color ? props.color : props.theme.colors.primary)};
  font-size: ${props => getFontSize(props)};
  width: 100%;
  font-weight: ${props => (props.fw ? props.fw : '400')};
  text-align: ${props => (props.align ? props.align : 'initial')};
`;
