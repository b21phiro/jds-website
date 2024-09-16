export default (pageView) => {
    return `
    <header>
        <nav>
            <a href="/" title="Home">Home</a>
            <a href="/about" title="About us">About us</a>
        </nav>
    </header>
    <main>${ pageView }</main>
    <footer></footer>
    `;
}