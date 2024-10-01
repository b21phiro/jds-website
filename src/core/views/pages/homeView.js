import button from "../components/buttons.js";

function layout() {
    return /*html*/ `
    <h1>Hello world!!!</h1>
    <section>
        <h2>Comments</h2>
          <ul id="comments"></ul>
          
    </section>
    
    <section>
        <p>Demonstrates a button</p>
        ${button.buttonPrimary("Join the Community", "btn-join-community")}
    </section>
    `;
}

function afterRender() {
    button.afterRender( "btn-join-community", () => {
        alert("button clicked"); 
    });
}

export default { layout, afterRender };