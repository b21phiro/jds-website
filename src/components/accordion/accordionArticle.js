import { Color } from '../../core/config';
import ChevronDown from './../icon/chevronDown.js';

function layout(clasSuffix, title, content) {

    // Event listener and logic for the main section accordion
    document.addEventListener('click', ev => {
        if (ev.target.matches('[data-action="toggle-article"]')) {
            onClick(ev);
        }
    });

    return /*html*/ `
    <article  class="article-${clasSuffix}">
        <div class="container">
            <div data-action="toggle-article" class="title">
                <h2>${title}</h2>
                <button class="btn">
                    ${ ChevronDown({ color: Color.WHITE }) }
                </button>
            </div>
            <div class="content">
                <p class="bread">${content}</p>
                <figure class="temp-image"></figure>
            </div>
        </div>
    </article>
    `;
}

function onClick(ev) {
    const article = ev.target.closest("article");
    const btn = article.querySelector(".btn");
    const content = article.querySelector(".content");
    content.classList.toggle("show-content");
    if (content.style.maxHeight) {
        content.style.maxHeight = null;
        btn.style.transform = "rotate(0deg)";
    } else {
        content.style.maxHeight = content.scrollHeight + "px";
        btn.style.transform = "rotate(180deg)";
    }
}

export { layout };