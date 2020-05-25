
/**
 * @description - Use "$" instead of "document.querySelector"
 * @param {string} elem - an identfier for element in the DOM to be selected
 * @returns {Element}
 */
const $ = (elem) => {
    return document.querySelector(elem);
}

/**
 * @description - Use "$S" instead of "document.querySelectorAll"
 * @param {string} elem - an identfier for elements in the DOM to be selected
 * @returns {Array} - Array of elements
 */
const $$ = (elem) => {
    return [...document.querySelectorAll(elem)];
}

export { $, $$ }