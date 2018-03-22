/**
 * Check a string with a given validation function and change an html element.
 * @param {function} validationFunction - The function that validates the string.
 * @param {string} value - The string to validate.
 * @param {string} id - The id within the html document to change.
 * @return {bool} Whether the string fulfills the validation requirements or not.
 */
function evaluateElement(validationFunction, value, id) {
    var is_valid = validationFunction(value);

    if (is_valid) {
        document.getElementById(id).className = "valid";

        // to insert the sign as text (comment out the corresponding section within the css)
        document.getElementById(id).getElementsByClassName("sign")[0].innerHTML = tick_sign;
    } else {
        document.getElementById(id).className = "invalid";

        // to insert the sign as text (comment out the corresponding section within the css)
        document.getElementById(id).getElementsByClassName("sign")[0].innerHTML = cross_sign;
    }

    return is_valid;
}

/**
 * Check a string for:
 *   - containing at least one lower case letter
 *   - containing at least one upper case letter
 *   - containing at least one number
 *   - containing at least one symbol (!@#^&*()+_,.{}[]?-)
 *   - having a minimum length of 6 characters
 * @param {string} value - The string to validate.
 * @return {void}
 */
function validatePassword(value) {
    // keeps track whether all requirements are fulfilled or not
    // 'evaluateElement' always needs to be added before '&& fulfilled'
    // because it will not execute if 'fulfilled' already is false
    var fulfilled = true;

    // check for lower case letter
    fulfilled = evaluateElement(hasLowerCase, value, "lowerCase") && fulfilled;

    // check for upper case letter
    fulfilled = evaluateElement(hasUpperCase, value, "upperCase") && fulfilled;

    // check for number
    fulfilled = evaluateElement(hasNumber, value, "number") && fulfilled;

    // check for symbol
    fulfilled = evaluateElement(hasSymbol, value, "symbol") && fulfilled;

    // check for minimum length
    fulfilled = evaluateElement(hasMinimumLength, value, "minLength") && fulfilled;

    // enable or disable the button
    document.getElementById("submit").disabled = !fulfilled;

    // indicate to the input field whether the password is valid or not
    if (fulfilled) {
        document.getElementById("password").className = "valid";
    } else {
        document.getElementById("password").className = "invalid";
    }
}

/**
 * Load prerequisite information and strings to the html.
 * @return {void}
 */
function loadPrerequisites() {
    // load the prerequisite information to the html
    document.getElementById("info").innerHTML = info;

    // load all prerequisite strings to the html
    for (item in prerequisites) {
        id = document.getElementById(item);
        element = id.getElementsByClassName("description")[0];
        element.innerHTML = prerequisites[item];
    }

    // validate an empty password to set the default colors
    validatePassword('');
}
