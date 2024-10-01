import "./css/style.css";
import App from "./core/app.js";

/**
 * The "main" function of this application.
 */
window.onload = () => {

    const root = document.getElementById('app');

    if (!root) {
        console.error("Could not find the root element");
        return false;
    }

    App.init(root);

    App.run();
};