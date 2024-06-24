import React from 'react';
import { Wrapper, PageButton } from './style';
import { PaginationControlsProps } from '@utils/interfaces';

const PaginationControls: React.FC<PaginationControlsProps> = ({
  totalPages,
  currentPage,
  onPageChange,
}) => {
  const generatePageNumbers = () => {
    const pages = [];
    const maxVisiblePages = 5;
    const halfVisible = Math.floor(maxVisiblePages / 2);
    let startPage = Math.max(1, currentPage - halfVisible);
    let endPage = Math.min(totalPages, currentPage + halfVisible);

    if (currentPage - halfVisible < 1) {
      endPage = Math.min(totalPages, endPage + (halfVisible - currentPage + 1));
    }
    if (currentPage + halfVisible > totalPages) {
      startPage = Math.max(
        1,
        startPage - (currentPage + halfVisible - totalPages),
      );
    }

    for (let i = startPage; i <= endPage; i++) {
      pages.push(i);
    }

    return pages;
  };

  return (
    <Wrapper>
      {currentPage > 1 && (
        <PageButton onClick={() => onPageChange(1)}>&laquo;</PageButton>
      )}
      {currentPage > 1 && (
        <PageButton onClick={() => onPageChange(currentPage - 1)}>
          &lt;
        </PageButton>
      )}
      {generatePageNumbers().map((pageNumber) => (
        <PageButton
          key={pageNumber}
          isActive={pageNumber === currentPage}
          onClick={() => onPageChange(pageNumber)}
        >
          {pageNumber}
        </PageButton>
      ))}
      {currentPage < totalPages && (
        <PageButton onClick={() => onPageChange(currentPage + 1)}>
          &gt;
        </PageButton>
      )}
      {currentPage < totalPages && (
        <PageButton onClick={() => onPageChange(totalPages)}>
          &raquo;
        </PageButton>
      )}
    </Wrapper>
  );
};

export default PaginationControls;
