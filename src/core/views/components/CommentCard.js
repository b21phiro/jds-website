import "../../../css/comment-card.css";
import "../../models/comment.js";


/**
 *  Creates a comment ui element
 * @param imagePath {string}
 * @param author {string}
 * @param date {string} should this be a dateObject?
 * @param comment {string}
 *  @return a comment element
 */
function comment(imagePath, author, date, comment) {
    return /*HTML*/ `
    <div class="card-comment">
        <div class="author-avatar">
            <img src="${imagePath}" />
        </div>
        <div class="author-comment">
            <strong>${author} <span>${date}</span></strong>
            <p>${comment}</p>
        </div>
    </div>
    `;
}


/**
 *  Happens after comment element has been rendered
 */
function afterRender() {

}


export default {comment, afterRender}