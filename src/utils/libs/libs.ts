export const extractNationality = (str: string) => {
  const regex = /\n(.+?),/;
  const match = str.match(regex);

  if (match && match[1]) {
    return match[1].trim();
  }

  return null;
};

export const debounce = <T extends (...args: Parameters<T>) => ReturnType<T>>(
  func: T,
  wait: number,
) => {
  let timeout: ReturnType<typeof setTimeout>;
  return (...args: Parameters<T>): void => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), wait);
  };
};
