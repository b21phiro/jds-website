import styles from './accordion.module.css';
// import chevron from './chevron-down.svg';
import * as chevron from './chevron-logo';

function layout() {
    return /*html*/ `
    <section class=${styles.accordion}>
        <article>
            <div class="container">
                <div class="title">
                    <h2>Första steget tillsammans</h2>
                    <button id="btn-article-one" >
                        ${chevron.layout()}
                    </button>
                </div>
                <div class="content">
                    <p>lorem</p>
                    <p>image</p>
                </div>
            </div>
        </article>
    </section>
    `
}

export { layout }