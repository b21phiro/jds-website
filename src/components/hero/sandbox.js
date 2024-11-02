import './sandbox.css';
import { Color } from './../../core/config.js';

const CANVAS_ELEMENT_ID = "sandbox";
const GRID_CELL_SIZE = 16;

let canvas,
    ctx,
    animationFrameID,
    grid = [],
    gridCreationCounter = 0;

let mouse = { x: -1, y: -1 };

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

    resize();

    initGrid();

    animate();
    
    window.addEventListener('resize', resize);

    document.addEventListener('mousemove', (ev) => {
        mouse.x = ev.clientX - canvas.getBoundingClientRect().left;
        mouse.y = ev.clientY - canvas.getBoundingClientRect().top;
    });

}

function resize() {
    const { width, height } = canvas.parentElement.getBoundingClientRect();
    canvas.width = width;
    canvas.height = height;
    initGrid();
}

function animate() {
    animationFrameID = window.requestAnimationFrame(animate);
    update();
    draw();
}

function update() {
    grid.forEach((cell) => {
        cell.update();
        cell.intersects(mouse);
    });
}

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    grid.forEach((cell) => {
        cell.draw(ctx);
    });
}

function initGrid() {
    gridCreationCounter = 0;
    grid.length = 0;
    const columns = canvas.width / GRID_CELL_SIZE;
    const rows = canvas.height / GRID_CELL_SIZE;
    for (let x = 0; x < columns; x++) {
        for (let y = 0; y < rows; y++) {
            grid.push(createCell(x, y));
        } 
    }
}

function createCell(x, y) {
    gridCreationCounter++;
    return new Object({
        id: gridCreationCounter,
        coords: { x, y },
        bound: { left: 0, right: 0, top: 0, bottom: 0 },
        size: GRID_CELL_SIZE,
        hover: false,
        update: function() {
            this.bound.left = this.coords.x * this.size;
            this.bound.top = this.coords.y * this.size;
            this.bound.right = this.bound.left + this.size;
            this.bound.bottom = this.bound.top + this.size;
        },
        draw: function(ctx) {
            ctx.beginPath();
            ctx.rect(this.bound.left, this.bound.top, this.size, this.size);
            ctx.strokeStyle = Color.RAINY_SKY;
            ctx.stroke();

            if (this.hover) {
                ctx.fill();
            }

        },
        intersects: function(mouse) {
            this.hover = (
                mouse.x >= this.bound.left && 
                mouse.x <= this.bound.right && 
                mouse.y >= this.bound.top && 
                mouse.y <= this.bound.bottom
            );
        }
    });
}

export { layout, init };