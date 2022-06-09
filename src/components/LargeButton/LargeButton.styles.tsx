import styled from 'styled-components';
import colors from '../../styles/colors';
import { LargeButtonProps } from './LargeButton.types';

export const backgroundColor: Record<
  LargeButtonProps['buttonVariation'],
  string
> = {
  primary: colors.yellow400,
  secondary: colors.gray100,
  outline: colors.white,
  ghost: colors.transparent,
};

export const Button = styled.button<LargeButtonProps>`
  background-color: ${(props) => backgroundColor[props.buttonVariation]};
`;
