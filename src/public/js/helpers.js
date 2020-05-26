
/**
 * @description - Use "$" instead of "document.querySelector"
 * @param {string} elem - an identfier for element in the DOM to be selected
 * @returns {Element}
 */
export const $ = (elem) => {
    return document.querySelector(elem);
}

/**
 * @description - Use "$S" instead of "document.querySelectorAll"
 * @param {String} elem - an identfier for elements in the DOM to be selected
 * @returns {Array} - Array of elements
 */
export const $$ = (elem) => {
    return [...document.querySelectorAll(elem)];
}

/**
 * @description - Great little RegEx URL validator found on Stack Overflow:
 * https://stackoverflow.com/questions/5717093/check-if-a-javascript-string-is-a-url
 * @param {String} str - String to be verified as a URL 
 */
export function validURL(str) {
  var pattern = new RegExp(
    "^(https?:\\/\\/)?" + // protocol
    "((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|" + // domain name
    "((\\d{1,3}\\.){3}\\d{1,3}))" + // OR ip (v4) address
    "(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*" + // port and path
    "(\\?[;&a-z\\d%_.~+=-]*)?" + // query string
      "(\\#[-a-z\\d_]*)?$",
    "i"
  ); // fragment locator
  return !!pattern.test(str);
}

// export { $, $$, validURL }