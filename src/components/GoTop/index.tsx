import { KeyboardArrowUp } from '@styled-icons/material-outlined/KeyboardArrowUp';
import { Container } from './styles';

export const GoTop = () => {
  return (
    <Container href="#" aria-label="Go to top" title="Go to top">
      <KeyboardArrowUp />
    </Container>
  );
};
