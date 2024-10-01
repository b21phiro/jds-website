import * as Router from "./router.js";
import AppView from "./views/appView.js";

/**
 * The application root-element.
 * @type HTMLElement
 */
let root = undefined;

/**
 * Runs the application by taking the current location we are in, and rendering
 * the page that we are looking for.
 */
function run() {
    handler(window.location.pathname);
}

/**
 * Handles the basic flow of the application, by taking the URL and render
 * the appropriate view to the client (user).
 *
 * @param pathname { string }
 *
 */
function handler(pathname) {
    const route = Router.match(pathname);
    if (!route) {
        return;
    }

    const view = route.view;
    updateView(view);

    // Checks if there's a "afterRender" method within the view.
    if (!view || typeof view.afterRender !== 'function') {
        return;
    }

    // Executes the "afterRender" function.
    view.afterRender();

}

/**
 * Updates the app-view with the given page/view.
 * @param view { Function }
 * @return boolean | void
 */
function updateView(view) {

    clearView(root);

    if (!view || !view.layout) {
        console.error("Missing view!");
        return false;
    }

    const html = view.layout();
    const appView = AppView(html);

    insertView(appView);

    document.querySelectorAll('a').forEach(anchor => {
        anchor.addEventListener('click', (ev) => {
            ev.preventDefault();
            window.history.pushState({}, "", ev.target.href);
            handler(ev.target.pathname);
        });
    });

}

/**
 * Inserts a HTML-element into the root-element.
 * @param html { string }
 */
function insertView(html) {
    root.insertAdjacentHTML('beforeend', html);
}

/**
 *  Clears the given HTML-node by removing all the children within.
 *  @param html { HTMLElement }
 *  @return void
 */
function clearView(html) {
    while (html.firstChild) {
        html.removeChild(html.firstChild);
    }
}

/**
 * Initializes the application.
 * @param html { HTMLElement }
 * @return void
 */
function init(html) {

    root = html;

    window.addEventListener('popstate', (ev) => {
        ev.preventDefault();
        window.history.replaceState(ev.state, "", location.href);
        handler(location.pathname);
    });

}

export default { init, run, updateView };