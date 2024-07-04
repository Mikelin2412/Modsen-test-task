import { SORT_VALUES } from '../../constants/sort_values';
import { IArtworkData } from '../../utils/interfaces';

export const generatePagesForPagination = (
  currentPage: number,
  totalPages: number,
  maxVisiblePages: number,
) => {
  const pages = [];
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

export const sortArts = (
  arts: IArtworkData[],
  sortOrder: keyof IArtworkData,
): IArtworkData[] => {
  const sortConfig = SORT_VALUES.find((sort) => sort.value === sortOrder);

  if (!sortConfig) {
    return arts;
  }

  const result = [...arts].sort((a, b) => {
    const valueA = a[sortConfig.value] ?? '';
    const valueB = b[sortConfig.value] ?? '';

    if (!valueA && !valueB) return 0;
    if (!valueA) return 1;
    if (!valueB) return -1;

    switch (sortConfig.type) {
      case 'string':
        return (valueA as string).localeCompare(valueB as string);
      case 'number':
        return Number(valueA) - Number(valueB);
      default:
        return 0;
    }
  });

  return result;
};
