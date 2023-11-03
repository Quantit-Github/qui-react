import { IconType } from '../Button/type';
import { CheckboxProps } from '../Checkbox/type';

export interface AccordionProps {
  /**
   * 아코디언 디폴트 열림 상태
   * @default false
   */
  open?: boolean;
  /**
   * 비활성화 상태
   * @default false
   */
  disabled?: boolean;
  /**
   * 아코디언 제목
   */
  title: string;
  /**
   * 아코디언 부가 정보
   * @prop {string} info 부가 정보
   * @prop {boolean?} $ellipsis 말줄임 여부
   */
  subInfo?: AccordionSubInfoProps[];
  /**
   * 아코디언 내용
   */
  children: React.ReactNode;
  /**
   * 아코디언 클릭시 실행되는 함수
   * @returns {void}
   */
  onClick?: () => void;
  /**
   * 아코디언 내부 추가 액션 버튼
   * @prop {React.ReactNode} children 버튼 내용
   * @prop {function} onClick 버튼 클릭시 실행되는 함수
   * @prop {IconType} trailingIcon 버튼 trailing icon
   */
  secondaryButton?: AccordionSecondaryButtonProps;
  /**
   * 아코디언 제목 체크박스 여부
   * @prop {boolean?} checked 체크 상태
   * @prop {boolean?} $indeterminate indeterminate 상태
   * @prop {boolean?} disabled 비활성화 상태
   * @prop {function} onChange 체크박스 클릭시 실행되는 함수
   */
  checkboxProps?: Omit<CheckboxProps, 'children' | '$bold'>;
}

export interface AccordionSubInfoProps {
  /**
   * 부가 정보
   */
  info: string;
  /**
   * 말줄임 여부
   * @default false
   * true 인 경우 말줄임 처리
   * false 인 경우 전체 노출
   */
  $ellipsis?: boolean;
}

export interface AccordionSecondaryButtonProps {
  /**
   * 버튼 내용
   */
  children: React.ReactNode;
  /**
   * 버튼 클릭시 실행되는 함수
   * @returns {void}
   */
  onClick?: () => void;
  /**
   * 버튼 trailing icon
   */
  trailingIcon?: IconType;
}
