import styled from 'styled-components';
import {
  PaginationAtomProps,
  PaginationProps,
  PaginationVariantProps,
} from './type';
import { useState } from 'react';
import ChevronRightIcon from '../../assets/icons/ChevronRightIcon';
import ChevronLeftIcon from '../../assets/icons/ChevronLeftIcon';
import {
  getPaginationArrowButtonToken,
  getPaginationAtomToken,
  getPaginationToken,
} from '../../styles/tokens/pagination';
import { getStateOverlayToken } from '../../styles/tokens';

const PaginationArrowButtonStyle = styled.button`
  width: 32px;
  height: 32px;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;

  ${({ disabled = false }) => getPaginationArrowButtonToken(disabled)}
`;

const PaginationAtomStyle = styled.button<PaginationAtomProps>`
  width: 32px;
  height: 32px;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  ${getStateOverlayToken(4)}
  ${({ $on }) => getPaginationAtomToken($on)}
`;

const PaginationVariantStyle = styled.div<
  Pick<PaginationVariantProps, '$pageSize'>
>`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;

  ${({ $pageSize }) => getPaginationToken($pageSize)}
`;

const PaginationVariant = ({
  totalPage,
  $pageSize,
  currentPage,
  setCurrentPage,
  onPageChange,
}: PaginationVariantProps) => {
  const _pages = (totalPage: number, currentPage: number, pageSize: number) => {
    const start = Math.floor(currentPage / pageSize) * pageSize;
    let pages = [];
    for (let i = start; i < start + pageSize && i < totalPage; i++) {
      pages.push(i);
    }
    return pages;
  };

  const _goPage = (page: number) => {
    setCurrentPage(page);
    onPageChange(page);
  };

  const _goPrev = () => {
    let newPage = Math.floor(currentPage / $pageSize) * $pageSize - 1;
    _goPage(newPage);
  };

  const _goNext = () => {
    let newPage = Math.floor(currentPage / $pageSize) * $pageSize + $pageSize;
    _goPage(newPage);
  };

  return (
    <PaginationVariantStyle $pageSize={$pageSize}>
      <PaginationArrowButtonStyle
        onClick={_goPrev}
        disabled={currentPage < $pageSize}
      >
        <ChevronLeftIcon />
      </PaginationArrowButtonStyle>
      {_pages(totalPage, currentPage, $pageSize).map((page) => (
        <PaginationAtomStyle
          key={page}
          $on={currentPage === page}
          onClick={() => _goPage(page)}
        >
          {page + 1}
        </PaginationAtomStyle>
      ))}
      <PaginationArrowButtonStyle
        onClick={_goNext}
        disabled={currentPage >= totalPage - $pageSize}
      >
        <ChevronRightIcon />
      </PaginationArrowButtonStyle>
    </PaginationVariantStyle>
  );
};

export const Pagination = ({ totalPage, onPageChange }: PaginationProps) => {
  const [currentPage, setCurrentPage] = useState(0);

  return (
    <>
      <PaginationVariant
        totalPage={totalPage}
        $pageSize={5}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        onPageChange={onPageChange}
      />
      <PaginationVariant
        totalPage={totalPage}
        $pageSize={10}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        onPageChange={onPageChange}
      />
    </>
  );
};
