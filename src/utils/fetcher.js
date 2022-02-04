/**
 * Fetcher model
 * @param {string} url
 * @param {object} options
 * @returns
 */
export const fetcher = async (url, options) => {
  try {
    return await fetch(url, options);
  } catch (e) {
    return e;
  }
};
