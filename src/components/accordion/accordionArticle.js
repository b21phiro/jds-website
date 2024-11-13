import { Color } from '../../core/config';
import ChevronDown from './../icon/chevronDown.js';

function layout(clasSuffix, title, content) {

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
                <p>${content}</p>
                <figure class="temp-image"></figure>
            </div>
        </div>
    </article>
    `;
}

export { layout };