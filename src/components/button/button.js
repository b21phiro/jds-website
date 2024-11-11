import "./button.css";

function cta(attributes = {}) {
    return /*HTML*/ `
    <div class="cta">
        <a href="${ attributes?.href }" title="${ attributes?.title }"></a>
        <span class="bold">${ attributes?.text }</span>
        ${ attributes?.icon }
    </div>
    `;
}

export { cta };