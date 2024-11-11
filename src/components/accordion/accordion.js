import styles from './accordion.module.css';
// import chevron from './chevron-down.svg';
import * as chevron from './chevron-logo';




function layout() {

    

    const btn = /*html*/ `
    <button data-action="toggle-article">${chevron.layout()}</button>
    `

    return /*html*/ `
    <section class=${styles.accordion}>
        <article class="article-one">
            <div class="container">
                <div class="title">
                    <h2>Första steget tillsammans</h2>
                    ${btn}
                </div>
                <div class="content">
                    <p>Det är lätt att känna sig liten och vilsen som en junior utvecklare. Men oroa dig inte, för du är inte ensam! Vi lär och upptäcker kunskap genom varandra tillsammans. </p>
                    <div class="temp-image"></div>
                </div>
            </div>
        </article>
        <article class="article-two">
            <div class="container">
                <div class="title">
                    <h2>Läxhjälp</h2>
                    ${btn}
                </div>
                <div class="content">
                    <p>Det är lätt att känna sig liten och vilsen som en junior utvecklare. Men oroa dig inte, för du är inte ensam! Vi lär och upptäcker kunskap genom varandra tillsammans.</p>
                    <div class="temp-image"></div>
                </div>
            </div>
        </article>
        <article class="article-three">
            <div class="container">
                <div class="title">
                    <h2>Dela dina projekt med oss</h2>
                    ${btn}
                </div>
                <div class="content">
                    <p>Det är lätt att känna sig liten och vilsen som en junior utvecklare. Men oroa dig inte, för du är inte ensam! Vi lär och upptäcker kunskap genom varandra tillsammans.</p>
                    <div class="temp-image"></div>
                </div>
            </div>
        </article>
    </section>
    `
}

export { layout }