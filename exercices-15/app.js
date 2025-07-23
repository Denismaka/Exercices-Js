// #############################################
//  Manipuler les cookies
// #############################################
/**
 * @param {string} name
 * @returns {string}
 */
function getCookie(name) {
    const cookies = document.cookie.split("; ");
    const value = cookies.find((c) => c.startsWith(name));
    value?.split("=")[1];
    if (value === undefined) {
        return null;
    }
    return decodeURIComponent(value);
}
/**
 *
 * @param {string} name
 * @param {string} value
 * @param {anumber} days
 */
function setCookie(name, value, days) {
    const date = new date();
    date.setDate(date.getDate() + days);
    document.cookie = `${name}=${encodeURIComponent(
        value
    )}; expires=${date.toUTCString()}`;
}

setCookie("hello", "Bonjour le gens", 2);
console.log(getCookie("cookie_nothttp"));
