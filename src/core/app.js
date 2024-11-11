import './app.css';
import { Config } from './config.js';
import * as View from './view.js';
import * as Sandbox from './../components/hero/sandbox.js';

const ROOT_ELEMENT_ID = "app";

let rootElement;

function init()  {

    document.title = Config.APP_TITLE;

    rootElement = document.getElementById(ROOT_ELEMENT_ID);

    if (!rootElement) {
        console.error("Missing root element!");
        return;
    }

    rootElement.insertAdjacentHTML('afterbegin', View.layout());

    // Event listener and logic for the accordion
    rootElement.addEventListener('click', e => {
        if (e.target.matches('[data-action="toggle-article"')) {
            const content = e.target.parentNode.nextElementSibling;
            content.classList.toggle("show-content");

            if (content.style.maxHeight) {
                content.style.maxHeight = null;
                e.target.style.transform = "rotate(0deg)";
            } else {
                content.style.maxHeight = content.scrollHeight + "px";
                e.target.style.transform = "rotate(180deg)";
            }
            
        }
    })

    Sandbox.init();
    
}

export { init };