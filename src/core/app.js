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

    Sandbox.init();

    View.onReady();
    
}

export { init };