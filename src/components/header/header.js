import './header.css';
import * as Logo from '../logo/logo.js';
import { Config } from './../../core/config.js';

const HEADER_ELEMENT_ID = "header";

function layout() {
    return /*HTML*/ `
    <header id="${HEADER_ELEMENT_ID}">
        ${ Logo.layout() }
        <nav class="${ HEADER_ELEMENT_ID }-navigation">
            <a class="${ HEADER_ELEMENT_ID }-navigation-link" href="${Config.LINKEDIN_LINK}" title="Linkedin">Linkedin</a>
            <a class="${ HEADER_ELEMENT_ID }-navigation-link" href="${Config.DISCORD_LINK}" title="Discord">Discord</a>
        </nav>
    </header>
    `;
}

export { layout };
