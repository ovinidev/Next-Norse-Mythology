import P from 'prop-types';
import { Container } from './styles';

export type TextComponentProps = {
  children: string,
};

export const TextComponent = ({ children }: TextComponentProps) => {
  return (
    <Container dangerouslySetInnerHTML={{ __html: children }} />
  );
};
