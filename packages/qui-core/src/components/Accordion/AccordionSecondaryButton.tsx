import styled from 'styled-components';
import { Button } from '../Button';
import { AccordionSecondaryButtonProps } from './type';

const AccordionSecondaryButtonStyle = styled(Button)`
  z-index: 2;
  margin-top: 16px;
`;

const AccordionSecondaryButton: React.FC<AccordionSecondaryButtonProps> = ({
  children,
  trailingIcon,
  onClick,
}) => {
  const _onClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    onClick && onClick();
  };

  return (
    <AccordionSecondaryButtonStyle
      onClick={_onClick}
      trailingIcon={trailingIcon}
      type="sm-hug"
      variant="secondary"
    >
      {children}
    </AccordionSecondaryButtonStyle>
  );
};

export default AccordionSecondaryButton;
