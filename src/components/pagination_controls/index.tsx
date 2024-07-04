import React, { useCallback, useMemo } from 'react';
import { Wrapper, PageButton } from './style';
import { PaginationControlsProps } from '@utils/interfaces';
import { generatePagesForPagination } from '@utils/libs/libs';
import { MAX_VISIBLE_PAGES } from '@constants/constants';

const PaginationControls: React.FC<PaginationControlsProps> = ({
  totalPages,
  currentPage,
  onPageChange,
}) => {
  const pages = useMemo(
    () =>
      generatePagesForPagination(currentPage, totalPages, MAX_VISIBLE_PAGES),
    [currentPage, totalPages],
  );

  const handleFirstPage = useCallback(() => onPageChange(1), [onPageChange]);
  const handlePreviousPage = useCallback(
    () => onPageChange(currentPage - 1),
    [onPageChange, currentPage],
  );
  const handleNextPage = useCallback(
    () => onPageChange(currentPage + 1),
    [onPageChange, currentPage],
  );
  const handleLastPage = useCallback(
    () => onPageChange(totalPages),
    [onPageChange, totalPages],
  );
  const handlePageClick = useCallback(
    (page: number) => () => onPageChange(page),
    [onPageChange],
  );

  return (
    <Wrapper>
      {currentPage > 1 && (
        <PageButton onClick={handleFirstPage}>&laquo;</PageButton>
      )}
      {currentPage > 1 && (
        <PageButton onClick={handlePreviousPage}>&lt;</PageButton>
      )}
      {pages.map((pageNumber) => (
        <PageButton
          key={pageNumber}
          isActive={pageNumber === currentPage}
          onClick={handlePageClick(pageNumber)}
        >
          {pageNumber}
        </PageButton>
      ))}
      {currentPage < totalPages && (
        <PageButton onClick={handleNextPage}>&gt;</PageButton>
      )}
      {currentPage < totalPages && (
        <PageButton onClick={handleLastPage}>&raquo;</PageButton>
      )}
    </Wrapper>
  );
};

export default React.memo(PaginationControls);
