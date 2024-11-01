import * as Header from '../components/header/header.js';
import * as Footer from '../components/footer/footer.js';

function layout() {
    return /*HTML*/ `
    ${ Header.layout() }
    <main class="main">
    <h1>Header</h1>
    </main>
    ${ Footer.layout() }
    `;
}

export { layout };