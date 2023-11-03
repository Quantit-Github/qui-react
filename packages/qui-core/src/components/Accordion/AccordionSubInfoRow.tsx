import styled from 'styled-components';
import { AccordionProps, AccordionSubInfoProps } from './type';
import {
  getAccordionSubInfoRowToken,
  getAccordionSubInfoToken,
} from '../../styles/tokens';
import { Fragment } from 'react';
import { Divider } from '../Divider';

const AccordionSubInfoRowStyle = styled.div<
  Pick<AccordionProps, 'disabled' | 'open'>
>`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-top: 8px;
  height: 16px;
  padding: 2px 0;
  box-sizing: border-box;

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

const AccordionSubInfoRow: React.FC<
  Pick<AccordionProps, 'open' | 'disabled' | 'subInfo'>
> = ({ open, disabled, subInfo }) => {
  return (
    <AccordionSubInfoRowStyle open={open} disabled={disabled}>
      {subInfo!.map(({ info, $ellipsis }, index) => {
        return (
          <Fragment key={index}>
            {index > 0 && <Divider hierarchy="low" direction="vertical" />}
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
