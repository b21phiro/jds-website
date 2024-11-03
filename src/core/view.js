import * as Header from '../components/header/header.js';
import * as accordion from '../components/accordion/accordion.js';
import * as Footer from '../components/footer/footer.js';

function layout() {
    return /*HTML*/ `
    ${ Header.layout() }
    <main class="main">
    ${ accordion.layout() }
    </main>
    ${ Footer.layout() }
    `;
}

export { layout };