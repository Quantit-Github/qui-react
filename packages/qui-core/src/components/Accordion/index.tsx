import styled from 'styled-components';
import { AccordionProps } from './type';
import {
  getAccordionToken,
  getAccordionDividerToken,
} from '../../styles/tokens';
import { useState } from 'react';
import AccordionSecondaryButton from './AccordionSecondaryButton';
import AccordionTitle from './AccordionTitle';
import AccordionSubInfoRow from './AccordionSubInfoRow';
import { Divider } from '../Divider';

const AccordionStyle = styled.div<Pick<AccordionProps, 'disabled' | 'open'>>`
  padding: 16px;
  border: none;
  border-radius: 12px;
  text-align: left;

  ${({ disabled = false, open = false }) => getAccordionToken(disabled, open)}
`;

const AccordionContentStyle = styled.div`
  ${({ theme }) => theme.typography.bodyLarge.css};
  white-space: pre-wrap;
`;

const AccordionDivider = styled(Divider)<
  Pick<AccordionProps, 'disabled' | 'open'>
>`
  ${({ disabled = false, open = false }) =>
    getAccordionDividerToken(disabled, open)}
`;

export const Accordion: React.FC<AccordionProps> = ({
  open = false,
  disabled = false,
  title,
  subInfo,
  children,
  onClick,
  secondaryButton,
  checkboxProps,
}) => {
  const [openState, setOpenState] = useState<boolean>(open);
  const _onClick = () => {
    setOpenState(!openState);
    onClick && onClick();
  };
  const _subInfo =
    subInfo && subInfo.length > 0 ? subInfo.slice(0, 3) : undefined;

  return (
    <AccordionStyle
      open={openState}
      disabled={disabled}
      onClick={disabled ? undefined : _onClick}
    >
      <AccordionTitle
        open={openState}
        disabled={disabled}
        title={title}
        checkboxProps={checkboxProps}
      />
      {_subInfo && (
        <AccordionSubInfoRow
          open={openState}
          disabled={disabled}
          subInfo={_subInfo}
        />
      )}
      {openState && (
        <AccordionContentStyle>
          <AccordionDivider
            open={openState}
            disabled={disabled}
            hierarchy="low"
            direction="horizontal"
          />
          {children}
          {secondaryButton && <AccordionSecondaryButton {...secondaryButton} />}
        </AccordionContentStyle>
      )}
    </AccordionStyle>
  );
};
