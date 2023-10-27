import styled from 'styled-components';
import CheckIcon from '../../assets/icons/CheckIcon';
import ChevronDownIcon from '../../assets/icons/ChevronDownIcon';
import ChevronRightIcon from '../../assets/icons/ChevronRightIcon';
import ChevronUpIcon from '../../assets/icons/ChevronUpIcon';
import IndeterminateIcon from '../../assets/icons/IndeterminateIcon';
import SmileIcon from '../../assets/icons/SmileIcon';
import { getIconButtonToken, getStateOverlayToken } from '../../styles/tokens';
import { IconButtonProps, IconProps } from './type';

const IconButtonStyle = styled.button<
  Pick<IconButtonProps, 'size' | 'variant'>
>`
  border: none;
  border-radius: 50%;
  cursor: pointer;
  line-height: 0;
  width: fit-content;
  height: fit-content;

  ${({ variant, disabled, size }) =>
    getIconButtonToken(variant, size, disabled || false)}
  ${({ disabled }) => !disabled && getStateOverlayToken('rounded')}
`;

export function Icon({ type }: IconProps) {
  if (type === 'check') return <CheckIcon />;
  if (type === 'chevron_down') return <ChevronDownIcon />;
  if (type === 'chevron_right') return <ChevronRightIcon />;
  if (type === 'chevron_up') return <ChevronUpIcon />;
  if (type === 'intermediate') return <IndeterminateIcon />;
  if (type === 'smile') return <SmileIcon />;
  return null;
}

export function IconButton({ type, ...props }: IconButtonProps) {
  return (
    <IconButtonStyle {...props}>
      <Icon type={type} />
    </IconButtonStyle>
  );
}
