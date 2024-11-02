import './sandbox.css';

const CANVAS_ELEMENT_ID = "sandbox";

let canvas,
    ctx,
    animationFrameID,
    grid = [],
    gridCreationCounter = 0;

function layout() {
    return /*HTML*/ `<canvas id="${ CANVAS_ELEMENT_ID }"></canvas>`;
}

function init() {
    
    canvas = document.getElementById(CANVAS_ELEMENT_ID);
    
    if (!canvas) {
        console.error(`Could not find the element \"${CANVAS_ELEMENT_ID}\"\n`);
        return;
    }

    ctx = canvas.getContext("2d");

    initGrid();
    console.log(grid);

    resize();
    
    window.addEventListener('resize', resize);

}

function resize() {
    const { width, height } = canvas.parentElement.getBoundingClientRect();
    canvas.width = width;
    canvas.height = height;
}

function animate() {
    animationFrameID = window.requestAnimationFrame(animate);
    draw();
}

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}

function initGrid() {
    grid = [];
    const columns = canvas.width / 100;
    const rows = canvas.height / 100;
    for (let x = 0; x = columns; x++) {
        for (let y = 0; y = rows; y++) {
            grid.push(createCell(x, y));
        } 
    }
}

function createCell(x, y) {
    gridCreationCounter++;
    return new Object({
        id: gridCreationCounter,
        coords: { x, y }
    });
}

export { layout, init };