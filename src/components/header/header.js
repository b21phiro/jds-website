import './header.css';
import * as Logo from '../logo/logo.js';

const HEADER_ELEMENT_ID = "header";

function layout() {
    return /*HTML*/ `
    <header id="${HEADER_ELEMENT_ID}">
        ${ Logo.layout() }
    </header>
    `;
}

export { layout };