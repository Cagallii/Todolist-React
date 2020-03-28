import styled from 'styled-components/macro';

export const Container = styled.div`
  position: relative;
  height: 100vh;
  -webkit-box-flex: 1;
  -ms-flex: 1;
  flex: 1;
  font-size: ${props => props.theme.fontSizes.medium};
`;

export const AppContainer = styled.div`
  min-height: min-content;
  position: absolute;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
