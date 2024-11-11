import './sandbox.css';

const CANVAS_ELEMENT_ID = "sandbox";

let canvas,
    ctx,
    grid;

function layout() {
    return /*HTML*/ `
        <canvas id="${ CANVAS_ELEMENT_ID }"></canvas>
    `;
}

function init() {
    
    canvas = document.getElementById(CANVAS_ELEMENT_ID);
    
    if (!canvas) {
        return;
    }

    resize();
    document.addEventListener('resize', resize);

    ctx = canvas.getContext("2d");

    if (!ctx) {
        canvas.style.display = "none";
        return;
    }

    initGrid();

}

function initGrid() {

    // Resets grid array.
    grid.lenght = 0;

    const 
        CELL_SIZE = 16,
        CELL_COLUMNS = canvas.width / CELL_SIZE,
        CELL_ROWS = canvas.height / CELL_SIZE;

    for (let y = 0; y < CELL_ROWS; y++) {
        for (let x = 0; x < CELL_COLUMNS; x++) {
            grid.push(createCell(x, y));
        }
    }

}

function createCell(prop = {}) {
    return new Object({
        id: prop?.id
    });
}

function resize() {
    const { width, height } = canvas.parentElement?.getBoundingClientRect();
    canvas.width = width;
    canvas.height = height;
}

export { layout, init };