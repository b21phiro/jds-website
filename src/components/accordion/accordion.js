import styles from './accordion.module.css';
import * as accordionArticle from './accordionArticle';
import imgWelcome from "../../assets/images/AccWelcome.png";
import imgHelp from "../../assets/images/AccHelp.png";
import imgShare from "../../assets/images/AccShare.png";



function layout() {

    const articles = [
        {
            title: "Första steget tillsammans",
            content: "Välkommen till vårt community för juniora utvecklare! Här finns möjlighet att lära känna andra som delar ditt intresse för programmering och problemlösning. Vi uppmuntrar alla att delta i gruppaktiviteter och dela med sig av sina erfarenheter. Genom att samarbeta och stötta varandra kan vi hjälpa alla att utvecklas och nå nya höjder.",
            image: imgWelcome
        },
        {
            title: "Läxhjälp",
            content: "Behöver du extra stöd i din programmeringsutbildning? I vår läxhjälpskanal kan du få personlig assistans från mer erfarna utvecklare. De kan hjälpa dig att gå igenom svåra uppgifter, förklara koncept du inte förstår och ge tips på effektiva inlärningsstrategier. Kom och ställ dina frågor - vi är här för att hjälpa dig framåt!",
            image: imgHelp
        },
        {
            title: "Dela dina projekt med oss",
            content: "Är du stolt över ett projekt du har skapat? Dela med dig av det i vår projektkanal! Här kan du visa upp ditt arbete, få feedback och inspiration från andra. Vi vill uppmuntra delning och lärande - oavsett om projektet är litet eller stort, nybörjarnivå eller avancerat. Låt oss tillsammans fira dina framgångar och hjälpa dig växa som utvecklare!",
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