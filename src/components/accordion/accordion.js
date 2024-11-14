import styles from './accordion.module.css';
import * as accordionArticle from './accordionArticle';
import imgWelcome from "../../assets/images/AccWelcome.png";
import imgHelp from "../../assets/images/AccHelp.png";
import imgShare from "../../assets/images/AccShare.png";



function layout() {

    const articles = [
        {
            title: "Första steget tillsammans",
            content: "Det är lätt att känna sig liten och vilsen som en junior utvecklare. Men oroa dig inte, för du är inte ensam! Vi lär och upptäcker kunskap genom varandra tillsammans.",
            image: imgWelcome
        },
        {
            title: "Läxhjälp",
            content: "Det är lätt att känna sig liten och vilsen som en junior utvecklare. Men oroa dig inte, för du är inte ensam! Vi lär och upptäcker kunskap genom varandra tillsammans.",
            image: imgHelp
        },
        {
            title: "Dela dina projekt med oss",
            content: "Det är lätt att känna sig liten och vilsen som en junior utvecklare. Men oroa dig inte, för du är inte ensam! Vi lär och upptäcker kunskap genom varandra tillsammans.",
            image: imgShare
        }
    ]
    
    return /*html*/ `
    <section class='${styles.accordion}'>
        ${accordionArticle.layout("one", articles[0].title, articles[0].content, articles[0].image, true)}
        ${accordionArticle.layout("two", articles[1].title, articles[1].content, articles[1].image)}
        ${accordionArticle.layout("three", articles[2].title, articles[2].content, articles[2].image)}
    </section>
    `
}


export { layout }