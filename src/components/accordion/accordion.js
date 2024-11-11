import styles from './accordion.module.css';
import * as accordionArticle from './accordionArticle';


function layout() {

    const articles = [
        {
            title: "Första steget tillsammans",
            content: "Det är lätt att känna sig liten och vilsen som en junior utvecklare. Men oroa dig inte, för du är inte ensam! Vi lär och upptäcker kunskap genom varandra tillsammans."
        },
        {
            title: "Läxhjälp",
            content: "Det är lätt att känna sig liten och vilsen som en junior utvecklare. Men oroa dig inte, för du är inte ensam! Vi lär och upptäcker kunskap genom varandra tillsammans."
        },
        {
            title: "Dela dina projekt med oss",
            content: "Det är lätt att känna sig liten och vilsen som en junior utvecklare. Men oroa dig inte, för du är inte ensam! Vi lär och upptäcker kunskap genom varandra tillsammans."
        }
    ]
    
    return /*html*/ `
    <section class=${styles.accordion}>
        ${accordionArticle.layout("one", articles[0].title, articles[0].content)}
        ${accordionArticle.layout("two", articles[1].title, articles[1].content)}
        ${accordionArticle.layout("three", articles[2].title, articles[2].content)}
    </section>
    `
}


export { layout }