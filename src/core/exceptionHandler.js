import ExceptionView from "./views/exceptionView.js";
import App from "./App.js";

/**
 *
 * Handles exceptions by rendering them gracefully onto the browser.
 *
 * @param status { number }
 * @param message { string }
 * @param title { string }
 * @return void
 *
 */
function handle(status, message = "", title = "") {

    let heading;

    if (title) {
        heading = title;
    } else {
        heading = generateExceptionTitle(status);
    }

    const error = {
        status,
        message,
        heading
    };

    const view = ExceptionView(error);

    App.updateView(view);

}

function generateExceptionTitle(status) {
    switch (status) {
        case 404:
            return "Page not found!";
        default:
            return "Something went wrong!";
    }
}

export default { handle }