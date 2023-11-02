import { Dispatch, SetStateAction } from 'react';
import { IconType } from '../Button';

export interface PaginationAtomProps {
  /**
   * 해당 페이지 버튼이 선택되어 있음 여부
   */
  $on: boolean;
}

export interface PaginationVariantProps extends PaginationProps {
  /**
   * 페이지 사이즈
   * media query size extraSmall인 경우 5, 그 이상인 경우 10
   */
  $pageSize: 5 | 10;
  /**
   * 현재 페이지 번호
   */
  currentPage: number;
  /**
   * 현재 페이지 번호 변경 함수
   */
  setCurrentPage: Dispatch<SetStateAction<number>>;
}

export interface PaginationProps {
  /**
   * 총 페이지 수
   */
  totalPage: number;
  /**
   * 페이지 변경시 실행할 작업
   */
  onPageChange: (page: number) => void;
}

export interface PaginationArrowButtonProps {
  /**
   * 버튼 클릭시 실행할 작업
   */
  onClick: () => void;
  /**
   * 버튼 disabled 여부
   */
  disabled: boolean;
  /**
   * 아이콘 타입
   */
  iconType: IconType;
}
