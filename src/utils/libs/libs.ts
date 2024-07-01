export const extractNationality = (str: string) => {
  const regex = /\n(.+?),/;
  const match = str.match(regex);

  if (match && match[1]) {
    return match[1].trim();
  }

  return null;
};
