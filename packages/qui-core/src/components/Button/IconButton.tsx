import styled from 'styled-components';
import {
  CheckIcon,
  ChevronDownIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  ChevronUpIcon,
  ExternalLinkIcon,
  IndeterminateIcon,
  SmileIcon,
} from '../../assets/icons';
import { getIconButtonToken, getStateOverlayToken } from '../../styles/tokens';
import { IconButtonProps, IconProps } from './type';

const IconButtonStyle = styled.button<
  Pick<IconButtonProps, 'size' | 'variant'>
>`
  border: none;
  border-radius: 50%;
  line-height: 0;
  width: fit-content;
  height: fit-content;

  ${({ variant, disabled, size }) =>
    getIconButtonToken(variant, size, disabled || false)}
  ${({ disabled }) => !disabled && getStateOverlayToken('rounded')}
`;

export function Icon({ type, ...props }: IconProps) {
  if (type === 'check') return <CheckIcon {...props} />;
  if (type === 'chevron_down') return <ChevronDownIcon {...props} />;
  if (type === 'chevron_left') return <ChevronLeftIcon {...props} />;
  if (type === 'chevron_right') return <ChevronRightIcon {...props} />;
  if (type === 'chevron_up') return <ChevronUpIcon {...props} />;
  if (type === 'external_link') return <ExternalLinkIcon {...props} />;
  if (type === 'indeterminate') return <IndeterminateIcon {...props} />;
  if (type === 'smile') return <SmileIcon {...props} />;
  return null;
}

export function IconButton({ type, ...props }: IconButtonProps) {
  return (
    <IconButtonStyle {...props}>
      <Icon type={type} />
    </IconButtonStyle>
  );
}
