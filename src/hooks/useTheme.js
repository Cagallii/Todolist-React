import { useContext } from 'react';
import { ThemeContext } from 'styled-components';

export default () => {
  const theme = useContext(ThemeContext);

  return theme;
};
