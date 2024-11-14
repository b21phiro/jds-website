import './hero.css';
import { cta } from './../../components/button/button.js';
import ArrowRight from './../../components/icon/arrowRight.js';
import { Config } from './../../core/config.js';

const HERO_ELEMENT_ID = "hero";

function layout() {
    return /*HTML*/ `
    <section id="${HERO_ELEMENT_ID}">
        <section class="container">
            <h1 class="${HERO_ELEMENT_ID}-title">Tillsammans är vi Sveriges <span>största</span> juniorutvecklare</h1>
            ${cta({ 
                href: Config.DISCORD_LINK, 
                icon: ArrowRight(), 
                text: "Gå med i discord", 
                title: "Gå med i våran discord grupp",
                ariaLabel: "Klicka för att gå med i discord gruppen."
            })}
        </section>

    </section>
    `;
}

export { layout };