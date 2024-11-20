import { Color } from '../../core/config';
import ChevronDown from './../icon/chevronDown.js';

function layout(clasSuffix, title, content, image, isOpen = false) {

    // Event listener and logic for the main section accordion
    document.addEventListener('click', ev => {
        if (ev.target.matches('[data-action="toggle-article"]')) {
            onClick(ev);
        }
    });

    document.addEventListener("keydown", ev => {
        if (ev.target.matches('[data-action="toggle-article"] .btn')) {
            if (ev.code === "Space" || ev.code === "Enter") {
                onClick(ev);
            }
        }
    })

    return /*html*/ `
    <article  class="article-${clasSuffix}">
        <div class="container">
            <div class="toggle-article" data-action="toggle-article">
                <h2 class="title no-selection">${title}</h2>
                <button class="btn">
                    ${ ChevronDown({ color: Color.WHITE }) }
                </button>
            </div>
            <div class="${isOpen ? 'content show-content' : 'content'}">
                <p class="bread white">${content}</p>
                <figure class="figure">
                    <img class="image" src="${image}" href="" alt="" />
                </figure>
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
}

export { layout };