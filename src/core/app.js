import * as Router from "./router.js";

Router.init();

function run() {
    const route = Router.match(window.location.pathname);
    Router.updateView(route);
}

export { run };