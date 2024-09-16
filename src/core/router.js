import HomeView from "./views/pages/homeView.js";
import AboutView from "./views/pages/aboutView.js";
import ExceptionHandler from "./exceptionHandler.js";

const routes = [
    { path: "/", title: "Home", name: "home", view: HomeView },
    { path: "/about", title: "About", name: "about", view: AboutView }
];

/**
 * Matches the given path with a registered route. Returns matching route. If
 * none is found, 404 is printed out and false is returned.
 */
function match(path) {
    const route = routes.find((route) => route.path === path);
    if (!route) {
        ExceptionHandler.handle(401, "Page not found");
    } else {
        return route;
    }
}

export { match };