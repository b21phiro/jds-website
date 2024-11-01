import './hero.css';

const HERO_ELEMENT_ID = "hero";

function layout() {
    return /*HTML*/ `
    <section id="${HERO_ELEMENT_ID}">
        <section class="container">
            <h1 class="${HERO_ELEMENT_ID}-title">Tillsammans är vi Sveriges <span>största</span> juniorutvecklare</h1>
        </section>
    </section>
    `;
}

export { layout };