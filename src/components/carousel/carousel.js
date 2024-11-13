import './carousel.css';

import ArrowLeft from './../icon/arrowLeft.js';
import ArrowRight from './../icon/arrowRight.js';

function layout() {
    return /*HTML*/ `
    <section id="carousel">
        <div class="container carousel-header">
            <h2 class="title">Vad tycker vi?</h2>
            <div class="carousel-buttons-container">
                <button id="carouselButtonLeft" class="carousel-button" title="Dra vänster">
                    ${ ArrowLeft() }
                </button>
                <button id="carouselButtonRight" class="carousel-button" title="Dra höger">
                    ${ ArrowRight() }
                </button>
            </div>
        </div>
    </section>
    `;
}

function onReady() {

}

export { layout, onReady }