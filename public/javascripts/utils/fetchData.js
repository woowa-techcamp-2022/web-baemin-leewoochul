/**
 * @param {string} url
 * @param {RequestInit} option
 */
async function fetchData(url, option) {
  try {
    const response = await fetch(url, option);
    if (!response.ok) throw new Error(`OKError. status: ${response.status}`);
    return response;
    // return await response.json();
  } catch (error) {
    throw new Error(error);
  }
}

export default fetchData;
