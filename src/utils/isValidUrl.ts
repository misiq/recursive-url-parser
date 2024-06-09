export const isValidUrl = (url: string) => {
  try {
    return new URL(url);
  } catch (e) {
    return false;
  }
};
