import { ReactNode } from 'react';
import { Title } from './styles';

export type HeadingProps = {
  children: ReactNode;
  colorDark: boolean;
  as?: 'h1'| 'h2'| 'h3'| 'h4'| 'h5'| 'h6';
  size?: 'small'| 'medium'| 'big'| 'huge';
  uppercase?: boolean;
};

export const Header = ({
  children,
  colorDark = true,
  as = 'h1',
  size = 'huge',
  uppercase = false,
}: HeadingProps) => {
  return (
    <Title
      colorDark={colorDark}
      as={as}
      size={size}
      uppercase={uppercase}>
      {children}
    </Title>
  );
};
