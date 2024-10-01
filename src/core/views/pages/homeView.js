//import {button} from "../components/Button.js";
import button from "../components/buttons.js";

function layout() {
    return /*html*/ `
    <h1>Hello world!!!</h1>
    <section>
        <h2>Comments</h2>
          <ul id="comments"></ul>
          ${button.buttonPrimary("Join the Community")}
    </section>
    `;
}

function afterRender() {
    button.afterRender();
}

export default { layout, afterRender };