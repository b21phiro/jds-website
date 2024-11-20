import './hero.css';
import { cta } from './../../components/button/button.js';
import ArrowRight from './../../components/icon/arrowRight.js';
import { Config } from './../../core/config.js';

const HERO_ELEMENT_ID = "hero";

function layout() {
    return /*HTML*/ `
    <section id="${HERO_ELEMENT_ID}">

        <!-- Intro for the landing page -->
        <section class="container">
            <h1 class="${HERO_ELEMENT_ID}-title">
                Tillsammans är vi Sveriges 
                <span id="biggest">största<svg id="text-highlighter" width="197" height="32" viewBox="0 0 197 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.00586 22.498C1.09599 22.8134 1.4453 22.4487 1.55661 22.3327C4.95239 18.7955 7.33078 13.7473 10.0657 9.76185C11.1658 8.1587 14.3306 3.26195 16.4269 1.70712C18.4293 0.221854 19.0776 3.48021 19.4836 4.6261C20.8658 8.52815 21.8277 12.5642 23.3388 16.4259C24.2252 18.6911 25.3314 21.733 27.6071 23.0074C29.9972 24.3459 32.1021 20.5463 33.1422 19.0007C34.1055 17.5692 41.0001 3.45946 42.6977 4.54349C44.4015 5.63146 44.9304 9.39777 45.4239 11.0699C46.6913 15.3636 47.7195 20.0713 50.064 23.9437C51.4252 26.1919 54.2319 29.0692 56.2462 25.8575C59.3922 20.8416 61.3942 15.051 64.3147 9.88577C64.4885 9.57835 67.258 3.62446 68.6794 4.98409C71.5112 7.69276 72.3108 14.4111 73.5398 17.8992C74.7701 21.3911 76.9578 30.224 81.8561 30.5389C86.4122 30.8318 89.2619 23.8188 90.8333 20.6254C91.8255 18.6093 96.773 4.89853 100.94 8.3299C107.202 13.4875 105.543 24.4563 112.244 29.4512C117.546 33.4036 123.038 13.5106 124.319 10.6293C124.586 10.0292 127.132 3.07332 128.629 4.81886C130.645 7.17155 131.122 11.6415 132.057 14.4845C133.15 17.8071 134.492 21.4097 137.041 23.9299C141.196 28.0374 144.7 23.9945 147.093 20.295C150.215 15.4673 152.217 9.71083 155.849 5.23193C158.306 2.20332 159.803 4.13877 160.916 6.93925C163.847 14.3129 166.413 29.6941 177.191 22.1124C180.941 19.4746 186.336 11.2731 191.442 11.6069C195.447 11.8686 195.566 19.4968 196.054 22.2501" stroke="#A628E0" stroke-width="1.5" stroke-linecap="round"/></svg></span> 
                juniorutvecklare
            </h1>
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