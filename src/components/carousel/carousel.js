import './carousel.css';

import { People } from '../../models/person.js';

import ArrowLeft from './../icon/arrowLeft.js';
import ArrowRight from './../icon/arrowRight.js';

const TESTIMONIAL_LIST_ELEM_ID = "testimonials",
      PAN_LEFT_BUTTON_ELEM_ID = "panLeftButton",
      PAN_RIGHT_BUTTON_ELEM_ID = "panRightButton",
      TESTIMONIAL_PAN_SPEED = 150;

let testimonialsListElement,
    panLeftButton,
    panRightButton,
    pan,
    panLeft,
    panRight;

function layout() {
    return /*HTML*/ `
    <section id="carousel">
        <div class="container carousel-header">
            <h2 class="title">Vad tycker vi?</h2>
            <div class="carousel-buttons-container">
                <button id="${PAN_LEFT_BUTTON_ELEM_ID}" class="carousel-button" title="Dra vänster" aria-label="Håll space för att dra karusellen åt vänster.">
                    ${ ArrowLeft() }
                </button>
                <button id="${PAN_RIGHT_BUTTON_ELEM_ID}" class="carousel-button" title="Dra höger" aria-label="Håll space för att dra karusellen åt höger.">
                    ${ ArrowRight() }
                </button>
            </div>
        </div>
        <ul id="${ TESTIMONIAL_LIST_ELEM_ID }" class="carousel-list"></ul>
    </section>
    `;
}

async function onReady() {

    // Delegates the UL-element for the carousel.
    // Returns false if null.
    testimonialsListElement = document.getElementById(TESTIMONIAL_LIST_ELEM_ID);
    if (!testimonialsListElement) {
        console.error(`Missing ${TESTIMONIAL_LIST_ELEM_ID}\n`)
        return;
    }

    // Adds the testimonials to the list.
    clearTestimonialList();
    const people = await People.getAll({ shuffle: true });
    people.forEach( async (person) => {
        let testimonial = /* HTML */`
        <li class="carousel-list-item">
            <article class="carousel-list-item-article">
                <figure class="carousel-list-item-article-avatar">
                    <img src="${ person.getAvatar() }" alt="${ person.getName() }" />
                </figure>
                <h4 class="carousel-list-item-article-title">${ person.getName() }</h4>
                <p class="carousel-list-item-article-text">- ${ person.getComment() }</p>
            </article>
        </li>
        `;
        testimonialsListElement.insertAdjacentHTML('afterbegin', testimonial);
    });

    // Resets position to 0.
    testimonialsListElement.scrollLeft = 0;

    // Registers carousel buttons from DOM.
    panLeftButton = document.getElementById(PAN_LEFT_BUTTON_ELEM_ID);
    panRightButton = document.getElementById(PAN_RIGHT_BUTTON_ELEM_ID);
    if (!panLeftButton || !panRightButton) { return false; }

    // Allows user to pan left by clicking or using the keyboard.
    panLeftButton.addEventListener('mousedown', (ev) => { panLeftWithinTestimonialList(); });
    panLeftButton.addEventListener('mouseup', (ev) => { stopPanWithinTestimonialList(); });
    panLeftButton.addEventListener('keyup', (ev) => { stopPanWithinTestimonialList(); });
    panLeftButton.addEventListener('touchend', (ev) => { stopPanWithinTestimonialList(); })
    panLeftButton.addEventListener('keydown', (ev) => {
        const { code } = ev;
        switch (code) {
            case 'Enter':
            case 'Space':
                panLeftWithinTestimonialList();
                break;
            default:
                break;
        }
    });
    panLeftButton.addEventListener('touchstart', (ev) => {
        panLeftWithinTestimonialList();
    });

    // Allows user to pan right by clicking or using the keyboard.
    panRightButton.addEventListener('keydown', (ev) => {
        const { code } = ev;
        switch (code) {
            case 'Enter':
            case 'Space':
                panRightWithinTestimonialList();
                break;
            default:
                break;
        }
    });
    panRightButton.addEventListener('touchstart', (ev) => {
        panRightWithinTestimonialList();
    });
    panRightButton.addEventListener('touchend', (ev) => { stopPanWithinTestimonialList(); })
    panRightButton.addEventListener('keyup', (ev) => { stopPanWithinTestimonialList(); });
    panRightButton.addEventListener('mousedown', (ev) => { panRightWithinTestimonialList(); });
    panRightButton.addEventListener('mouseup', (ev) => { stopPanWithinTestimonialList(); });
    
}

function stopPanWithinTestimonialList() {
    pan = false;
    panLeft = false;
    panRight = false;
}

function panLeftWithinTestimonialList() {
    pan = true;
    panLeft = true;
    panRight = false;
    panWithinTestimonialList();
}

function panRightWithinTestimonialList() {
    pan = true;
    panRight = true;
    panLeft = false;
    panWithinTestimonialList();
}

function panWithinTestimonialList() {
    if (!testimonialsListElement) { return; }
    setTimeout(() => {
        if (panRight) { testimonialsListElement.scrollLeft += TESTIMONIAL_PAN_SPEED; }
        if (panLeft) { testimonialsListElement.scrollLeft -= TESTIMONIAL_PAN_SPEED; }
        if (pan) { panWithinTestimonialList(); }
    }, 100);
}

function clearTestimonialList() {
    while (testimonialsListElement.firstChild) {
        testimonialsListElement.removeChild(testimonialsListElement.lastChild);
    }
}

export { layout, onReady }