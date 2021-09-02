import P from 'prop-types';

import { useContext } from 'react';

import Switch from 'react-switch';

import { ThemeContext } from 'styled-components';
import { Container, Input } from './styles';

export const Switcher = ({ toggleTheme }) => {
  const { colors, title } = useContext(ThemeContext);

  return (
    <Container>
      <Switch
        class
        onChange={toggleTheme}
        checked={title === 'dark'}
        checkedIcon={false}
        uncheckedIcon={false}
        height={10}
        width={40}
        handleDiameter={20}
        offColor={colors.primaryColor}
        onColor={colors.secondaryColor}
      />
      {title === 'dark'
        ? (<Input type="image" alt="moon" src="https://image.flaticon.com/icons/png/512/1152/1152393.png" onClick={toggleTheme} />)
        : (<Input type="image" alt="sun" src="https://image.flaticon.com/icons/png/512/2907/2907217.png" onClick={toggleTheme} />)}

    </Container>
  );
};

Switcher.propTypes = {
  toggleTheme: P.func.isRequired,
};
