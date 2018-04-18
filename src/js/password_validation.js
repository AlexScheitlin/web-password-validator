/**
 * Check a string for containing a lower case letter.
 * @param {string} str - The string to check.
 * @return {bool} Whether the input string contains a lower case letter or not.
 */
function hasLowerCase(str) {
    return str.match(/[a-z]/);
}

/**
 * Check a string for containing an upper case letter.
 * @param {string} str - The string to check.
 * @return {bool} Whether the input string contains an upper case letter or not.
 */
function hasUpperCase(str) {
    return str.match(/[A-Z]/);
}

/**
 * Check a string for containing a symbol (!@#^&*()+_,.{}[]?-).
 * @param {string} str - The string to check.
 * @return {bool} Whether the input string contains a symbol or not.
 */
function hasSymbol(str) {
    return str.match(/\!|\@|\#|\^|\&|\*|\(|\)|\+|\_|\,|\.|\{|\}|\[|\]|\?|\-/);
}

/**
 * Check a string for containing a number.
 * @param {string} str - The string to check.
 * @return {bool} Whether the input string contains a number or not.
 */
function hasNumber(str) {
    return str.match(/\d/);
}

/**
 * Check a string for containing at least six characters.
 * @param {string} str - The string to check.
 * @return {bool} Whether the input string contains at least six characters or not.
 */
function hasMinimumLength(str) {
    return str.length >= 6;
}
