import styled from 'styled-components';
import { AccordionProps } from './type';
import { Checkbox } from '../Checkbox';
import { IconButton } from '../Button';

const AccordionTitleStyle = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 14px;
`;

const AccordionCheckboxTitle = styled(Checkbox)`
  z-index: 2;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;

  span {
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;

const AccordionDefaultTitle = styled.h6`
  ${({ theme }) => theme.typography.bodyLarge.bold};
  margin: 0;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

const AccordionIconButton = styled(IconButton)`
  z-index: 2;
`;

const AccordionTitle: React.FC<
  Pick<AccordionProps, 'open' | 'disabled' | 'title' | 'checkboxProps'>
> = ({ open, disabled, title, checkboxProps }) => {
  return (
    <AccordionTitleStyle>
      {checkboxProps ? (
        <AccordionCheckboxTitle {...checkboxProps} disabled={disabled} $bold>
          {title}
        </AccordionCheckboxTitle>
      ) : (
        <AccordionDefaultTitle>{title}</AccordionDefaultTitle>
      )}
      <AccordionIconButton
        size="sm"
        variant="ghost"
        type={open ? 'chevron_up' : 'chevron_down'}
        disabled={disabled}
      />
    </AccordionTitleStyle>
  );
};

export default AccordionTitle;
