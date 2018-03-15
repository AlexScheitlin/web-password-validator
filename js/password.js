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
}
