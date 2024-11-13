import * as Header from '../components/header/header.js';
import * as Accordion from '../components/accordion/accordion.js';
import * as Footer from '../components/footer/footer.js';
import * as Hero from '../components/hero/hero.js';

function layout() {
    return /*HTML*/ `
    ${ Header.layout() }
    <main class="main">
    ${ Hero.layout() }
    ${ Accordion.layout() }
    </main>
    ${ Footer.layout() }
    `;
}

function onReady() {
    Hero.onReady();
}

export { layout, onReady };