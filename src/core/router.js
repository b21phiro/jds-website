const routes = [
    { path: "/", title: "Home", name: "home", view: "page-1" },
    { path: "/about", title: "About", name: "about", view: "page-2" }
];

/**
 * Matches the given path with a registered route. Returns matching route. If
 * none is found, 404 is printed out and false is returned.
 */
function match(path) {
    console.log(path);
    const route = routes.find((route) => route.path === path);

    if (!route) {
        console.error("404 Error");
        return false;
    }

    return route;

}

function updateView(route) {
    document.querySelectorAll('.page').forEach((page) => {
        if (route.view === page.id) {
            page.style.display = "block";
        } else {
            page.style.display = "none";
        }
    });
}

function init() {

    document.querySelectorAll('a').forEach(anchor => {
        anchor.addEventListener('click', (ev) => {
            ev.preventDefault();
            const route = match(ev.target.pathname);
            window.history.pushState({}, "", ev.target.href);
            updateView(route);
        });
    });

    window.addEventListener('popstate', (ev) => {
        ev.preventDefault();
        window.history.replaceState(ev.state, "", ev.target.href);
        const route = match(window.location.pathname);
        updateView(route);
    })

}

export { init, match, updateView };