export const extractNationality = (str: string) => {
  const regex = /\n(.+?),/;
  const match = str.match(regex);

  if (match && match[1]) {
    return match[1].trim();
  }

  return null;
};

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
