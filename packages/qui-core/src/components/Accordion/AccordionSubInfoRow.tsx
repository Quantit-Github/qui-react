import styled from 'styled-components';
import { AccordionProps, AccordionSubInfoProps } from './type';
import {
  getAccordionSubInfoRowToken,
  getAccordionSubInfoToken,
} from '../../styles/tokens';
import { Fragment } from 'react';

const AccordionSubInfoRowStyle = styled.div<
  Pick<AccordionProps, 'disabled' | 'open'>
>`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-top: 8px;

  ${({ disabled = false, open = false }) =>
    getAccordionSubInfoRowToken(disabled, open)}
`;

const AccordionSubInfoStyle = styled.span<
  Pick<AccordionSubInfoProps, '$ellipsis'>
>`
  white-space: nowrap;
  ${({ theme }) => theme.typography.bodySmall.css};
  ${({ $ellipsis }) => getAccordionSubInfoToken($ellipsis)}
`;

const AccordionSubInfoDivider = styled.div`
  height: 12px;
  margin: 2px 0;
  width: 1px;
`;

const AccordionSubInfoRow: React.FC<
  Pick<AccordionProps, 'open' | 'disabled' | 'subInfo'>
> = ({ open, disabled, subInfo }) => {
  return (
    <AccordionSubInfoRowStyle open={open} disabled={disabled}>
      {subInfo!.map(({ info, $ellipsis }, index) => {
        return (
          <Fragment key={index}>
            {index > 0 && <AccordionSubInfoDivider />}
            <AccordionSubInfoStyle $ellipsis={$ellipsis}>
              {info}
            </AccordionSubInfoStyle>
          </Fragment>
        );
      })}
    </AccordionSubInfoRowStyle>
  );
};

export default AccordionSubInfoRow;
