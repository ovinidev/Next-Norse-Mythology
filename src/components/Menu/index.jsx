import P from 'prop-types';
import { Menu as MenuIcon } from '@styled-icons/material-outlined/Menu';
import { useContext, useState } from 'react';
import { Close as CloseIcon } from '@styled-icons/material-outlined/Close';
import { LogoLink } from '../LogoLink';
import { NavLinks } from '../NavLinks';
import { Switcher } from '../Switcher';
import { SwitchContext } from '../../context/SwitchContext';

import { Button, Container, MenuContainer } from './styles';

export const Menu = ({ links = [], logoData }) => {
  const [visible, setVisible] = useState(false);
  const { toggleTheme } = useContext(SwitchContext);

  return (
    <>
      <Button
        visible={visible}
        onClick={() => setVisible(true)}
        aria-label="Open/Close menu">
        {visible ? (
          <CloseIcon aria-label="Close menu" />
        ) : (
          <MenuIcon aria-label="Open menu" />)}
      </Button>
      <Container visible={visible} onClick={() => setVisible(false)}>
        <MenuContainer>
          <Switcher toggleTheme={toggleTheme} />
          <LogoLink {...logoData} />
          <NavLinks links={links} />
        </MenuContainer>
      </Container>
    </>
  );
};

Menu.propTypes = {
  ...NavLinks.propTypes,
  logoData: P.shape(LogoLink.propTypes).isRequired,
};
