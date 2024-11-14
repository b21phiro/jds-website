import './sandbox.css';
import { Color } from './../../core/config.js';

const CANVAS_ELEMENT_ID = "sandbox";

let canvas,
    ctx,
    grid,
    initial = true,
    resizeTimeOutID = 0,
    animationFrameId,
    paused = false;

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
    window.onresize = resize;

    ctx = canvas.getContext("2d");

    if (!ctx) {
        canvas.style.display = "none";
        return;
    }

    initGrid();

    animate();

    setInterval(() => {
        let randomIndex = Math.floor(Math.random() * grid.length - 1);
        let cell = grid[randomIndex];
        cell.highlight();
    }, 1000);

}

function initGrid() {

    // Resets grid array.
    grid = [];

    const 
        CELL_SIZE = 32,
        CELL_COLUMNS = canvas.width / CELL_SIZE,
        CELL_ROWS = canvas.height / CELL_SIZE;

    let cells = 0;

    for (let y = 0; y < CELL_ROWS; y++) {
        for (let x = 0; x < CELL_COLUMNS; x++) {
            let cell = createCell(++cells, x, y, CELL_SIZE);
            grid.push(cell);
        }
    }

}

function createCell(id, x, y, size) {
    return new Object({
        id,
        coords: { x, y },
        pos: { x: null, y: null },
        size,
        opacity: 0,
        update: function() {
            this.pos.x = this.size * this.coords.x;
            this.pos.y = this.size * this.coords.y;
            if (this.opacity > 0) {
                this.opacity -= 0.01;
            }
        },
        draw: function(ctx) {
            ctx.beginPath();
            ctx.rect(this.pos.x, this.pos.y, this.size, this.size);
            ctx.strokeStyle = Color.RAINY_SKY;
            ctx.stroke();
            ctx.fillStyle = `rgb(255, 242, 0, ${this.opacity})`;
            ctx.fill();
            ctx.closePath();
        },
        highlight: function() {
            this.opacity = 1.0;
        }
    });
}

function animate() {
    if (paused) { return; }
    animationFrameId = requestAnimationFrame(animate);
    update();
    draw();
}

function update() {

    console.log("yes");

    grid?.forEach((cell) => {
        cell.update();
    });

}

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    grid.forEach((cell) => {
        cell.draw(ctx);
    });
}

function resize() {

    // If the site loads for the first time, the canvas should be loaded instantly.
    // Otherwise, it should delay the resize of the canvas for 250ms, so it does
    // not spam the client with new dimensions.
    if (initial) {
        initial = false;
        const { width, height } = canvas.parentElement?.getBoundingClientRect();
        canvas.width = width;
        canvas.height = height;
        initGrid();
    } else {
        pause();
        clearTimeout(resizeTimeOutID);
        resizeTimeOutID = setTimeout(() => {
            const { width, height } = canvas.parentElement?.getBoundingClientRect();
            canvas.width = width;
            canvas.height = height;
            initGrid();
            resume();
        }, 250);
    }
    
}

function pause() {
    paused = true;
    animationFrameId = 0;
}

function resume() {
    paused = false;
    animate();
}

export { layout, init };