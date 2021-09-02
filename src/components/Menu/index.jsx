import P from 'prop-types';
import { Menu as MenuIcon } from '@styled-icons/material-outlined/Menu';
import { useContext, useState } from 'react';
import { Close as CloseIcon } from '@styled-icons/material-outlined/Close';
import * as Styled from './styles';
import { LogoLink } from '../LogoLink';
import { NavLinks } from '../NavLinks';
import { Switcher } from '../Switcher';
import { SwitchContext } from '../../context/SwitchContext';

export const Menu = ({ links = [], logoData }) => {
  const [visible, setVisible] = useState(false);
  const { toggleTheme } = useContext(SwitchContext);

  return (
    <>
      <Styled.Button
        visible={visible}
        onClick={() => setVisible(true)}
        aria-label="Open/Close menu">
        {visible ? (
          <CloseIcon aria-label="Close menu" />
        ) : (
          <MenuIcon aria-label="Open menu" />)}
      </Styled.Button>
      <Styled.Container visible={visible} onClick={() => setVisible(false)}>
        <Styled.MenuContainer>
          <Switcher toggleTheme={toggleTheme} />
          <LogoLink {...logoData} />
          <NavLinks links={links} />
        </Styled.MenuContainer>
      </Styled.Container>
    </>
  );
};

Menu.propTypes = {
  ...NavLinks.propTypes,
  logoData: P.shape(LogoLink.propTypes).isRequired,
};
