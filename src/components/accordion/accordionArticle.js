import * as chevron from './chevron-logo';

function layout(clasSuffix, title, content) {

    return /*html*/ `
    
    <article  class="article-${clasSuffix}">
        <div class="container">
            <div data-action="toggle-article" class="title">
                <h2>${title}</h2>
                <button class="btn">${chevron.layout()}</button>
            </div>
            <div class="content">
                <p>${content}</p>
                <div class="temp-image"></div>
            </div>
        </div>
    </article>

    `
}

export {layout}