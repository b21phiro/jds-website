import "../../../css/buttons.css";
import exceptionHandler from "../../exceptionHandler";


/**
 *  Creates a button element
 *  @param text { String }
 *  @param id {string}
 *  @return a button element
 */
function buttonPrimary(text, id) {
    return /*HTML*/ `
    <button id=${id} class="btn btn-primary">${text}</button>
    `;
}


/**
 *  Creates a eventlistener on the button thats being created
 *  @param id { String } button id
 *  @param callbackFunc { function } the callback function
 */
function afterRender(id, callbackFunc) {
    let btnAfterRend = document.querySelector(`#${id}`);

    if (btnAfterRend != undefined) {
        btnAfterRend.addEventListener("click", callbackFunc);
    } else {
        console.error(`Button with ID: -- ${id} -- is Missing`);
        return;
    }
}



export default {buttonPrimary, afterRender};