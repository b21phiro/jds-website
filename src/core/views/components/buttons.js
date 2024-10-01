import "../../../css/buttons.css";


function buttonPrimary(text) {
    return /*HTML*/ `
    <button class="btn btn-primary">${text}</button>
    `;
}

function afterRender() {
    document.querySelector(".btn-primary").addEventListener("click", () => {
        alert("button clicked");
    })
}



export default {buttonPrimary, afterRender};